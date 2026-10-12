# ARUNA — Editorial Luxury / Demo 01

Tiga website demo reseller Vuyama. Masing-masing folder berdiri sendiri, tanpa framework atau dependency npm. Foto produk asli dan font disajikan lokal; tidak bergantung pada Google Drive saat dibuka.

## Preview
- Dari folder ini jalankan `node preview-all.mjs` untuk ketiganya.
- ARUNA / Editorial: http://127.0.0.1:4311
- NALA / Boutique: http://127.0.0.1:4312
- SENJA / Fashion: http://127.0.0.1:4313
- Untuk menjalankan hanya demo ini: `npm start`.

## Fitur
- Beranda berbeda sesuai poster v2.
- Katalog, pencarian, kategori, filter warna dan harga, pengurutan.
- Detail produk, foto galeri dan zoom, pilihan varian, jumlah.
- Favorit dan keranjang tersimpan per toko.
- Keranjang lengkap dan drawer pada SENJA.
- Checkout dengan validasi, ringkasan, data pemesan dan pesan WhatsApp.
- Tujuan order 6287824315008. Website menyusun pesan; pengiriman pesan dilakukan oleh pemesan di WhatsApp.

## Pengaturan
- `dist/config.js`: brand dan nomor WhatsApp.
- `dist/products.js`: koleksi, harga, varian, foto.
- `dist/styles.css`: tiga sistem visual.
- `dist/commerce.js`: perhitungan keranjang dan pembentukan pesanan.
- `npm test`: test logika transaksi.
- `node scripts/sync-demos.mjs`: menyalin engine dan aset demo 1 ke demo 2/3, mempertahankan identitas tema yang ditentukan script. Jalankan hanya setelah perubahan engine bersama.

## Aset dan publikasi
- Harga ecer/material diverifikasi dari pricelist September 2026 halaman 5; stok dan ongkir dikonfirmasi admin.
- Brand ARUNA, NALA, SENJA merupakan identitas contoh untuk demo.
- Sumber foto: `ASSET-SOURCES.md`.
- Folder `assets/source` berisi sumber pricelist reseller dan foto original. Tidak dilayani server preview. Untuk hosting, upload hanya isi `dist`.
- Font dan foto self-hosted. Foto dioptimalkan menjadi WebP tanpa mengubah warna atau model.
- Warna Gradasi memakai nama folder resmi. Warna lain diberi label deskriptif sesuai foto dan perlu dicocokkan ke kode varian supplier saat dipakai oleh reseller nyata.
- Data checkout disimpan sementara dalam memori halaman; tidak disimpan di server atau localStorage.
- Lokal saja; belum dipublikasikan ke domain publik.

## Enhancement katalog dan UX

Katalog sekarang mencakup 20 koleksi / 51 pilihan varian dengan tambah langsung di kartu, animasi terukur, dan drawer di ketiga tema. Baca CATALOGUE-COVERAGE.md dan QA.md sebelum publikasi. Harga null berarti perlu konfirmasi admin, bukan produk gratis. Link lintas demo untuk domain publik dapat diatur lewat array demoUrls pada config.js.
