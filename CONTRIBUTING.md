# 贡献 OOWiki

## 开源贡献边界

OOWiki 是 OO 系列中唯一继续开源的项目。欢迎提交 Wiki 文本、公开配置示例、主题、无敏感信息的架构说明和站点修复。

以下内容不得提交到本仓库：

- OOCore、OOEngine、OOConsole、OOChat、OOGame、OOMusic、OOBrowser、OOReforge、OOVIP 或其他闭源 OO 产品的内部源码；
- 私有安全实现、内部测试夹具、密钥、凭据、未公开漏洞细节；
- 私有 Maven/repository 地址、访问令牌、私有 artifact 下载或绕过访问控制的方法；
- 将公开 SDK、二进制下载或产品文档描述成产品源码开源的表述。

可公开引用的范围限于经批准的产品页、安装与配置说明、公开二进制发布记录和受控 SDK contract。历史许可证事实与第三方归属必须原样保留，不得暗示当前政策可以撤回旧版本已经授予的许可证。

1. 不改写共享历史，不覆盖他人未提交改动。
2. 核对产品仓库、版本、Capability、命令和发布证据。
3. 明确使用 `implemented`、`published`、`code-prepared`、`planned` 或 `blocked`。
4. 使用 UTF-8；技术语境中的 `extension` 不应被机械替换。
5. 运行 `python -m mkdocs build --clean --strict` 并检查相对链接。
6. Pull Request 列出变更范围、证据、验证命令和未解决阻塞。

禁止把基础（Core）、附属（Extensions）或 OORPG 分类实现为聚合插件、runtime、package、数据库或依赖层。
