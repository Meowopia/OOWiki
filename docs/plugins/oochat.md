# OOChat

OOChat 是 OOEngine 的聊天与社交业务插件。OOEngine 负责显示，OOChat 负责服务端权威业务。

## 能力

- global、world、proximity、guild、party、town、region、plot、custom 等频道；
- 私聊、好友、群聊、屏蔽、免打扰；
- 历史、回执、撤回、保留策略；
- 邮件、物品/货币附件与领取事务；
- cooldown、filter、moderation、audit；
- 跨服幂等、outbox 与第三方 Bridge；
- 经典聊天和冒险侧栏等 UI profile。

## 依赖边界

- 硬依赖：OOCore、OOEngine。
- LuckPerms 为权限与 metadata 的推荐 soft dependency。
- OOChat 不直接访问 NMS/CraftBukkit，不实现客户端 Screen/HUD。

## 安全约束

客户端不能决定收件人、权限、冷却、过滤或撤回结果。命令窗口也不会绕过目标命令自身权限。

## 文档索引

详细设计已存在于 `OOChat/docs/`：`STORAGE.md`、`MAIL.md`、`HISTORY_AND_RECALL.md`、`MODERATION_AND_BLOCKING.md`、`FILTERS_AND_NOTIFICATIONS.md`、`PERMISSIONS.md` 与 `OOENGINE_INTEGRATION.md`。
