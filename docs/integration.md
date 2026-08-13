# 集成边界

## 命令

OOCore `1.7.1` 是当前稳定基线和 `/oo` 的唯一 root owner；`1.7.0` 已 withdrawn。OOCore 是运行时硬依赖，但兼容性按 ABI、handshake 与 Capability 协商，不按精确 SemVer 判断。

## 表现层

OOEngine `1.1.6` 是当前 stable binary release；Folia live acceptance 尚未完成，列为已知限制。

OOEditor（`:ooeditor`）和 OOHUD（`:oohud`）是 OOEngine 仓库子项目，不是独立插件。OOConsole 复用 OOEditor；HUD 贡献的规划名称仅为 `ooengine.hud-contribution.v1`。

## Console

OOConsole `0.1.6` 是当前 stable binary release，本版包含 CommandV2、HTTP login/logout 与安全修复。
