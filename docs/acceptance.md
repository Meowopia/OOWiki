# 公开稳定版验收矩阵

本页只展示用户可见的版本、安装、依赖、命令、配置、升级/回滚和支持状态。**Candidate / Preview 不等于正式发布，也不提供未验收二进制。** 所有插件产品均为闭源 proprietary；OOWiki 自身继续开源。

| 产品 | 分类 | 用户可见状态 | 安装与依赖 | 命令 | 配置 | 升级 / 回滚 |
|---|---|---|---|---|---|---|
| OOCore | Core | `1.7.1` stable; `1.7.0` withdrawn | Runtime hard dependency; ABI/handshake/Capability negotiation, no exact SemVer pin | `/oo core` | No user runtime config | Do not use `1.7.0`; keep previous stable binary |
| OOEngine | Core | `1.1.6` stable | Compatible OOCore; matching client loader | `/oo engine` | `config.yml` and window templates | Back up first; Folia live acceptance pending |
| OOConsole | Core | `0.1.6` stable | Compatible OOCore + OOEngine | `/oo console` | No user runtime config | Keep previous stable binary |
| OOGame | Extensions | Paused / unreleased; no GitHub Release | 依赖 OOCore + OOEngine；OOConsole optional | `/oo game` legacy route available | 大厅模板和公开 Schema | 未发布前不覆盖现有安装；Window 迁移可回退 legacy 路径 |
| OOMusic | Extensions | Paused / unreleased; no GitHub Release | 依赖 OOCore + OOEngine；OOConsole optional | `/oo music` 目标入口；旧 `/oomusic` 为 legacy | bundled 播放器窗口；无外部主配置 | 保留 legacy Panel 单路径，Window 迁移未验收前不混用 |
| OOBrowser | Extensions | Paused / unreleased; no GitHub Release | 依赖 OOCore；OOEngine/OOConsole 能力按状态降级 | `/oo browser` 尚未 live 验收 | 当前无生效 runtime config；示例仅 reference | 无正式二进制可升级；生产连接器未验收时保持禁用 |
| OOChat | Extensions | `0.1.0` stable | Compatible OOCore; OOConsole optional | `/oo chat` | See product release docs | No OOEngine Window/UI in `0.1.0` |
| OOVIP | 独立（Standalone） | Paused / unreleased; no GitHub Release | OOCore required; other integrations optional | `/oo vip` bootstrap | Public config and language files | Unreleased; do not deploy as stable |
| OOReforge | 独立（Standalone） | Paused / unreleased; no GitHub Release | Independent Paper plugin; integrations optional | `/oo reforge` legacy route | Public config and language files | Unreleased; do not deploy as stable |

## 统一支持渠道

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777

## 发布前公开检查

- [ ] Core、Extensions、独立插件三个固定分类及成员一致；侧边导航保持平铺。
- [ ] Stable、Candidate、Preview、Planned 没有互相混写。
- [ ] 安装、依赖、命令、配置和回滚说明与产品页一致。
- [ ] 每个产品页包含五项支持联系方式。
- [ ] 页面不包含非公开工程材料、开发期验证数据或敏感实现。
- [ ] 相对链接、UTF-8、中文术语和 `mkdocs build --clean --strict` 全部通过。
- [ ] Pages 只在稳定版总验收后发布。
