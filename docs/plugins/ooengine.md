# OOEngine 与 OOEngine-Client

OOEngine 是服务端 UI 框架；OOEngine-Client 是 Fabric/NeoForge 原生渲染端。

## 主要能力

- YAML 面板与不可变 UI snapshot；
- Screen、HUD、Tab、Scoreboard；
- 原生视觉编辑器和本地 Web Editor；
- 按键绑定与技能栏；
- 地图、任务、NPC 对话和个人信息集成；
- 图片、模型、安全视频和可选 Web panel；
- SQLite/MySQL/MariaDB/PostgreSQL 玩家 UI 状态存储。

## 常用操作

| 操作 | 默认方式 |
|---|---|
| 打开菜单 | `M` |
| 面板编辑器 | `F8` |
| 打开面板 | `/ooengine open <panel>` |
| 示例面板 | `OOEngine/examples/panels/*.yml` |

## 配置位置

```text
plugins/OOEngine/config.yml
plugins/OOEngine/panels/*.yml
```

核心配置详见[配置参考](../configuration.md)。面板 DSL 的权威说明仍位于源码仓库 `OOEngine/PANEL_CONFIG.md`，编辑器说明位于 `OOEngine/EDITOR.md`。

## 可选集成

PlaceholderAPI、BlueMap、dynmap、squaremap、Pl3xMap、BetonQuest、Typewriter、Citizens、ZNPCsPlus、Quests、BeautyQuests，以及多个 Mythic/MMO 系列插件。

## 客户端分支与发行

稳定分支按 Minecraft 版本维护。Fabric 与 NeoForge 包不能混装；`full` 包带媒体 worker，`slim` 包只保留 poster fallback。
