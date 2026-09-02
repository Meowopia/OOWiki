import { base, site } from '../site-settings.mjs';
import {readFile, access} from 'node:fs/promises';
import {load} from 'cheerio';
import assert from 'node:assert/strict';
const pages=JSON.parse(await readFile('.generated/pages.json','utf8'));
const targets=new Map();
for(const page of pages){
  const $=load(await readFile('dist/'+(page.slug?page.slug+'/':'')+'index.html','utf8'));
  targets.set(base+(page.slug?page.slug+'/':''),$);
}
const broken=[];
let fragments=0;
for(const page of pages){
  const file='dist/'+(page.slug?page.slug+'/':'')+'index.html';
  const html=await readFile(file,'utf8');
  assert(!html.includes('\uFFFD'),`Replacement character: ${file}`);
  const $=load(html);
  assert.equal($('title').text(),page.title+' · Meowopia');
  assert(!page.title.endsWith('¶'));
  assert.equal($('link[rel=canonical]').attr('href'),new URL(page.slug ? page.slug+'/' : '/',site).href);
  for(const suffix of ['pagefind/pagefind-ui.js','pagefind/pagefind-ui.css']){
    assert($(`[src="${base+suffix}"],[href="${base+suffix}"]`).length,`Missing search resource ${file}: ${suffix}`);
    await access('dist/'+suffix);
  }
  for(const link of $('a[href]').toArray()){
    const url=new URL($(link).attr('href'),'https://preview.invalid'+base+(page.slug?page.slug+'/':''));
    if(url.origin!=='https://preview.invalid')continue;
    if(!url.pathname.startsWith(base)){broken.push(`${page.slug}: outside base ${url.pathname}`);continue;}
    const target=targets.get(url.pathname);
    if(target){
      if(url.hash){fragments++;const id=decodeURIComponent(url.hash.slice(1));if(!target('[id]').toArray().some(el=>target(el).attr('id')===id))broken.push(`${page.slug}: ${url.pathname}${url.hash}`);}
    }else{
      try{await access('dist/'+decodeURI(url.pathname.slice(base.length)));}catch{broken.push(`${page.slug}: ${url.pathname}`);}
    }
  }
  for(const h of page.headings)assert($('[id]').toArray().some(el=>$(el).attr('id')===h.id),`Missing anchor ${page.slug}#${h.id}`);
  for(const img of $('main img[src]').toArray()){
    const src=$(img).attr('src');
    if(src.startsWith(base))await access('dist/'+decodeURI(src.slice(base.length)));
  }
  if(page.slug===''||page.slug==='plugins'){
    assert.equal($('aside').length,0);
    assert.equal($('.plugin-card').length,page.slug==='plugins'?9:0);
    if(page.slug===''){assert.equal($('.home-path').length,3);assert.equal($('.plugin-hub-filters').length,0);}
  }else assert.equal($('aside').length,1);
}
assert.deepEqual(broken,[],`Broken local links/fragments:\n${broken.join('\n')}`);
console.log(`PASS: ${fragments} local fragment references.`);
const errorPage=load(await readFile('dist/404.html','utf8'));
assert.equal(errorPage('main a').attr('href'),base);
assert.equal(errorPage('link[rel=canonical]').length,0);
assert.equal(errorPage('[data-pagefind-body]').length,0);
assert.equal(errorPage('#search-open').length,1);
for(const suffix of ['pagefind/pagefind-ui.js','pagefind/pagefind-ui.css']){
  assert(errorPage(`[src="${base+suffix}"],[href="${base+suffix}"]`).length);
  await access('dist/'+suffix);
}
console.log(`PASS: ${base} mode canonical, 404 recovery and search resources.`);
assert.equal((await readFile('dist/CNAME','utf8')).trim(),'wiki.meowopia.com');
console.log(`PASS: ${pages.length} routes, preserved heading anchors, local content images, nine-card directories, left document navigation.`);
