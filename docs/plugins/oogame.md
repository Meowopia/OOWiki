# OOGame

OOGame 是 OOEngine 的小游戏大厅与 Provider 聚合插件。

## 能力

- `OoGameProvider` 稳定玩法桥；
- 游戏目录、分类、标签和搜索；
- 收藏、最近游玩和玩家库；
- 加入、排队、旁观、退出状态协调；
- 房间目录、排行榜、最近战绩、活动与资源状态；
- 短期、接收者绑定、单次消费的邀请 token；
- `oogame:*` 网络 namespace；
- OOEngine bindings/actions 与大厅面板。

## 内置玩法

`provider.doudizhu` 实现标准三人斗地主领域规则。视觉、名称和文案为 OOGame 自有内容。

## 依赖和故障隔离

OOCore 与 OOEngine 是硬依赖。小游戏 Provider 是可选项，单个 Provider 缺失或异常不会拖垮其他游戏。OOChat Bridge 缺失时社交邀请和邮箱奖励降级，但游戏本身继续运行。
