import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductPage from './components/ProductPage';
import CheckoutPage from './components/CheckoutPage';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem } from './types';
import { X } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product' | 'checkout'>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);

  // Filter Logic
  useEffect(() => {
    let result = PRODUCTS;

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchTerm.trim() !== '') {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [activeCategory, searchTerm]);

  // Navigation Logic
  const handleProductClick = (product: Product) => {
    setSelectedProductId(product.id);
    setCurrentView('product');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProductId(null);
    window.scrollTo(0, 0);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
    window.scrollTo(0, 0);
  };

  // Cart Logic
  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    // Normally open drawer, but we handle that at the call site if needed
    // setIsCartOpen(true); 
  };

  // Regular add to cart (opens drawer)
  const handleAddToCart = (product: Product, quantity: number = 1) => {
    addToCart(product, quantity);
    setIsCartOpen(true);
  };

  // Buy Now (Adds to cart + redirects to checkout)
  const handleBuyNow = (product: Product, quantity: number) => {
    addToCart(product, quantity);
    setIsCartOpen(false); // Ensure drawer is closed
    setCurrentView('checkout');
    window.scrollTo(0, 0);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const handlePlaceOrder = () => {
      alert("Thank you for your order! This is a demo.");
      setCartItems([]);
      setCurrentView('home');
      window.scrollTo(0, 0);
  };

  const selectedProduct = PRODUCTS.find(p => p.id === selectedProductId);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-dark">
      <Header 
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={(term) => {
          setSearchTerm(term);
          if (currentView !== 'home') setCurrentView('home');
        }}
        activeCategory={activeCategory}
        onCategoryChange={(cat) => {
          setActiveCategory(cat);
          if (currentView !== 'home') setCurrentView('home');
        }}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
           <div className="w-[80%] max-w-xs bg-white h-full shadow-lg p-4">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-lg font-bold">Menu</h2>
                 <button onClick={() => setIsMobileMenuOpen(false)}>
                    <X size={24} />
                 </button>
              </div>
              <ul className="space-y-4 font-medium">
                 <li><button onClick={() => { handleBackToHome(); setIsMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-gray-100">Home</button></li>
                 <li><button onClick={() => { handleBackToHome(); setIsMobileMenuOpen(false); }} className="block w-full text-left py-2 border-b border-gray-100">Shop</button></li>
                 <li><a href="#" className="block py-2 border-b border-gray-100">Categories</a></li>
                 <li><a href="#" className="block py-2 border-b border-gray-100">Blog</a></li>
                 <li><a href="#" className="block py-2 border-b border-gray-100">Contact</a></li>
              </ul>
           </div>
        </div>
      )}

      {currentView === 'home' && (
        <main className="container mx-auto px-4 py-4 flex-grow">
          <div className="flex gap-6 relative">
            
            {/* Sidebar (Desktop) */}
            <Sidebar 
              activeCategory={activeCategory} 
              onCategorySelect={setActiveCategory} 
            />

            {/* Main Content Area */}
            <div className="flex-grow w-full min-w-0">
              {/* Hero Section */}
              {searchTerm === '' && activeCategory === 'all' && (
                 <div className="mb-8">
                   <Hero />
                 </div>
              )}

              {/* Product Grid Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                 <h2 className="text-xl font-bold uppercase tracking-wide text-dark">
                    {activeCategory === 'all' ? (searchTerm ? `Search Results for "${searchTerm}"` : 'Popular Products') : CATEGORIES.find(c => c.id === activeCategory)?.name}
                 </h2>
                 <div className="text-sm text-gray-500 hidden sm:block">
                    Showing {filteredProducts.length} results
                 </div>
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={(p) => handleAddToCart(p, 1)}
                      onClick={handleProductClick}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center bg-gray-50 rounded-sm border border-gray-100">
                   <p className="text-gray-500 text-lg">No products found matching your selection.</p>
                   <button onClick={() => {setActiveCategory('all'); setSearchTerm('')}} className="mt-4 text-primary font-bold underline">Clear Filters</button>
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      {currentView === 'product' && (
        selectedProduct ? (
          <ProductPage 
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onBack={handleBackToHome}
          />
        ) : (
          <div className="flex-grow flex items-center justify-center">
             <div className="text-center">
               <h2 className="text-2xl font-bold mb-4">Product not found</h2>
               <button onClick={handleBackToHome} className="text-primary underline">Back to Home</button>
             </div>
          </div>
        )
      )}

      {currentView === 'checkout' && (
        <CheckoutPage 
            cartItems={cartItems} 
            onPlaceOrder={handlePlaceOrder}
            onBackToHome={handleBackToHome}
        />
      )}

      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;