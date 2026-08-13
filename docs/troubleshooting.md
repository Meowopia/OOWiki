# 故障排查

## 插件未启用

按控制台第一条错误处理：

- `Unknown/missing dependency`：先安装或启用 OOCore、OOEngine。
- `missing capability`：OOCore 版本或平台能力不满足模块需求。
- `ABI mismatch`：更换兼容的 Core/模块组合。
- `Unsupported API/version`：服务端版本与构建目标不符。

不要通过删除 `depend` 绕过依赖；模块仍需要运行时服务。

## 按 M 没反应

1. 确认客户端安装了正确 Minecraft 版本和正确 loader 的 OOEngine-Client。
2. 检查协议版本错误和 mod 加载日志。
3. 检查玩家是否有 `ooengine.ui.command`。
4. 尝试服务端命令打开 `menu`，区分 keybind 与面板问题。

## 面板不更新

检查 panel id、客户端当前 document revision、patch 的 base revision 和 widget id。revision 不匹配时客户端按设计拒绝 patch，应重新发送完整 snapshot。

## Web/地图打不开

- URL origin 是否精确存在于 `web-view.allowed-origins`；
- 地图 Provider 是否已安装、enabled 且 URL 可由玩家电脑访问；
- reverse proxy 的 Host/Origin 是否在 Web Editor allowlist；
- 远程 Editor 是否启用 HTTPS 和 secure cookie。

## 数据库失败

- 外部 JDBC URL、driver 与账号是否匹配；
- `OOENGINE_DB_PASSWORD` 是否传入服务器进程；
- 数据库是否可达且连接池未耗尽；
- SQLite 文件目录是否可写。

## 视频无法播放

- 客户端是否为 `full` 发行包；
- manifest 签名、endpoint pin、HTTPS origin、SHA-256、大小和 expiry 是否通过；
- `slim` 客户端只显示 poster fallback 是正常行为。

## Folia 线程错误

附属模块必须通过 OOCore scheduler/facade 执行玩家和 region 操作。出现线程检查异常通常表示某个适配器绕过了 OOCore，应修复调用点而不是关闭检查。

## 提交问题时附带

- 服务端类型和完整版本；
- Java 版本；
- OO 各 JAR 的精确版本与 SHA-256；
- Fabric/NeoForge 及客户端版本；
- 从首次异常开始的完整日志；
- 最小配置与复现步骤（先移除密码、token、私有 URL）。
