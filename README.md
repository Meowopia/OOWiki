# OOWiki

OO 系列产品的统一中文文档站，使用 MkDocs Material 构建。

站点标签、favicon 与顶部导航使用的 `docs/assets/logo.svg` 是 **OO 插件系列统一 Logo**，不只代表 OOWiki；各插件页面可复用该系列标识，但不得将它误写成某个单独插件的专属 Logo。

OOCore 使用独立品牌资源 `docs/assets/oocore-logo-1024.png`；该文件是 1024×1024 RGBA 高清透明底版本。

- 在线地址：<https://meowopia.github.io/OOWiki/>
- 文档源码：[`docs/`](docs/)
- 架构状态：[架构与依赖](docs/architecture.md)
- 贡献方式：[CONTRIBUTING.md](CONTRIBUTING.md)
- 安全问题：[SECURITY.md](SECURITY.md)

## 文档状态

- `implemented`：已有实现与验证证据。
- `published`：artifact 或交付物已发布，坐标与摘要可核验。
- `code-prepared`：代码已准备，但运行时链路尚未验收。
- `planned`：设计已锁定，尚无可用实现。
- `blocked`：存在明确阻塞，不能宣称可用。

OOConsole `0.1.5` + OOCore `1.6.1` owner-service artifact-first 最终门禁已通过（`OFFICIAL_OWNER_SERVICE_ARTIFACT_015_OK`），可信 owner-service 链 available for migration。各消费者仍须独立通过 acquire/lifecycle/foreign 验收；未完成前 adapter 保持 disabled，不能批量标为 implemented。

## 产品分类

- **基础（Core）**：OOCore、OOEngine、OOConsole。
- **附属（Extensions）**：OOGame、OOMusic、OOBrowser、OOChat。
- **OORPG**：OOQuest、OOVIP、OOReforge。

分类仅用于产品、Wiki 与未来 OOConsole 导航，不创建聚合 runtime、模块、Maven group、package、数据库或额外依赖。

## 本地验证

```powershell
python -m pip install -r requirements.txt
python -m mkdocs build --clean --strict
python -m mkdocs serve
```

严格构建通过只证明文档可构建，不代表 `planned` 或 `blocked` 功能已经实现。发布 GitHub Pages 或 Release 前必须单独复核。

## 配置 / Configuration

OOWiki 没有 Minecraft 插件 runtime 配置、语言配置或 secret。仓库唯一由维护者编辑的站点配置是 `mkdocs.yml`；修改导航、主题、插件或 Markdown extension 后需要重新执行 strict build，线上变化还需经批准重新发布 Pages。不要在配置、文档或 workflow 中写入 token、密码或私钥。

OOWiki has no Minecraft plugin runtime, language, or secret configuration. Its only maintainer-edited site configuration is `mkdocs.yml`. Re-run the strict build after changing navigation, theme, plugins, or Markdown extensions; production changes also require an approved Pages deployment. Never store tokens, passwords, or private keys in configuration, docs, or workflows.

## 联系 / Contact

- 作者 / Author: zkonikishi
- QQ: 276098266
- Discord: <https://discord.gg/KPq2fZHFK>
- [ifdian](https://ifdian.net/a/zkonikishi)
- QQ群 / QQ Group: 1063369777
