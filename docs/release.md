# 发布流程

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
