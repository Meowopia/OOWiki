# Firefly-derived Wiki preview

Local preview only. The production MkDocs workflow is unchanged.

This migration uses Astro and the MIT-licensed Firefly theme tokens, with a custom
documentation layout instead of personal profile, archive, and tag widgets.
It is not the complete upstream Firefly application. Upstream: CuteLeaf/Firefly,
revision `0f2fab602407eb577cdcca066049fe947563ae0f`. The original MIT notice is in
`vendor/FIREFLY-LICENSE`; attribution includes CuteLeaf and saicaca/Fuwari.
No upstream demo artwork or character assets are included.

## Preview

1. Run the existing strict MkDocs build from the repository root.
2. In this directory run `npm ci`, then `npm run build` and `npm run preview`.
3. Open the printed local address at `/`. The default build matches
   `https://wiki.meowopia.com/`. Set `OOWIKI_BASE=/OOWiki/` consistently for
   content preparation, build and verification only when testing the old project path.

Always verify this package's name and use an absolute `--prefix` with npm.
Set process-level `npm_config_cache` to your designated development cache;
do not run package installation from an ancestor directory.

The transitional content adapter uses the validated HTML from `site/`, retaining
document routes and heading IDs. A later native Markdown renderer must match
those routes, MkDocs admonitions, tabs, Mermaid and anchors before replacing it.

## Not yet accepted

Full Firefly component integration, native Markdown conversion, tab interactions
(the current content has no tabbed sets), comprehensive mobile acceptance,
and production deployment remain pending. Do not replace Pages with this preview
until these gates pass. Production rollback remains the unchanged MkDocs build.

## Preview checks

- 26 document routes plus 404, and 660 local fragment references checked by `node scripts/verify.mjs`.
- Document titles exclude permalink text; actual heading IDs remain unchanged.
- Exact permission/command tokens in tables do not wrap mid-token. Tables have
  focusable local horizontal scrolling; the page itself does not scroll sideways.
- OOCore and architecture inspected at 390 × 844; body width stays within viewport.
- Browser search, Escape dismissal and focus restoration to the trigger verified.
- All three architecture Mermaid diagrams render SVG with strict security mode.
- Native/system sans-serif font stack is shared by text and search controls.
- These checks cover the preview only, not a production migration acceptance.

Latest preview adds root-domain paths, canonical URLs, CNAME, a 404 recovery page,
skip-to-content, active heading tracking, compact mobile navigation and code-copy
buttons. Nine homepage cards measured 350 px each on desktop; at 390 px viewport
the Standalone filter shows only OOVIP/OOReforge and no whole-page horizontal overflow.
Native Markdown conversion and tabbed-document fixtures are still pending.
