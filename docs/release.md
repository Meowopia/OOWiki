# 发布流程

<a id="branch-model"></a>
## 统一分支模型

OO 插件与客户端项目使用同一套渐进式发布流程，但分支名称只表示开发阶段，不能代替验收结论：

- **已有稳定版的项目**：日常开发与修复进入 `Beta`。完成测试、安全、兼容性以及所需平台验收后，才合并进 `Stable`，并按正式发布规则创建一次对应的稳定版 Release。合并完成后保留 `Beta`，继续承接下一轮开发。
- **尚无首次稳定版的项目**：继续使用 `Alpha`。只有首次稳定门禁全部通过后，才能建立或合入 `Stable`；之后的常规开发再转入 `Beta`。不得仅因分支改名就把 Alpha 或候选构建描述为稳定版。
- **前瞻兼容工作**：`Dev` 只用于未来 Minecraft、Java、平台或渲染兼容探索。成熟并完成对应验收后先进入当前开发线（`Alpha` 或 `Beta`），不得绕过开发线直接进入 `Stable`。

该流程不是长期维护两条并行的 Stable 开发线，也不要求收到政策更新后立即批量合并、删除分支或发布。冻结项目只同步必要文档，归档项目保持归档；已有 Release 内容和资产不覆盖。

OOWiki 是文档站，不套用插件二进制的 `Alpha` / `Beta` / `Stable` 分支模型。Wiki 继续通过文档审查、严格构建和 Pages 部署流程交付。

## 公开稳定版门禁

每个 OO 产品只有同时满足以下公开条件，Wiki 才会标记为 **stable / released**：

- 功能范围、支持平台与已知限制明确；
- 产品测试、生命周期、线程与 Paper/Folia 兼容门禁通过；
- 用户配置具备中英说明和统一支持联系方式；
- 闭源许可证、第三方 NOTICE、升级与回滚说明完成；
- 正式二进制经过维护者核验，并提供公开下载页和校验值；
- 完成声明的平台启动矩阵，或明确列出尚未验收的平台。

本 Wiki 只公开产品状态、安装、配置、支持、公开 API 用法、正式下载页和正式二进制校验值。非公开工程材料、开发期验证数据与敏感实现均不得进入公开页面。

1. 冻结本次文档范围，确认未覆盖共享未提交改动。
2. 核验版本、公开 Capability、命令、测试结论与正式二进制 SHA-256。
3. 运行 UTF-8、断链、旧命名扫描和 `python -m mkdocs build --clean --strict`。
4. 审查 diff，明确 `implemented`、`published`、`code-prepared`、`planned`、`blocked`。
5. 由维护者批准后再提交、推送和发布 Pages；严格构建不会自动授权发布。

禁止伪造 badge、release、artifact、测试或提交身份。本仓库不从文档 CI 自动创建 GitHub Release。

## Release body policy

Server-plugin stable releases contain only a concise bilingual **更新日志 / Changelog** and, when required, **已知问题 / Known issues**. They do not include Minecraft, Paper/Folia, or Java test-environment sections and do not include build-validation logs.

The only exception is the **OOEngine Client Mod**. Its release must additionally state prerequisite plugins, compatible OOConsole versions, and applicable/tested Minecraft and Java environments.
