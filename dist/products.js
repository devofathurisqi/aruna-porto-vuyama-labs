// Retail prices: Vuyama September 2026, pp.5–6. null means price requires confirmation.
export const products = [
  {
    "id": "modal-viscose",
    "name": "Pashmina Modal Viscose",
    "category": "Pashmina",
    "material": "Modal Viscose",
    "price": 59000,
    "label": "The everyday edit",
    "colorFamily": "Putih",
    "description": "Siluet pashmina klasik untuk melengkapi gaya personalmu. Pilihan putih yang mudah dipadukan, dari agenda pagi hingga pertemuan sore.",
    "images": [
      "modal.webp",
      "modal-alt.webp"
    ],
    "variants": [
      {
        "id": "putih",
        "name": "Putih",
        "hex": "#eee9de",
        "image": "modal.webp"
      }
    ]
  },
  {
    "id": "viscose-gradasi",
    "name": "Viscose Gradasi",
    "category": "Pashmina",
    "material": "Modal Viscose",
    "price": 99000,
    "label": "The colour story",
    "colorFamily": "Pink",
    "description": "Dua nuansa dalam satu pashmina. Jelajahi 12 perpaduan warna Gradasi, dari Blushy Rose hingga Pearl Black, untuk cerita gaya yang berbeda.",
    "images": [
      "gradasi.webp",
      "gradasi-alt.webp"
    ],
    "variants": [
      {
        "id": "blushy-rose",
        "name": "Blushy Rose",
        "hex": "#d7b2c9",
        "image": "gradasi.webp",
        "family": "Pink"
      },
      {
        "id": "ash-charcoal",
        "name": "Ash Charcoal",
        "hex": "#656166",
        "image": "gradasi-ash.webp",
        "family": "Hitam"
      },
      {
        "id": "creamy-nude",
        "name": "Creamy Nude",
        "hex": "#d8c5b4",
        "image": "gradasi-cream.webp",
        "family": "Taupe"
      },
      {
        "id": "burnt-maho",
        "name": "Burnt Maho",
        "hex": "#9d614e",
        "family": "Taupe",
        "image": "gradasi-burnt-maho.webp"
      },
      {
        "id": "cobalt-blue",
        "name": "Cobalt Blue",
        "hex": "#899ec1",
        "family": "Biru",
        "image": "gradasi-cobalt-blue.webp"
      },
      {
        "id": "cool-grey",
        "name": "Cool Grey",
        "hex": "#96969d",
        "family": "Taupe",
        "image": "gradasi-cool-grey.webp"
      },
      {
        "id": "cosmic-mauve",
        "name": "Cosmic Mauve",
        "hex": "#a990ac",
        "family": "Lavender",
        "image": "gradasi-cosmic-mauve.webp"
      },
      {
        "id": "fresh-lemon",
        "name": "Fresh Lemon",
        "hex": "#d4d898",
        "family": "Hijau",
        "image": "gradasi-fresh-lemon.webp"
      },
      {
        "id": "pale-olive",
        "name": "Pale Olive",
        "hex": "#a7ad8c",
        "family": "Hijau",
        "image": "gradasi-pale-olive.webp"
      },
      {
        "id": "pearl-black",
        "name": "Pearl Black",
        "hex": "#57525d",
        "family": "Hitam",
        "image": "gradasi-pearl-black.webp"
      },
      {
        "id": "rose-madder",
        "name": "Rose Madder",
        "hex": "#a8667c",
        "family": "Pink",
        "image": "gradasi-rose-madder.webp"
      },
      {
        "id": "stormy-laven",
        "name": "Stormy Laven",
        "hex": "#aaa3c0",
        "family": "Lavender",
        "image": "gradasi-stormy-laven.webp"
      }
    ]
  },
  {
    "id": "paris-legend",
    "name": "Paris Legend",
    "category": "Segi Empat",
    "material": "Paris Basic Ori",
    "price": 29000,
    "label": "The classic edit",
    "colorFamily": "Lavender",
    "size": "110 × 110 cm",
    "description": "Koleksi Paris Jadul dalam bentuk segi empat klasik. Nuansa lavender pada foto memberi sentuhan warna lembut pada busana sehari-hari.",
    "images": [
      "paris.webp",
      "paris-alt.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Lavender · sesuai foto",
        "hex": "#bab1bf",
        "image": "paris.webp"
      }
    ]
  },
  {
    "id": "airtech-ultrasoft",
    "name": "Pashmina Airtech Ultrasoft",
    "category": "Pashmina",
    "material": "Bamboo Airtech",
    "price": 75000,
    "label": "A softer silhouette",
    "colorFamily": "Taupe",
    "description": "Pashmina berbahan Bamboo Airtech dengan siluet memanjang. Pilihan taupe pada foto untuk padanan busana yang tenang dan sederhana.",
    "images": [
      "airtech.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Taupe · sesuai foto",
        "hex": "#b6a2a8",
        "image": "airtech.webp"
      }
    ]
  },
  {
    "id": "gana-instan",
    "name": "Gana Pashmina Oval Instan",
    "category": "Instan",
    "material": "Bamboo Spandex",
    "price": 55000,
    "label": "Ready for your day",
    "colorFamily": "Putih",
    "description": "Pashmina oval instan dari koleksi Gana. Pilihan untuk kamu yang menyukai bentuk hijab praktis dengan tampilan yang tetap rapi.",
    "images": [
      "gana.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Putih · sesuai foto",
        "hex": "#e6e2dd",
        "image": "gana.webp"
      }
    ]
  },
  {
    "id": "printed-viscose",
    "name": "Pashmina Printed Viscose",
    "category": "Pashmina",
    "material": "Modal Viscose",
    "price": 99000,
    "label": "A little expression",
    "colorFamily": "Motif",
    "description": "Motif dari 18 kode PPV serta seri Cloudy, Stormy, dan Windy. Temukan pilihan yang memberi karakter pada padanan busanamu; foto mengikuti varian yang kamu pilih.",
    "images": [
      "printed-alt.webp",
      "printed.webp"
    ],
    "variants": [
      {
        "id": "ppv-a1",
        "name": "PPV-A1",
        "hex": "#d2a8ab",
        "image": "printed-alt.webp",
        "family": "Motif"
      },
      {
        "id": "ppv-a2",
        "name": "PPV-A2",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-a2.webp"
      },
      {
        "id": "ppv-a3",
        "name": "PPV-A3",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-a3.webp"
      },
      {
        "id": "ppv-a4",
        "name": "PPV-A4",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-a4.webp"
      },
      {
        "id": "ppv-b1",
        "name": "PPV-B1",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-b1.webp"
      },
      {
        "id": "ppv-b2",
        "name": "PPV-B2",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-b2.webp"
      },
      {
        "id": "ppv-b3",
        "name": "PPV-B3",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-b3.webp"
      },
      {
        "id": "ppv-c1",
        "name": "PPV-C1",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-c1.webp"
      },
      {
        "id": "ppv-c2",
        "name": "PPV-C2",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-c2.webp"
      },
      {
        "id": "ppv-c3",
        "name": "PPV-C3",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-c3.webp"
      },
      {
        "id": "ppv-c4",
        "name": "PPV-C4",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-c4.webp"
      },
      {
        "id": "ppv-d1",
        "name": "PPV-D1",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-d1.webp"
      },
      {
        "id": "ppv-d2",
        "name": "PPV-D2",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-d2.webp"
      },
      {
        "id": "ppv-d3",
        "name": "PPV-D3",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-d3.webp"
      },
      {
        "id": "ppv-d4",
        "name": "PPV-D4",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-d4.webp"
      },
      {
        "id": "ppv-e1",
        "name": "PPV-E1",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-e1.webp"
      },
      {
        "id": "ppv-e2",
        "name": "PPV-E2",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-e2.webp"
      },
      {
        "id": "ppv-e3",
        "name": "PPV-E3",
        "hex": "#b995a4",
        "family": "Motif",
        "image": "ppv-e3.webp"
      },
      {
        "id": "cloudy",
        "name": "Cloudy Series",
        "hex": "#aeb8bc",
        "family": "Motif",
        "contain": true,
        "image": "cloudy.webp"
      },
      {
        "id": "stormy",
        "name": "Stormy Series",
        "hex": "#aeb8bc",
        "family": "Motif",
        "contain": true,
        "image": "stormy.webp"
      },
      {
        "id": "windy",
        "name": "Windy Series",
        "hex": "#aeb8bc",
        "family": "Motif",
        "contain": true,
        "image": "windy.webp"
      }
    ]
  },
  {
    "id": "motif-tryspan",
    "name": "Segi Empat Motif Tryspan",
    "category": "Segi Empat",
    "material": "Voal Tryspan Ultrafine",
    "price": 79000,
    "label": "The Vuyama collection",
    "colorFamily": "Motif",
    "description": "Motif yang memberi karakter pada tampilan sehari-hari. Koleksi segi empat dari seri Tryspan, dengan ukuran 110 × 110 cm.",
    "images": [
      "tryspan.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Motif · sesuai foto",
        "hex": "#5d465a",
        "image": "tryspan.webp",
        "family": "Motif"
      }
    ],
    "size": "110 × 110 cm",
    "contain": true
  },
  {
    "id": "bamboo-spandex",
    "name": "Pashmina Bamboo Spandex",
    "category": "Pashmina",
    "material": "Bamboo Spandex",
    "price": 75000,
    "label": "The Vuyama collection",
    "colorFamily": "Pink",
    "description": "Pashmina dalam warna lembut untuk berbagai padanan busana. Pilihan berbahan Bamboo Spandex dari koleksi Vuyama.",
    "images": [
      "bamboo.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Pink · sesuai foto",
        "hex": "#cbb4b3",
        "image": "bamboo.webp",
        "family": "Pink"
      }
    ]
  },
  {
    "id": "zoya-instan",
    "name": "Zoya Instan",
    "category": "Instan",
    "material": "Micro Modal Tencel",
    "price": 85000,
    "label": "The Vuyama collection",
    "colorFamily": "Pink",
    "description": "Pashmina instan dengan ciput, untuk bentuk yang praktis dan tampilan yang rapi. Material mengacu pada katalog terbaru Vuyama.",
    "images": [
      "zoya.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Pink · sesuai foto",
        "hex": "#e6c9c4",
        "image": "zoya.webp",
        "family": "Pink"
      }
    ]
  },
  {
    "id": "bamboo-slip-on",
    "name": "Bamboo Slip On",
    "category": "Instan",
    "material": "Bamboo Spandex",
    "price": 40000,
    "label": "The Vuyama collection",
    "colorFamily": "Pink",
    "description": "Koleksi slip on berbahan Bamboo Spandex. Siluet sederhana yang mudah menjadi bagian dari keseharianmu.",
    "images": [
      "slip-on.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Pink · sesuai foto",
        "hex": "#e3cec9",
        "image": "slip-on.webp",
        "family": "Pink"
      }
    ]
  },
  {
    "id": "paris-japan",
    "name": "Paris Japan",
    "category": "Segi Empat",
    "material": "Paris Japan Ori",
    "price": 49000,
    "label": "The Vuyama collection",
    "colorFamily": "Biru",
    "description": "Segi empat Paris Japan Ori berukuran 115 × 115 cm. Warna biru lembut pada foto menjadi pilihan untuk tampilan yang tenang.",
    "images": [
      "paris-japan.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Biru · sesuai foto",
        "hex": "#b3c4e1",
        "image": "paris-japan.webp",
        "family": "Biru"
      }
    ],
    "size": "115 × 115 cm"
  },
  {
    "id": "hawa-instan",
    "name": "Hawa Instan",
    "category": "Instan",
    "material": "Bamboo Spandex",
    "price": 49000,
    "label": "The Vuyama collection",
    "colorFamily": "Hitam",
    "description": "Hijab instan berbahan Bamboo Spandex. Siluet yang sederhana dalam warna hitam pada foto, untuk padanan gaya sehari-hari.",
    "images": [
      "hawa.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Hitam · sesuai foto",
        "hex": "#252530",
        "image": "hawa.webp",
        "family": "Hitam"
      }
    ]
  },
  {
    "id": "viscose-highlight",
    "name": "Pashmina Viscose Highlight",
    "category": "Pashmina",
    "material": "Viscose Highlight Textured",
    "price": 79000,
    "label": "The Vuyama collection",
    "colorFamily": "Taupe",
    "description": "Permainan tekstur pada siluet pashmina. Koleksi Viscose Highlight untuk melengkapi gaya personalmu dengan detail yang lembut.",
    "images": [
      "highlight.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Taupe · sesuai foto",
        "hex": "#b9b8ad",
        "image": "highlight.webp",
        "family": "Taupe"
      }
    ]
  },
  {
    "id": "aisha-khiban",
    "name": "Aisha Khiban",
    "category": "Khimar",
    "material": "Arabian Voile",
    "price": 85000,
    "label": "The Vuyama collection",
    "colorFamily": "Taupe",
    "description": "Khimar bandana Aisha dari koleksi Vuyama. Bahan Arabian Voile dengan siluet panjang untuk pilihan gaya yang lebih tertutup.",
    "images": [
      "aisha.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Taupe · sesuai foto",
        "hex": "#bbbaa5",
        "image": "aisha.webp",
        "family": "Taupe"
      }
    ]
  },
  {
    "id": "hayla-khiban",
    "name": "Hayla Khiban",
    "category": "Khimar",
    "material": "Rayon Airflow",
    "price": 49000,
    "label": "The Vuyama collection",
    "colorFamily": "Taupe",
    "description": "Khimar bandana Hayla berbahan Rayon Airflow. Pilihan dengan nuansa netral yang mudah dipadukan dengan busana sehari-hari.",
    "images": [
      "hayla.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Taupe · sesuai foto",
        "hex": "#b9a79a",
        "image": "hayla.webp",
        "family": "Taupe"
      }
    ]
  },
  {
    "id": "mukena-armani",
    "name": "Mukena Armani Velvet",
    "category": "Mukena",
    "material": "Armani Velvet",
    "price": null,
    "label": "The Vuyama collection",
    "colorFamily": "Pink",
    "description": "Koleksi mukena Armani dari seri Velvet. Harga sesuai seri dan pilihan warna dikonfirmasi bersama admin sebelum pembayaran.",
    "images": [
      "armani.webp"
    ],
    "variants": [
      {
        "id": "velvet-vol-2",
        "name": "Velvet Vol. 2 · sesuai foto",
        "hex": "#cd969d",
        "image": "armani.webp",
        "family": "Pink"
      }
    ],
    "contain": true
  },
  {
    "id": "mukena-segenggam-polos",
    "name": "Mukena Segenggam Polos",
    "category": "Mukena",
    "material": "New Solite",
    "price": 169000,
    "label": "The Vuyama collection",
    "colorFamily": "Lavender",
    "description": "Koleksi mukena segenggam dengan tampilan polos. Material New Solite dan tas pendamping yang ditampilkan pada foto produk.",
    "images": [
      "segenggam-polos.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Lavender · sesuai foto",
        "hex": "#bdaeb5",
        "image": "segenggam-polos.webp",
        "family": "Lavender"
      }
    ],
    "contain": true
  },
  {
    "id": "mukena-segenggam-lily",
    "name": "Mukena Segenggam Lily",
    "category": "Mukena",
    "material": "New Solite",
    "price": null,
    "label": "The Vuyama collection",
    "colorFamily": "Motif",
    "description": "Motif bunga dari Lily Series. Harga dan pilihan motif mukena segenggam ini dikonfirmasi bersama admin sebelum pembayaran.",
    "images": [
      "segenggam-lily.webp"
    ],
    "variants": [
      {
        "id": "lily-series",
        "name": "Lily Series · konfirmasi motif",
        "hex": "#aaa4b6",
        "image": "segenggam-lily.webp",
        "family": "Motif"
      }
    ],
    "contain": true
  },
  {
    "id": "mukena-rayon-viscose",
    "name": "Mukena Rayon Viscose",
    "category": "Mukena",
    "material": "Rayon Viscose",
    "price": null,
    "label": "The Vuyama collection",
    "colorFamily": "Motif",
    "description": "Koleksi mukena Rayon Viscose bermotif. Pilih koleksi ini untuk pesananmu, lalu konfirmasikan warna, harga, dan ketersediaan bersama admin.",
    "images": [
      "rayon.webp"
    ],
    "variants": [
      {
        "id": "sesuai-foto",
        "name": "Motif · sesuai foto",
        "hex": "#673140",
        "image": "rayon.webp",
        "family": "Motif"
      }
    ],
    "contain": true
  },
  {
    "id": "hampers-soft-box",
    "name": "Hampers Soft Box",
    "category": "Hampers",
    "material": "Soft box & kartu ucapan",
    "price": null,
    "label": "The Vuyama collection",
    "colorFamily": "Motif",
    "description": "Soft box berukuran 20 × 20 cm, kartu ucapan, hang tag, dan pita sesuai foto katalog. Isi hijab, desain kemasan, serta harga paket dikonfirmasi bersama admin.",
    "images": [
      "hampers-reference.webp"
    ],
    "variants": [
      {
        "id": "soft-box",
        "name": "Soft Box · konfirmasi isi paket",
        "hex": "#d2bd8c",
        "image": "hampers-reference.webp",
        "family": "Motif"
      }
    ],
    "contain": true,
    "size": "20 × 20 cm"
  }
];
export const categories = ['Semua','Pashmina','Segi Empat','Instan','Khimar','Mukena','Hampers'];
export const findProduct = id => products.find(p => p.id === id);
