# 命令与权限

## OOCore

| 命令/节点 | 说明 |
|---|---|
| `/oo c` | Core 入口 |
| `/oo c admin` | Core 管理入口 |
| `oocore.command` | 默认允许 |
| `oocore.admin` | 默认 OP |

## OOEngine

普通入口为 `ooengine.ui.command`。管理节点前缀为 `ooengine.ui.admin.*`，包括：

```text
menu open close reload editor list info debug
version refresh set web help
```

完整管理通配默认仅 OP。生产服建议使用 LuckPerms 按职责拆分，不要给普通维护者整个 admin wildcard。

## OOMusic

见 [OOMusic](plugins/oomusic.md)。

## OOChat

OOChat 权限使用 `owopia.oo.*` namespace，主要分为：

- 基础：`use`、`settings`、profile、theme；
- 频道：`channel.<id>.view/send/join/manage`；
- 社交：friend、block、direct、group；
- 邮件：mail、attachment 与 admin mail；
- 审核：moderation、audit、spy；
- 编辑器：editor.open/preview/publish/rollback；
- 危险能力：console command、owner delete、owner identity、bypass。

危险节点不应包含在普通管理通配中。完整节点表见 `OOChat/docs/PERMISSIONS.md`。

### LuckPerms metadata

```text
owopia-oo-friend-limit=200
owopia-oo-group-limit=20
owopia-oo-message-length=512
```

支持 `server`、`world`、`owopia-channel`、guild/town/region/plot 等服务端权威 context。
