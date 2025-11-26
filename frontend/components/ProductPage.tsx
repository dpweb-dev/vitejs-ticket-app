import React, { useState } from 'react';
import { Star, Heart, GitCompare, Share2, Facebook, Twitter, Mail, Check, ShieldCheck, Clock, Plus, Minus, Home, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductPageProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product, quantity: number) => void;
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onAddToCart, onBuyNow, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const stock = product.stock || 20; // fallback mock stock
  const stockProgress = Math.min((stock / 50) * 100, 100);

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, Math.min(stock, prev + delta)));
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 mb-8">
        <div className="container mx-auto px-4 flex items-center text-xs text-gray-500 uppercase tracking-wide">
          <span className="cursor-pointer hover:text-primary flex items-center gap-1" onClick={onBack}>
            <Home size={12} /> Home
          </span>
          <ChevronRight size={12} className="mx-2" />
          <span className="cursor-pointer hover:text-primary">{product.category}</span>
          <ChevronRight size={12} className="mx-2" />
          <span className="text-gray-400 truncate">{product.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column: Images */}
          <div className="flex flex-col gap-4">
            <div className="relative border border-gray-100 rounded-sm overflow-hidden bg-white group">
              {product.discount && (
                 <span className="absolute top-4 left-4 z-10 bg-secondary text-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                   -{product.discount}%
                 </span>
              )}
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-primary">
                 <Share2 size={18} />
              </button>
            </div>
            {/* Mock Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
               {[product.image, product.image, product.image].map((img, idx) => (
                  <div key={idx} className={`w-20 h-20 border rounded-sm overflow-hidden cursor-pointer ${idx === 0 ? 'border-primary' : 'border-gray-200 hover:border-gray-300'}`}>
                     <img src={img} className="w-full h-full object-cover" alt="Thumbnail" />
                  </div>
               ))}
            </div>
          </div>

          {/* Right Column: Details */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-dark mb-3 leading-tight">{product.title}</h1>
            
            <div className="flex items-center gap-4 mb-6">
               <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                ))}
               </div>
               <span className="text-xs text-gray-500 hover:text-primary cursor-pointer">(1 customer review)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
               {product.oldPrice && (
                  <span className="text-lg text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
               )}
               <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {product.description || "Experience top-tier performance with this product. It features a modern design, high-quality materials, and advanced functionality to meet all your needs."}
            </p>

            {/* Countdown Mock */}
            <div className="bg-red-50 border border-red-100 p-4 rounded-sm mb-6">
               <div className="flex items-center gap-2 text-red-600 font-bold uppercase text-xs tracking-wider mb-2">
                  <Clock size={14} /> Hurry up! Sale ends in:
               </div>
               <div className="flex gap-2">
                  {['02 Days', '14 Hours', '32 Mins', '45 Secs'].map((time, i) => (
                     <div key={i} className="flex-1 bg-white text-center py-2 rounded-sm border border-red-100 shadow-sm">
                        <span className="text-red-600 font-bold text-sm block">{time.split(' ')[0]}</span>
                        <span className="text-[10px] text-gray-400 uppercase">{time.split(' ')[1]}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Stock Bar */}
            <div className="mb-8">
               <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-green-600">In Stock</span>
                  <span className="text-gray-400">Only {stock} left</span>
               </div>
               <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: `${stockProgress}%` }}></div>
               </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <div className="flex items-center border border-gray-300 rounded-sm h-12 w-32 flex-shrink-0">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="flex-grow text-center font-bold text-dark">{quantity}</span>
                  <button 
                     onClick={() => handleQuantityChange(1)}
                     className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                     disabled={quantity >= stock}
                  >
                    <Plus size={14} />
                  </button>
               </div>
               
               <button 
                  onClick={() => onAddToCart(product, quantity)}
                  className="flex-1 bg-primary text-white font-bold uppercase text-sm tracking-wider h-12 px-6 rounded-sm hover:bg-dark transition-colors"
                >
                  Add to Cart
               </button>
               
               <button 
                  onClick={() => onBuyNow(product, quantity)}
                  className="flex-1 bg-secondary text-dark font-bold uppercase text-sm tracking-wider h-12 px-6 rounded-sm hover:bg-yellow-400 transition-colors"
                >
                  Buy Now
               </button>
            </div>

            {/* Secondary Actions */}
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-8">
               <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <GitCompare size={16} /> Compare
               </button>
               <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Heart size={16} /> Add to Wishlist
               </button>
            </div>

            {/* Meta */}
            <div className="space-y-2 text-xs text-gray-500 mb-6">
               <div className="flex gap-2">
                  <span className="font-bold text-dark w-20">SKU:</span> 
                  <span>{product.sku || 'N/A'}</span>
               </div>
               <div className="flex gap-2">
                  <span className="font-bold text-dark w-20">Category:</span> 
                  <span className="text-primary cursor-pointer hover:underline capitalize">{product.category}</span>
               </div>
               <div className="flex gap-2">
                  <span className="font-bold text-dark w-20">Tags:</span> 
                  <span className="hover:text-primary cursor-pointer">electronics, tech, new, sale</span>
               </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-4">
               <span className="text-xs font-bold text-dark uppercase">Share:</span>
               <div className="flex gap-3">
                  <Facebook size={16} className="text-gray-400 hover:text-[#3b5998] cursor-pointer transition-colors" />
                  <Twitter size={16} className="text-gray-400 hover:text-[#1da1f2] cursor-pointer transition-colors" />
                  <Mail size={16} className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
               </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 border border-gray-100 rounded-sm flex items-center gap-3">
               <ShieldCheck size={24} className="text-green-600" />
               <div className="text-xs">
                  <span className="font-bold text-dark block mb-1">Guaranteed Safe Checkout</span>
                  <img src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2017/06/payments.png" alt="Payments" className="h-4 opacity-70" />
               </div>
            </div>

          </div>
        </div>
        
        {/* Tabs Section (Simplified) */}
        <div className="mt-16 border-t border-gray-200 pt-10">
           <div className="flex justify-center gap-8 mb-8 border-b border-gray-200">
              <button className="pb-4 border-b-2 border-primary text-primary font-bold uppercase text-sm tracking-wide">Description</button>
              <button className="pb-4 border-b-2 border-transparent text-gray-500 font-bold uppercase text-sm tracking-wide hover:text-dark">Additional Information</button>
              <button className="pb-4 border-b-2 border-transparent text-gray-500 font-bold uppercase text-sm tracking-wide hover:text-dark">Reviews (1)</button>
           </div>
           
           <div className="max-w-4xl mx-auto text-gray-600 text-sm leading-loose">
              <p className="mb-4">
                 Warning: This is a clone website for demonstration purposes. The products listed are not real. 
                 {product.description}
              </p>
              <p>
                 Maecenas egestas non potenti penatibus sem fusce suspendisse arcu ligula suspendisse ullamcorper 
                 viverra rhoncus velit. Volutpat at scelerisque dapibus mi velit ut non a amet diam interdum 
                 ullamcorper nisl adipiscing dui.
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;