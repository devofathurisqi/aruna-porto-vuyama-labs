import test from 'node:test';
import assert from 'node:assert/strict';
import {products} from '../dist/products.js';
import {addItem,cleanCart,subtotal,orderMessage,whatsappLink,escapeHtml,cartLines,unpricedCount,priceLabel} from '../dist/commerce.js';
test('same variant merges, different variants remain separate with correct total',()=>{
 let cart=addItem([],'viscose-gradasi','blushy-rose',2,products);
 cart=addItem(cart,'viscose-gradasi','blushy-rose',1,products);
 cart=addItem(cart,'viscose-gradasi','ash-charcoal',2,products);
 cart=addItem(cart,'modal-viscose','putih',1,products);
 assert.equal(cart.length,3);assert.equal(cart[0].qty,3);assert.equal(subtotal(cart,products),554000);
});
test('untrusted saved cart cannot inject products, prices or invalid variants',()=>{
 const cart=cleanCart([{id:'missing',variant:'x',qty:1},{id:'modal-viscose',variant:'invalid',qty:1},{id:'modal-viscose',variant:'putih',qty:99999,price:1},null],products);
 assert.deepEqual(cart,[{id:'modal-viscose',variant:'putih',qty:99}]);assert.equal(subtotal(cart,products),5841000);
 assert.deepEqual(cleanCart({bad:true},products),[]);
});
test('WhatsApp preserves Unicode, multiline order, quantities, customer data and destination',()=>{
 const cart=addItem([],'viscose-gradasi','ash-charcoal',2,products);
 const customer={name:'QA & Contoh',phone:'081234567890',address:'Jl. Contoh #2\nRT 01/RW 02',city:'Bogor',postcode:'16100',notes:'Bungkus rapi & cek warna',shipping:'JNE'};
 const message=orderMessage(cart,products,customer,'ARUNA');
 assert.ok(message.includes('Ash Charcoal'));assert.ok(message.includes('2 pcs'));assert.ok(message.includes('Subtotal produk:'));assert.ok(message.includes('RT 01/RW 02'));assert.ok(message.includes('ongkir'));
 const url=new URL(whatsappLink('087824315008',message));assert.equal(url.pathname,'/6287824315008');assert.equal(url.searchParams.get('text'),message);
});
test('empty order and incomplete address cannot be submitted',()=>{
 assert.throws(()=>orderMessage([],products,{},'SENJA'));
 assert.throws(()=>orderMessage([{id:'modal-viscose',variant:'putih',qty:1}],products,{name:'QA'},'SENJA'));
});
test('user input is escaped before rendering HTML',()=>{assert.equal(escapeHtml('<img onerror="x">&'), '&lt;img onerror=&quot;x&quot;&gt;&amp;');});

test('quote-only products stay orderable without being represented as free',()=>{
 const cart=addItem([],'hampers-soft-box','soft-box',2,products);
 assert.equal(cartLines(cart,products)[0].total,null);
 assert.equal(unpricedCount(cart,products),2);
 assert.equal(priceLabel(products.find(p=>p.id==='hampers-soft-box')),'Konfirmasi harga');
 const msg=orderMessage(cart,products,{name:'QA',phone:'081111111111',address:'Alamat uji',city:'Bogor'},'NALA');
 assert.match(msg,/Menunggu konfirmasi/);assert.match(msg,/2 pcs belum termasuk subtotal/);
 assert.doesNotMatch(msg,/Rp\s*0(?:\D|$)/);
});

test('mixed-price orders only total known prices and explicitly disclose excluded products',()=>{
 let cart=addItem([],'hampers-soft-box','soft-box',1,products);
 cart=addItem(cart,'viscose-gradasi','cobalt-blue',2,products);
 assert.equal(subtotal(cart,products),198000);
 const msg=orderMessage(cart,products,{name:'QA',phone:'081111111111',address:'Alamat uji',city:'Bogor'},'SENJA');
 assert.match(msg,/Cobalt Blue/);assert.match(msg,/Subtotal produk berharga/);assert.match(msg,/1 pcs belum termasuk subtotal/);
});

test('direct additions for all catalog variants resolve to the selected photograph and quantity',()=>{
 for(const p of products)for(const v of p.variants){
  const lines=cartLines(addItem([],p.id,v.id,1,products),products);
  assert.equal(lines.length,1);assert.equal(lines[0].color.image,v.image);assert.equal(lines[0].qty,1);
 }
});
