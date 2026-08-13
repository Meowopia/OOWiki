# 配置参考

## OOEngine 常用项

```yaml
open-on-join: ""                 # 设为 menu 可在加入后自动打开
open-on-join-delay-ticks: 20

features:
  enabled: true
  web-panels: true
  map-view: true
  quest-tracker: true
  web-editor: true
  media: true
```

所有模块可单独关闭。`features.enabled: false` 时仅保留最小原生窗口与协议。

## Web allowlist

```yaml
web-view:
  enabled: true
  allowed-origins:
    - "https://map.example.com"
```

origin 必须精确包含 scheme、host 和非默认 port。空列表表示全部拒绝。

## OOEngine Web Editor（implemented）

```yaml
web-editor:
  enabled: true
  bind: "127.0.0.1"
  port: 18081
  security:
    allow-remote: false
    secure-cookie: false
    session-minutes: 30
```

默认仅回环访问。公开部署必须使用 HTTPS reverse proxy，启用 secure cookie，并显式配置 allowed hosts/origins。首次设置 token 只输出到本地服务器控制台。

该配置属于现有 OOEngine Web Editor。OOConsole SDK 已发布，但 OOConsole runtime 的 HTTP/UI 配置、RBAC 和产品工作区尚未实现/发布；迁移完成前不得删除此配置或源实现，也不得把目标 runtime 配置写成可用项。

## 地图

启用一个 Provider，并同时把地图 origin 加入 `web-view.allowed-origins`。支持 BlueMap、dynmap、squaremap、Pl3xMap；第一个已安装且启用的 Provider 生效。

## 持久化

```yaml
persistence:
  enabled: true
  driver: sqlite               # sqlite/mysql/mariadb/postgresql
  scope: local                 # local/network
  sqlite-file: "storage/oo engine.db"
  password: "${ENV:OOENGINE_DB_PASSWORD}"
```

生产环境不要把外部数据库明文密码写入 YAML，使用 `OOENGINE_DB_PASSWORD` 环境变量。

## 资源桥

`resource-bridge.sources` 可接目录或 ZIP，例如 Nexo、CraftEngine、ItemsAdder 或自定义插件输出。路径应位于管理员可控位置。

## 窗口 YAML

窗口存放于 `plugins/OOEngine/panels/`。修改后使用管理 reload/refresh 能力；上线前先在测试服校验 widget id、action、binding 和 revision 行为。
