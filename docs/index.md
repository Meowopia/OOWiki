---
hide:
  - navigation
  - toc
  - footer
---

<div class="wiki-home">
<section class="wiki-hero">
<div class="wiki-hero-copy"><h1>让想法，在 <em>OO</em> 中实现。</h1><p>Meowopia 为 Minecraft 服务器提供可组合的插件、框架与创作工具。</p><div class="wiki-actions"><a class="wiki-primary" href="installation/">开始使用</a><a class="wiki-secondary" href="plugins/">浏览插件</a></div></div>
<img class="wiki-mascot" src="assets/branding/blackcat-v1/oocore/logo-1024.png" width="480" height="480" alt="蓝眼黑猫抱着发光方块" fetchpriority="high">
</section>
<button class="wiki-search-launch" type="button" data-open-doc-search><span><strong>需要帮助？搜索文档</strong><small>查找安装、配置、命令与 API 等内容</small></span><kbd>Ctrl K</kbd></button>
<section class="wiki-directory"><h2>找到适合你的插件</h2><div class="plugin-hub-filters" aria-label="插件分类筛选"><button type="button" data-plugin-filter="all" class="is-active">全部</button><button type="button" data-plugin-filter="core" class="">基础（Core）</button><button type="button" data-plugin-filter="extensions" class="">附属（Extensions）</button><button type="button" data-plugin-filter="independent" class="">独立（Standalone）</button></div><div class="plugin-card-grid" data-plugin-grid>
  <a class="plugin-card" href="plugins/oocore/" data-category="core" data-search="oocore 核心 core 生命周期 命令 capability">
    <div class="plugin-card-top"><img src="assets/branding/blackcat-v1/oocore/logo-256.webp" alt="OOCore 黑猫品牌图标" width="64" height="64" loading="lazy" decoding="async"><span class="plugin-state state-implemented">Stable 1.7.3</span></div>
    <div class="plugin-card-body"><span class="plugin-category">基础（Core）</span><h2>OOCore</h2><p>OO 生态的平台前置，统一生命周期、命令、Capability 与可信 owner-service。</p></div>
    <div class="plugin-card-footer"><span>平台核心</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="plugins/ooengine/" data-category="core" data-search="ooengine 核心 core window ui renderplan menu video editor hud">
    <div class="plugin-card-top"><img src="assets/branding/blackcat-v1/ooengine/logo-256.webp" alt="OOEngine 黑猫品牌图标" width="64" height="64" loading="lazy" decoding="async"><span class="plugin-state state-implemented">Stable 1.1.6</span></div>
    <div class="plugin-card-body"><span class="plugin-category">基础（Core）</span><h2>OOEngine</h2><p>提供 owner-bound Window、RenderPlan、资源、协议与客户端渲染能力。</p></div>
    <div class="plugin-card-footer"><span>表现引擎</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="plugins/ooconsole/" data-category="core" data-search="ooconsole 核心 core console editor workspace owner service admin">
    <div class="plugin-card-top"><img src="assets/branding/blackcat-v1/ooconsole/logo-256.webp" alt="OOConsole 黑猫品牌图标" width="64" height="64" loading="lazy" decoding="async"><span class="plugin-state state-implemented">Stable 0.1.6</span></div>
    <div class="plugin-card-body"><span class="plugin-category">基础（Core）</span><h2>OOConsole</h2><p>统一管理与可视化编辑入口；owner-service 已验收，产品工作区仍逐项建设。</p></div>
    <div class="plugin-card-footer"><span>管理平台</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="plugins/oogame/" data-category="extensions" data-search="oogame extensions game lobby 斗地主 房间 匹配">
    <div class="plugin-card-top"><img src="assets/branding/blackcat-v1/oogame/logo-256.webp" alt="OOGame 黑猫品牌图标" width="64" height="64" loading="lazy" decoding="async"><span class="plugin-state state-planned">Paused · Unreleased</span></div>
    <div class="plugin-card-body"><span class="plugin-category">附属（Extensions）</span><h2>OOGame</h2><p>小游戏大厅、Provider 聚合、房间、活动与完整回合状态机。</p></div>
    <div class="plugin-card-footer"><span>游戏大厅</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="plugins/oomusic/" data-category="extensions" data-search="oomusic extensions music lyrics timeline 歌词 音乐 播放">
    <div class="plugin-card-top"><img src="assets/branding/blackcat-v1/oomusic/logo-256.webp" alt="OOMusic 黑猫品牌图标" width="64" height="64" loading="lazy" decoding="async"><span class="plugin-state state-planned">Paused · Unreleased</span></div>
    <div class="plugin-card-body"><span class="plugin-category">附属（Extensions）</span><h2>OOMusic</h2><p>曲库、队列、同步听与 bounded LyricsDocument / LyricsTimeline 服务。</p></div>
    <div class="plugin-card-footer"><span>音乐服务</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="plugins/oobrowser/" data-category="extensions" data-search="oobrowser extensions browser chromium mcef dns pin web">
    <div class="plugin-card-top"><img src="assets/branding/blackcat-v1/oobrowser/logo-256.webp" alt="OOBrowser 黑猫品牌图标" width="64" height="64" loading="lazy" decoding="async"><span class="plugin-state state-planned">Paused · Unreleased</span></div>
    <div class="plugin-card-body"><span class="plugin-category">附属（Extensions）</span><h2>OOBrowser</h2><p>受策略控制的 Web surface 与 DNS pin transport；浏览器运行时仍处于未发布阶段。</p></div>
    <div class="plugin-card-footer"><span>浏览器表面</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="plugins/oochat/" data-category="extensions" data-search="oochat extensions chat social friend mail 聊天 好友 邮件">
    <div class="plugin-card-top"><img src="assets/branding/blackcat-v1/oochat/logo-256.webp" alt="OOChat 黑猫品牌图标" width="64" height="64" loading="lazy" decoding="async"><span class="plugin-state state-implemented">Stable 0.1.0</span></div>
    <div class="plugin-card-body"><span class="plugin-category">附属（Extensions）</span><h2>OOChat</h2><p>0.1.0 提供基础命令入口；完整聊天、好友与邮件功能尚未正式发布，不包含 Window/UI。</p></div>
    <div class="plugin-card-footer"><span>社交系统</span><b>查看文档 →</b></div>
  </a>

  <a class="plugin-card" href="plugins/oovip/" data-category="independent" data-search="oovip independent vip membership 会员 权益">
    <div class="plugin-card-top"><img src="assets/branding/blackcat-v1/oovip/logo-256.webp" alt="OOVIP 黑猫品牌图标" width="64" height="64" loading="lazy" decoding="async"><span class="plugin-state state-planned">Paused · Unreleased</span></div>
    <div class="plugin-card-body"><span class="plugin-category">独立（Standalone）</span><h2>OOVIP</h2><p>会员生命周期与权益编排插件，当前暂停且未发布。</p></div>
    <div class="plugin-card-footer"><span>会员权益</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="plugins/ooreforge/" data-category="independent" data-search="ooreforge independent reforge equipment 装备 锻造">
    <div class="plugin-card-top"><img src="assets/branding/blackcat-v1/ooreforge/logo-256.webp" alt="OOReforge 黑猫品牌图标" width="64" height="64" loading="lazy" decoding="async"><span class="plugin-state state-planned">Paused · Unreleased</span></div>
    <div class="plugin-card-body"><span class="plugin-category">独立（Standalone）</span><h2>OOReforge</h2><p>装备、锻造、品质与配方插件，当前暂停且未发布。</p></div>
    <div class="plugin-card-footer"><span>装备锻造</span><b>查看文档 →</b></div>
  </a>
</div>

<p class="plugin-hub-empty" data-plugin-empty hidden>没有找到匹配的插件。</p>

</section>
<section class="wiki-help"><h2>从安装到配置，都有迹可循。</h2><a href="installation/">安装与升级</a><a href="configuration/">配置参考</a><a href="troubleshooting/">故障排查</a><a href="development/">开发接入</a></section>
</div>
<script src="javascripts/plugin-hub.js"></script>
