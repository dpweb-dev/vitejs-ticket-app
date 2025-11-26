import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="flex-grow w-full grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Main Banner */}
      <div className="md:col-span-2 relative rounded-sm overflow-hidden h-[300px] md:h-[400px] bg-gray-100 group cursor-pointer">
        <img 
          src="https://picsum.photos/id/20/1200/800" 
          alt="Hero Banner" 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 bg-gradient-to-r from-white/90 via-white/50 to-transparent">
          <span className="text-secondary font-bold uppercase tracking-wider mb-2 text-sm">Weekend Deal</span>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4 leading-tight">
            Apple & <br/> Accessories
          </h2>
          <p className="text-gray-600 mb-6 max-w-xs">Experience the best sound quality with our new collection.</p>
          <button className="bg-primary text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 w-fit hover:bg-blue-800 transition-colors shadow-lg">
            Shop Now <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Side Banners */}
      <div className="hidden md:flex flex-col gap-4 h-[400px]">
        <div className="flex-1 relative rounded-sm overflow-hidden bg-gray-50 group cursor-pointer">
           <img src="https://picsum.photos/id/48/600/400" alt="Promo 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
           <div className="absolute inset-0 p-6 flex flex-col justify-center items-start bg-black/10 group-hover:bg-black/20 transition-colors">
              <span className="bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-dark mb-2">New</span>
              <h3 className="text-xl font-bold text-white mb-1">Smart Watch</h3>
              <p className="text-white/90 text-sm mb-3">From $299.00</p>
           </div>
        </div>
        <div className="flex-1 relative rounded-sm overflow-hidden bg-gray-50 group cursor-pointer">
           <img src="https://picsum.photos/id/3/600/400" alt="Promo 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
           <div className="absolute inset-0 p-6 flex flex-col justify-center items-start bg-black/10 group-hover:bg-black/20 transition-colors">
             <h3 className="text-xl font-bold text-white mb-1">Headphones</h3>
              <p className="text-white/90 text-sm mb-3">Best Audio Quality</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;