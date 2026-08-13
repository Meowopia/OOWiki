# OOReforge

**分类：OORPG。工程归属：独立 Paper 插件。状态：legacy route available；v2/Console integration blocked。**

OOReforge 负责装备、锻造、品质、配方和领域校验。OOEngine 与 OOConsole 对其保持可选；需要窗口时通过 OOMenu stable facade，需要可视化管理时通过 OOConsole Contribution。

锻造、物品与经济 mutation 必须执行权限、owner、revision、requestId、库存和事务校验。客户端或 Console 不能自报物品、材料、成功率或结算结果。

## 命令状态

Canonical command 为 `/oo reforge`，`/oo` 的唯一 owner 是 OOCore。当前 OOReforge `1.3.0` 通过 legacy `OOModule.execute` 单路径 available；OOCore `1.6.1` command v2 consumer migration 尚未完成，不能标记 implemented，也不得双注册。

## OOConsole（code-prepared / blocked）

OOReforge typed adapter 已按 OOCore `1.6.1` / OOConsole `0.1.5` 正式 owner-bound 路径 code-prepared，静态边界检查通过；但当前 Gradle 构建受共享 distribution lock 阻塞，尚无本轮 acquire/lifecycle/foreign 测试与 JAR SHA，因此继续 disabled，不能标 implemented。严禁反射、ThreadLocal、自报 owner 或本地 bridge。

## 配置 / Configuration

用户可编辑资源仅包括：

- `config.yml`：插件主配置。
- `lang/en_US.yml`：英文消息与显示文本。
- `lang/zh_CN.yml`：简体中文消息与显示文本。

文件已包含中英用途、重载/重启、风险、UTF-8、placeholder、Provider 状态和联系说明。默认显示文本由服主维护，不会随着 `language` 自动翻译；切换语言前应检查自定义文本和 placeholder 兼容性。

## 验证状态

本轮 Gradle 验证受共享 Gradle `9.6.1` distribution exclusive lock 阻塞，不能引用旧 141 tests 或旧 JAR SHA 作为当前工作树证据；真实 Paper A/B 验收仍 blocked。

## 联系 / Contact

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777
