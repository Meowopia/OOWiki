# 开源与仓库边界

## 当前政策

**OOWiki 是 OO 系列中唯一继续开源的项目。** 本 Wiki 的 Markdown、主题和站点资源受仓库根目录 `LICENSE` 约束，外部贡献按 [贡献指南](https://github.com/Meowopia/OOWiki/blob/main/CONTRIBUTING.md) 接收。

下列产品当前均为 **closed-source / proprietary**：

- OOCore、OOEngine、OOConsole；
- OOChat、OOGame、OOMusic、OOBrowser；
- OOReforge、OOVIP，以及未另行明确开放源码的其他 OO 产品。

## 可公开内容

Wiki 只提供或链接以下经批准公开的信息：

1. 产品介绍、安装和升级说明；
2. 用户可编辑配置、命令与权限文档；
3. 公开二进制 release 的版本、校验值和验收边界；
4. 面向消费者的受控 SDK contract、Capability 与兼容说明；
5. 不泄露内部实现的安全边界和迁移状态。

SDK 可获取、API 坐标 published 或二进制可下载，均不表示对应产品源码开源。

## 禁止公开

- 闭源产品的内部源码、反编译还原内容或私有实现细节；
- 私有 repository、artifact、CI、fixture 或调试入口的访问方式；
- 密钥、token、凭据、内部地址和可用于绕过访问控制的信息；
- 未经批准的安全实现细节或漏洞利用材料。

## 历史许可证和第三方归属

当前闭源政策不追溯撤回历史版本已经授予的许可证。历史发布应继续准确记录其当时适用的许可证；BetterModel 等第三方项目的许可证和版权仍归各自权利人所有。Wiki 不会将第三方开源许可延伸解释为 OO 产品自身开源。
