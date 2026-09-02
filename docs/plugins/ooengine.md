# OOEngine 与 OOEngine-Client {#ooengine-ooengine-client}

<img class="plugin-page-banner" width="1200" height="630" src="../../assets/branding/blackcat-v1/ooengine/banner-1200x630.webp" alt="喵托邦 / Meowopia — OOEngine 界面与交互" loading="lazy" decoding="async">

**OOEngine 为 Minecraft 服务器提供可配置的窗口与交互表现，OOEngine-Client 负责在玩家客户端显示和操作这些窗口。**

喵托邦 / Meowopia · 基础（Core）。OOEngine 是闭源专有产品；品牌画面表达产品定位，不代表所有展示效果都已实现。

!!! info "当前正式版"
    服务端 **OOEngine 1.2.0**，客户端 **OOEngine-Client 1.2.0**，客户端目标为 **Minecraft 26.2**。安装时选择对应的 Fabric 或 NeoForge 包，不要同时安装两个 loader 包。维护分支和 SNAPSHOT 不是正式发布。

## 产品作用 {#_1}

OOEngine 适合把服务器功能组织成玩家可以点击、查看和操作的窗口，例如个人信息、功能菜单和由其他插件提供数据的界面。服主可以修改窗口文件与资源；实际玩家数据、任务进度和奖励仍由服务端及相应玩法插件决定。

- **服务端装 OOEngine 和 OOCore**：加载配置与窗口，处理交互、权限和资源交付。
- **玩家装 OOEngine-Client**：根据 Minecraft 版本选择 Fabric 或 NeoForge，显示窗口、文字与图形并处理输入。
- **没有客户端 Mod 时**：不能按完整原生窗口体验验收。完整原版客户端替代显示仍未完成。
- **OOCore 不是客户端 Mod**：不要把 OOCore JAR 放进玩家的 `mods/`。

## 已实现功能 / Implemented {#features}

<span id="oomenu"></span>
<span id="oohud-planned"></span>
<span id="_5"></span>

以下以正式 **1.2.0** 为范围。原生窗口需要服务端与对应客户端正确安装；有条件的集成仍需要相应提供方。维护分支已经编写但尚未发布的功能不计入本表。

| 内容 | 服主可以做什么 | 使用边界 |
|---|---|---|
| YAML 窗口 | 调整文本、按钮、布局、颜色与已有动作；打开、刷新、关闭窗口 | 从随包模板开始修改，不代表任意网页组件都可直接使用 |
| 默认个人信息与菜单模板 | 使用个人信息、手机、网游、手游风格入口 | 布局模板不会自动安装其按钮所指向的玩法插件 |
| 字体和资源 | 使用服务器交付的字体与受控资源，减少不同服务器资源混用 | 缺失资源、字体 fallback 和客户端版本仍会影响效果 |
| HUD、Tab、计分板显示 | 显示服务器或已接入插件提供的信息 | 有显示配置不等于已有真实数据 Provider；不要把示例数据当作实时玩法数据 |
| Web Editor | 在浏览器中查看、编辑窗口文档 | 初次设置默认仅在服务器本机进行；不是完整的统一服管后台 |
| UI v2 设置窗口 | 体验首批控件、键盘操作、保存/取消与窗口动效 | 当前是有限范围实现，不是完整控件库，也不替代 Minecraft 的 `server.properties` |

### 字体与文字 {#_6}

正式客户端包含字体资源与文本显示支持。使用自定义字体前确认资源可读、字体授权允许分发，并在实际使用的客户端检查中文、换行和 GUI Scale。不要把“支持字体交付”理解成任意字体、emoji、全部排版效果在所有后端都已完全一致。

### 菜单预设 {#menu-android}

默认提供 `menu`、`menu-phone`、`menu-mmo`、`menu-mobile` 等窗口。它们是同一插件的内容模板，不是额外插件。可以先运行 `/oo engine open menu` 查看样式入口。

Android 平板形态属于菜单主题方向；完整桌面分页、壁纸管理、Dock 和全部移动端适配不能仅凭概念图视为已交付。

## 安装 {#_2}

### 准备环境

| 位置 | 必要条件 |
|---|---|
| 服务端 | Paper 26.2、Java 25、OOCore、OOEngine |
| Fabric 客户端 | Minecraft 26.2、Java 25、匹配的 Fabric Loader 与 Fabric API、Fabric 版 OOEngine-Client |
| NeoForge 客户端 | Minecraft 26.2、Java 25、匹配的 NeoForge、NeoForge 版 OOEngine-Client |

**OOCore 是 OOEngine 的必要运行前置。** 1.2.0 的最低已验证基线为 **OOCore 1.7.2**，不是“只能安装这一版”的精确锁定。运行时还需要兼容的接口与调度、平台、通信及可信服务能力；未来版本是否可用，以兼容说明和启动检查为准，不能仅凭版本数字更大就认定兼容。不要使用已撤回的 OOCore 1.7.0。

Folia 实机尚未验收。OOCore 支持某个平台，并不自动代表 OOEngine 已完成该平台验收。

### 安装步骤

1. 正常停止服务器，备份已有插件数据。
2. 将 `OOCore-1.7.2.jar`（或明确兼容的后续版本）和 `OOEngine-1.2.0.jar` 放进服务器 `plugins/`。同一插件只保留一个版本的 JAR。
3. 玩家把对应的 `OOEngine-Client-Fabric-26.2-1.2.0.jar` 或 `OOEngine-Client-NeoForge-26.2-1.2.0.jar` 放进自己的 `mods/`，同时满足对应 loader 的依赖。
4. 启动服务器，确认 OOCore、OOEngine 成功启用。初次启动会创建主配置和缺失的默认窗口模板，不会自动覆盖同名已有模板。
5. 用管理员执行 `/oo core`、`/oo engine info`、`/oo engine list` 检查状态；玩家安装客户端后执行 `/oo engine open menu` 测试。
6. 需要改主配置时，先正常停服，修改后重新启动。不要在线替换 JAR。

正式下载与版本说明：[OOEngine Release](https://github.com/Meowopia/OOEngine/releases/tag/v1.2.0)、[OOEngine-Client Release](https://github.com/Meowopia/OOEngine-Client/releases/tag/v1.2.0)。私有仓库下载需要项目授予的访问权限；不要把访问凭据发到群聊或日志中。

[OOCore 安装说明](oocore.md) · [通用安装与升级](../installation.md)

## 配置 / Configuration {#configuration}

以下均为相对于服务器目录的路径，不是额外下载地址。

| 文件或目录 | 用途 | 修改与生效方式 |
|---|---|---|
| `plugins/OOEngine/config.yml` | 功能、编辑器、显示刷新频率、存储和集成配置 | 建议停服修改后重启；当前窗口重载命令不会重新读取整份主配置 |
| `plugins/OOEngine/panels/*.yml` | 用户窗口文档 | 默认有文件监听；也可手动 `/oo engine reload`。重新打开窗口核对效果 |
| `plugins/OOEngine/assets/` | 本地窗口资源 | 放入可信资源并更新窗口引用；重开窗口检查交付，无法确认缓存更新时重启验证 |
| `plugins/OOEngine/settings-v2.properties` | 内置 UI v2 设置窗口保存的数据 | 由窗口操作维护，不是通用配置模板；不要边运行边手改版本或数据 |
| `plugins/OOEngine/web-editor-credentials.yml` | Web Editor 完成设置后保存的登录资料 | 程序维护，**不要手改、公开或提交** |
| `plugins/OOEngine/editor/setup-token.txt` | Web Editor 首次设置的一次性凭据 | 仅服务器管理员本地读取；不要转发，完成设置后由程序处理 |
| `plugins/OOEngine/storage/` | 默认本地持久化数据 | 停服后备份；不要多服共用同一个活动 SQLite 文件 |

### 主配置重点

| 配置项 | 默认或作用 | 注意事项 |
|---|---|---|
| `open-on-join` | 空字符串，不自动打开窗口 | 可填写 `/oo engine list` 中已有的窗口 ID，例如 `menu` |
| `open-on-join-delay-ticks` | `20` tick，约 1 秒 | 范围 1–1200；过早打开时客户端可能还未准备好 |
| `features.*` | 各项功能开关 | 开关为 true 不代表第三方插件已经安装或能力已验收 |
| `features.kcp` | `false` | 当前是占位，不是可用的 KCP 传输；不要为“优化延迟”而打开 |
| `web-editor.enabled`、`bind`、`port` | 默认启用，`127.0.0.1:18081` | 与 `features.web-editor` 一同控制；改监听地址、端口或安全配置后重启 |
| `hud`、`tab`、`scoreboard` | 显示开关与刷新间隔 | 间隔越短，CPU 和网络开销越高；tick 约为 1/20 秒 |
| `quest-tracker`、`integrations` | 任务显示及可选集成 | 以实际已安装、受支持的提供方为准 |
| `resource-bridge` | 默认不启用外部资源目录桥接 | 仅配置服主信任的本地资源来源，不照搬他人的磁盘路径 |
| `persistence` | 默认本地 SQLite | 外部数据库不是首次使用的必要条件；数据库密码使用环境变量引用 |

下面是**合并到现有配置对应位置**的例子，不要用它覆盖整份 `config.yml`：

```yaml
# 加入后打开菜单 / Open the menu after joining
open-on-join: "menu"
# 单位 tick，20 约为 1 秒 / Ticks; 20 is approximately one second
open-on-join-delay-ticks: 20

# 保持编辑器本机访问 / Keep the editor local-only
web-editor:
  enabled: true
  bind: "127.0.0.1"
  port: 18081
```

主配置修改后重启。**`/oo engine reload` 当前只重新加载窗口目录，不是全插件配置热重载。** `.yml` 是当前监听器自动处理的后缀；使用 `.yaml` 等兼容源格式时请手动重载并检查结果。

JSON 主题包不是当前已确认的通用窗口配置入口；不要把 JSON、概念主题文件或 UI v2 开发示例直接丢进 `panels/` 并认为会加载。JSON 本身也不支持注释。

## 命令 {#_3}

根命令由 OOCore 提供，用户入口统一为 **`/oo engine`**。以下对应正式 **1.2.0** 的命令处理行为。`<参数>` 必填，`[参数]` 可省略；`<窗口>` 使用文档 ID，不带 `.yml`；`<玩家>` 为在线玩家的准确名称。表中示例玩家 `Alex` 需替换为实际在线玩家。

### 玩家入口与兼容管理入口

| 完整命令 | 用途与默认值 | 精确权限 | 执行者 | 最小示例 |
|---|---|---|---|---|
| `/oo engine`、`/oo engine menu` | 打开自己的 `personal-info`；不是样式选择菜单 | `ooengine.ui.command` | 玩家 | `/oo engine` |
| `/oo engine open [窗口]` | 打开自己的窗口；省略为 `personal-info` | `ooengine.ui.command` | 玩家 | `/oo engine open menu` |
| `/oo engine close` | 关闭自己的活动窗口 | `ooengine.ui.command` | 玩家 | `/oo engine close` |
| `/oo engine quests`、`/oo engine journal` | 打开全部任务日志；数据需要任务提供方 | `ooengine.ui.command` | 玩家 | `/oo engine quests` |
| `/oo engine map` | 尝试打开已配置地图；受网页能力限制 | `ooengine.ui.command` | 玩家 | `/oo engine map` |
| `/oo engine list` | 列出已加载窗口 ID | `ooengine.ui.command` | 玩家/控制台 | `/oo engine list` |
| `/oo engine info`、`/oo engine status` | 状态、版本与联系信息 | `ooengine.ui.command` | 玩家/控制台 | `/oo engine info` |
| `/oo engine version` | 版本与联系信息 | `ooengine.ui.command` | 玩家/控制台 | `/oo engine version` |
| `/oo engine refresh [窗口]` | 为自己重新发送窗口文档；省略为 `personal-info`，不是任意当前窗口 ID | `ooengine.ui.command` | 玩家 | `/oo engine refresh personal-info` |
| `/oo engine reload` | 只重新加载窗口目录 | `ooengine.ui.admin.reload` | 玩家/控制台 | `/oo engine reload` |
| `/oo engine editor [窗口]` | 打开游戏内编辑目标；省略为 `personal-info` | `ooengine.ui.admin.editor` | 玩家 | `/oo engine editor personal-info` |
| `/oo engine debug` | 查看集成状态 | `ooengine.ui.admin.debug` | 玩家/控制台 | `/oo engine debug` |
| `/oo engine set <控件> <属性> <值...>` | 修改自己活动窗口的一项属性；值允许空格；不保存为窗口文件 | `ooengine.ui.admin.set` | 玩家 | `/oo engine set greeting text Hello` |

公共 `open`/`menu` 不接受代开目标；控制台为玩家开窗请使用下列 `admin` 入口。`set` 示例需要当前窗口存在 `greeting` 控件。

### 管理员入口

| 完整命令 | 用途与默认值 | 精确权限 | 执行者 | 最小示例 |
|---|---|---|---|---|
| `/oo engine admin`、`/oo engine admin help` | 显示管理帮助 | `ooengine.ui.admin.help` | 玩家/控制台 | `/oo engine admin help` |
| `/oo engine admin menu [玩家]` | 为目标打开 `personal-info`；玩家省略目标时为自己，控制台必须填写目标 | `ooengine.ui.admin.menu` | 玩家/控制台 | `/oo engine admin menu Alex` |
| `/oo engine admin open [窗口] [玩家]` | 默认窗口 `personal-info`；玩家省略目标时为自己；控制台需按顺序给出窗口和目标 | `ooengine.ui.admin.open` | 玩家/控制台 | `/oo engine admin open menu Alex` |
| `/oo engine admin close [玩家]` | 关闭目标窗口；玩家省略目标时为自己，控制台必须填写目标 | `ooengine.ui.admin.close` | 玩家/控制台 | `/oo engine admin close Alex` |
| `/oo engine admin quests` | 打开自己的任务日志，不支持代开 | `ooengine.ui.admin.quests` | 玩家 | `/oo engine admin quests` |
| `/oo engine admin journal` | 同上，但当前版本使用不同权限节点 | `ooengine.ui.admin.journal` | 玩家 | `/oo engine admin journal` |
| `/oo engine admin map [玩家]` | 尝试打开目标的已配置地图；目标省略规则同 close | `ooengine.ui.admin.map` | 玩家/控制台 | `/oo engine admin map Alex` |
| `/oo engine admin reload` | 重新加载窗口目录，不重读主配置 | `ooengine.ui.admin.reload` | 玩家/控制台 | `/oo engine admin reload` |
| `/oo engine admin editor [窗口]` | 编辑目标默认 `personal-info`；仍需客户端编辑入口 | `ooengine.ui.admin.editor` | 玩家 | `/oo engine admin editor personal-info` |
| `/oo engine admin list` | 列出已加载窗口 | `ooengine.ui.admin.list` | 玩家/控制台 | `/oo engine admin list` |
| `/oo engine admin info`、`/oo engine admin status` | 状态与联系信息；status 使用 info 权限 | `ooengine.ui.admin.info` | 玩家/控制台 | `/oo engine admin info` |
| `/oo engine admin version` | 版本与联系信息 | `ooengine.ui.admin.version` | 玩家/控制台 | `/oo engine admin version` |
| `/oo engine admin debug` | 集成状态 | `ooengine.ui.admin.debug` | 玩家/控制台 | `/oo engine admin debug` |
| `/oo engine admin refresh [窗口]` | 为自己重新发送文档；默认 `personal-info`，不支持代刷 | `ooengine.ui.admin.refresh` | 玩家 | `/oo engine admin refresh personal-info` |
| `/oo engine admin set <控件> <属性> <值...>` | 修改自己活动窗口属性，不写回文件 | `ooengine.ui.admin.set` | 玩家 | `/oo engine admin set greeting text Hello` |
| `/oo engine admin web <玩家> <URL> [transparent]` | 请求打开网页；透明参数为 `true`/`false`，默认 `false` | `ooengine.ui.admin.web` | 玩家/控制台 | `/oo engine admin web Alex https://example.com/ false` |

地图和 Web 行仅说明命令入口确实存在，**不是网页已能显示的承诺**。1.2.0 两个主客户端均不执行旧网页打开消息；不要仅安装 WebGUI 就认为这些入口可用，也不要为测试随意放开 URL 来源限制。示例域名不是已授权来源。

当前没有独立 `/oo engine help` 公共子命令；管理帮助是 `/oo engine admin help`。兼容解析器中的旧别名不等于发行包注册了可直接执行的旧根命令，本页统一使用 `/oo engine`。

## 权限 {#permissions}

以下将发行包显式声明和处理代码额外检查分开。权限插件中的显式拒绝/授权仍会影响结果，不建议通过 OP 代替最小权限配置。

| 精确节点 | 对应功能 | 发行包默认值 | 显式继承关系 |
|---|---|---|---|
| `ooengine.ui.command` | 公共窗口、列表、状态、版本、任务、地图与 refresh 命令 | `true`，普通玩家可用 | 不属于下列管理通配权限 |
| `ooengine.ui.admin.*` | 下列 13 个显式管理子权限 | `op` | 只声明下列 13 项 children，不是任意新后缀自动授权 |
| `ooengine.ui.admin.menu` | 管理 menu | `op` | `ooengine.ui.admin.*` → 此节点 |
| `ooengine.ui.admin.open` | 管理 open | `op` | 同上 |
| `ooengine.ui.admin.close` | 管理 close | `op` | 同上 |
| `ooengine.ui.admin.reload` | 窗口重载 | `op` | 同上 |
| `ooengine.ui.admin.editor` | 编辑命令入口 | `op` | 同上 |
| `ooengine.ui.admin.list` | 管理 list | `op` | 同上 |
| `ooengine.ui.admin.info` | 管理 info/status | `op` | 同上 |
| `ooengine.ui.admin.debug` | debug | `op` | 同上 |
| `ooengine.ui.admin.version` | 管理 version | `op` | 同上 |
| `ooengine.ui.admin.refresh` | 管理 refresh | `op` | 同上 |
| `ooengine.ui.admin.set` | 活动窗口属性 patch | `op` | 同上 |
| `ooengine.ui.admin.web` | 管理 Web 请求 | `op` | 同上 |
| `ooengine.ui.admin.help` | 管理帮助 | `op` | 同上 |
| `ooengine.ui.admin.quests` | admin quests | **未显式声明** | 不在上述 children 中 |
| `ooengine.ui.admin.journal` | admin journal | **未显式声明** | 不在上述 children 中 |
| `ooengine.ui.admin.map` | admin map | **未显式声明** | 不在上述 children 中 |
| `ooengine.admin.editor` | 客户端游戏内编辑保存 | **未显式声明** | 与 `ooengine.ui.admin.editor` 不同，不在上述 children 中 |
| `ooengine.admin` | F7 设置窗口及其保存动作 | **未显式声明** | 不在上述 children 中 |

“未显式声明”表示插件没有为该节点写明默认值或继承；实际未注册节点行为受服务器与权限插件策略影响，不能据此承诺普通玩家默认有权限。需要使用时给可信管理员**显式授予准确节点**。尤其不要假定打开编辑命令权限自动包含编辑保存权限，也不要杜撰 `ooengine.*` 为本插件已声明的通配权限。

权限只授权入口，不替代客户端、数据提供方、资源来源与功能开关条件。其他插件贡献的业务动作还可能有它们自己的权限要求，以其文档为准。

### 客户端按键 {#client-keys}

| 按键 | Fabric 1.2.0 | NeoForge 1.2.0 |
|---|---|---|
| M | 请求个人信息窗口 | 请求个人信息窗口 |
| F7 | 请求内置 UI v2 设置窗口 | 请求内置 UI v2 设置窗口 |
| F8 | 当前原生窗口的游戏内编辑模式 | 未提供同等入口 |
| 波浪号所在键（GRAVE） | 物品栏/技能栏切换；需要相应服务器功能与数据 | 未提供同等入口 |

按键可能被其他 Mod 占用，可在 Minecraft 按键设置中检查。F7 设置窗口需要服务器权限 `ooengine.admin`；它保存自身界面设置，不是全服配置管理器。Fabric 游戏内编辑的保存检查另需 `ooengine.admin.editor`，与打开编辑窗口的命令权限不同；只授权给可信管理员。

## 窗口文件 {#_4}

首次生成的模板包括 `menu.yml`、`menu-phone.yml`、`menu-mmo.yml`、`menu-mobile.yml`、`personal-info.yml`、`quest-journal.yml`、`model-preview.yml`。保留默认模板作参照，先复制一份再修改。

将下面内容保存为 `plugins/OOEngine/panels/hello.yml`，然后执行 `/oo engine reload` 和 `/oo engine open hello`：

```yaml
panel:
  id: hello
  title: "示例窗口 / Hello"
  size: 420x240
  anchor: center
  modal: true
  close-on-esc: true
layout:
  type: column
  padding: 24
  gap: 12
widgets:
  - type: text
    id: greeting
    text: "欢迎来到喵托邦 / Welcome to Meowopia"
    size: 18
  - type: button
    id: close
    text: "关闭 / Close"
    width: 120
    height: 36
    on-click: close
```

顶层控件列表是 **`widgets`**；嵌套容器才使用 `children`。窗口 ID 应唯一；不同内容不要复用相同 ID。插件注册的窗口应遵守该插件自己的命名空间。

语法或布局错误可能使相应窗口未被加载。重载后先查控制台错误及 `/oo engine list`，修复或恢复备份，再重新打开；不要把“重载命令返回”当作每一份文件都成功加载。

## 变量与占位符 {#variables}

OOEngine 1.2.0 的窗口绑定、消息步骤、数据库环境引用不是同一套变量系统。**不要把内部字段名、别的插件占位符或规划功能当作所有配置位置都可用的变量。** 以下示例输出是说明格式，不是预设玩家属性。

### 内置窗口绑定

写法为 `${名称}`，大小写及下划线必须一致。在服务端为某玩家生成/刷新普通窗口文档时替换控件属性字符串，可用于 `text`、`label` 等显示值；不是每帧自动读取，也不是 PAPI expansion。使用这组内置变量不需要 PlaceholderAPI。

| 精确写法 | 含义 | 显示示例 | 作用域/前置 |
|---|---|---|---|
| `${player.name}` | 当前窗口玩家名称 | `Alex` | 当前玩家 |
| `${player.uuid}` | 当前玩家 UUID | `123e4567-e89b-42d3-a456-426614174000` | 当前玩家 |
| `${player.health}` | 当前生命值，数值不是心形图标数 | `20` | 当前玩家 |
| `${player.max_health}` | 最大生命值 | `20` | 当前玩家 |
| `${player.food}` | 饥饿值 | `20` | 当前玩家 |
| `${player.level}` | 原版经验等级，不是 RPG 职业等级 | `12` | 当前玩家 |
| `${player.experience_percent}` | 当前级经验进度乘 100；不附加 `%` | `50` | 当前玩家 |
| `${player.armor}` | 盔甲属性值 | `10` | 玩家属性存在；缺失显示 `—` |
| `${player.armor_toughness}` | 盔甲韧性属性 | `2` | 同上 |
| `${player.attack_damage}` | 攻击伤害属性 | `1` | 同上，不等于完整技能最终伤害 |
| `${player.attack_speed}` | 攻击速度属性 | `4` | 同上 |
| `${player.movement_speed}` | 移动速度属性 | `0.1` | 同上，不是方块/秒测速 |
| `${player.knockback_resistance}` | 击退抗性属性乘 100，附带 `%` | `0%` | 同上 |
| `${player.luck}` | 幸运属性 | `0` | 同上 |
| `${player.world}` | 世界名称 | `world` | 当前玩家 |
| `${player.x}`、`${player.y}`、`${player.z}` | 所在方块的整数坐标 | `100`、`64`、`-20` | 当前玩家；不是带小数位置 |
| `${server.online}` | 当前服务器在线人数 | `8` | 当前玩家所在服务器 |
| `${server.max_players}` | 服务器最大人数设置 | `100` | 当前服务器 |

整数按整数显示，非整数通常保留一位小数；不要据显示文本推算高精度数值。变量值不会自动修改玩家状态。

复制到已有 `widgets:` 列表中的最小示例：

```yaml
- type: text
  id: player-summary
  text: "${player.name} | HP ${player.health}/${player.max_health} | EXP ${player.experience_percent}%"
```

`${profile.rating.visible}`、`${profile.rating.label}`、`${profile.rating.value}` 分别取自 `personal-info.rating.enabled`、`label`、`value`；默认例子为 `false`、`声望`、`—`。它们是个人信息的**配置展示值**，不是自动接入的声望系统。`visible` 是字符串布尔值，可用于模板中支持可见性条件的属性。

无法解析的 `${...}` 会在若干常见控件的 `text`、`label`、`value`、`max` 字段降为 `—`；其他属性不保证有同样 fallback。先检查变量拼写、配置及提供方，再重新打开/刷新窗口。

### 可选 RPG 资料绑定

下面 `${rpg.*}` 是已启用 MythicRPG 时的可选只读资料绑定。需要兼容的提供方资料及当前玩家档案；显示的是可读取的已保存资料，不保证等同于每一刻的最终战斗数值。缺失资料时不保证这些键存在。

| 写法 | 含义与示例 | 作用域/前置 |
|---|---|---|
| `${rpg.profile_id}` | 当前档案 ID，例如 `main` | 当前玩家 MythicRPG 档案 |
| `${rpg.archetype}` | 职业/角色标识，例如 `Warrior`；空值可显示 `冒险者` | 同上 |
| `${rpg.level}` | 档案等级，例如 `12` | 同上，与原版 level 不同 |
| `${rpg.experience}` | 档案经验，例如 `150` | 同上 |
| `${rpg.mana}` | 已保存资源中的法力值，例如 `80`；无匹配资源时 `—` | 同上；需提供方存在法力资源 |
| `${rpg.attribute_points}` | 已获点数减已花点数，最低 0，例如 `3` | 同上 |
| `${rpg.spent_attribute_points}` | 已花属性点，例如 `7` | 同上 |
| `${rpg.learned_skills}` | 已记录技能数量，例如 `4` | 同上 |
| `${rpg.resources.<资源键>}` | 指定已存在资源，如 `${rpg.resources.Mana}` → `80` | 键名由提供方确定，不是字面量 `<资源键>` |
| `${rpg.stats.<属性键>}` | 指定已存在基础属性及可合并修正值 | 键名/含义由提供方确定，不承诺全部最终战斗加成 |

部分属性还可生成简化键，如 `${rpg.strength}`、`${rpg.intelligence}`、`${rpg.vitality}`、`${rpg.spirit}`、`${rpg.magic_attack}`、`${rpg.physical_attack}`、`${rpg.critical}`、`${rpg.cooldown}`、`${rpg.resistance}`、`${rpg.power}`；只有资料中存在对应属性时才会出现，不保证是百分数，也不保证全部有值。

其他插件可提供自己的 `${命名空间.键}` 绑定，但具体键只能以该插件实际支持说明为准。例如安装 MMOCore 不等于本版自动提供 `${mmocore.level}` 这一固定键。

### PlaceholderAPI 与消息模板的区别

| 类型 | 精确形式与例子 | 当前支持边界 |
|---|---|---|
| OOEngine 自己向 PAPI 注册的 expansion | 不提供 `%ooengine_...%` 固定表 | **当前版本暂无对外 PAPI expansion**；不能把窗口绑定复制成 `%ooengine_player_name%` |
| 消费其他插件 PAPI 占位符 | `%扩展_参数%`；具体键由对应 expansion 定义 | 需要 PlaceholderAPI 与相应 expansion，但 1.2.0 的常见显示字段存在先降级、后解析的顺序问题，可能直接显示 `—`；不将其列为可靠的文本绑定方案。优先使用上方内置 `${...}` |
| 已配置窗口步骤中的消息模板 | `${player.name}`、`${player.uuid}` | `type: message` 的 `text` 等步骤参数执行时替换；例 `你好 ${player.name}` → `你好 Alex`；不是所有 UI 绑定键都能用 |
| 同一消息步骤的事件值 | `${event.<键>}`，如 `${event.value}` | 只有相应事件确实带有该键时才能替换；缺键不承诺 fallback。事件文本是输入，不是权限、物品、任务进度或奖励事实 |
| 数据库密码环境引用 | `${ENV:OOENGINE_DB_PASSWORD}` | 仅 `persistence.password` 的环境引用；由服务器进程环境提供。不填写真实密码示例，不用于窗口显示 |

消息步骤是服主审核的窗口内容，不是允许玩家提交任意脚本的入口。不要把未经校验的事件文本拼入高权限操作；不要把环境变量密钥或密码展示给玩家。普通 UI v2 控件字段也不应直接套用上述普通窗口替换规则。

## Web Editor 与 OOConsole {#web-editor-ooconsole}

<span id="ooeditor-planned"></span>

OOEngine 1.2.0 随包提供 Web Editor。默认地址为服务器本机的 `http://127.0.0.1:18081/`；在自己电脑上访问 `127.0.0.1` 不会连接到远程服务器。

首次设置：

1. 保持本机监听和 `allow-remote: false`，确认编辑器已成功启动。
2. 管理员在服务器本地读取 `plugins/OOEngine/editor/setup-token.txt`，在设置页面完成账号设置。**令牌不是从公开日志获取，也不要转发。**
3. 日后正常登录；程序维护 `web-editor-credentials.yml`。该文件不是手写密码配置。
4. 编辑前备份窗口文件；保存后检查服务端加载结果，再用实际客户端确认显示和点击。

如需远程管理，先完成本机初始化，再按[安全说明](../security.md)配置可信 HTTPS 反向代理、安全 Cookie 和精确 Host/Origin 白名单。不要仅把监听地址改成 `0.0.0.0` 就开放到公网。

[OOConsole](ooconsole.md) 是独立管理产品，**不是安装 OOEngine 的必要前置**。OOEngine-Client 1.2.0 的正式说明没有声明已经验收的 OOConsole 兼容版本；不要把维护分支接线或管理界面演示当作正式兼容承诺。

## 其他插件接入 {#sdk}

<span id="oomenuplanned"></span>
<span id="ooquest-planned"></span>

其他插件可以通过正式受支持接口贡献自己的窗口与交互。服主应安装其明确支持的版本，按插件文档启用集成；不要通过复制私有目录或修改插件内部实现来连接两个产品。

任务、对话、属性等显示依赖实际提供数据的插件。安装 OOEngine 本身不会自动提供任务内容、职业系统、经济或奖励规则。未安装或不兼容的可选提供方，不应被理解成对应玩法已可用。

开发接入说明见[开发者文档](../development.md)。本页不提供私有 SDK 下载地址、内部实现或凭据。

## 资源与备份 {#_7}

- 只加载来源可信、允许分发的窗口、字体、图片和模型；不要把陌生资源包当作可信配置执行。
- 不要为解决下载问题而关闭来源限制，或在资源 URL 中写入密码。
- 不要复制不同服务器的身份与安全文件来“共用缓存”。备份应包含整个 `plugins/OOEngine/`，而不只是主配置。
- 编辑器凭据、一次性令牌、签名私钥、数据库密码和授权信息不得发到公开问题区。
- 完整原版客户端 fallback、视频/浏览器能力和各平台支持范围，以对应正式发行说明为准。

## 未实现功能 / Not implemented {#renderplan-20}

<span id="oovideo"></span>
<span id="oovideo-facadeplanned"></span>
<span id="oomodel-bettermodel-adapterplanned"></span>

- **Folia**：实机尚未验收，不按正式支持平台推荐。
- **控件和高级效果**：UI v2 是首批有限范围实现。完整控件集、全部遮罩/材质效果与完整原版客户端替代显示尚未完成，不能照着规划清单承诺效果。
- **双 loader 差异**：Fabric 的 F8 编辑、GRAVE 技能切换和 `config/ooengine-client.json` 配置存储没有全部对等迁移到 NeoForge。
- **减少动态效果**：正式客户端 1.2.0 使用 JVM 属性 `-Dooengine.reducedMotion=true` 控制 UI v2 的减少动效分支。读取原版动效滑块的改动仍属于未发布维护代码，不包含在 1.2.0 中。
- **网页**：两端主客户端不会执行旧网页打开消息；仅安装或检测到 WebGUI，不代表所有网页入口可用。
- **视频和移动端**：不要把仅含主 JAR 的正式下载等同于完整外部视频运行环境。完整解码环境、FCL 和 OpenGL ES 的适用性需要单独确认。
- **第三方模型**：BetterModel 等适配规划不等于已随当前正式版交付；不要为尚未发布的适配额外安装不必要依赖。

## 未来计划 / Roadmap {#roadmap}

以下为已有规划方向，不是发布日期或版本承诺；是否交付以之后的正式发行说明为准。

| 方向 | 后续工作与依赖 |
|---|---|
| 减少动效与可访问性 | 将未发布维护代码中的原版动效偏好接入完成实际客户端验证；保持两种 loader 行为一致，不覆盖玩家偏好 |
| 双客户端一致性 | 在共享行为与安全配置迁移明确后，逐项处理编辑按键、技能栏和配置保存差异；网页只在真实提供方可用后声明支持 |
| 窗口与创作能力 | 按已有表现引擎规划分批完善控件、资源和效果；先保证窗口格式、显示和交互兼容，不把概念图或开发样例当成成品 |
| 平台适用范围 | 在独立环境完成 Folia 等适用平台验证；通过前继续保留未验收标注 |

## 升级与回退 {#upgrade}

1. 停止服务器并退出客户端，备份插件配置、窗口、资源、存储和安全资料。
2. 核对服务端、客户端 Mod、Minecraft/loader 和 OOCore 的兼容说明；客户端与服务端不保证永远同号。
3. 只替换需要升级的 JAR，移走旧版重复 JAR。不要删除整个插件目录来“重新生成配置”。
4. 对比新默认配置，保留已有自定义值；不要直接覆盖自己的窗口模板。
5. 先在测试服检查窗口打开、按钮操作、关闭、重连和资源加载，再用于正式服务器。
6. 回退时恢复旧 JAR **及其对应的数据目录备份**。涉及数据变更时，不要只回退二进制而保留不匹配的数据。

## 上线前自检 {#_8}

- OOCore、OOEngine 均正常启用，无缺失依赖或能力错误。
- `/oo engine info`、`/oo engine list` 正常；实际玩家能打开 `menu` 和 `personal-info`。
- 用普通玩家账号检查权限，而不是只用 OP 测试。
- 在服务器实际使用的 GUI Scale、分辨率和 loader 上检查文字、点击与关闭。
- 玩家退出重进、切服后无残留窗口或错误资源。
- 修改窗口时保留可用备份；公网管理入口启用前完成安全配置。

## 故障排查 {#_9}

| 现象 | 先检查什么 |
|---|---|
| `/oo engine` 提示未知模块 | OOCore 是否先成功启用；OOEngine 启动日志是否有依赖或注册失败 |
| `/oo engine menu` 不是样式选择页 | 该命令默认打开 `personal-info`；样式选择使用 `/oo engine open menu` |
| 修改 config 后无变化 | 当前 reload 只重载窗口；正常重启使主配置生效 |
| 窗口不在 list 中 | 文件是否位于 `panels/` 直接目录，YAML/布局是否报错，ID 是否重复 |
| 客户端完全不显示 | Minecraft/loader 是否匹配，是否装对客户端 JAR，服务端是否启用 OOEngine |
| F8 保存被拒绝 | 仅 Fabric 有该入口；检查命令权限及额外保存权限，不给普通玩家管理员权限 |
| 编辑器打不开 | 服务端本机地址、18081 端口冲突、功能开关及启动日志；远程电脑的 localhost 不是服务器 |
| 网页/视频/模型无效果 | 先确认真实提供方与运行环境，不仅检查功能开关是否为 true |

提交支持请求时提供服务端/客户端版本、Minecraft 与 loader、相关配置片段和报错；先移除令牌、密码、私钥及玩家隐私。更多帮助见[故障排查](../troubleshooting.md)。

## 联系 / Contact {#contact}

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777
