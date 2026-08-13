# OORPG

OORPG 是 Meowopia OO 系列中所有 RPG 玩法、成长系统和第三方 RPG 生态对接的统一**产品分类**。

!!! important "分类不是父插件"
    OORPG 当前不代表必须安装的父插件、共享 runtime、Maven group、Java package、数据库或硬依赖。各项目继续按自己的工程边界构建和发布。只有经过稳定用例验证、确实需要跨项目复用的领域契约，才会评审 OORPG API；禁止预先制造万能 RPG Core。

## 当前成员

| 项目 | 工程归属 | 作用 | 状态 |
|---|---|---|---|
| OOQuest | OOEngine 内部子项目 `:ooquest` | 任务 Provider 对接、versioned snapshot、权威任务 action 与事件 | Planned |
| OOVIP | 独立项目边界待定 | RPG 权益、等级或会员能力 | Planned |
| OOReforge | 独立插件 | 装备、锻造、品质、配方和领域校验 | 开发中 |

## 默认归类范围

- 职业、属性、等级、成长、技能与天赋；
- 装备、锻造、强化、品质、词缀和套装；
- 任务、剧情进度、追踪和任务 Provider；
- 声望、阵营、货币、奖励和 RPG 权益；
- MMO、Mythic、BetonQuest、Typewriter 等 RPG 生态适配。

## 共同安全边界

RPG 状态始终以服务端权威 Provider 为准。客户端、窗口和 OOConsole 只能提交受限 intent，不能自报等级、属性、装备、货币、奖励、任务完成度或结算结果。

所有接入必须包含 owner namespace、immutable/versioned/bounded DTO、requestId 防重放、expectedRevision、权限与事务复验、timeout/cancel，以及 disable/reload/player quit/server switch 清理。

## 表现层

- 玩家窗口通过 OOMenu facade；
- HUD 与任务追踪通过 OOHUD；
- 视频表现通过 OOVideo；
- 管理配置通过可选 OOConsole Contribution；
- Minecraft/Paper/Folia 差异通过 OOCore facade。
