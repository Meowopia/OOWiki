# OOConsole

OOConsole 在产品、Wiki 和 OOConsole metadata 中归入**基础（Core）**。该分类不改变独立仓库和版本，也不创建聚合 runtime；目标运行时依赖保持 hard-depend OOCore + OOEngine。

OOConsole 是独立 OO 系列管理与可视化编辑插件。`0.1.5` + OOCore `1.6.1` owner-service artifact-first 最终门禁已通过，可信链 implemented/available for migration；各消费者 adapter 仍须独立验收，不能批量标记 implemented。

!!! info "状态拆分"
    **`0.1.3` coordinates published**：API/runtime/testkit 坐标已发布。API 与 testkit payload 仍与 `0.1.1`/`0.1.2` byte-identical，仅做 coordinate alignment；runtime 为首次发布。server runtime acceptance 仍 pending，trusted consumer identity blocked。离线 `openScope` fixture 不能外推为可信跨插件接入；消费者不得创建本地 bridge或自报 owner、principal、role。

!!! danger "0.1.4 runtime rejected"
    `0.1.4` runtime coordinate 存在，但 JAR 内 `plugin.yml` 仍声明版本 `0.1.3`，与坐标不一致，因此该版本永久 rejected、不可安装。后续 `0.1.5` 已发布并修复版本元数据。

!!! info "0.1.5 published / owner-service available"
    `0.1.5` API SHA-256：`7214...45DE`；runtime SHA-256：`6ED7...2A37`；testkit SHA-256：`DE2C...37CC`。API/testkit 与 `0.1.4` byte-identical；runtime 修复 descriptor/manifest。Owner-service artifact-first 最终门禁已通过，但 HTTP/UI、Editor 与消费者 adapter 仍逐项验收。

!!! note "Intermediate harness evidence"
    旧 `REAL_CORE_REGISTRY_ARTIFACT_OK` 仅为 intermediate 证据。当前正式 artifact-first 最终门禁已通过，输出 `OFFICIAL_OWNER_SERVICE_ARTIFACT_015_OK`。

## 固定标识

| 项目 | 值 |
|---|---|
| 产品名 | `OOConsole` |
| Java package | `com.zkonikishi.oo.console` |
| plugin/module ID | `ooconsole` |
| 规范命令 | `/oo console` |
| 运行时硬依赖 | `OOCore`、`OOEngine` |
| plugin descriptor | `depend: [OOCore, OOEngine]` |
| `0.1.0` API SHA-256 | `FA95DC043219DE93F42E798D4745087503DA780AA7EDAC8CD51610B6A81DA3F9` |
| `0.1.0` testkit SHA-256 | `1F022E8ABCE3AB15D9439FEC24F5C0EA6897386843374A0BCA4D6175FA2C2844` |
| `0.1.1` API artifact | `com.zkonikishi.oo.console:ooconsole-api:0.1.1`（published/verified） |
| `0.1.1` API SHA-256 | `AFA5ACD65D2C35DBD16F260FE6F87836927E395C466009065D0337BD33B2DD08` |
| `0.1.1` testkit artifact | `com.zkonikishi.oo.console:ooconsole-testkit:0.1.1`（published/verified） |
| `0.1.1` testkit SHA-256 | `DE2CDE134313105263B211C92BDE71C1A0D8121C7B377225BA0B1C5D9C4137CC` |
| API version | `API_VERSION = 1`（implemented） |
| Capability | `ooconsole.editor-contribution.v1`（compile contract published；owner-bound acquisition available；具体贡献逐项验收） |

`0.1.2` API/testkit coordinates 已 published，SHA-256 仍分别为 `AFA5ACD65D2C35DBD16F260FE6F87836927E395C466009065D0337BD33B2DD08`、`DE2CDE134313105263B211C92BDE71C1A0D8121C7B377225BA0B1C5D9C4137CC`，payload 与 `0.1.1` 相同；该版本没有 runtime artifact。

`0.1.3` API/testkit coordinates 使用相同 payload 与 SHA-256：API `AFA5ACD65D2C35DBD16F260FE6F87836927E395C466009065D0337BD33B2DD08`，testkit `DE2CDE134313105263B211C92BDE71C1A0D8121C7B377225BA0B1C5D9C4137CC`。首次发布的 runtime artifact SHA-256 经总调度核验摘要为 `C233...A392`；依赖图、foreign scan 与 descriptor 核验通过。该发布不等于 server runtime accepted。

OOCore `1.6.1` `oocore.owner-bound-service.v1` 与 OOConsole `0.1.5` 正式 artifacts 已通过 owner-service 最终门禁。旧 `openScope(String)` / `openScope(ownerId)` 仍 deprecated/unsafe，禁止 ThreadLocal、反射或本地 bridge。

消费者仍需用正式 fixture 完成自身 acquire、双生命周期、关闭后 fail-fast 与 foreign scan 验收；未完成者保持 disabled/code-prepared。

API `0.1.4`/`0.1.5` 的 `OwnerBoundOOConsole` compile surface 已发布；`0.1.5` + OOCore `1.6.1` 最终门禁已通过。具体消费者仍须独立完成 acquire/lifecycle/foreign 验收。

## 配置 / Configuration

当前没有用户可编辑的 OOConsole runtime 配置文件；HTTP/UI transport 仍为 planned。不得虚构 `config.yml`、配置键或默认值。

OOConsole currently has no user-editable runtime configuration. HTTP/UI transport remains planned. Do not invent `config.yml`, keys, or defaults.

## 联系 / Contact

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777

OOConsole 位于独立仓库、采用独立版本并发布为独立插件，但运行时必须同时依赖 OOCore 与 OOEngine。不要使用“OOEngine Console”作为产品名，也不要把 OOConsole Contribution 放进 OOEngine API。

OOConsole 必须复用 OOEngine 的窗口 schema、RenderPlan、资源、预览和 Editor engine，禁止形成第二套实现。compile surface 发布不等于 runtime 可发现，更不等于 HTTP 服务、管理 UI、Editor、adapter 或产品工作区已经实现。

Android 平板仅是 OOEngine `:oomenu` 通用 `menu` 窗口的响应式 preset。OOConsole 的 Window/Menu workspace 只通过稳定接口调用 OOMenu 与 OOEditor（`:ooeditor`），不复制 editor engine，不直接修改内部 repository、session manager、renderer 或 data folder，也不增加 Tablet workspace、导航页、模块、命令、registry、数据库或配置根。

## 命令与入口

| 入口 | 状态 | 说明 |
|---|---|---|
| `/oo console` | planned | 打开或显示 OOConsole 状态 |
| `/oo console editor` | planned | 进入 OOConsole 的 Editor 工作区 |
| `/oo engine admin editor` | implemented / legacy source | 打开玩家侧 OOEngine 编辑模式；不是 OOConsole |
| OOConsole 顶部或侧边栏“Editor” | planned | Editor 快捷入口 |

任何过渡 alias 都必须在实现时明确版本和移除策略；新文档与新集成只把 `/oo console` 作为规范入口。

## Contribution 规范（planned）

插件计划通过 `ooconsole.editor-contribution.v1` 注册 owner-scoped Contribution：

```text
owner: oochat
workspace: plugins/oochat
views: [overview, moderation, mail]
actions: [oochat.moderation.reload]
```

约束：

1. owner 必须与已认证的插件/module ID 一致；
2. 资源 ID、路由、权限和 action 必须位于 owner namespace；
3. DTO 必须 immutable、versioned、bounded，不得暴露运行时对象；
4. action 由拥有资源的插件执行服务端权限与业务校验；
5. 注册返回 lifecycle handle，disable/reload 时幂等撤销；
6. 只允许 workspace、view、form、table 与受权 named action；禁止任意 HTML、JavaScript、SQL、shell、控制台命令或本地文件路径；
7. Contribution 缺失只隐藏对应工作区，不得拖垮 OOConsole 或插件核心业务。

首版 artifact、`API_VERSION=1` 和 Capability 已发布；具体产品 Contribution 工作区仍为 **planned**。Wiki 不把 SDK 可编译等同于管理功能可用。

## RBAC（planned）

权限至少拆分为：登录、查看 ControlPlane、打开 Editor、保存草稿、发布窗口、调用插件 action、查看审计、管理 OOConsole。危险权限不应包含在普通管理员通配中。

每个请求同时校验：已登录身份、角色权限、owner scope、资源版本、CSRF token、request ID 和 action payload schema。前端隐藏按钮不构成授权。

## 安全与部署（planned）

- 默认 `127.0.0.1`，远程部署要求 HTTPS reverse proxy；
- 强制 Host/Origin allowlist、Secure/HttpOnly/SameSite Cookie、会话过期和登录限流；
- 密码仅保存强 KDF hash，bootstrap token 只在本地控制台短暂显示；
- 所有写操作记录主体、owner、action、目标、结果和 request ID；
- 预览与发布沿用 OOEngine schema、UiLimits、资源策略和 RenderPlan，不另造渲染协议。

## 迁移约束

OOEngine Web Editor 只能分阶段迁移。OOConsole 需要通过功能等价、数据兼容、RBAC、安全、审计、回滚和生产试运行验收；在此之前不得删除或破坏 OOEngine 源实现。

OOConsole 仅编辑和诊断 OOVideo 配置、策略与资源引用，不自行播放、解码或持有 texture/audio sink。

OOConsole 在 `OORPG > OOQuest` 导航分类下配置 OOQuest Provider adapter、显示映射并展示 bounded、脱敏诊断；不保存第三方任务真相，不推进任务或发放奖励。该导航分类不改变其工程归属：实现仍位于 `OOEngine > :ooquest`。
