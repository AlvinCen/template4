import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Wrench, Truck } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS, PARTNERS, GALLERY_IMAGES, FAQS } from '../constants';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  // Get top 4 products
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-dark-900 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?random=hero')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-transparent z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30 text-sm font-semibold mb-6">
              <Star size={14} className="fill-current" />
              <span>Sejak 2010 Melayani Peternak Indonesia</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Kandang Hewan <span className="text-primary-500">Berkualitas</span> Untuk Hasil Ternak Maksimal
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {COMPANY_INFO.tagline}. Fabrikasi kandang galvanis dengan desain knockdown yang praktis, awet, dan fungsional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={COMPANY_INFO.shopeeMainUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-primary-500/30"
              >
                Order via Shopee
                <ArrowRight className="ml-2" size={20} />
              </a>
              <Link 
                to="/produk" 
                className="inline-flex justify-center items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm font-bold rounded-lg border border-white/20 transition-all"
              >
                Lihat Katalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US / STATS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Material Teruji</h3>
                <p className="text-gray-600 text-sm">Menggunakan kawat galvanis anti karat dengan opsi powder coating untuk ketahanan maksimal.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                <Wrench size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Desain Praktis</h3>
                <p className="text-gray-600 text-sm">Sistem knockdown (bongkar pasang) yang mudah dirakit dengan panduan video tutorial lengkap.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                <Truck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">Kirim Se-Indonesia</h3>
                <p className="text-gray-600 text-sm">Didukung partner logistik kargo terpercaya di berbagai marketplace untuk ongkir hemat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Produk Unggulan</h2>
              <p className="text-gray-600">Pilihan terbaik untuk peternakan Anda</p>
            </div>
            <Link to="/produk" className="hidden md:flex items-center text-primary-600 font-semibold hover:text-primary-700">
              Lihat Semua <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/produk" className="inline-block px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50">
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS BAR */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">
            Tersedia di Marketplace & E-Katalog Pemerintah
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center group cursor-default">
                 {/* Text Fallback for Logo as per instruction */}
                 <span className="text-xl md:text-2xl font-black text-gray-800 group-hover:text-primary-600 transition-colors">
                   {partner.logoText}
                 </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY (Simulated Video Frames) */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Galeri Workshop</h2>
            <p className="text-gray-400">Intip proses produksi dan kualitas pengerjaan kami</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <div key={idx} className="relative aspect-video rounded-lg overflow-hidden group bg-gray-800">
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium text-white">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Pertanyaan Umum</h2>
          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
             <Link to="/cara-pesan" className="text-primary-600 font-semibold hover:underline">Lihat Panduan Lengkap &rarr;</Link>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-16 bg-primary-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Meningkatkan Produktivitas Ternak?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Dapatkan kandang berkualitas langsung dari produsen. Harga bersaing, kualitas terjamin.
          </p>
          <a 
            href={COMPANY_INFO.shopeeMainUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          >
            Beli Sekarang di Shopee
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;