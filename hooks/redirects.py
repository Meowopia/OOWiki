"""Static redirects for the project URL migration; shared with the Astro preview."""
import html
import json
from pathlib import Path
from urllib.parse import urljoin


def on_post_build(config):
    redirects = json.loads(Path(__file__).with_name('redirects.json').read_text(encoding='utf-8'))
    for old, new in redirects.items():
        target = urljoin(config['site_url'], new)
        output = Path(config['site_dir']) / old / 'index.html'
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(
            '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">'
            '<title>Meowopia Wiki · 页面已迁移</title><meta name="robots" content="noindex">'
            f'<link rel="canonical" href="{html.escape(target, quote=True)}">'
            f'<meta http-equiv="refresh" content="0;url={html.escape(target, quote=True)}">'
            '</head><body><script>location.replace('
            + json.dumps(target) + ' + location.search + location.hash);</script>'
            f'<a href="{html.escape(target, quote=True)}">前往新的文档地址</a></body></html>',
            encoding='utf-8',
        )
