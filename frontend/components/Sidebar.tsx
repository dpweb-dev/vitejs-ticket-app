import React from 'react';
import { CATEGORIES } from '../constants';
import { ChevronRight, Smartphone, Laptop, Headphones, Camera, Gamepad2, Cable, LayoutGrid } from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  onCategorySelect: (id: string) => void;
}

const iconMap: Record<string, any> = {
  'LayoutGrid': LayoutGrid,
  'Smartphone': Smartphone,
  'Laptop': Laptop,
  'Headphones': Headphones,
  'Camera': Camera,
  'Gamepad2': Gamepad2,
  'Cable': Cable,
};

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onCategorySelect }) => {
  return (
    <div className="w-64 flex-shrink-0 hidden lg:block bg-white border border-gray-200 rounded-b-sm self-start sticky top-4 z-10">
      <div className="py-2">
        {CATEGORIES.map((category) => {
          const Icon = iconMap[category.icon] || LayoutGrid;
          const isActive = activeCategory === category.id;
          
          return (
            <div 
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className={`group flex items-center justify-between px-5 py-3.5 cursor-pointer transition-colors border-b border-gray-100 last:border-none hover:bg-gray-50 ${isActive ? 'bg-gray-50 text-primary font-medium' : 'text-gray-600'}`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className={`text-gray-400 group-hover:text-primary ${isActive ? 'text-primary' : ''}`} />
                <span className="text-sm">{category.name}</span>
              </div>
              {category.id !== 'all' && (
                 <ChevronRight size={14} className="text-gray-300 group-hover:text-primary" />
              )}
            </div>
          );
        })}
        
        <div className="mt-2 px-5 py-3 border-t border-gray-100">
            <p className="text-xs font-bold text-dark uppercase tracking-wider mb-2">More Categories</p>
            <ul className="space-y-2 text-xs text-gray-500">
                <li className="hover:text-primary cursor-pointer">Value of the Day</li>
                <li className="hover:text-primary cursor-pointer">Top 100 Offers</li>
                <li className="hover:text-primary cursor-pointer">New Arrivals</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;