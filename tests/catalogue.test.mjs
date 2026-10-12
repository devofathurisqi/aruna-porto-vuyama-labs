import test from 'node:test';
import assert from 'node:assert/strict';
import {stat} from 'node:fs/promises';
import {products,categories} from '../dist/products.js';

test('all product and variant identities are unique and every referenced photo exists',async()=>{
 assert.equal(new Set(products.map(p=>p.id)).size,products.length);
 assert.equal(products.length,20);
 for(const p of products){
  assert.ok(categories.includes(p.category));assert.ok(p.price===null||(p.price>0&&Number.isFinite(p.price)));
  assert.ok(p.variants.length);assert.equal(new Set(p.variants.map(v=>v.id)).size,p.variants.length);
  for(const image of new Set([...p.images,...p.variants.map(v=>v.image)])){
   const info=await stat(new URL('../dist/assets/images/'+image,import.meta.url));assert.ok(info.size>1000,image);
  }
 }
 assert.equal(products.find(p=>p.id==='viscose-gradasi').variants.length,12);
 assert.equal(products.find(p=>p.id==='printed-viscose').variants.length,21);
});
