# OO 生态愿景

> **OO 为 Minecraft 生态提供可组合的框架、功能与创作工具。官方交付安全默认能力，服主、开发者和内容创作者通过配置、内容包及稳定 API 组合自己的服务器体验，让想法在 OO 生态中真正发挥。**

这份愿景约束 OO 产品的公开设计与文档表达。它不创建新的聚合插件、共享数据库、Maven group 或万能 Core，也不改变各项目独立的 identity、仓库、版本和生命周期。

## 产品职责

| 范围 | 公开职责 |
|---|---|
| 基础（Core） | OOCore 提供平台生命周期、命令、Capability 与兼容边界；OOEngine 提供窗口、RenderPlan、资源和客户端表现能力；OOConsole 提供统一管理与可视化编辑入口。 |
| 附属（Extensions） | OOGame、OOMusic、OOBrowser、OOChat 分别维护自己的业务领域，通过稳定 API 组合基础能力。 |
| 独立（Standalone） | OOVIP、OOReforge 保持独立产品边界；可选集成缺失时不得破坏其自身核心生命周期。 |
| OOEngine 子项目 | OOMenu、OOVideo、OOEditor、OOHUD、OOQuest、OOModel 属于 OOEngine 功能边界，不作为独立插件或独立 Release。 |
| OOWiki | 只发布经核验的产品状态、安装、配置、公开 API 和支持文档，不公开私有实现资料。 |

具体版本与交付状态以[公开稳定版验收矩阵](acceptance.md)和各产品页为准。

## 开发原则

### Framework first

先稳定领域契约、Capability、Provider、Contribution、生命周期和工具链，再扩展功能。禁止用万能 Core、反射桥、复制 Provider 或共享数据库绕开正式边界。

### Configuration-driven

面向服主和创作者的配置应当 versioned、schema-driven，并提供安全默认值、中英说明、validation、preview、revision、migration、rollback 和 diagnostics。普通玩法内容原则上通过配置或内容包组合，不要求重新编译插件。

### Composable

项目保持独立 identity、版本和生命周期，通过 owner-bound stable API 组合。可选 Provider、Contribution 或表现层缺失时，只降级对应能力，并提供清晰 fallback；不得拖垮无关业务。

### Hard safety

任何自定义内容都不能绕过以下内核不变量：

- owner identity 与 namespace 隔离；
- 权限、前置条件与权威 Provider 的二次校验；
- revision/CAS、幂等、事务守恒及资源预算；
- 玩家、实体、经济、任务与奖励等服务端权威状态；
- disable/reload/player quit/server switch 时的有界生命周期清理。

公开扩展点不接受任意 HTML、JavaScript、SQL、shell、console command、文件路径或未受策略约束的 URL，也不接受客户端自报的权威状态。

### Creator gameplay

创作入口由带注释的配置、OOConsole 中已经验收的工作区、正式 Provider/Contribution，以及具备 namespace、version、budget、source 和 rollback 的 content pack 组成。未实现的编辑器、工作区或运行时能力必须明确标为 Planned 或 Blocked。

### Evidence

文档严格区分 **Implemented**、**Code-prepared**、**Planned** 和 **Blocked**。SDK 发布、compile 通过、mock 或 testkit 结果不能冒充真实服务器、客户端或跨插件运行时验收。

### Originality and accessibility

不复制第三方代码或品牌素材。界面与内容应考虑多语言、GUI scale、reduced motion、色觉、键盘操作和资源预算；受限客户端或缺失可选能力时必须提供可理解的 fallback。

## 扩展与降级规则 {#extension-fallback}

1. **Provider** 是领域数据和 mutation 的权威源；聚合层只做发现、校验、编排和有界 DTO 转换。
2. **Contribution** 只声明 owner-scoped 的窗口、菜单、工作区或内容入口；不得携带任意可执行代码。
3. **配置与内容包** 必须可验证、可迁移、可回滚，并限制 namespace、大小、数量、频率和资源引用。
4. **缺失能力** 通过 Capability negotiation 明确降级，不进行反射探测、本地 bridge 或静默接管其他项目的数据。
5. **兼容性** 依据 ABI、handshake、Capability 和 schema 协商，不以产品版本字符串的完全相等作为唯一判断。

接入实现请继续阅读[开发者接入](development.md)、[配置参考](configuration.md)、[集成边界](integration.md)与[安全模型](security.md)。
