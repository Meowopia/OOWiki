# 迁移规则

- OOCore：不需要可信玩家身份的命令可接入 `oocore.command-contribution.v1`。OOEngine/OOGame 的 player-aware 命令当前保留 legacy single path，禁止双注册，等待未发布的 v2 host-minted actor contract 与 controlled authorization gateway。
- Window：新插件等待 OOMenu stable facade；`Panel*` 仅为 API 1.x deprecated compatibility adapter，不能作为新接入方案。
- Video：旧 `Media*`、`:media` 与 worker 迁入 OOVideo 时必须单实现委托、原子迁移 config/cache/pin，失败回滚；禁止双 decoder/session/cache。
- Editor：现有 OOEngine Web Editor 在 OOConsole 验收前不得删除；OOConsole 复用 OOEditor，不复制编辑引擎。

每次迁移必须记录源版本、目标版本、回滚方式、数据兼容和验收证据。
