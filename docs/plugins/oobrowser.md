# OOBrowser

OOBrowser 在产品、Wiki 和 OOConsole metadata 中归入 OOEngine 生态的**附属（Extensions）**。该分类不创建 runtime、父插件、Maven group、package、共享仓库或万能 Core。

OOBrowser 保留独立 plugin/module identity、仓库、版本、生命周期和依赖边界。它只负责 Chromium/Web surface；网页视频若进入 OOEngine video surface，仍必须经过 OOVideo policy，不能形成第二套通用视频协议。

## 当前状态

OOBrowser `0.1.0-SNAPSHOT` 尚无 release。OOConsole `0.1.5` owner-bound optional adapter 已完成自身迁移验收，可标 **implemented**；Mutation、Window 和 runtime 配置状态不随之升级。

- **code-prepared / fixture-tested**：browser v2 contribution 使用 host-minted player UUID，非玩家 UUID 为空，controlled permission，并覆盖 forged actor/argument denial；尚未升级为 live runtime implemented。
- **implemented**：OOConsole optional adapter 使用 OOCore `1.6.1` `Lease` / `openScope()` owner-bound 路径；cross-owner denial、disable、100-cycle 与 foreign scan 已通过。
- **implemented / tested contract**：`PinnedBrowserTransport` 接收 `NetworkPolicy` 生成的 `ValidatedTarget`（URI + approved IP set）。Connector 只能连接批准 IP 且不得再次 DNS；每次 redirect 都重新 resolve/revalidate，最多 5 次 redirect，并执行 timeout 与 64 MiB hard cap。
- **disabled**：Mutation 尚未接入 trusted per-mutation authorization，不能执行写操作。
- **planned / waiting**：OOEngine `1.1.4` Window/Menu/Video API 已 published，但 server wiring/consumer migration waiting；Chromium/MCEF/WebGUI planned。

最新验证使用 Microsoft JDK 25：18 tests、0 failures/errors，foreign classes `0`。Fixture 覆盖正常 pin 传递、redirect 重校验，以及二次 DNS 变为私网时在 connect 前拒绝。dev JAR SHA-256 为 `3841ea9180e87dee6697bac65eab7ac5ae06b21091f69cadf54186a38a00f3f0`，仅为非 release 构建证据。该状态不是 live MCEF/Chromium connector；玩家 Window 仍因 `WindowController` 与 OOMenu wiring blocked。

OOBrowser 对 OOConsole 为 optional。owner-bound adapter 已 implemented，但当前只允许已验收的受限读取/贡献路径；Mutation 继续 disabled。OOBrowser 不得自建后台。网页 source 仍必须通过 HTTPS exact-origin、DNS/private/special-use、redirect、manifest signature 和 bounded bridge 等策略；生产 DNS pinning 未验收时必须保持 blocked。

本轮 JVM ledger marker 为 `6a316024-57d1-4196-a35e-666d3c3c7630`，launcher PID `15044`；因无法取得完整祖先链，未执行任何终止，仅等待进程自然 exit `0`。

## 配置 / Configuration

实际生效配置为 **none**。`examples/config.yml` 提供全字段中英注释与安全示例；`config.schema.json` 使用合法 JSON Schema `description/default/range/enum`，不写非法 JSON 注释。两者都只是 **planned reference**，当前没有 runtime loader；复制到 `plugins` 目录也不会生效，不得虚报为用户已可配置。

游戏内浏览器仅规划 Chromium/MCEF，覆盖 Chrome/现代 Edge 兼容面；Firefox 只做外部兼容验收，不嵌入 Gecko；IE 不支持，遗留页面只能在游戏外使用 Edge IE Mode。

## 联系 / Contact

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777
