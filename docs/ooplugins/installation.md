# 安装与升级

## 安装顺序

1. 停止服务器并备份 `plugins/`、数据库和自定义窗口。
2. 安装 `OOCore-<version>.jar`。
3. 安装 `OOEngine-<version>.jar`。
4. 按需安装 `OOChat`、`OOGame`、`OOMusic`。
5. 需要原生 UI 的玩家安装与 Minecraft/loader 精确匹配的 `OOEngine-Client`。
6. 启动服务器，确认 OOCore 先加载，各模块完成 capability handshake。

```text
plugins/
├─ OOCore-<version>.jar
├─ OOEngine-<version>.jar
├─ OOChat-<version>.jar       # 可选
├─ OOGame-<version>.jar       # 可选
└─ OOMusic-<version>.jar      # 可选
```

## OOEngine 窗口

首次启动会创建默认窗口。公开示例以产品发行包和本 Wiki 的配置说明为准；闭源产品不提供源码仓库入口：

```text
OOEngine/examples/panels/
```

将需要的 YAML 复制到：

```text
plugins/OOEngine/panels/
```

玩家按 `M` 请求打开菜单，`F8` 切换窗口编辑器；也可使用 `/oo engine open menu`（实际可用命令以当前构建注册结果为准）。

## 客户端选择

- Fabric 与 NeoForge 只安装一个。
- Minecraft 小版本、loader 和 OOEngine 协议版本必须匹配。
- `slim`：不含 OOVideo Worker，视频 surface 使用 poster fallback。
- `full`：OOVideo 可经策略校验后使用隔离的 OOVideo Worker/FFmpeg decode；业务插件不能直接调用 worker。

## 首次检查

- `/plugins` 中 OOCore、OOEngine 及插件均为启用状态。
- 控制台不存在 missing capability、ABI mismatch 或 protocol mismatch。
- `/oo core` 可用。
- 客户端按 `M` 能打开菜单。
- Folia 环境中没有错误的全局线程或跨 region 调用。

## 升级

1. 备份插件 JAR、`plugins/OOEngine/`、模块数据目录和外部数据库。
2. 阅读目标版本 release notes 与兼容矩阵。
3. 先升级 OOCore，再升级 OOEngine，最后升级插件和客户端。
4. 保留旧 JAR 和数据快照，验证通过后再清理。
5. 不要在运行中覆盖 JAR；完整停服后操作。

## 回滚

停止服务器，恢复整套兼容 JAR 与对应数据快照。若升级包含 schema migration，不要只替换 JAR 而沿用已迁移数据库。


