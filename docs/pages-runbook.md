# Pages 预览与回滚运行手册

本手册只准备 OOWiki 的预览和回滚流程。**稳定版总验收前不得执行 Pages 发布。** OOWiki 是开源文档站；构建和部署链不得携带闭源插件源码、私有制品、凭据或内部路径。

## 本地 Preview

```powershell
python -m pip install --requirement requirements.lock.txt
python -m mkdocs build --clean --strict
python -m mkdocs serve --dev-addr 127.0.0.1:8000
```

检查范围：

1. 首页、插件中心、Core / Extensions / OORPG 导航；
2. 桌面和移动端等高卡牌、搜索与分类筛选；
3. 深浅色主题、Logo、404、中文排版和外链；
4. 页面状态与公开稳定版验收矩阵一致；
5. 生成的 `site/` 只包含公开 Wiki 内容。

Preview 完成后停止本地服务器；`site/` 是可再生输出，不提交到 Git。

## 发布前记录

发布操作开始前记录：

- 待发布的 `main` commit；
- 当前线上最后已知正常的 `gh-pages` commit；
- strict、UTF-8、local-link、private-detail leak scan 结果；
- 预览截图或人工验收结论；
- 回滚负责人和验证 URL。

## 发布步骤（仅总验收后）

1. 确认工作树干净，`main` 已推送且 Docs workflow 通过。
2. 再次从 lock file 安装依赖并执行 strict build。
3. 经维护者批准后更新 `gh-pages`；禁止在普通 PR workflow 自动部署。
4. 等待 GitHub Pages deployment 成功，再检查首页、插件中心和本次修改页面。

## 回滚方案

若线上出现断链、乱码、状态误报、隐私泄漏或布局故障：

1. 立即停止后续发布，记录当前 deployment 与故障 URL。
2. 使用发布前记录的最后正常 `main` commit 创建**新的回滚提交**；禁止 reset、force-push 或改写历史。
3. 对回滚树重新运行完整文档门禁和本地 preview。
4. 经维护者复核后正常推送并重新部署 Pages。
5. 验证线上恢复，再另开修复提交处理被回滚变更。

回滚不得恢复已经确认泄漏的私有内容；如涉及敏感信息，应同时按 `SECURITY.md` 处理缓存、日志和凭据轮换。
