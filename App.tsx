import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import AboutPage from './pages/About';
import HowToOrderPage from './pages/HowToOrder';
import MarketplacePage from './pages/Marketplace';
import ContactPage from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produk" element={<ProductsPage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/cara-pesan" element={<HowToOrderPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/kontak" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;