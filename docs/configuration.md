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

所有模块可单独关闭。`features.enabled: false` 时仅保留基础原生面板与协议。

## Web allowlist

```yaml
web-view:
  enabled: true
  allowed-origins:
    - "https://map.example.com"
```

origin 必须精确包含 scheme、host 和非默认 port。空列表表示全部拒绝。

## Web Editor

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

## 地图

启用一个 Provider，并同时把地图 origin 加入 `web-view.allowed-origins`。支持 BlueMap、dynmap、squaremap、Pl3xMap；第一个已安装且启用的 Provider 生效。

## 持久化

```yaml
persistence:
  enabled: true
  driver: sqlite               # sqlite/mysql/mariadb/postgresql
  scope: local                 # local/network
  sqlite-file: "storage/ooengine.db"
  password: "${ENV:OOENGINE_DB_PASSWORD}"
```

生产环境不要把外部数据库明文密码写入 YAML，使用 `OOENGINE_DB_PASSWORD` 环境变量。

## 资源桥

`resource-bridge.sources` 可接目录或 ZIP，例如 Nexo、CraftEngine、ItemsAdder 或自定义插件输出。路径应位于管理员可控位置。

## 面板 YAML

面板存放于 `plugins/OOEngine/panels/`。修改后使用管理 reload/refresh 能力；上线前先在测试服校验 widget id、action、binding 和 revision 行为。
