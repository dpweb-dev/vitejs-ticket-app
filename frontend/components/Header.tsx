import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, Phone, ChevronDown, GitCompare } from 'lucide-react';
import { CartItem, Category } from '../types';
import { CATEGORIES } from '../constants';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  cartItems,
  onCartClick,
  searchTerm,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  isMobileMenuOpen,
  toggleMobileMenu
}) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="w-full flex flex-col">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="text-primary">Free delivery</span> for all orders over $140
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Store Location</a>
            <a href="#" className="hover:text-primary transition-colors">Track Order</a>
            <div className="flex items-center gap-1 hover:text-primary cursor-pointer">
              <span>English</span>
              <ChevronDown size={10} />
            </div>
            <div className="flex items-center gap-1 hover:text-primary cursor-pointer">
              <span>USD</span>
              <ChevronDown size={10} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-6 sticky top-0 z-40 shadow-sm md:static md:shadow-none">
        <div className="container mx-auto px-4 flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold tracking-tighter text-dark">
              MEGA<span className="text-primary">.</span>
            </h1>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase hidden md:block">Electronics Store</span>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-grow max-w-2xl mx-8 relative">
            <div className="flex w-full border-2 border-primary rounded-md overflow-hidden">
              <div className="relative group">
                <select 
                  className="appearance-none bg-gray-50 h-full px-4 pr-8 text-sm text-gray-600 outline-none border-r border-gray-200 cursor-pointer hover:bg-gray-100"
                  value={activeCategory}
                  onChange={(e) => onCategoryChange(e.target.value)}
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
              <input
                type="text"
                placeholder="I'm shopping for..."
                className="flex-grow px-4 text-sm outline-none"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <button className="bg-primary text-white px-6 hover:bg-blue-800 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-6">
            {/* Account */}
            <div className="hidden md:flex items-center gap-3 group cursor-pointer">
              <User size={28} strokeWidth={1.5} className="text-gray-700 group-hover:text-primary" />
              <div className="flex flex-col text-xs">
                <span className="text-gray-400">Hello, Sign in</span>
                <span className="font-bold text-dark group-hover:text-primary">My Account</span>
              </div>
            </div>
            
            {/* Icons Mobile */}
            <div className="md:hidden text-dark p-2">
              <Search size={24} />
            </div>

            {/* Compare/Wishlist Desktop */}
            <div className="hidden md:block relative cursor-pointer group">
               <GitCompare size={26} strokeWidth={1.5} className="text-gray-700 hover:text-primary" />
               <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </div>
            <div className="hidden md:block relative cursor-pointer group">
               <Heart size={26} strokeWidth={1.5} className="text-gray-700 hover:text-primary" />
               <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={onCartClick}>
              <div className="relative">
                <ShoppingCart size={28} strokeWidth={1.5} className="text-gray-700 group-hover:text-primary" />
                <span className="absolute -top-1 -right-2 bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {totalItems}
                </span>
              </div>
              <div className="hidden md:flex flex-col text-xs">
                <span className="text-gray-400">Shopping Cart</span>
                <span className="font-bold text-dark group-hover:text-primary">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-primary text-white hidden md:block">
        <div className="container mx-auto px-4 flex items-center h-12">
          {/* Browse Categories - Vertical Menu Toggle */}
          <div className="w-64 bg-white/10 h-full flex items-center px-4 gap-3 font-bold text-sm uppercase tracking-wider cursor-pointer hover:bg-white/20 transition-colors relative group">
            <Menu size={18} />
            <span>Browse Categories</span>
            <div className="ml-auto bg-white text-primary text-[9px] font-bold px-1.5 py-0.5 rounded-sm">OPEN</div>
          </div>

          {/* Horizontal Menu */}
          <nav className="flex-grow flex items-center gap-8 px-8 text-sm font-medium uppercase tracking-wide">
            <a href="#" className="text-secondary hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-secondary transition-colors flex items-center gap-1">
              Shop <ChevronDown size={12} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors flex items-center gap-1">
              Blog <ChevronDown size={12} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors flex items-center gap-1">
              Pages <ChevronDown size={12} />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">About Us</a>
            <a href="#" className="hover:text-secondary transition-colors">Contact Us</a>
          </nav>

          {/* Special Offer */}
          <a href="#" className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:text-secondary transition-colors">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Special Offer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;