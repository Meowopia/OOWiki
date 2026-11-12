# 集成边界

Provider 与 Contribution 接入统一遵循 [OO 生态愿景](vision.md#extension-fallback)：权威状态留在领域 Provider，缺失可选能力只降级对应功能，不自建 bridge 或复制实现。

## 命令

OOCore `1.7.1` 是当前稳定基线和 `/oo` 的唯一 root owner；`1.7.0` 已 withdrawn。OOCore 是运行时硬依赖，但兼容性按 ABI、handshake 与 Capability 协商，不按精确 SemVer 判断。

## 表现层

OOEngine `1.1.6` 是当前 stable binary release；Folia live acceptance 尚未完成，列为已知限制。

OOEditor（`:ooeditor`）和 OOHUD（`:oohud`）是 OOEngine 仓库子项目，不是独立插件。已归档的 OOConsole 曾计划复用 OOEditor，但该迁移未完成；HUD 贡献属于 OOEngine 自身规划，不代表 Console 能力已被合并。

## Console

OOConsole 已归档并停止开发和维护；`0.1.6` 是保留文档的历史正式版本，曾包含 CommandV2、HTTP login/logout 与安全修复。归档不表示这些历史功能从已有安装中消失，也不代表 OOEngine 已自动接管其管理能力。
