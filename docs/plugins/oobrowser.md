# OOBrowser

OOBrowser 在产品、Wiki 和 OOConsole metadata 中归入 OOEngine 生态的**附属（Extensions）**。该分类不创建 runtime、父插件、Maven group、package、共享仓库或万能 Core。

OOBrowser 是闭源专有产品，保留独立 plugin/module identity、版本、生命周期和依赖边界。本页只公开产品能力、安装配置边界与安全保证，不提供内部源码、私有 artifact 访问方式或安全实现细节。它只负责 Chromium/Web surface；网页视频若进入 OOEngine video surface，仍必须经过 OOVideo policy，不能形成第二套通用视频协议。

## 当前状态

OOBrowser `0.1.0-SNAPSHOT` 尚无 release。OOConsole `0.1.5` owner-bound optional adapter 已完成自身迁移验收，可标 **implemented**；Mutation、Window 和 runtime 配置状态不随之升级。

- **code-prepared / fixture-tested**：`/oo browser` 的受控命令接入已通过本地 contract fixtures；尚未升级为 live runtime implemented。
- **implemented**：OOConsole optional 只读贡献已通过 owner-bound lifecycle 验收。
- **implemented / fixture-tested backend SPI**：网络目标经过策略验证和地址固定；redirect 必须逐跳重新校验，并受 redirect 次数、timeout 与 64 MiB 响应上限保护。该状态不代表 live Chromium/MCEF connector 已完成。
- **disabled**：Mutation 尚未接入 trusted per-mutation authorization，不能执行写操作。
- **planned / waiting**：OOEngine `1.1.4` Window/Menu/Video API 已 published，但 server wiring/consumer migration waiting；Chromium/MCEF/WebGUI planned。

最新本地 scoped 验证为 19 tests、0 failures/errors，foreign classes `0`；dev JAR SHA-256 为 `5627fcab4c00c74883fe47bc78f81557dccbf1d714875aabf741a0e9e660177d`，仅用于标识非 release 构建证据，不提供下载入口。完整 Gradle check 受 offline metadata 阻塞，因此 release gate 尚未完成。该状态不是 live MCEF/Chromium connector；玩家 Window 仍 blocked。

OOBrowser 对 OOConsole 为 optional。当前只允许已验收的只读贡献路径；Mutation 继续 disabled。OOBrowser 不得自建后台。网页来源必须经过 HTTPS origin、地址范围、redirect、签名清单和有界 bridge 等安全策略；生产连接器未验收时必须保持 blocked。

## 配置 / Configuration

实际生效配置为 **none**。`examples/config.yml` 提供全字段中英注释与安全示例；`config.schema.json` 使用合法 JSON Schema `description/default/range/enum`，不写非法 JSON 注释。两者都只是 **planned reference**，当前没有 runtime loader；复制到 `plugins` 目录也不会生效，不得虚报为用户已可配置。

游戏内浏览器仅规划 Chromium/MCEF，覆盖 Chrome/现代 Edge 兼容面；Firefox 只做外部兼容验收，不嵌入 Gecko；IE 不支持，遗留页面只能在游戏外使用 Edge IE Mode。

## 联系 / Contact

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777
