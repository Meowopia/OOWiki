# 命令与权限

所有 OO 系列命令统一从 `/oo` 进入。根命令的唯一 owner 是 **OOCore**；其他插件不得注册或覆盖 `/oo`，只能通过已实现的 `oocore.command-contribution.v1` 贡献一级节点。旧 `plugin.yml` 自抢 `/oo` 的方式仅作为 legacy/bootstrap migration。

!!! info "command v2 已发布，消费者迁移待验收"
    OOCore `1.6.1` 的 `oocore.command-contribution.v2` 提供 host-minted、Bukkit-neutral Actor：SenderKind、真实玩家 `Optional<UUID>`、bounded displayName 与 invocation-scoped controlled Authorization。它不暴露 `CommandSender`/`Player`，也不允许 command dispatch。v1 保持 binary compatible 并作为 deprecated migration surface；消费者迁移验收前仍保留 legacy single path，禁止双注册。

## OOCore

| 命令/节点 | 说明 |
|---|---|
| `/oo core` | Core 版本、ABI、adapter、scheduler、Capability 与模块诊断 |
| `/oo core admin` | Core 管理诊断入口 |
| `oocore.command` | 普通 Core 命令 |
| `oocore.admin` | Core 管理命令，默认 OP |

## OOEngine

规范入口为 `/oo engine`。当前通过 OOCore legacy `OOModule.execute` 单路径 available；command v2 actor blocker 已解除，但 OOEngine 迁移仍 in progress，完成真实验收前禁止双注册。现有证据为源码与 command-router unit fixture，不等同于本轮真实 Paper boot matrix 验收。

| 命令 | 权限 |
|---|---|
| `/oo engine [menu|quests|map|open|close|list|info|version]` | `ooengine.ui.command` |
| `/oo engine reload`（legacy route） | `ooengine.ui.admin.reload` |
| `/oo engine admin reload` | `ooengine.ui.admin.reload` |
| `/oo engine admin editor` | `ooengine.ui.admin.editor` |
| `/oo engine admin open` | `ooengine.ui.admin.open` |
| `/oo engine admin close` | `ooengine.ui.admin.close` |
| `/oo engine admin list` | `ooengine.ui.admin.list` |
| `/oo engine admin info` | `ooengine.ui.admin.info` |
| `/oo engine admin debug` | `ooengine.ui.admin.debug` |
| `/oo engine admin refresh` | `ooengine.ui.admin.refresh` |
| `/oo engine admin set` | `ooengine.ui.admin.set` |
| `/oo engine admin web` | `ooengine.ui.admin.web` |

完整管理通配仅应授予受信任管理员。生产服使用 LuckPerms 按职责拆分，特别是 editor、web、set 和 debug。

历史独立入口与缩写不得写入新脚本、Wiki 或插件集成；所有新调用只使用 `/oo engine`。

## OOConsole（planned）

OOConsole 的规范入口计划为 `/oo console`，Editor 快捷入口计划为 `/oo console editor`。OOConsole `0.1.5` owner-service 链已验收，但 consumer command migration 与产品命令仍未单独验收；不能把目标设计当成当前可用命令。

当前 **implemented** 的 `/oo engine admin editor` 仍属于 OOEngine 玩家侧编辑模式；在 OOConsole 完成迁移验收前继续保留。正式产品名是 **OOConsole**，不是“OOEngine Console”。

## OOChat

OOChat 使用 `oochat.*` namespace。主要类别包括基础聊天、频道、私聊/群组、邮件、审核、编辑器和危险管理能力。危险权限不得混入普通管理通配，完整表见 OOChat 仓库的 `docs/PERMISSIONS.md`。

## OOGame 与 OOMusic

插件命令采用 `/oo game ...`、`/oo music ...` 等形式，但 `/oo` 仍由 OOCore 独占。插件只能等待正式一级节点 contribution API，禁止注册冲突的根命令或自造本地 dispatcher bridge。
