import {products as currentProducts} from '../dist/products.js';
import {readFile,writeFile} from 'node:fs/promises';
const root=new URL('../',import.meta.url);
const products=currentProducts.filter(p=>['modal-viscose','viscose-gradasi','paris-legend','airtech-ultrasoft','gana-instan','printed-viscose'].includes(p.id)).map(p=>structuredClone(p));
const inventory=JSON.parse(await readFile(new URL('assets/source/drive-inventory.json',root),'utf8'));
const product=(id,name,category,material,price,image,color,hex,description,extra={})=>({id,name,category,material,price,label:'The Vuyama collection',colorFamily:color,description,images:[image+'.webp'],variants:[{id:'sesuai-foto',name:color+' · sesuai foto',hex,image:image+'.webp',family:color}],...extra});
const additions=[
 product('motif-tryspan','Segi Empat Motif Tryspan','Segi Empat','Voal Tryspan Ultrafine',79000,'tryspan','Motif','#5d465a','Motif yang memberi karakter pada tampilan sehari-hari. Koleksi segi empat dari seri Tryspan, dengan ukuran 110 × 110 cm.',{size:'110 × 110 cm',contain:true}),
 product('bamboo-spandex','Pashmina Bamboo Spandex','Pashmina','Bamboo Spandex',75000,'bamboo','Pink','#cbb4b3','Pashmina dalam warna lembut untuk berbagai padanan busana. Pilihan berbahan Bamboo Spandex dari koleksi Vuyama.'),
 product('zoya-instan','Zoya Instan','Instan','Micro Modal Tencel',85000,'zoya','Pink','#e6c9c4','Pashmina instan dengan ciput, untuk bentuk yang praktis dan tampilan yang rapi. Material mengacu pada katalog terbaru Vuyama.'),
 product('bamboo-slip-on','Bamboo Slip On','Instan','Bamboo Spandex',40000,'slip-on','Pink','#e3cec9','Koleksi slip on berbahan Bamboo Spandex. Siluet sederhana yang mudah menjadi bagian dari keseharianmu.'),
 product('paris-japan','Paris Japan','Segi Empat','Paris Japan Ori',49000,'paris-japan','Biru','#b3c4e1','Segi empat Paris Japan Ori berukuran 115 × 115 cm. Warna biru lembut pada foto menjadi pilihan untuk tampilan yang tenang.',{size:'115 × 115 cm'}),
 product('hawa-instan','Hawa Instan','Instan','Bamboo Spandex',49000,'hawa','Hitam','#252530','Hijab instan berbahan Bamboo Spandex. Siluet yang sederhana dalam warna hitam pada foto, untuk padanan gaya sehari-hari.'),
 product('viscose-highlight','Pashmina Viscose Highlight','Pashmina','Viscose Highlight Textured',79000,'highlight','Taupe','#b9b8ad','Permainan tekstur pada siluet pashmina. Koleksi Viscose Highlight untuk melengkapi gaya personalmu dengan detail yang lembut.'),
 product('aisha-khiban','Aisha Khiban','Khimar','Arabian Voile',85000,'aisha','Taupe','#bbbaa5','Khimar bandana Aisha dari koleksi Vuyama. Bahan Arabian Voile dengan siluet panjang untuk pilihan gaya yang lebih tertutup.'),
 product('hayla-khiban','Hayla Khiban','Khimar','Rayon Airflow',49000,'hayla','Taupe','#b9a79a','Khimar bandana Hayla berbahan Rayon Airflow. Pilihan dengan nuansa netral yang mudah dipadukan dengan busana sehari-hari.'),
 product('mukena-armani','Mukena Armani Velvet','Mukena','Armani Velvet',null,'armani','Pink','#cd969d','Koleksi mukena Armani dari seri Velvet. Harga sesuai seri dan pilihan warna dikonfirmasi bersama admin sebelum pembayaran.',{contain:true,variants:[{id:'velvet-vol-2',name:'Velvet Vol. 2 · sesuai foto',hex:'#cd969d',image:'armani.webp',family:'Pink'}]}),
 product('mukena-segenggam-polos','Mukena Segenggam Polos','Mukena','New Solite',169000,'segenggam-polos','Lavender','#bdaeb5','Koleksi mukena segenggam dengan tampilan polos. Material New Solite dan tas pendamping yang ditampilkan pada foto produk.',{contain:true}),
 product('mukena-segenggam-lily','Mukena Segenggam Lily','Mukena','New Solite',null,'segenggam-lily','Motif','#aaa4b6','Motif bunga dari Lily Series. Harga dan pilihan motif mukena segenggam ini dikonfirmasi bersama admin sebelum pembayaran.',{contain:true,variants:[{id:'lily-series',name:'Lily Series · konfirmasi motif',hex:'#aaa4b6',image:'segenggam-lily.webp',family:'Motif'}]}),
 product('mukena-rayon-viscose','Mukena Rayon Viscose','Mukena','Rayon Viscose',null,'rayon','Motif','#673140','Koleksi mukena Rayon Viscose bermotif. Pilih koleksi ini untuk pesananmu, lalu konfirmasikan warna, harga, dan ketersediaan bersama admin.',{contain:true}),
 product('hampers-soft-box','Hampers Soft Box','Hampers','Soft box & kartu ucapan',null,'hampers-reference','Motif','#d2bd8c','Soft box berukuran 20 × 20 cm, kartu ucapan, hang tag, dan pita sesuai foto katalog. Isi hijab, desain kemasan, serta harga paket dikonfirmasi bersama admin.',{contain:true,size:'20 × 20 cm',variants:[{id:'soft-box',name:'Soft Box · konfirmasi isi paket',hex:'#d2bd8c',image:'hampers-reference.webp',family:'Motif'}]})
];
const gradient=products.find(p=>p.id==='viscose-gradasi');
gradient.variants=gradient.variants.slice(0,3);
gradient.variants[0].family='Pink';gradient.variants[1].family='Hitam';gradient.variants[2].family='Taupe';
const colors=[['BURNT MAHO','#9d614e','Taupe'],['COBALT BLUE','#899ec1','Biru'],['COOL GREY','#96969d','Taupe'],['COSMIC MAUVE','#a990ac','Lavender'],['FRESH LEMON','#d4d898','Hijau'],['PALE OLIVE','#a7ad8c','Hijau'],['PEARL BLACK','#57525d','Hitam'],['ROSE MADDER','#a8667c','Pink'],['STORMY LAVEN','#aaa3c0','Lavender']];
for(const [name,hex,family] of colors){const id=name.toLowerCase().replaceAll(' ','-');gradient.variants.push({id,name:name.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()),hex,family,image:'gradasi-'+id+'.webp'});}
gradient.description='Dua nuansa dalam satu pashmina. Jelajahi 12 perpaduan warna Gradasi, dari Blushy Rose hingga Pearl Black, untuk cerita gaya yang berbeda.';
const printed=products.find(p=>p.id==='printed-viscose');
printed.variants=printed.variants.slice(0,1);
printed.colorFamily='Motif';printed.variants[0].family='Motif';
for(const folder of inventory.filter(f=>/^PPV-/.test(f.name))){const id=folder.name.toLowerCase();printed.variants.push({id,name:folder.name,hex:'#b995a4',family:'Motif',image:id+'.webp'});}
for(const name of ['Cloudy','Stormy','Windy'])printed.variants.push({id:name.toLowerCase(),name:name+' Series',hex:'#aeb8bc',family:'Motif',contain:true,image:name.toLowerCase()+'.webp'});
printed.description='Motif dari 18 kode PPV serta seri Cloudy, Stormy, dan Windy. Temukan pilihan yang memberi karakter pada padanan busanamu; foto mengikuti varian yang kamu pilih.';
const all=[...products,...additions];
await writeFile(new URL('dist/products.js',root),'// Retail prices: Vuyama September 2026, pp.5–6. null means price requires confirmation.\nexport const products = '+JSON.stringify(all,null,2)+';\nexport const categories = [\'Semua\',\'Pashmina\',\'Segi Empat\',\'Instan\',\'Khimar\',\'Mukena\',\'Hampers\'];\nexport const findProduct = id => products.find(p => p.id === id);\n');
console.log(all.length+' collections, '+all.reduce((n,p)=>n+p.variants.length,0)+' selectable variants');
