import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity, onCheckout }) => {
  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-50 transform transition-transform duration-300 shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white">
          <h2 className="text-lg font-bold text-dark uppercase tracking-wide">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 text-xs font-medium uppercase">
            Close <X size={18} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-5 space-y-4 scrollbar-hide">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-60">
              <ShoppingBag size={64} className="text-gray-300" />
              <p className="text-gray-500 font-medium">No products in the cart.</p>
              <button onClick={onClose} className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-800 transition-colors">
                Return to Shop
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-gray-50 pb-4">
                <div className="w-20 h-20 flex-shrink-0 bg-gray-50 border border-gray-100 rounded-sm overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <h3 className="text-sm font-medium text-dark line-clamp-2 pr-2 hover:text-primary cursor-pointer">{item.title}</h3>
                     <button onClick={() => onRemoveItem(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                     </button>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="flex items-center border border-gray-200 rounded-full">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-primary text-sm disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-dark px-2">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-primary text-sm"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-primary font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 text-sm font-medium uppercase">Subtotal</span>
              <span className="text-xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex flex-col gap-3">
               <button className="w-full bg-white border border-gray-200 text-dark py-3 rounded-sm font-bold text-sm uppercase tracking-wide hover:bg-gray-100 transition-colors">
                 View Cart
               </button>
               <button 
                 onClick={onCheckout}
                 className="w-full bg-primary text-white py-3 rounded-sm font-bold text-sm uppercase tracking-wide hover:bg-blue-800 transition-colors shadow-lg"
               >
                 Checkout
               </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;