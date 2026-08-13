# OOMusic

OOMusic 是服务端协调的音乐产品，通过 OOEngine 提供面板和迷你播放器。

## 能力

- 本地或管理员授权的远程 `MusicProvider`；
- 联合搜索、稳定 `providerId + trackId` 引用；
- 队列、播放/暂停、seek、音量、上下曲、repeat、shuffle；
- 主持人控制的同步听房间与服务端时钟；
- 歌曲、歌单和同步听邀请的 OOChat Bridge；
- `oomusic:*` 网络 namespace。

## 源安全

音频源必须通过 HTTPS scheme、精确小写 hostname allowlist、MIME allowlist、字节上限、连接/读取超时和 expiry 检查。凭据、原始 Provider 响应和长期源 URL 不发送给客户端。

## 命令与权限

```text
/oomusic
```

| 节点 | 默认 |
|---|---|
| `oomusic.open` | true |
| `oomusic.listen-together.host` | true |
| `oomusic.admin.provider` | op |

实际 Paper/Folia 插件产物来自 `ooengine-adapter` 模块，并硬依赖 OOCore、OOEngine。
