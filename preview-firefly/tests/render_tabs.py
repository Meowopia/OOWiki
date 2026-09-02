"""Use the same Markdown tab extension as production; output stays untracked."""
from pathlib import Path
import markdown

root = Path(__file__).resolve().parents[1]
html = markdown.markdown(
    (root / 'tests/tabs.md').read_text(encoding='utf-8'),
    extensions=['pymdownx.tabbed'],
    extension_configs={'pymdownx.tabbed': {'alternate_style': True}},
)
(root / '.generated').mkdir(exist_ok=True)
(root / '.generated/tabs.html').write_text(html, encoding='utf-8')
