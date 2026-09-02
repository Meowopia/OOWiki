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

Full Firefly component integration, native Markdown conversion, comprehensive mobile acceptance,
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
buttons. Nine plugin-directory cards measured 350 px each on desktop; at 390 px viewport
the Standalone filter shows only OOVIP/OOReforge and no whole-page horizontal overflow.
Native Markdown conversion is still pending.

## Migration test matrix

`scripts/verify.mjs` now asserts root-domain canonical URLs on every document,
the 404 return-home link, search JS/CSS paths on documents and the 404 page,
and all internal links in both `/` and explicit `/OOWiki/` modes.
Canonical URLs intentionally always identify the production root-domain page,
even when the preview is served under the legacy project path.

For tabs, run `tests/render_tabs.py` with the existing MkDocs Python dependencies,
then build with `OOWIKI_FIXTURES=1`. This renders `tests/tabs.md` using the actual
`pymdownx.tabbed` alternate-style extension and adds `/preview-tests/tabs/`.
The same client enhancement used by normal documents implements tab roles,
roving tabindex, selected state, single-panel visibility, ArrowLeft/ArrowRight,
Home and End. Without JavaScript the content remains readable.

Checks performed: fixture build and verification pass in both base modes
(27 document routes, 661 fragments); browser ArrowRight → Configuration,
End → Upgrade, Home → Installation, focus movement and one visible panel pass.
The normal build omits the fixture route; leave `OOWIKI_FIXTURES` unset for
ordinary preview or future production builds. No Pages deployment is authorized
by these tests.

## Editorial homepage

The homepage introduces the ecosystem, three audience-specific documentation paths,
a four-step getting-started journey and search/help. It has no plugin cards or filters;
only the plugin directory contains the nine-product catalog. The shared homepage
source and stylesheet also render in the existing MkDocs site.

Verified at desktop and 390px: no whole-page overflow or broken homepage images;
three reading paths, zero plugin cards on home. Strict MkDocs and Astro link checks pass.
