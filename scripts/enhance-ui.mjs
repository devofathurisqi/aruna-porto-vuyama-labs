import {readFile,writeFile} from 'node:fs/promises';
const file=new URL('../dist/app.js',import.meta.url);
let s=await readFile(file,'utf8');
if(s.includes('function addToBag(')){console.log('Enhancements already applied.');process.exit(0);}
const swap=(from,to)=>{if(!s.includes(from))throw new Error('Missing anchor: '+from.slice(0,90));s=s.replace(from,to);};
const block=(start,end,value)=>{const a=s.indexOf(start),b=s.indexOf(end,a);if(a<0||b<0)throw new Error('Missing block '+start);s=s.slice(0,a)+value+'\n'+s.slice(b);};
swap('subtotal,orderMessage,whatsappLink','subtotal,orderMessage,whatsappLink,hasPrice,priceLabel,unpricedCount');
swap("customerDraft={}, toastTimer;","customerDraft={}, toastTimer, revealObserver, filterPanelOpen=false, filterNavigation=false;\nconst cardVariants = new Map();\nconst reduceMotion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;\nconst totalLabel=()=>cartLines(cart,products).some(l=>l.total!==null)?rupiah(subtotal(cart,products)):'Menunggu konfirmasi';\nconst pendingNote=()=>unpricedCount(cart,products)?`<p class=\"pending-price-note\">${unpricedCount(cart,products)} pcs dengan harga konfirmasi belum termasuk subtotal. Admin akan menghitung total lengkap.</p>`:'';");
block('function toast(', 'function persist()', `function toast(message,action=false) {
 const node=document.querySelector('#toast'); node.innerHTML='<span>'+e(message)+'</span>'+(action?'<button data-action="cart">Lihat keranjang '+icon('arrow')+'</button>':'');
 node.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('visible'),4500);
}`);
block('function card(p)', 'function sectionHead(', `function card(p) {
 const v=p.variants.find(v=>v.id===cardVariants.get(p.id))||p.variants[0];
 return \`<article class="product-card" data-product="\${p.id}"><div class="product-photo \${p.contain?'contain-photo':''}"><a href="\${productHref(p)}" aria-label="Lihat \${e(p.name)}">\${img(v.image,p.name+' — '+v.name,'card-primary')}\${p.images[1]&&v.id===p.variants[0].id?img(p.images[1],p.name+' sudut lain','hover-image'):''}</a><span class="product-type">\${e(p.category)}</span><button class="favorite-button \${favorites.includes(p.id)?'saved':''}" data-favorite="\${p.id}" aria-label="Simpan \${e(p.name)} ke favorit" aria-pressed="\${favorites.includes(p.id)}">\${icon('heart')}</button><a href="\${productHref(p)}" class="quick-view">Lihat detail \${icon('arrow')}</a></div><div class="product-info"><span class="product-material">\${e(p.material)}</span><div class="card-title-row"><h3><a href="\${productHref(p)}">\${e(p.name)}</a></h3><span class="product-price \${hasPrice(p)?'':'quote-price'}">\${priceLabel(p)}</span></div><div class="card-swatches">\${p.variants.slice(0,5).map(v=>\`<span style="--swatch:\${v.hex}" title="\${e(v.name)}"></span>\`).join('')}<span class="variant-label">\${p.variants.length} \${p.variants.length>1?'varian':'pilihan'}</span></div><label class="card-variant"><span class="sr-only">Varian \${e(p.name)}</span><select data-card-variant="\${p.id}" aria-label="Varian \${e(p.name)}">\${p.variants.map(x=>\`<option value="\${x.id}" \${x.id===v.id?'selected':''}>\${e(x.name)}</option>\`).join('')}</select>\${icon('chevron')}</label><button class="card-add" data-quick-add="\${p.id}" aria-label="Tambah \${e(p.name)} ke keranjang">\${icon('plus')}<span>Tambah ke keranjang</span></button></div></article>\`;
}`);
swap('<span>01—06</span>','<span>01—${String(products.length).padStart(2,\'0\')}</span>');
swap("'Enam koleksi, berbagai cerita. Pilih yang paling terasa seperti kamu.'","`${products.length} koleksi, berbagai cerita. Temukan pilihan untuk setiap harimu.`");
swap("(!color||p.colorFamily===color)","(!color||p.colorFamily===color||p.variants.some(v=>v.family===color))");
swap('(!max||p.price<=max)','(!max||(hasPrice(p)&&p.price<=max))');
swap("if(sort==='price-asc')list.sort((a,b)=>a.price-b.price); if(sort==='price-desc')list.sort((a,b)=>b.price-a.price);", "if(sort==='price-asc'||sort==='price-desc')list.sort((a,b)=>!hasPrice(a)?(!hasPrice(b)?0:1):!hasPrice(b)?-1:sort==='price-asc'?a.price-b.price:b.price-a.price);");
swap('<aside class="filter-panel" aria-label="Filter produk">','<aside class="filter-panel ${filterPanelOpen?\'mobile-open\':\'\'}" id="catalog-filters" aria-label="Filter produk">');
swap("[['Putih','#eee9de'],['Pink','#d7b2c9'],['Lavender','#bab1bf'],['Taupe','#b6a2a8']]","[['Putih','#eee9de'],['Pink','#d7b2c9'],['Lavender','#bab1bf'],['Taupe','#b6a2a8'],['Hitam','#373038'],['Biru','#9faec4'],['Hijau','#a4aa93'],['Motif','#986c77']]");
swap('[50000,75000,100000]','[50000,75000,100000,200000,350000]');
swap('<button class="filter-toggle" data-action="filters">','<button class="filter-toggle" data-action="filters" aria-controls="catalog-filters" aria-expanded="${filterPanelOpen}">');
swap('Harga ecer mengacu pada katalog Vuyama September 2026. Ketersediaan varian dikonfirmasi saat order.','Harga tercantum mengikuti katalog Vuyama September 2026. Produk berlabel konfirmasi harga dihitung bersama admin. Ketersediaan varian dikonfirmasi saat order.');
swap('${rupiah(p.price)}<span>/ pcs</span>','${priceLabel(p)}${hasPrice(p)?\'<span>/ pcs</span>\':\'\'}');
swap('<div class="detail-swatches">','<div class="detail-swatches ${p.variants.length>6?\'many-variants\':\'\'}">');
swap('aria-label="Pilih ${e(v.name)}"','title="${e(v.name)}" aria-label="Pilih ${e(v.name)}"');
swap('<p class="fine-print">Warna dapat sedikit berbeda', '<label class="detail-variant-select"><span class="sr-only">Varian ${e(p.name)}</span><select data-detail-select aria-label="Varian ${e(p.name)}">${p.variants.map(v=>`<option value="${v.id}" ${v.id===variant.id?\'selected\':\'\'}>${e(v.name)}</option>`).join(\'\')}</select></label><p class="fine-print">Warna dapat sedikit berbeda');
swap('<button class="gallery-main"','<button class="gallery-main ${p.contain?\'contain-photo\':\'\'}"');
s=s.replaceAll('${rupiah(l.product.price)}','${priceLabel(l.product)}').replaceAll('${rupiah(l.total)}',"${l.total===null?'Konfirmasi harga':rupiah(l.total)}");
s=s.replaceAll('${rupiah(subtotal(cart,products))}','${totalLabel()}');
swap('<dt>Subtotal (${count()} pcs)</dt>','<dt>${unpricedCount(cart,products)?\'Produk berharga\':\'Subtotal\'} (${count()-unpricedCount(cart,products)} pcs)</dt>');
swap('<dt>Subtotal produk</dt>','<dt>${unpricedCount(cart,products)?\'Subtotal sementara\':\'Subtotal produk\'}</dt>');
swap('<p class="summary-note">','${pendingNote()}<p class="summary-note">');
swap('<p>Ongkir dikonfirmasi bersama admin.</p>','${pendingNote()}<p>Ongkir dikonfirmasi bersama admin.</p>');
swap(' observeReveal();',' observeReveal(scroll);');
block('function observeReveal()', 'function updateHeader()', `function observeReveal(animate=true){
 revealObserver?.disconnect();
 if(reduceMotion()||!('IntersectionObserver' in window))return;
 revealObserver=new IntersectionObserver(items=>{for(const item of items)if(item.isIntersecting){item.target.classList.add('in-view');revealObserver.unobserve(item.target);}},{threshold:.04,rootMargin:'0px 0px 28px 0px'});
 document.querySelectorAll('.section-heading,.story-copy,.product-card,.benefit-strip,.mosaic-copy').forEach((node,i)=>{
  if(!animate&&node.getBoundingClientRect().top<innerHeight)return;
  node.style.setProperty('--reveal-delay',node.classList.contains('product-card')?(i%3)*45+'ms':'0ms');node.classList.add('reveal');revealObserver.observe(node);
 });
 if(animate)document.querySelector('main').classList.add('page-enter');
}
function addToBag(id,variant,qty,button){
 const p=findProduct(id);if(!p)return;
 const before=count();cart=addItem(cart,id,variant,qty,products);const added=count()-before;
 if(!added){toast('Maksimum 99 pcs untuk varian ini.');return;}
 persist();updateHeader();toast(added+' '+p.name+' ditambahkan.',true);
 if(button){const html=button.innerHTML;button.disabled=true;button.classList.add('added');button.innerHTML=icon('check')+'<span>Ditambahkan</span>';setTimeout(()=>{if(button.isConnected){button.innerHTML=html;button.disabled=false;button.classList.remove('added');}},1000);}
 if(!reduceMotion()){const bag=document.querySelector('.cart-trigger');bag?.animate([{transform:'translateY(0)'},{transform:'translateY(-4px)'},{transform:'translateY(0)'}],{duration:360,easing:'ease-out'});}
}
function updateCardVariant(select){
 const p=findProduct(select.dataset.cardVariant),v=p?.variants.find(v=>v.id===select.value);if(!v)return;cardVariants.set(p.id,v.id);
 document.querySelectorAll('[data-product="'+p.id+'"]').forEach(node=>{
  node.querySelector('select').value=v.id;const photo=node.querySelector('.card-primary');photo.src='assets/images/'+v.image;photo.alt=p.name+' — '+v.name;
  node.querySelector('.hover-image')?.remove();if(!reduceMotion())photo.animate([{opacity:.5},{opacity:1}],{duration:300});
 });
}`);
swap('function updateFilter(key,value){const {params}=route();','function updateFilter(key,value){filterNavigation=true;const {params}=route();');
swap("if(target.dataset.variant){", "if(target.dataset.quickAdd){const p=findProduct(target.dataset.quickAdd);addToBag(p.id,cardVariants.get(p.id)||p.variants[0].id,1,target);return;}\n if(target.dataset.variant){");
block(' if(target.dataset.add){',' if(target.dataset.qty){',` if(target.dataset.add){addToBag(target.dataset.add,selectedVariant,selectedQuantity,target);return;}`);
swap("case 'cart': config.theme==='fashion'?openCart():location.hash='/keranjang';break;","case 'cart': document.querySelector('#toast').classList.remove('visible');openCart();break;");
swap("case 'filters': {const filter=document.querySelector('.filter-panel');filter.classList.toggle('mobile-open');break;}","case 'filters': {filterPanelOpen=!filterPanelOpen;document.querySelector('.filter-panel').classList.toggle('mobile-open',filterPanelOpen);target.setAttribute('aria-expanded',String(filterPanelOpen));break;}");
swap(' const target=event.target;\n if(target.dataset.filter)'," const target=event.target;\n if(target.dataset.cardVariant){updateCardVariant(target);return;}\n if(target.hasAttribute('data-detail-select')){selectedVariant=target.value;galleryIndex=0;render(false);return;}\n if(target.dataset.filter)");
swap("window.addEventListener('hashchange',()=>{closeAll();render();});","window.addEventListener('hashchange',()=>{closeAll();render(!filterNavigation);filterNavigation=false;});");
swap('render(false);\n', 'render(false);\n');
s+=`\n// Keep keyboard navigation and modal scrolling predictable on small screens.\ndocument.addEventListener('keydown',event=>{if(event.key==='Escape'){document.querySelector('.main-nav')?.classList.remove('open');document.querySelector('[data-action="menu"]')?.setAttribute('aria-expanded','false');}});\n`;
await writeFile(file,s);
