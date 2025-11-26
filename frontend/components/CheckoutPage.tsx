import React, { useState } from 'react';
import { CartItem } from '../types';
import { Home, ChevronRight } from 'lucide-react';

interface CheckoutPageProps {
  cartItems: CartItem[];
  onPlaceOrder: () => void;
  onBackToHome: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, onPlaceOrder, onBackToHome }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const [paymentMethod, setPaymentMethod] = useState('bank');

  return (
    <div className="bg-white min-h-screen pb-12">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4 mb-8">
            <div className="container mx-auto px-4 flex items-center text-xs text-gray-500 uppercase tracking-wide">
                <span className="cursor-pointer hover:text-primary flex items-center gap-1" onClick={onBackToHome}>
                    <Home size={12} /> Home
                </span>
                <ChevronRight size={12} className="mx-2" />
                <span className="text-gray-400">Checkout</span>
            </div>
        </div>

        <div className="container mx-auto px-4">
             <h1 className="text-3xl font-bold text-dark mb-8">Checkout</h1>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Billing Details */}
                <div>
                    <h3 className="text-lg font-bold uppercase tracking-wide border-b border-gray-200 pb-3 mb-6">Billing Details</h3>
                    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); }}>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-dark">First name <span className="text-red-500">*</span></label>
                                <input type="text" className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors rounded-sm" required />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-bold text-dark">Last name <span className="text-red-500">*</span></label>
                                <input type="text" className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors rounded-sm" required />
                            </div>
                        </div>
                        
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-dark">Company name (optional)</label>
                            <input type="text" className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors rounded-sm" />
                        </div>

                         <div className="space-y-1">
                            <label className="text-sm font-bold text-dark">Country / Region <span className="text-red-500">*</span></label>
                            <select className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors text-gray-600 rounded-sm">
                                <option>United States (US)</option>
                                <option>United Kingdom (UK)</option>
                                <option>Canada</option>
                                <option>Australia</option>
                                <option>Germany</option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-bold text-dark">Street address <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="House number and street name" className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors mb-2 rounded-sm" required />
                            <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors rounded-sm" />
                        </div>

                         <div className="space-y-1">
                            <label className="text-sm font-bold text-dark">Town / City <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors rounded-sm" required />
                        </div>
                        
                         <div className="space-y-1">
                            <label className="text-sm font-bold text-dark">State <span className="text-red-500">*</span></label>
                            <select className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors text-gray-600 rounded-sm">
                                <option>California</option>
                                <option>New York</option>
                                <option>Texas</option>
                                <option>Florida</option>
                            </select>
                        </div>

                         <div className="space-y-1">
                            <label className="text-sm font-bold text-dark">ZIP Code <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors rounded-sm" required />
                        </div>

                         <div className="space-y-1">
                            <label className="text-sm font-bold text-dark">Phone <span className="text-red-500">*</span></label>
                            <input type="tel" className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors rounded-sm" required />
                        </div>

                         <div className="space-y-1">
                            <label className="text-sm font-bold text-dark">Email address <span className="text-red-500">*</span></label>
                            <input type="email" className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors rounded-sm" required />
                        </div>
                        
                        <div className="pt-4">
                             <h3 className="text-lg font-bold uppercase tracking-wide mb-3">Additional information</h3>
                             <div className="space-y-1">
                                <label className="text-sm font-bold text-dark">Order notes (optional)</label>
                                <textarea placeholder="Notes about your order, e.g. special notes for delivery." className="w-full border border-gray-200 p-3 text-sm focus:border-primary outline-none transition-colors h-32 rounded-sm"></textarea>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Your Order */}
                <div>
                     <div className="border-2 border-primary/10 p-8 rounded-sm relative">
                        <h3 className="text-lg font-bold uppercase tracking-wide mb-6">Your Order</h3>
                        
                        <div className="flex justify-between border-b border-gray-200 pb-3 mb-3 text-sm font-bold text-dark uppercase">
                            <span>Product</span>
                            <span>Subtotal</span>
                        </div>
                        
                        <div className="space-y-4 mb-4 border-b border-gray-200 pb-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between text-sm text-gray-600">
                                    <span className="pr-4">{item.title}  <strong className="text-dark">× {item.quantity}</strong></span>
                                    <span className="whitespace-nowrap font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                            {cartItems.length === 0 && <p className="text-sm text-gray-400 italic">Your cart is empty.</p>}
                        </div>

                        <div className="flex justify-between border-b border-gray-200 pb-3 mb-3 text-sm">
                            <span className="font-bold text-dark">Subtotal</span>
                            <span className="font-bold text-primary">${totalPrice.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-200 pb-3 mb-6 text-lg">
                            <span className="font-bold text-dark">Total</span>
                            <span className="font-bold text-primary">${totalPrice.toFixed(2)}</span>
                        </div>

                        {/* Payment Methods */}
                        <div className="bg-gray-50 p-5 rounded-sm mb-6 space-y-4">
                            <div>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        checked={paymentMethod === 'bank'} 
                                        onChange={() => setPaymentMethod('bank')}
                                        className="text-primary focus:ring-primary accent-primary"
                                    />
                                    <span className="font-bold text-dark text-sm">Direct bank transfer</span>
                                </label>
                                {paymentMethod === 'bank' && (
                                    <div className="mt-2 text-xs text-gray-500 pl-6 leading-relaxed">
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                    </div>
                                )}
                            </div>
                            
                            <div>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        checked={paymentMethod === 'check'} 
                                        onChange={() => setPaymentMethod('check')}
                                        className="text-primary focus:ring-primary accent-primary"
                                    />
                                    <span className="font-bold text-dark text-sm">Check payments</span>
                                </label>
                                 {paymentMethod === 'check' && (
                                    <div className="mt-2 text-xs text-gray-500 pl-6 leading-relaxed">
                                        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                    </div>
                                )}
                            </div>
                            
                            <div>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="payment" 
                                        checked={paymentMethod === 'cash'} 
                                        onChange={() => setPaymentMethod('cash')}
                                        className="text-primary focus:ring-primary accent-primary"
                                    />
                                    <span className="font-bold text-dark text-sm">Cash on delivery</span>
                                </label>
                                {paymentMethod === 'cash' && (
                                    <div className="mt-2 text-xs text-gray-500 pl-6 leading-relaxed">
                                        Pay with cash upon delivery.
                                    </div>
                                )}
                            </div>
                             <div className="mt-4 text-xs text-gray-500 border-t border-gray-200 pt-4">
                                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className="text-primary hover:underline">privacy policy</a>.
                            </div>
                        </div>

                        <button 
                            onClick={onPlaceOrder}
                            className="w-full bg-primary text-white font-bold uppercase text-sm tracking-wider py-4 rounded-sm hover:bg-blue-800 transition-colors shadow-sm"
                        >
                            Place Order
                        </button>
                     </div>
                </div>
             </div>
        </div>
    </div>
  );
};
export default CheckoutPage;