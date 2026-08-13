# 开发者接入

## 构建

统一使用 Java 25：

```powershell
$env:JAVA_HOME='D:\Program Files\Microsoft\Java\jdk-25.0.4.7-hotspot'
```

```powershell
# OOCore
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\build-oocore.ps1

# OOEngine
.\gradlew.bat test release --offline --console=plain

# OOChat / OOMusic
..\OOCore\gradlew.bat -p . clean test

# OOGame
gradle clean test jar

# OOEngine-Client
.\gradlew.bat clean check distributionChecksums
```

## 新业务模块

1. 只依赖 OOCore stable API，不 bundle Core implementation。
2. 启动时声明必需 Capability，handshake 成功后再注册命令和 channel。
3. 通过 OOEngine owner-scoped handle 注册 panel、binding 和 action。
4. 禁用时按注册逆序 revoke handle。
5. 客户端 action 使用 bounded DTO、request id、revision 和 replay protection。
6. 不在模块内加入 NMS、CraftBukkit、版本探测或私有兼容 shim。

## Provider 设计

Provider 必须可独立失败。外部响应先转换为 bounded internal DTO；凭据和原始响应不得越过服务端边界。涉及奖励、货币、邮件或游戏结果时，最终提交必须由服务端事务和幂等键保护。

## 文档维护

功能变更应同时更新：插件 README、模块 `docs/`、默认配置注释和本 Wiki。兼容矩阵与实际 plugin descriptor 不一致时，以构建产物和 acceptance gate 为准并修正文档。
