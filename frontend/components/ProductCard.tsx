import React from 'react';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onClick }) => {
  return (
    <div className="group relative bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden rounded-sm">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 pointer-events-none">
        {product.discount && (
          <span className="bg-secondary text-dark text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            New
          </span>
        )}
      </div>

      {/* Image & Actions */}
      <div className="relative aspect-square overflow-hidden p-4">
        <img 
          src={product.image} 
          alt={product.title} 
          onClick={() => onClick(product)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 cursor-pointer"
        />
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
          <button 
            onClick={() => onClick(product)}
            className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors text-gray-600" 
            title="Quick View"
          >
            <Eye size={18} />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary hover:text-white transition-colors text-gray-600" title="Add to Wishlist">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <p className="text-xs text-gray-500 uppercase tracking-wide hover:text-primary cursor-pointer">
          {product.category}
        </p>
        <h3 
          onClick={() => onClick(product)}
          className="font-medium text-dark text-sm leading-snug hover:text-primary cursor-pointer line-clamp-2 h-10"
        >
          {product.title}
        </h3>
        
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">(12 reviews)</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
            )}
            <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="p-2.5 bg-gray-100 text-dark rounded-full hover:bg-primary hover:text-white transition-colors group-hover:bg-primary group-hover:text-white"
            title="Add to Cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;