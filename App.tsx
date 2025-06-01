
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryTabs from './components/CategoryTabs';
import ProductGrid from './components/ProductGrid';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB'; // Added import
import { Product, ProductCategory } from './types';
import { SAMPLE_PRODUCTS, CATEGORIES } from './constants';

const App: React.FC = () => {
  // Initialize products directly, remove isLoading state
  const [products, setProducts] = useState<Product[]>(SAMPLE_PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(SAMPLE_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(ProductCategory.All);

  // Removed useEffect for simulating API call

  useEffect(() => {
    if (selectedCategory === ProductCategory.All) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const handleSelectCategory = (category: ProductCategory) => {
    setSelectedCategory(category);
  };

  // Removed isLoading check and loading UI

  return (
    <div className="flex flex-col min-h-screen bg-dark-900">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CategoryTabs 
          categories={CATEGORIES} 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleSelectCategory} 
        />
        <ProductGrid products={filteredProducts} />
        <PromoBanner />
      </main>
      <Footer />
      <WhatsAppFAB /> {/* Added WhatsApp FAB */}
    </div>
  );
};

export default App;
