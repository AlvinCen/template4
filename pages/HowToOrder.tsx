import React from 'react';
import { ShoppingCart, Package, Truck, Smile } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const HowToOrderPage: React.FC = () => {
  const steps = [
    {
      icon: <ShoppingCart size={32} />,
      title: "Pilih Produk",
      desc: "Buka toko resmi kami di Shopee. Pilih kandang sesuai kebutuhan (jenis hewan & kapasitas)."
    },
    {
      icon: <Package size={32} />,
      title: "Checkout",
      desc: "Pastikan alamat benar. Gunakan voucher gratis ongkir Shopee jika tersedia."
    },
    {
      icon: <Truck size={32} />,
      title: "Pengiriman",
      desc: "Kami memproses pesanan dengan packing aman. Barang dikirim dalam kondisi knockdown."
    },
    {
      icon: <Smile size={32} />,
      title: "Rakit & Pakai",
      desc: "Terima barang, rakit sesuai video tutorial kami, dan kandang siap digunakan."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Cara Pemesanan</h1>
          <p className="text-gray-600">Mudah dan aman berbelanja di LAQUILA Official Store.</p>
        </div>

        {/* Steps */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon Bubble */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary-100 text-primary-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-sm">{idx + 1}</span>
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-primary-500 mb-3">{step.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <div className="mt-16 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6 text-gray-900">Tips Memilih Kandang</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
              <p className="text-gray-600 text-sm"><strong>Sesuaikan Jenis Hewan:</strong> Beda hewan, beda jarak jeruji. Kandang ayam tidak cocok untuk puyuh.</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
              <p className="text-gray-600 text-sm"><strong>Hitung Populasi:</strong> Pastikan kapasitas kandang sesuai dengan jumlah ternak agar tidak over-crowded.</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5">✓</span>
              <p className="text-gray-600 text-sm"><strong>Lokasi Kandang:</strong> Ukur area kandang Anda. Produk kami modular sehingga bisa ditata memanjang atau bertingkat.</p>
            </li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a 
             href={COMPANY_INFO.shopeeMainUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block px-8 py-4 bg-primary-500 text-white font-bold rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
          >
            Mulai Belanja di Shopee
          </a>
        </div>

      </div>
    </div>
  );
};

export default HowToOrderPage;