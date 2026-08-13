# OOChat

OOChat 在产品、Wiki 和 OOConsole metadata 中归入 OOEngine 生态的**附属（Extensions）**。该分类不改变独立 plugin/module identity、仓库、版本、生命周期或依赖边界，也不创建父插件/runtime。

OOChat 是 Meowopia 的聊天与消息核心服务（Paper/Folia 插件）。

- **运行依赖**：`OOCore`
- **可选**：`OOEngine`、`OOConsole`
- **主命令**：`/oo chat`

## 生态分类

本插件是通用聊天域产品，官方导航固定属于**附属（Extensions）**。它可以与 OORPG 产品协同，但不会因此改变分类或依赖边界。

## 定位与边界

- 负责世界/公会/私聊/群聊/频道/附近/多世界/城镇/地皮等消息通道、管理员通知、邮件（含附件）、历史回溯、过滤/撤回等逻辑。
- 不承诺 RPG 权威：等级、装备、任务、奖励、货币等状态由各自权威系统（如 OOQuest/OOVIP/第三方 RPG 引擎）管理。
- 不提供独立可视化后台；后台能力计划通过 OOConsole 自有的 `ooconsole.editor-contribution.v1` 接入。平台 owner-service 链已 available for migration，但 OOChat adapter/workspace 尚未完成自身 acquire/lifecycle/foreign 验收，因此仍为 planned/code-prepared。
- Android 平板仅为 Menu preset，不构建独立 tablet 模块。

## 命令与权限

- 内部命令分发在 OOCore 的模块命令路由下，以 `execute` 接口匹配 `chat` 子命令。
- 管理面安全动作使用命名 action + RBAC，不接受任意脚本/路径/命令参数。

## 文档状态（本任务）

- 本仓库：实施计划已接入 OOChat 领域核心 + OOCore 稳定 facade。
- 可视化编辑：planned，等待通过已发布的 OOConsole SDK 接入；当前没有已实现的 OOChat 产品工作区。
- OOMenu/OOVideo/OOQuest：本插件仅消费，不建模独立桥接实现。

## 联系 / Contact

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777
