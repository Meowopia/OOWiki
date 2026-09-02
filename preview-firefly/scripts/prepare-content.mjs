import { base } from '../site-settings.mjs';
import { readFile, writeFile, mkdir, cp, readdir } from 'node:fs/promises';
import { resolve, relative, dirname } from 'node:path';
import { load } from 'cheerio';

// Transitional renderer: Markdown and anchors still come from the strict MkDocs build.
// No plugin repository, private files, or third-party theme images are copied.
const source = resolve('../site');
const pages = [];
async function visit(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = resolve(dir, entry.name);
    if (entry.isDirectory()) await visit(file);
    else if (entry.name === 'index.html') {
      const $ = load(await readFile(file, 'utf8'));
      const article = $('article.md-content__inner');
      if (!article.length) continue;
      article.find('script').remove();
      article.find('.mermaid').each((_,node)=>{$(node).text($(node).text());});
      article.find('table').wrap('<div class="table-scroll" role="region" aria-label="数据表格，可横向滚动" tabindex="0"></div>');
      const slug = relative(source, dirname(file)).replaceAll('\\', '/');
      article.find('.headerlink').attr('data-pagefind-ignore', '');
      article.find('img[src]').each((_, image) => {
        const src = $(image).attr('src');
        if (!/^(https?:|data:|\/)/.test(src)) {
          $(image).attr('src', new URL(src, 'https://preview.invalid'+base + (slug ? slug + '/' : '')).pathname);
        }
      });
      const headings = article.find('h2,h3').toArray().map(node => ({
        id: $(node).attr('id'), text: $(node).clone().find('.headerlink').remove().end().text(), level: node.tagName
      })).filter(h => h.id);
      const title = article.find('h1').first().clone();
      title.find('.headerlink').remove();
      pages.push({slug, title: title.text().trim() || 'OO 系列插件', html: article.html(), headings});
    }
  }
}
await visit(source);
if (!pages.some(p => p.slug === 'plugins/oocore')) throw new Error('Run the strict MkDocs build first');
await mkdir('.generated', {recursive:true});
await mkdir('public', {recursive:true});
await writeFile('.generated/pages.json', JSON.stringify(pages));
await cp('../docs/assets', 'public/assets', {recursive:true});
await cp('../docs/javascripts/plugin-hub.js', 'public/plugin-hub.js');
await writeFile('public/CNAME','wiki.meowopia.com\n');
await writeFile('public/robots.txt','User-agent: *\nAllow: /\n');
console.log(`Prepared ${pages.length} document routes; existing anchors retained.`);
