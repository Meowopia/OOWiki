# 集成边界

## 命令

OOCore `1.6.1` 是当前稳定基线和 `/oo` 的唯一 root owner；`1.7` 仍是 unpublished candidate。新迁移使用已发布的 `oocore.command-contribution.v2`；v1 保持 binary compatible 但 deprecated。OOEngine、OOGame 等消费者完成 v2 真实验收前保留 legacy single path，禁止双注册。

## 表现层

OOEngine `1.1.4` 已发布 Window/Menu/Video registration surface，但完整 Window runtime migration 仍 blocked。`1.1.5` 为 unpublished candidate，不能当作已发布依赖。业务插件不得混用新旧 Window 路径或直接依赖 OOEngine server implementation。

OOEditor（`:ooeditor`）和 OOHUD（`:oohud`）是 OOEngine 仓库子项目，不是独立插件。OOConsole 复用 OOEditor；HUD 贡献的规划名称仅为 `ooengine.hud-contribution.v1`。

## Console

OOConsole `0.1.5` 的 owner-bound 平台链已验收，可供消费者迁移；各业务插件仍须按产品页完成自身验收，未完成者保持 disabled/code-prepared。HTTP/UI、Editor 和产品工作区状态不因此自动升级。
