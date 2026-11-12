# 安全模型

- owner 必须绑定已认证的 plugin/module identity，DTO 不得自报 owner。
- DTO immutable、versioned、bounded、redacted；mutation 使用 RBAC、schema、revision、requestId、replay 防护和 audit。
- 客户端只提交 intent；任务、等级、装备、奖励、货币等状态由权威 provider 二次校验并事务处理。
- Contribution 禁止任意 HTML/JavaScript、SQL、shell、console command、URL 或本地路径。
- disable/reload/player quit/server switch 必须幂等撤销并释放 session、subscription、worker、frame/audio/cache 等资源。
- 单个 contribution/provider 缺失只降级对应功能，不得拖垮其他工作区。

仓库级漏洞报告规则位于代码仓库根目录的 `SECURITY.md`。
