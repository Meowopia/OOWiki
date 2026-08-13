# OOReforge

**分类：OORPG。工程归属：独立 Paper 插件。状态：legacy route available；v2/Console integration blocked。**

OOReforge 负责装备、锻造、品质、配方和领域校验。OOEngine 与 OOConsole 对其保持可选；需要窗口时通过 OOMenu stable facade，需要可视化管理时通过 OOConsole Contribution。

!!! warning "许可证与发布状态"
    OOReforge 计划在未来版本转为 proprietary，但 rights-chain 审计、未来生效版本、私有仓库迁移和当前工作树构建均未完成。当前不得宣称已经具备商业闭源发布条件，也不得将计划中的闭源政策追溯应用到历史版本。公开 Wiki 只保留产品、安装、配置和支持信息，不宣传历史 remote、内部坐标、私有 artifact 或实现细节。

锻造、物品与经济 mutation 必须执行权限、owner、revision、requestId、库存和事务校验。客户端或 Console 不能自报物品、材料、成功率或结算结果。

## 命令状态

Canonical command 为 `/oo reforge`，`/oo` 的唯一 owner 是 OOCore。当前 OOReforge `1.3.0` 通过 legacy `OOModule.execute` 单路径 available；OOCore `1.6.1` command v2 consumer migration 尚未完成，不能标记 implemented，也不得双注册。

## OOConsole（planned / blocked）

OOReforge 的可选 OOConsole 接入仍等待当前工作树的完整构建和生命周期验收，因此继续 disabled，不能标 implemented。公开页不披露其内部接入实现或私有测试细节。

## 配置 / Configuration

用户可编辑资源仅包括：

- `config.yml`：插件主配置。
- `lang/en_US.yml`：英文消息与显示文本。
- `lang/zh_CN.yml`：简体中文消息与显示文本。

文件已包含中英用途、重载/重启、风险、UTF-8、placeholder、Provider 状态和联系说明。默认显示文本由服主维护，不会随着 `language` 自动翻译；切换语言前应检查自定义文本和 placeholder 兼容性。

## 验证状态

当前工作树尚未完成完整构建门禁，不能引用旧 tests 或旧 JAR SHA 作为现状证据；真实 Paper A/B 验收仍 blocked。

## 联系 / Contact

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777
