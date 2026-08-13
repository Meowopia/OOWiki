# 公开稳定版验收矩阵

本页只展示用户可见的版本、安装、依赖、命令、配置、升级/回滚和支持状态。**Candidate / Preview 不等于正式发布，也不提供未验收二进制。** 所有插件产品均为闭源 proprietary；OOWiki 自身继续开源。

| 产品 | 分类 | 用户可见状态 | 安装与依赖 | 命令 | 配置 | 升级 / 回滚 |
|---|---|---|---|---|---|---|
| OOCore | Core | `1.7.1` stable; `1.7.0` withdrawn | Runtime hard dependency; ABI/handshake/Capability negotiation, no exact SemVer pin | `/oo core` | No user runtime config | Do not use `1.7.0`; keep previous stable binary |
| OOEngine | Core | `1.1.6` stable | Compatible OOCore; matching client loader | `/oo engine` | `config.yml` and window templates | Back up first; Folia live acceptance pending |
| OOConsole | Core | `0.1.6` stable | Compatible OOCore + OOEngine | `/oo console` | No user runtime config | Keep previous stable binary |
| OOGame | Extensions | Preview；正式闭源 binary 未发布 | 依赖 OOCore + OOEngine；OOConsole optional | `/oo game` legacy route available | 大厅模板和公开 Schema | 未发布前不覆盖现有安装；Window 迁移可回退 legacy 路径 |
| OOMusic | Extensions | Preview / non-release | 依赖 OOCore + OOEngine；OOConsole optional | `/oo music` 目标入口；旧 `/oomusic` 为 legacy | bundled 播放器窗口；无外部主配置 | 保留 legacy Panel 单路径，Window 迁移未验收前不混用 |
| OOBrowser | Extensions | `0.1.0-SNAPSHOT` preview；无 release | 依赖 OOCore；OOEngine/OOConsole 能力按状态降级 | `/oo browser` 尚未 live 验收 | 当前无生效 runtime config；示例仅 reference | 无正式二进制可升级；生产连接器未验收时保持禁用 |
| OOChat | Extensions | `0.1.0` stable | Compatible OOCore; OOConsole optional | `/oo chat` | See product release docs | No OOEngine Window/UI in `0.1.0` |
| OOQuest | OORPG | Planned | 未来随 OOEngine 对应能力交付 | 无独立根命令 | 尚无用户配置 | 未发布，无升级操作 |
| OOVIP | OORPG | Bootstrap preview / non-release | Provider 按实际环境选择 | `/oo vip` bootstrap | 主配置、语言和受控自定义流程 | 发布前不作为稳定版部署；升级前备份数据库与配置 |
| OOReforge | OORPG | Candidate；正式发布准备中 | 独立 Paper 插件；OOEngine/OOConsole optional | `/oo reforge` legacy route available | `config.yml`、中英文语言文件 | `1.3.0` 历史许可不变；未来版本发布后按迁移说明升级 |

## 统一支持渠道

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777

## 发布前公开检查

- [ ] Core / Extensions / OORPG 分类与导航一致。
- [ ] Stable、Candidate、Preview、Planned 没有互相混写。
- [ ] 安装、依赖、命令、配置和回滚说明与产品页一致。
- [ ] 每个产品页包含五项支持联系方式。
- [ ] 页面不包含非公开工程材料、开发期验证数据或敏感实现。
- [ ] 相对链接、UTF-8、中文术语和 `mkdocs build --clean --strict` 全部通过。
- [ ] Pages 只在稳定版总验收后发布。
