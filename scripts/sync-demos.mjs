import {cp,mkdir,readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const first=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const base=path.dirname(first);
const shared=['app.js','commerce.js','products.js','styles.css'];
const demos=[{index:2,brand:'NALA',theme:'boutique',subtitle:'SIMPLY YOU, EVERY DAY',tagline:'Temukan hijab favoritmu.',description:'Koleksi yang mudah dipilih. Gaya yang terasa seperti kamu.',color:'#667c67'},
{index:3,brand:'SENJA',theme:'fashion',subtitle:'COLOURS & EVERYDAY STORIES',tagline:'Warna lembut, pesona kamu.',description:'Untuk hari yang biasa. Untuk kamu yang istimewa.',color:'#642f3d'}];
for(const d of demos){
 const directory=path.join(base,`porto_vuyama_labs_${d.index}`);
 const dist=path.join(directory,'dist');await mkdir(dist,{recursive:true});
 for(const name of shared)await cp(path.join(first,'dist',name),path.join(dist,name));
 await cp(path.join(first,'dist','assets'),path.join(dist,'assets'),{recursive:true});
 await cp(path.join(first,'server.mjs'),path.join(directory,'server.mjs'));
 await cp(path.join(first,'tests'),path.join(directory,'tests'),{recursive:true});
 const config={brand:d.brand,subtitle:d.subtitle,theme:d.theme,demo:String(d.index).padStart(2,'0'),whatsapp:'6287824315008',storageKey:`vuyama-${d.brand.toLowerCase()}-cart-v1`,tagline:d.tagline,description:d.description};
 await writeFile(path.join(dist,'config.js'),`export default ${JSON.stringify(config,null,2)};\n`);
 await writeFile(path.join(dist,'site.json'),JSON.stringify({brand:d.brand,port:4310+d.index,theme:d.theme},null,2));
 let html=await readFile(path.join(first,'dist','index.html'),'utf8');
 html=html.replaceAll('ARUNA',d.brand).replace('The Everyday Edit',d.subtitle).replace('#f5f0e8',d.color);
 await writeFile(path.join(dist,'index.html'),html);
 await writeFile(path.join(dist,'assets','favicon.svg'),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="${d.color}"/><text x="32" y="46" text-anchor="middle" fill="#fffaf7" font-family="Georgia,serif" font-size="43">${d.brand[0]}</text></svg>`);
 const packageJson=JSON.parse(await readFile(path.join(first,'package.json'),'utf8'));packageJson.name=`vuyama-reseller-${d.theme}-demo`;
 await writeFile(path.join(directory,'package.json'),JSON.stringify(packageJson,null,2));
 await writeFile(path.join(directory,'README.md'),`# ${d.brand} — Demo ${d.index}\n\nTema: ${d.theme}. Website toko reseller dengan alur beranda → produk → detail → keranjang → checkout → WhatsApp.\n\n## Menjalankan\n\nJalankan \`npm start\` di folder ini. Buka http://127.0.0.1:${4310+d.index}. Tidak perlu menginstal dependency.\n\n## Pengaturan\n\n- Identitas dan nomor WhatsApp: \`dist/config.js\`.\n- Koleksi, harga, varian, gambar: \`dist/products.js\`.\n- Server preview hanya melayani folder \`dist\`.\n- Upload isi \`dist\` ke static hosting untuk publikasi.\n- Harga ecer dari katalog September 2026; stok dan ongkir dikonfirmasi admin.\n- Brand ${d.brand} adalah identitas contoh. Ada 20 koleksi dan 51 pilihan varian. Nama Gradasi dan Printed mengikuti folder; pilihan lainnya diberi label sesuai foto. Rincian cakupan ada di CATALOGUE-COVERAGE.md pada demo 1.\n- Font dan foto self-hosted; foto WebP mempertahankan warna dan orientasi asli.\n- Keranjang dan favorit tersimpan di browser, terpisah per demo. Data alamat checkout tidak disimpan ke server.\n- Test logika transaksi: \`npm test\`.\n\nSumber foto dan dokumentasi validasi ada di \`../porto_vuyama_labs_1/ASSET-SOURCES.md\` dan \`../porto_vuyama_labs_1/QA.md\`.\n`);
}
console.log('Synced the shared shopping flow and assets into demos 2 and 3.');
