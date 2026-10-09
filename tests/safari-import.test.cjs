const fs=require('node:fs');const vm=require('node:vm');const assert=require('node:assert/strict');
const src=fs.readFileSync('app.js','utf8');
const start=src.indexOf('function parseSafari(html)');
const end=src.indexOf('async function importBookmarks',start);
assert.ok(start>=0&&end>start,'Safari parser exists');
const parse=vm.runInNewContext('('+src.slice(start,end).trim()+')',{document:{createElement:()=>({set innerHTML(v){this.value=v.replace(/&amp;/g,'&')},value:''})},uuid:()=>String(Math.random()),classify:()=> 'Vendéglátás'});
const html='<!DOCTYPE NETSCAPE-Bookmark-file-1><DL><p><DT><H3>Safari</H3><DL><p><DT><H3>Vendéglátás</H3><DL><p><DT><A HREF="https://chefs.hu/">Chefek</A><DT><A HREF="https://example.org/?a=1&amp;b=2">Példa</A></DL><p></DL><p></DL><p>';
const a=parse(html);assert.equal(a.length,2);assert.equal(a[0].folder,'Safari / Vendéglátás');assert.equal(a[0].url,'https://chefs.hu/');assert.equal(a[1].url,'https://example.org/?a=1&b=2');assert.equal(parse('<DL><DT><A HREF="https://example.com">Alap</A></DL>')[0].folder,'Gyökér');console.log('Safari ZIP/HTML parser: 4 assertions passed');