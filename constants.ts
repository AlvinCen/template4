import { FighterBrand, Partner, Product, ProductCategory, TimelineEvent, FaqItem } from './types';

// COMPANY INFO
export const COMPANY_INFO = {
  name: "CV LAQUILA INDONESIA",
  shortName: "LAQUILA",
  tagline: "SiPaling Kandang — Mengerti Kebutuhan Hewan Anda",
  description: "Workshop fabrikasi kandang hewan (Animal Cages Workshop) yang berfokus pada kualitas, fungsionalitas, dan inovasi. Tumbuh bersama peternak sejak 2010.",
  ceo: "Imam Alfarisyi Indradi, S.ST.",
  address: "Yogyakarta, Indonesia (Workshop)", // Placeholder based on general knowledge of region if not in PDF, otherwise generic
  shopeeMainUrl: "https://shopee.co.id/laquilastore1",
  whatsapp: "6281234567890", // Placeholder as per rules if not explicitly extracted, but using safe format
  email: "admin@laquila.id" // Placeholder
};

// TIMELINE
export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "2010",
    title: "Awal Berdiri",
    description: "Memulai perjalanan usaha di bidang peternakan dan kandang."
  },
  {
    year: "2014",
    title: "Pengembangan",
    description: "Memperluas jangkauan pasar dan variasi produk."
  },
  {
    year: "2020",
    title: "Adaptasi Era Baru",
    description: "Fokus pada penjualan digital dan inovasi produk berbasis feedback pelanggan."
  },
  {
    year: "2021",
    title: "Rebranding CV LAQUILA",
    description: "Resmi menjadi CV LAQUILA INDONESIA dengan visi menjadi market leader di industri kandang hewan rakitan."
  }
];

// FIGHTER BRANDS
export const FIGHTER_BRANDS: FighterBrand[] = [
  {
    name: "LAQUILA STORE",
    role: "Industri & Grosir",
    description: "Fokus pada pemenuhan kebutuhan skala industri dan pembelian grosir dengan kapasitas produksi besar."
  },
  {
    name: "GALVA PROJECT",
    role: "Spesifikasi Teruji",
    description: "Menyediakan produk dengan spesifikasi umum yang telah teruji durabilitas dan fungsionalitasnya di lapangan."
  },
  {
    name: "KAWANI ID",
    role: "Kompetitif",
    description: "Lini produk yang dirancang agar lebih terjangkau namun tetap menjaga standar kualitas dasar."
  }
];

// PRODUCTS (Simulated Extraction based on 'Focus: Kandang Ayam' + Categories)
export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Kandang Baterai Ayam Petelur 4 Pintu (Galvanis)",
    category: ProductCategory.AYAM,
    priceRange: "Rp 135.000 - Rp 185.000",
    description: "Material kawat galvanis anti karat. Desain sekat miring memudahkan gelinding telur. Kapasitas 8 ekor.",
    shopeeUrl: "https://shopee.co.id/laquilastore1",
    imagePlaceholder: "https://picsum.photos/400/400?random=1",
    isBestSeller: true
  },
  {
    id: "p2",
    name: "Kandang Baterai Ayam Petelur 6 Pintu Premium",
    category: ProductCategory.AYAM,
    priceRange: "Rp 195.000 - Rp 250.000",
    description: "Kawat tebal powder coating opsional. Cocok untuk peternakan intensif. Awet hingga 5-10 tahun.",
    shopeeUrl: "https://shopee.co.id/laquilastore1",
    imagePlaceholder: "https://picsum.photos/400/400?random=2",
    isBestSeller: true
  },
  {
    id: "p3",
    name: "Kandang Puyuh Petelur Bertingkat",
    category: ProductCategory.PUYUH,
    priceRange: "Rp 250.000 - Rp 450.000",
    description: "Desain hemat tempat, sistem kotoran jatuh ke bawah (droppings). Mudah dibersihkan.",
    shopeeUrl: "https://shopee.co.id/laquilastore1",
    imagePlaceholder: "https://picsum.photos/400/400?random=3"
  },
  {
    id: "p4",
    name: "Aviary Mini Burung Hias",
    category: ProductCategory.AVIARY,
    priceRange: "Rp 350.000 - Rp 700.000",
    description: "Kandang umbaran untuk burung lovebird, kenari, atau parkit. Luas dan sirkulasi udara baik.",
    shopeeUrl: "https://shopee.co.id/laquilastore1",
    imagePlaceholder: "https://picsum.photos/400/400?random=4"
  },
  {
    id: "p5",
    name: "Kandang Sugar Glider Full Set",
    category: ProductCategory.SUGAR_GLIDER,
    priceRange: "Rp 150.000 - Rp 300.000",
    description: "Tinggi vertikal cocok untuk hewan pemanjat. Coating halus aman untuk kaki hewan.",
    shopeeUrl: "https://shopee.co.id/laquilastore1",
    imagePlaceholder: "https://picsum.photos/400/400?random=5"
  },
  {
    id: "p6",
    name: "Kandang Kelinci Galvanis Lantai Halus",
    category: ProductCategory.KELINCI,
    priceRange: "Rp 200.000 - Rp 400.000",
    description: "Jarak jeruji lantai aman untuk kaki kelinci. Anti karat dan mudah dicuci.",
    shopeeUrl: "https://shopee.co.id/laquilastore1",
    imagePlaceholder: "https://picsum.photos/400/400?random=6"
  },
  {
    id: "p7",
    name: "Nipple Drinker Ayam (Aksesoris)",
    category: ProductCategory.AKSESORIS,
    priceRange: "Rp 5.000 - Rp 15.000",
    description: "Alat minum otomatis anti bocor. Menjaga kandang tetap kering.",
    shopeeUrl: "https://shopee.co.id/laquilastore1",
    imagePlaceholder: "https://picsum.photos/400/400?random=7"
  },
  {
    id: "p8",
    name: "Kandang Baterai Ayam 8 Pintu (Industrial)",
    category: ProductCategory.AYAM,
    priceRange: "Rp 300.000 - Rp 500.000",
    description: "Spesifikasi industri untuk populasi padat. Konstruksi kokoh.",
    shopeeUrl: "https://shopee.co.id/laquilastore1",
    imagePlaceholder: "https://picsum.photos/400/400?random=8"
  }
];

// PARTNERS
export const PARTNERS: Partner[] = [
  {
    name: "Shopee",
    logoText: "Shopee",
    description: "Official Store utama kami. Promo gratis ongkir dan COD tersedia.",
    url: "https://shopee.co.id/laquilastore1",
    isAvailable: true,
    type: 'Marketplace'
  },
  {
    name: "Tokopedia",
    logoText: "Tokopedia",
    description: "Belanja aman dengan rekening bersama dan berbagai opsi pengiriman.",
    url: null,
    isAvailable: false,
    type: 'Marketplace'
  },
  {
    name: "Lazada",
    logoText: "Lazada",
    description: "Platform belanja dengan jaminan kepuasan pelanggan.",
    url: null,
    isAvailable: false,
    type: 'Marketplace'
  },
  {
    name: "Blibli",
    logoText: "Blibli",
    description: "Cicilan 0% dan jaminan produk orisinal.",
    url: null,
    isAvailable: false,
    type: 'Marketplace'
  },
  {
    name: "e-Katalog LKPP",
    logoText: "e-Katalog",
    description: "Pengadaan barang/jasa pemerintah. Transparan dan akuntabel.",
    url: null,
    isAvailable: false,
    type: 'Procurement'
  },
  {
    name: "SIPLah",
    logoText: "SIPLah",
    description: "Sistem Informasi Pengadaan Sekolah. Dana BOS aman.",
    url: null,
    isAvailable: false,
    type: 'Procurement'
  }
];

// FAQ
export const FAQS: FaqItem[] = [
  {
    question: "Apakah kandang dikirim dalam keadaan terakit?",
    answer: "Tidak. Produk dikirim dalam bentuk knockdown (bongkar pasang) untuk menghemat ongkir. Kami sediakan video tutorial perakitan yang mudah diikuti."
  },
  {
    question: "Apa keunggulan bahan Galvanis di Laquila?",
    answer: "Kami menggunakan kawat galvanis berkualitas yang lebih tahan karat dibanding kawat besi biasa, sehingga umur pakai kandang lebih panjang."
  },
  {
    question: "Apakah bisa kirim ke luar pulau Jawa?",
    answer: "Bisa. Kami melayani pengiriman ke seluruh Indonesia melalui ekspedisi kargo yang tersedia di marketplace (JNE Trucking, Sicepat Gokil, dll)."
  },
  {
    question: "Apakah bisa custom ukuran kandang?",
    answer: "Untuk pemesanan ritel/satuan, kami sarankan ukuran standar yang tersedia. Untuk proyek skala besar (industri), silakan hubungi kontak admin."
  },
  {
    question: "Berapa lama garansi produk?",
    answer: "Kami menjamin produk sampai dalam kondisi baik. Jika ada cacat produksi saat diterima, silakan ajukan komplain via marketplace dengan video unboxing."
  },
  {
    question: "Bagaimana cara beli lewat Dana BOS/Pemerintah?",
    answer: "Kami tersedia di SIPLah dan e-Catalogue LKPP. Silakan cari 'CV LAQUILA INDONESIA' atau hubungi admin untuk link spesifik."
  }
];

// GALLERY PLACEHOLDERS (Frames from Video)
export const GALLERY_IMAGES = [
  { src: "https://picsum.photos/800/600?random=10", caption: "Proses QC Kawat Galvanis" },
  { src: "https://picsum.photos/800/600?random=11", caption: "Stok Gudang Siap Kirim" },
  { src: "https://picsum.photos/800/600?random=12", caption: "Detail Sambungan Las" },
  { src: "https://picsum.photos/800/600?random=13", caption: "Pengemasan Aman & Rapi" },
  { src: "https://picsum.photos/800/600?random=14", caption: "Tim Workshop Laquila" },
  { src: "https://picsum.photos/800/600?random=15", caption: "Produk Jadi: Kandang Ayam" },
];