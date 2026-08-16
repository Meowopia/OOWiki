# 开发者接入

开发前先阅读 [OO 生态愿景](vision.md)。所有公开 Provider、Contribution 和配置扩展都必须遵守其中的组合、安全、证据与 fallback 原则。

本文只说明闭源 OO 产品的公开 SDK 接入边界。内部源码、构建环境、私有 repository、testkit 和发布脚本不在 OOWiki 提供。

## 开发环境

消费者使用 Java 25 与项目自带 Gradle Wrapper。SDK repository、凭据和授权方式仅以产品公开分发说明为准。

## 仓库边界

| 仓库 | 发布职责 |
|---|---|
| OOCore | 独立 SemVer 的 Core runtime 与 stable API，封装 Minecraft/Paper/Folia 差异 |
| OOEngine | 服务端窗口、协议、资源、编辑器和 RenderPlan 编译 |
| OOEngine `:oomenu` | 所有业务插件接入 OOEngine 窗口系统的统一 facade implementation，并负责 Menu preset、应用目录和玩家菜单偏好；不是独立插件 |
| OOEngine `:oovideo` | 完整视频子项目：稳定 facade、策略、worker、解码、frame/audio delivery 与客户端 backend；历史 OOMedia 仅保留迁移兼容壳 |
| OOEngine `:ooquest` | 第三方任务 Provider 的统一 stable facade implementation；不拥有第三方任务业务真相 |
| OOEngine `:ooeditor` | `UiDocument` 结构化编辑、validation/operation、revision diff、preview compile、screenshot request、publish candidate；不是独立插件 |
| OOEngine `:oohud` | HUD/Tab/Scoreboard/BossBar/Toast/Subtitle/notification overlay 的统一 facade implementation |
| OOEngine `:oomodel` | 模型 Provider facade；BetterModel 仅通过官方 API optional adapter 接入 |
| OOEngine-Client | Fabric/NeoForge 客户端与公共 renderer core |
| OOChat / OOGame / OOMusic | 独立业务插件，通过 stable API 接入，不复制 Engine/Core 实现 |
| OOWiki | 对外可发布文档，必须和实际 descriptor、Capability 与构建产物一致 |

OOCore 和 OOEngine 版本号不要求一致。兼容性由 ABI、handshake、API version、Capability 和 schema negotiation 决定，不允许通过比较产品版本字符串猜测。

## 构建

插件内部构建和发布流程属于维护者资料。第三方消费者只需按公开 SDK 文档编译自己的插件，不得复制 provider、runtime 或私有 bridge。

## OOCore 接入

正式 API：

```kotlin
compileOnly("com.zkonikishi.oo.core:oocore-api:1.6.1")
```

OOCore `1.6.1` 已正式发布。当前 ABI 与 handshake 均为 1。新插件逐项声明所需 platform Capability：

```text
oocore.scheduler.region.v1
oocore.component.v1
oocore.registry-key.v1
oocore.player-entity-item.v1
oocore.data-component.v1
oocore.plugin-channel.v1
oocore.raw-packet.v1        # optional，默认缺失
oocore.control-plane.read.v1 # implemented，只读 bounded DTO
```

禁止把 Paper/NMS/CraftBukkit 版本分支复制进业务插件。26.1、26.1.2、26.2 的差异由 OOCore provider 处理；unsupported version 必须 fail-fast。

所有 task、listener、channel、service 和外部句柄都由 `OOModuleSession.own(...)` 或 bounded lifecycle scope 持有。disable、注册失败和 reload 必须幂等撤销。

## OOEngine 插件接入

正式 API：

```kotlin
compileOnly("com.zkonikishi.ooengine:ooengine-api:1.1.4") // API published；runtime wiring 尚未验收，发布前消费者只等待
```

基本流程：

```java
OOEngineApi engine = services.load(OOEngineApi.class);
if (engine == null || engine.apiVersion() != OOEngineApi.API_VERSION) {
    throw new IllegalStateException("OOEngine API unavailable or incompatible");
}
engine.require(OOEngineCapabilities.EXTENSION_BINDING_ACTION_V1);
engine.require(OOEngineCapabilities.PANEL_CONTROLLER_V1);
engine.require(OOEngineCapabilities.PANEL_CONTRIBUTION_V1);

try (ExtensionScope scope = engine.openScope("example")) {
    scope.binding("example", playerId -> immutableSnapshot(playerId));
    scope.action("example", request -> handleAuthoritatively(request));
    scope.panel("example:main", yamlBytes, ReplacePolicy.REJECT);
}
```

!!! warning "Legacy API 示例"
    `PanelContributionRegistry`、`PanelController`、`ExtensionScope.panel(...)` 自 `1.1.4` 标记 `Deprecated(forRemoval=false)`，整个 API 1.x 委托 OOMenu，最早 API 2.0 才允许删除且当前不定日期。新插件不得照此新增 panel 接入。

公开产品术语是“窗口”，但兼容 API 仍可能使用 `Panel*`。不要在插件里重新定义一套 bridge，也不要写入 OOEngine data folder 等待 watcher。

### Namespace 与安全

- owner `example` 只能注册 `example:*`；
- action 参数必须经过 schema、长度、类型和权限验证；
- player identity 来自服务端 session，不接受客户端自报 UUID；
- revision 不一致和重复 requestId 必须拒绝；
- 外部资源只能使用允许的 URI scheme 和签名 manifest；
- 不允许任意命令、脚本、文件路径或外部 URL 穿过 SDK。

## RenderPlan backend 约束

新增 Web/Fabric/NeoForge backend 时只能实现公共 backend interface：Texture、Text、Mask、Model、Media。业务布局、timeline、表达式和 fallback 规则必须留在公共 renderer core。

每帧顺序固定：

```text
UiDocument → Style/Layout → Expression → Timeline Sample → immutable RenderPlan → Executor
```

Executor 必须验证 schema version、Capability、节点/栈深/字符串/资源上限，并拒绝 NaN/Infinity。未知 draw payload 安全跳过并产生可诊断警告。

## 测试 fixture

每个插件至少覆盖：

1. 缺少 required Capability 时在产生副作用前 fail-fast；
2. 注册 binding/action/window 各一次；
3. 重复 enable/disable 与重复 close；
4. 注册中途失败自动 rollback；
5. player quit/server switch 后活动 session 为零；
6. 错 revision、重复 requestId、oversize payload 被拒；
7. 插件 JAR 不 bundle OOCore/OOEngine API 或 runtime；
8. `FakeOOEngineApi.assertReleased()` 通过。

涉及 renderer 的改动还必须做指定帧 screenshot diff 和性能/显存/堆验收，不能只用单元测试宣称视觉引擎完成。

## OOConsole Contribution（planned）

Contribution 必须同时满足 [OO 生态愿景](vision.md#extension-fallback)中的 owner scope、受控声明、证据分级与降级要求。

OOConsole 位于独立仓库并采用独立版本：package `com.zkonikishi.oo.console`，plugin/module ID `ooconsole`，规划命令 `/oo console`（planned）。目标 runtime 硬依赖 OOCore 与 OOEngine，plugin descriptor 必须声明 `depend: [OOCore, OOEngine]`。它复用 OOEngine 的窗口 schema、RenderPlan、资源、预览和 Editor engine，禁止形成第二套。Contribution stable API/Capability 归 OOConsole，不得加入 OOEngine API。

OOConsole `0.1.5` + OOCore `1.6.1` owner-bound 平台链已验收，可供消费者迁移。每个 adapter 必须独立完成自身产品验收，不能由平台状态批量推导为 implemented。

OOChat、OOGame、OOMusic、OOBrowser、OOReforge 等业务插件只通过 owner-scoped OOConsole Contribution 接入管理工作区，并遵守：

- owner/module ID 与路由、资源、权限、action namespace 一致；
- 只传 immutable、versioned、bounded DTO；
- action 仍由业务插件执行服务端 RBAC 和业务校验；
- 注册句柄纳入插件 lifecycle，失败回滚，disable 幂等撤销；
- 只允许 workspace、view、form、table 与受权 named action；禁止任意 HTML/JavaScript、SQL、shell、控制台命令或本地路径；
- 禁止自建 HTTP 后台、登录、RBAC、审计或复制 Editor。

OOCore `1.6.1` 已通过 `oocore.control-plane.read.v1` 提供只读 ControlPlane DTO。需要修改状态时，OOConsole 必须调用资源 owner 暴露的受权 action，不能通过 Core 绕过业务插件。

### Menu preset 与应用入口

Android 平板与 MMO/mobile/phone 同属通用 `menu` 窗口 preset，不得实现 tablet module、command、registry、database、config root、专用 Capability 或 OOConsole Tablet workspace。主题、壁纸、应用排序和方向继续复用 Menu 的玩家偏好模型。

窗口贡献使用 `ooengine.window-contribution.v1`、`ExtensionScope.window(WindowContribution)`；目标 `WindowController` 尚未包含在 `1.1.4` API JAR；Menu app entry 使用 `ooengine.menu-contribution.v1`、`ExtensionScope.menu(MenuContribution)`。实现位于 `:oomenu`，`1.1.4` API/testkit artifact 已 **published**；server runtime wiring 仍 pending。不得使用 launcher/tablet 专用贡献名。

OOMenu 不是独立插件、Mod、仓库或产品依赖。目标 module 为 `:oomenu`，package 为 `com.zkonikishi.ooengine.menu`，随 OOEngine server artifact 集成发布；不得注册 `/oo menu`。它拥有 Menu documents/presets、Contribution registry/validation、应用目录合成、玩家偏好和 fixtures，但不得复制 OOEngine core 的 `UiDocument`、RenderPlan、resources、session、action、renderer 或 schema。

所有插件窗口能力统一经过 OOMenu：`Plugin → ooengine-api facade contract → :oomenu implementation → OOEngine core`。OOMenu 负责 owner-scoped window contribution、Menu app entry、发现/open/patch/close 编排、namespace/limits/revision/requestId 校验和 lifecycle 撤销。业务插件与 OOConsole 均不得直接依赖 server/common implementation、`PanelRepository`、session manager、renderer 或 data folder，也不得自造本地 bridge。

## OOVideo 视频接入（planned）

所有插件的视频和动态媒体表现统一经过 `ooengine-api` 的 OOVideo contract：`Plugin → ooengine-api → :oovideo → OOVideo Worker/OOEngine/client backend`。`:oovideo` 位于 OOEngine 仓库，新代码 package 使用 `com.zkonikishi.ooengine.video...`；它不是独立插件、Mod 或仓库，也不注册 `/oo video`。

正式 Capability 为 `ooengine.video.v1`。首版公开类型锁定 `OOVideo`、`OOVideoScope`、`VideoContribution`/`VideoDescriptor`、`VideoController`、`VideoSession`、`VideoState`/`VideoResult`。入口由 owner-fixed `ExtensionScope` 返回 `OOVideoScope`；DTO 不得自报 owner。所有 mutation 带 requestId/revision，返回 immutable、bounded result。

业务插件只能提交 bounded、signed/validated 的视频 descriptor 和受权控制 intent，不得直接调用 worker、FFmpeg、texture/audio sink、浏览器或 internal video implementation。OOVideo 统一拥有 manifest/signature、worker launch、platform/FFmpeg decode、frame/audio delivery、client sink 与 FCL backend。OOBrowser 只拥有 Chromium/Web surface；网页视频绑定 OOEngine surface 时仍经 OOVideo policy。

旧 `:media`、`oomedia-worker`、`com.zkonikishi.ooengine.media.*` 和 `Media*` 需先成为带明确退场版本的 deprecated compatibility adapter/shim 并委托 OOVideo，不能立即删除。必须提供 artifact/config/cache/pin 原子迁移与失败回滚，保持服务器 UID 隔离；通过 Fabric/NeoForge/FCL、MP4/WebM、签名、资源释放和长跑测试后再删。禁止复制两套 decoder/session/cache。新插件不得新增旧 Media API 依赖。OOConsole 只能编辑或诊断 OOVideo 配置和资源引用，不负责播放或解码。

### 1.1.4 testkit 门禁（planned）

- owner mismatch、descriptor limits、source policy；
- revision/replay、capability fallback、timeout/cancel；
- player quit、server switch、连续 100 轮 scope close；
- session/worker/frame/audio/cache 最终计数为 0；
- 旧 pin/cache/config 的迁移成功、失败回滚和 UID 隔离 fixture。

API/testkit 正式发布前，消费者只能等待并审计当前接入，不得自造本地 facade 或 bridge。

## OOQuest 接入（planned）

首版目标 Capability 为 `ooengine.quest.v1`，公开 contract 从 `ooengine-api 1.1.4` 发布，实现位于 `:ooquest`，package `com.zkonikishi.ooengine.quest`。消费者使用 owner-fixed `ExtensionScope.quest(QuestContribution/QuestProvider)` 或等价 `OOQuestScope`，以及 `QuestService`/`QuestController`。

工程归属固定为 OOEngine 仓库及其生命周期，构建路径与产品文档归档均为 `OOEngine > :ooquest`。禁止建立独立 artifact/group/package、Paper 插件、插件中心卡片或仓库。

DTO 使用 immutable、bounded 的 `QuestSnapshot`、`QuestJournal`、`QuestEntry`、`QuestObjective`、`QuestProgress`、`QuestActionRequest`、`QuestActionResult`、`QuestEvent`。任务 ID 必须 provider-owner namespaced；snapshot 带 provider revision。mutation 使用 requestId、expectedRevision、actor UUID，Provider 二次执行 RBAC/前置条件校验并返回新 revision 和明确 code。

生命周期与线程要求：owner-scoped registration；disable/reload/quit/switch 幂等释放；声明 sync/async/entity execution policy；支持 timeout/cancel；不持有 `Player`/`Plugin`；订阅 bounded、有 backpressure，按 revision 拒绝乱序事件。

安全边界：客户端仅发送 intent，不能自报进度、奖励或状态；禁止 command/script/path/SQL；推进与奖励由权威 Provider 事务处理；诊断 DTO 必须脱敏、有界。任务窗口走 OOMenu，HUD 走未来 OOHUD，OOConsole 仅做 adapter/显示映射配置和诊断，Typewriter 对话不混入 Quest 状态接口。

旧 `com.zkonikishi.ooengine.api.quest.*` 自 `1.1.4` 迁入 `ooengine-api` compatibility surface，标记 deprecated shim 并委托 OOQuest；整个 1.x 保持兼容，最早 2.0 删除。

### OOQuest testkit 门禁（planned）

- duplicate provider、cross-owner、namespace 与 bounds；
- missing provider 隔离、revision/replay、RBAC/permission denied 且不调用 handler；
- timeout/cancel、event ordering、backpressure；
- 100 轮 enable/disable、player quit、server switch；
- subscription/session/cache 最终为 0；
- 可复用的 fake Provider fixture。

API 发布前业务插件只审计并等待，禁止自造本地任务 bridge。

## OOEditor / OOHUD / OOModel（planned）

OOEditor：`:ooeditor` / `com.zkonikishi.ooengine.editor`。只实现结构化编辑、校验、operation、revision diff、preview compile、screenshot request 与 publish candidate。OOConsole 必须复用它，禁止复制 editor engine。

OOHUD：`:oohud` / `com.zkonikishi.ooengine.hud`。唯一 planned Capability 名称为 `ooengine.hud-contribution.v1`；禁止新增旧 overlay 命名的 Capability 或产品名。

OOModel 的 BetterModel adapter 只允许：

```kotlin
compileOnly("io.github.toxicity188:bettermodel-bukkit-api:<compatible-version>")
```

禁止 shade/内嵌 BetterModel、反射 internal class 或声明硬依赖。adapter 缺失/不兼容只降级自身。测试至少覆盖 Capability/fixture、tracker owner scope、entity/player quit、chunk unload、plugin disable、Folia execution policy 与 resource-pack 冲突；未有代码、测试、artifact 前保持 **planned**。

## 变更与发布规则

- 开始前保存 `git status` 和 diff 基线；已有改动禁止 reset/clean；
- public API 优先新增接口/default method，破坏性变更需要新 ABI/API major；
- legacy 兼容集中在明确退场版本的 legacy 层；
- 功能变更同步代码注释、README、默认配置、Wiki 与发行说明；
- 发布前执行旧品牌、旧命令、乱码、许可证、foreign classes 和 SHA256 门禁；
- OOCore、OOEngine 和各插件独立提交，禁止把跨仓库修改揉成无法回滚的一次操作。

## 文档规范

- 使用“窗口”，不再用“面板”描述用户概念；
- 实体与代码术语使用“插件”；“附属（Extensions）”仅用于官方产品与导航分类，不表示 runtime 或依赖关系；
- 规范命令是 `/oo engine`；
- `ooengine` 可作为 package、permission、protocol/resource namespace；这不是旧品牌残留；
- Java API 中 `Panel*` 是兼容术语，除非有正式 API 迁移计划，否则不要机械重命名；
- 文档必须保存为 UTF-8，并通过 `mkdocs build --strict`。
