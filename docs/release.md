# 发布流程

1. 冻结本次文档范围，确认未覆盖共享未提交改动。
2. 核验版本、坐标、Capability、命令、测试结果与 SHA-256。
3. 运行 UTF-8、断链、旧命名扫描和 `python -m mkdocs build --clean --strict`。
4. 审查 diff，明确 `implemented`、`published`、`code-prepared`、`planned`、`blocked`。
5. 由维护者批准后再提交、推送和发布 Pages；严格构建不会自动授权发布。

禁止伪造 badge、release、artifact、测试或提交身份。本仓库不从文档 CI 自动创建 GitHub Release。
