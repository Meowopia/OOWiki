# OOGame

OOGame 在产品、Wiki 和 OOConsole metadata 中归入 OOEngine 生态的**附属（Extensions）**。该分类不改变独立 plugin/module identity、仓库、版本、生命周期或依赖边界，也不创建父插件/runtime。

OOGame 是 OOEngine 的小游戏大厅与 Provider 聚合插件。

## 命令

使用统一 OO 命令入口打开游戏大厅：

```text
/oo game
```

该命令当前通过 OOCore legacy module dispatcher 单路径可用。OOCore command v2 已发布，但 OOGame command consumer migration 尚未单独验收；不得双注册或按 sender name 查找玩家。真正打开玩家 Window 仍等待 OOEngine/OOMenu 修复版 facade。

## 能力

- `OoGameProvider` 稳定玩法桥；
- 游戏目录、分类、标签和搜索；
- 收藏、最近游玩和玩家库；
- 加入、排队、旁观、退出状态协调；
- 房间目录、排行榜、最近战绩、活动与资源状态；
- 短期、接收者绑定、单次消费的邀请 token；
- `oogame:*` 网络 namespace；
- OOEngine bindings/actions 与大厅窗口。

## 内置玩法

`provider.doudizhu` 实现标准三人斗地主领域规则。最新证据已覆盖完整回合状态机；视觉、名称和文案为 OOGame 自有内容。

## 依赖和故障隔离

OOCore `1.6.1` 与 OOEngine 是硬依赖；OOConsole `0.1.5` 为 optional。OOCore API SHA-256 为 `0B75544ADB6291ED259A2D347A667C76C27341A4DD63A040F9B7F65CB6F785DE`，OOConsole API SHA-256 为 `7214E11E918D08B5E41D3F66C1EA8EC5578A21B5A31D720DAB4EA7D8D0AE45DE`。小游戏 Provider 缺失或异常不会拖垮其他游戏；OOConsole acquire/registration 失败只禁用 Console 贡献。

完整回合状态机证据对应 commit `bd82e6e`，JAR SHA-256 总调度摘要为 `5FC9...66CC`，仅作为非 release 构建证据。WindowController 与 command consumer migration 状态不因此升级。

## OOConsole 接入（implemented）

OOGame 使用 active `OOModuleSession → core.ownerServices().acquire(session, OwnerBoundOOConsole.class, capability) → lease.service().openScope() → editor registration`。旧 `openScope(String)`、ServicesManager、reflection 与 local bridge 均已禁用。

关闭顺序为 registration（由 scope 持有）→ scope → lease，全部幂等。`OwnerServiceHarness` 已覆盖 owner propagation、缺 capability 拒绝、provider/consumer disable、lease requester/provider 与 100-cycle acquire/register/close，最终 sessions/leases 为 0；mutation/revision 与 foreign fixtures 同时通过。

## OOMenu 窗口接入（planned）

OOGame 的大厅窗口和 Menu app entry 将通过 `ooengine-api` 的 OOMenu stable facade 接入。`1.1.4` 仅 registration surface published，API JAR 没有 `WindowController`，OOMenu server wiring 未验收；完整 Window migration runtime-blocked。禁止新 registry 与 legacy `PanelController` 混用。

## 配置 / Configuration

OOGame 没有 data-folder `config.yml`、语言、TOML、properties 或生成模板。当前可编辑资源只有：

- `panels/oogame-lobby.yml`：大厅 Panel 文档。修改后需重新构建并 reload/restart；action 必须保持 server-authoritative，错误 action/namespace 会导致窗口降级或操作被拒绝。
- `console/oogame-lobby.schema.json`：OOConsole typed schema；JSON 不支持注释，说明通过 Schema `description/examples` 表达。owner-bound adapter 已 implemented，但所有 mutation 仍由 OOGame 服务端权限、revision 与业务规则校验。

Schema 字段：`enabledProviders`（启用 Provider 列表）、`featuredGames`（推荐游戏）、`categories`（分类）、`matchmakingEnabled`（是否允许匹配）、`defaultRoomCapacity`（整数，2–128 players，默认 3）、`activitiesVisible`（显示活动）、`leaderboardLimit`（整数，1–100，默认 50）、`lobbyTitle`（字符串，1–64 characters）。这些配置只控制展示/请求意图，不能绕过服务端 Provider 权限、房间状态或匹配校验。

## 联系 / Contact

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777
