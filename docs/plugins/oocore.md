# OOCore

OOCore 是 OO 系列必须安装的 Paper/Folia 公共运行时，不是可删除的普通前置声明。

## 职责

- 稳定模块 ABI 与 capability negotiation；
- 统一 `/oo` 命令路由；
- Paper/Folia 调度抽象；
- 模块隔离的持久化；
- Minecraft 版本相关兼容 facade；
- 平台服务与生命周期管理。

## 命令

```text
/oo c
/oo c admin
/oo <module> ...
```

## 权限

| 节点 | 默认 | 用途 |
|---|---|---|
| `oocore.command` | true | 使用统一命令 |
| `oocore.admin` | op | OOCore 管理 |

## 构建

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\build-oocore.ps1
```

发布文件位于 `build/release/`。构建要求 Java 25。
