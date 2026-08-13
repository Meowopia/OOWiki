# OOQuest

**分类：OORPG。工程归属：OOEngine `:ooquest`。状态：Planned。**

OOQuest 是任务插件接入 OOEngine 的统一接口层，对接 BetonQuest、Typewriter、Quests、BeautyQuests、MMO/Mythic 任务源和未来 Provider。它不实现权威任务数据库，也不复制第三方任务状态机。

计划 Capability 为 `ooengine.quest.v1`。任务窗口由 OOMenu 展示，追踪信息由 OOHUD 消费，OOConsole 只提供配置和脱敏诊断。

客户端只能提交 accept、track、untrack、submit、abandon 等 intent；完成度、奖励和最终状态由权威 Provider 校验。
