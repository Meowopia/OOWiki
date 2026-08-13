# 插件中心

<section class="plugin-hub-hero">
  <div>
    <span class="plugin-hub-kicker">OO PLUGIN ECOSYSTEM</span>
    <h1>为你的服务器选择 OO 插件</h1>
    <p>统一查看产品定位、工程边界和当前证据状态。所有卡牌采用相同尺寸，implemented、planned 与 blocked 不混写。</p>
  </div>
  <div class="plugin-hub-count"><strong>10</strong><span>个产品条目</span></div>
</section>

<div class="plugin-hub-toolbar" data-plugin-toolbar>
  <label class="plugin-hub-search">
    <span aria-hidden="true">⌕</span>
    <input type="search" placeholder="搜索插件、能力或分类…" aria-label="搜索插件" data-plugin-search>
  </label>
  <div class="plugin-hub-filters" aria-label="插件分类筛选">
    <button type="button" class="is-active" data-plugin-filter="all">全部</button>
    <button type="button" data-plugin-filter="core">基础 Core</button>
    <button type="button" data-plugin-filter="extensions">附属 Extensions</button>
    <button type="button" data-plugin-filter="oorpg">OORPG</button>
  </div>
</div>

<div class="plugin-card-grid" data-plugin-grid>
  <a class="plugin-card" href="oocore/" data-category="core" data-search="oocore core 核心 生命周期 命令 capability">
    <div class="plugin-card-top"><img src="../assets/oocore-logo-1024.png" alt="OOCore Logo"><span class="plugin-state state-implemented">Stable 1.7.1</span></div>
    <div class="plugin-card-body"><span class="plugin-category">基础 · Core</span><h2>OOCore</h2><p>OO 生态的平台前置，统一生命周期、命令、Capability 与可信 owner-service。</p></div>
    <div class="plugin-card-footer"><span>平台核心</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="ooengine/" data-category="core" data-search="ooengine core window ui renderplan menu video editor hud">
    <div class="plugin-card-top"><span class="plugin-lettermark mark-violet">OE</span><span class="plugin-state state-implemented">Stable 1.1.6</span></div>
    <div class="plugin-card-body"><span class="plugin-category">基础 · Core</span><h2>OOEngine</h2><p>窗口、RenderPlan、资源、协议与客户端渲染引擎；新 Window facade 仍有独立 blocker。</p></div>
    <div class="plugin-card-footer"><span>表现引擎</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="ooconsole/" data-category="core" data-search="ooconsole core console editor workspace owner service admin">
    <div class="plugin-card-top"><span class="plugin-lettermark mark-indigo">OC</span><span class="plugin-state state-implemented">Stable 0.1.6</span></div>
    <div class="plugin-card-body"><span class="plugin-category">基础 · Core</span><h2>OOConsole</h2><p>统一管理与可视化编辑入口；owner-service 已验收，产品工作区仍逐项建设。</p></div>
    <div class="plugin-card-footer"><span>管理平台</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="oogame/" data-category="extensions" data-search="oogame extensions game lobby 斗地主 房间 匹配">
    <div class="plugin-card-top"><span class="plugin-lettermark mark-orange">OG</span><span class="plugin-state state-planned">Paused · Unreleased</span></div>
    <div class="plugin-card-body"><span class="plugin-category">附属 · Extensions</span><h2>OOGame</h2><p>小游戏大厅、Provider 聚合、房间、活动与完整回合状态机。</p></div>
    <div class="plugin-card-footer"><span>游戏大厅</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="oomusic/" data-category="extensions" data-search="oomusic extensions music lyrics timeline 歌词 音乐 播放">
    <div class="plugin-card-top"><span class="plugin-lettermark mark-pink">OM</span><span class="plugin-state state-planned">Paused · Unreleased</span></div>
    <div class="plugin-card-body"><span class="plugin-category">附属 · Extensions</span><h2>OOMusic</h2><p>曲库、队列、同步听与 bounded LyricsDocument / LyricsTimeline 服务。</p></div>
    <div class="plugin-card-footer"><span>音乐服务</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="oobrowser/" data-category="extensions" data-search="oobrowser extensions browser chromium mcef dns pin web">
    <div class="plugin-card-top"><span class="plugin-lettermark mark-cyan">OB</span><span class="plugin-state state-planned">Paused · Unreleased</span></div>
    <div class="plugin-card-body"><span class="plugin-category">附属 · Extensions</span><h2>OOBrowser</h2><p>受策略控制的 Web surface 与 DNS pin transport；live Chromium connector 仍 planned。</p></div>
    <div class="plugin-card-footer"><span>浏览器表面</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="oochat/" data-category="extensions" data-search="oochat extensions chat social friend mail 聊天 好友 邮件">
    <div class="plugin-card-top"><span class="plugin-lettermark mark-green">OH</span><span class="plugin-state state-implemented">Stable 0.1.0</span></div>
    <div class="plugin-card-body"><span class="plugin-category">附属 · Extensions</span><h2>OOChat</h2><p>聊天、好友、会话与邮件系统；Console adapter 尚未完成独立验收。</p></div>
    <div class="plugin-card-footer"><span>社交系统</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="../oorpg/ooquest/" data-category="oorpg" data-search="ooquest oorpg quest task betonquest typewriter 任务 剧情">
    <div class="plugin-card-top"><span class="plugin-lettermark mark-blue">OQ</span><span class="plugin-state state-planned">Planned</span></div>
    <div class="plugin-card-body"><span class="plugin-category">OORPG</span><h2>OOQuest</h2><p>第三方任务 Provider 的统一只读与 mutation 协调契约，工程归属 OOEngine。</p></div>
    <div class="plugin-card-footer"><span>任务接入</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="../oorpg/oovip/" data-category="oorpg" data-search="oovip oorpg vip member membership 权益 会员">
    <div class="plugin-card-top"><span class="plugin-lettermark mark-gold">OV</span><span class="plugin-state state-planned">Paused · Unreleased</span></div>
    <div class="plugin-card-body"><span class="plugin-category">OORPG</span><h2>OOVIP</h2><p>会员生命周期与权益编排层，中文 catalog 已完成本地验证。</p></div>
    <div class="plugin-card-footer"><span>会员权益</span><b>查看文档 →</b></div>
  </a>
  <a class="plugin-card" href="../oorpg/ooreforge/" data-category="oorpg" data-search="ooreforge oorpg reforge equipment forge 装备 锻造 品质">
    <div class="plugin-card-top"><span class="plugin-lettermark mark-red">OR</span><span class="plugin-state state-planned">Paused · Unreleased</span></div>
    <div class="plugin-card-body"><span class="plugin-category">OORPG</span><h2>OOReforge</h2><p>装备、锻造、品质与配方领域；Console adapter 等待当前构建证据。</p></div>
    <div class="plugin-card-footer"><span>装备锻造</span><b>查看文档 →</b></div>
  </a>
</div>

<p class="plugin-hub-empty" data-plugin-empty hidden>没有找到匹配的插件。</p>

<script src="../javascripts/plugin-hub.js"></script>
