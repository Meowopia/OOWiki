# 集成边界

## 命令

OOCore `1.6.1` 是 `/oo` 的唯一 root owner。新迁移使用已发布的 `oocore.command-contribution.v2` host-minted Actor 与 controlled Authorization；v1 保持 binary compatible 但 deprecated。OOEngine、OOGame 等消费者完成 v2 真实验收前保留 legacy single path，禁止双注册、按名字查玩家或暴露 Bukkit handles。

## 表现层

OOEngine `1.1.4` 的以下目标接口仍为 **planned**：OOMenu 的 `ooengine.window-contribution.v1`、`ooengine.menu-contribution.v1`，以及 OOVideo 的 `ooengine.video.v1`。业务插件不得自造本地 bridge 或直接依赖 OOEngine server implementation。

OOEditor（`:ooeditor`）和 OOHUD（`:oohud`）是 OOEngine 仓库子项目，不是独立插件。OOConsole 复用 OOEditor；HUD 贡献的规划名称仅为 `ooengine.hud-contribution.v1`。

## Console

OOConsole `0.1.5` 已使用 OOCore `1.6.1` 正式 owner-service artifacts 通过最终门禁：`OFFICIAL_OWNER_SERVICE_ARTIFACT_015_OK`。可信 owner-service 链已 implemented/available for migration；业务插件 adapter 仍须逐个完成 acquire/lifecycle/foreign 验收，未完成前保持 disabled/code-prepared。

旧 intermediate harness 只作历史证据；当前最终证据来自 OOCore `1.6.1` production authority/registry artifact-first 门禁。`0.1.4` runtime 仍保持 rejected。

OOCore `1.6.1` 的 `oocore.owner-bound-service.v1` 与 OOConsole `0.1.5` owner-bound acquisition 已通过最终门禁。旧 `openScope(String)` / `openScope(ownerId)` 仍 deprecated/unsafe，禁止 ThreadLocal、反射或本地 bridge。
