# OOMusic

OOMusic 在产品、Wiki 和 OOConsole metadata 中归入 OOEngine 生态的**附属（Extensions）**。该分类不改变独立 plugin/module identity、仓库、版本、生命周期或依赖边界，也不创建父插件/runtime。

OOMusic 是服务端协调的音乐产品，通过 OOEngine 提供窗口和迷你播放器。

## 能力

- 本地或管理员授权的远程 `MusicProvider`；
- 联合搜索、稳定 `providerId + trackId` 引用；
- 队列、播放/暂停、seek、音量、上下曲、repeat、shuffle；
- 主持人控制的同步听房间与服务端时钟；
- 歌曲、歌单和同步听邀请的 OOChat Bridge；
- bounded `LyricsDocument`，歌词结构、行数、文本长度与时间轴输入均受上限约束；
- `oomusic:*` 网络 namespace。

## 源安全

音频源必须通过 HTTPS scheme、精确小写 hostname allowlist、MIME allowlist、字节上限、连接/读取超时和 expiry 检查。凭据、原始 Provider 响应和长期源 URL 不发送给客户端。

## 命令与权限

旧构建可能仍提供 `/oomusic`，它只属于 **legacy implementation**。统一目标入口是 `/oo music`。OOCore command v2 已发布，但 OOMusic command consumer migration 尚未单独验收；不得双注册、按名字查玩家或另造 sender-handle API。

| 节点 | 默认 |
|---|---|
| `oomusic.open` | true |
| `oomusic.listen-together.host` | true |
| `oomusic.admin.provider` | op |

实际 Paper/Folia 插件产物来自 `ooengine-adapter` 模块，并硬依赖 OOCore `1.6.1` 与 OOEngine。OOConsole API/testkit 使用 `0.1.5` optional dependency。

最新验证为 22 tests，包含 bounded `LyricsDocument`；JAR SHA-256 摘要为 `C022...6438`，仅为 snapshot 构建证据，不是 release。OOMusic 及父目录没有 Git repository；本地归档 manifest SHA-256 为 `E53B...0D9B`，zip SHA-256 为 `E770...FB34`，只用于可追溯归档，不等同于 Git commit 或 release。WindowController 与 command migration 状态保持不变。

## OOConsole 接入（implemented）

OOMusic 已移除 ServicesManager 与旧 `OOConsoleApi.openScope(String)` 路径。生产接入严格使用 active `OOModuleSession → core.ownerServices().acquire(session, OwnerBoundOOConsole.class, OwnerBoundOOConsole.CAPABILITY) → lease.service().openScope()`。

Attach 校验 `lease.requesterId == oomusic`；关闭顺序为 registration（由 scope 持有）→ scope → lease，并保持幂等。OOConsole 仍为 optional，acquire 失败只禁用可视配置。cross-owner denial、owner propagation、100-cycle scope/lease close 与 foreign fixture 已通过；不使用 Bukkit handle、name lookup、反射或本地 bridge。

## OOMenu 窗口接入（planned）

OOMusic 的播放器窗口和 Menu app entry 将通过 OOMenu stable facade 接入。`1.1.4` registration surface 已发布，但 API JAR 无 `WindowController` 且 OOMenu server wiring 未验收；Window migration 仍 blocked。现有 legacy Panel 单路径继续保留，禁止混合迁移。

## 配置 / Configuration

用户表现层模板仅 `ooengine-adapter/src/main/resources/ooengine/panels/oomusic-main.yml`，以 bundled/in-memory 方式发布，不复制到 data folder。模板包含中英用途、重载/重启、风险、安全、字段类型/单位/范围/action 与 Contact 注释。

OOConsole 配置采用 Java defaults 与内嵌 JSON Schema，没有外部 `config.yml`、语言、TOML 或 JSON 文件。JSON Schema 使用合法的 bilingual `description`、`examples`、`required` 与 `secretRef` 约束，不添加非法 JSON 注释。`plugin.yml` 仅保留合法 descriptor 字段；`gradle.properties` 只是 build metadata。

## 联系 / Contact

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777

## OOVideo 边界（planned）

OOMusic 继续拥有音频领域、曲库、队列和同步听状态。需要视频画面时只调用 `ooengine-api` 的 OOVideo facade；不得直接调用 OOVideo Worker、FFmpeg、texture/audio sink 或 OOEngine internal video implementation。
