import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoldRateProvider } from './context/GoldRateContext';
import Navbar from './components/Navbar';
import GoldRateTicker from './components/GoldRateTicker';
import Footer from './components/Footer';
import Home from './pages/Home';
import SubCategoryPage from './pages/SubCategoryPage';

function App() {
  console.log('Jewellery Showcase Rendering...');
  return (
    <GoldRateProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white">
          <GoldRateTicker />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:type/:sub" element={<SubCategoryPage />} />
              <Route path="/about" element={<div className="p-20 text-center text-2xl font-serif">About Santhi Jewellers coming soon...</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GoldRateProvider>
  );
}

export default App;
