import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1 */}
          <div>
            <h1 className="text-2xl font-extrabold tracking-tighter text-dark mb-4">
              MEGA<span className="text-primary">.</span>
            </h1>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <span className="font-bold text-dark">Address:</span> 451 Wall Street, UK, London
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <span className="font-bold text-dark">Phone:</span> (064) 332-1233
            </div>
             <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="font-bold text-dark">Email:</span> support@mega-store.com
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-dark uppercase text-sm mb-5">Categories</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-primary cursor-pointer transition-colors">Smartphones & Tablets</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Laptops & Computers</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Cameras & Photography</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Audio & Headphones</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Video Games & Consoles</li>
              <li className="hover:text-primary cursor-pointer transition-colors">TV & Home Cinema</li>
            </ul>
          </div>

           {/* Column 3 */}
           <div>
            <h3 className="font-bold text-dark uppercase text-sm mb-5">Customer Service</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Terms & Conditions</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Returns & Exchanges</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Shipping & Delivery</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
             <h3 className="font-bold text-dark uppercase text-sm mb-5">Newsletter</h3>
             <p className="text-gray-500 text-sm mb-4">Sign up for our newsletter and get 10% off your first order.</p>
             <div className="flex gap-0">
                <input type="email" placeholder="Your email address" className="bg-gray-50 border border-r-0 border-gray-200 px-4 py-2 text-sm w-full outline-none focus:bg-white" />
                <button className="bg-primary text-white px-4 py-2 font-bold text-xs uppercase tracking-wider hover:bg-blue-800 transition-colors">
                    Subscribe
                </button>
             </div>
             <div className="mt-6 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center cursor-pointer hover:opacity-90">
                    <Facebook size={14} />
                </div>
                 <div className="w-8 h-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center cursor-pointer hover:opacity-90">
                    <Twitter size={14} />
                </div>
                 <div className="w-8 h-8 rounded-full bg-[#e1306c] text-white flex items-center justify-center cursor-pointer hover:opacity-90">
                    <Instagram size={14} />
                </div>
                 <div className="w-8 h-8 rounded-full bg-[#ff0000] text-white flex items-center justify-center cursor-pointer hover:opacity-90">
                    <Youtube size={14} />
                </div>
             </div>
          </div>

        </div>
        
        <div className="border-t border-gray-100 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-xs text-gray-400">© 2024 Mega Electronics Store. All Rights Reserved.</p>
           <img src="https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2017/06/payments.png" alt="Payments" className="h-6 opacity-70" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;