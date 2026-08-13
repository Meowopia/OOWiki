# OOVIP

**分类：独立插件。状态：paused / unreleased。**

OOVIP 是会员生命周期与权益编排层，不重写 LuckPerms、PlayerPoints、YuPay、GUI 或时装 Provider。membership domain skeleton、V1 schema 与 SQLite 校验已实现；JDBC transaction/outbox/idempotency、provider adapter、claims/PAPI/GUI API 仍 planned。`/oo vip` 当前仅 bootstrap，尚未达到正式 release 门禁。

OOCore command v2 consumer migration尚未完成；Window 接入因 OOEngine/OOMenu runtime wiring 不完整而 blocked。OOConsole owner-service 平台链已 available for migration，但 OOVIP 尚未完成自身 adapter 验收。上述状态不因配置或中文 catalog 验收而升级。

客户端不能自报权益或等级，也不能仅凭窗口状态发放奖励。权益判定、领取、冷却和经济 mutation 必须由服务端权威处理并写入审计。

## 配置 / Configuration

- `config.yml`、`config_lp.yml`、`config_pex.yml`：按环境生成的主配置。
- `en`、`en_16`、`zh_CN`、`zh_CN_16`：生成到 `messages` 的语言模板。
- `custom.yml` 与 `script.js`：可执行自定义流程模板；console command 与 JavaScript 属高权限内容，只能由受信任管理员修改。

模板已包含中英文件头、字段类型、默认值、占位符、风险与重载说明。数据库密码必须作为 secret 保护，不得提交到仓库或粘贴到公开日志。

## 中文本地化

`zh_CN.yml` 与 `zh_CN_16.yml` 已完成逐键人工中文翻译并通过本地验证，不再是 English fallback。翻译保留全部 key、placeholder、颜色 token、`/oo vip` 命令以及列表/hover 结构；统一术语为会员、会员组、会员仓库、授予和有效期。

当前 bootstrap artifact 仍为 **non-release**，不得作为正式下载或 release 证据。内部测试、开发版散列和构建细节不在公开 Wiki 展示。

## 联系 / Contact

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777
