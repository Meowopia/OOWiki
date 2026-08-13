# OO 系列插件 Wiki

这里是 OO 系列插件的统一中文文档入口。文档以当前仓库中的实现、插件描述文件和架构约束为准。

## 产品组成

| 项目 | 类型 | 作用 | 运行时依赖 |
|---|---|---|---|
| **OOCore** | Paper/Folia 插件 | OO 系列公共运行时、模块注册、调度、存储与兼容层 | 无 |
| **OOEngine** | Paper/Folia 插件 | 服务端权威的 UI、面板、HUD、动作与集成框架 | OOCore |
| **OOEngine-Client** | Fabric/NeoForge 客户端 | 原生 Screen/HUD、媒体、模型与交互渲染 | 对应版本 OOEngine |
| **OOChat** | Paper/Folia 附属插件 | 聊天、会话、社交、邮件、审核与消息历史 | OOCore、OOEngine |
| **OOGame** | Paper/Folia 附属插件 | 小游戏大厅、目录、房间、匹配、邀请及 Provider 桥 | OOCore、OOEngine；OOChat 可选 |
| **OOMusic** | Paper/Folia 附属插件 | 音乐目录、队列、歌单、同步听与播放控制 | OOCore、OOEngine；OOChat 可选 |

## 快速导航

- [安装与升级](installation.md)
- [架构与依赖关系](architecture.md)
- [OOCore](plugins/oocore.md)
- [OOEngine 与客户端](plugins/ooengine.md)
- [OOChat](plugins/oochat.md)
- [OOGame](plugins/oogame.md)
- [OOMusic](plugins/oomusic.md)
- [配置参考](configuration.md)
- [命令与权限](commands-permissions.md)
- [开发者接入](development.md)
- [故障排查](troubleshooting.md)

## 关键原则

1. **服务端权威**：客户端只发送 intent，不能决定权限、收件人、冷却、奖励或最终状态。
2. **兼容集中在 OOCore**：附属插件不得直接依赖 CraftBukkit/NMS，也不得自行判断服务端版本。
3. **UI 集中在 OOEngine**：附属插件提供 bindings、actions 和状态，不再实现第二套渲染器。
4. **版本独立**：各服务端插件独立发布；部署时应按兼容矩阵选择版本，而不是只看版本号是否相同。
5. **故障隔离**：可选 Provider 或 Bridge 故障只降级对应功能，必需 Capability 缺失则启动时 fail-fast。

## 当前基线

- 构建工具链：Java 25（OOMusic 的纯领域模块当前可用 Java 21，但实际 OO 服务端部署按 Java 25 统一）。
- 主要服务端：Paper / Folia。
- 当前描述文件基线：Minecraft API `26.2`。
- 客户端：与 Minecraft 版本匹配的 Fabric 或 NeoForge 包，二选一。

> 仓库中仍可能存在 `ooengine` 旧标识。它仅用于配置、协议、资源 namespace 或 Java package 兼容，不代表旧产品名。
