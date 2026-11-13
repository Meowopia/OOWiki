# Meowopia · 像素黑猫图标（历史素材）

此方案已停用。当前 Wiki 采用 [Cat Crests 像素猫头徽章](../pixelcrest-v1/README.md)。

采用经选择的 Pixel Companions 方向：黑猫、蓝眼、蓝项圈、单金铃与卷尾，共九款独立透明图标。产品通过道具、动作和表情区分。

| 产品 | 道具 |
| --- | --- |
| OOCore | 青色核心方块 |
| OOEngine | 紫色齿轮 |
| OOConsole | 蓝色管理面板 |
| OOGame | 橙色手柄 |
| OOMusic | 洋红耳机与音符 |
| OOBrowser | 青绿地球 |
| OOChat | 绿色对话框 |
| OOReforge | 铜红锤与铁砧 |
| OOVIP | 金色皇冠与勋章 |

每个产品目录包含独立生成的 `source.png`，以及使用最近邻缩放导出的 `logo-32.png`、`logo-64.png`、`logo-128.png`、`logo-256.png`、`logo-1024.png`。

网页列表使用 128px 文件显示为 64px，产品页使用 256px 文件显示为 160px。所有 PNG 保留透明通道；使用 `object-fit: contain`，避免拉伸或裁掉尾巴和道具。

在 Windows PowerShell 运行 `scripts/export-pixel-icons.ps1` 可重建尺寸版本与 `assets.json` 哈希清单。原版黑猫资源保留在 `blackcat-v1/`，供历史引用使用。

图标只表示产品身份；功能、版本与发布状态以产品文档为准。
