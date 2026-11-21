import React from 'react';
import { CATEGORIES } from '../data/products';

export default function CategoryPills({ selectedCategory, onSelectCategory }) {
  return (
    <section className="py-8 bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              Shop by Category
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Handmade 925 sterling silver designs for every mood
            </p>
          </div>
          <button 
            onClick={() => onSelectCategory('all')}
            className="text-xs font-semibold text-slate-800 hover:text-amber-700 underline underline-offset-4"
          >
            View All ({CATEGORIES.length})
          </button>
        </div>

        {/* Horizontal scrollable category tiles with high-res jewelry photography */}
        <div className="flex items-center space-x-3.5 sm:space-x-6 overflow-x-auto pb-2 sm:pb-3 pt-1 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="flex flex-col items-center group shrink-0 focus:outline-none cursor-pointer"
              >
                <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full p-0.5 transition-all duration-300 ${
                  isSelected 
                    ? 'ring-2 ring-slate-900 ring-offset-2 scale-105 shadow-md' 
                    : 'hover:ring-2 hover:ring-amber-400 hover:ring-offset-1 group-hover:scale-105'
                }`}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-stone-100 relative">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-slate-900/20" />
                    )}
                  </div>
                </div>

                <span className={`mt-1.5 text-[11px] sm:text-xs font-medium text-center transition-colors max-w-[70px] sm:max-w-[80px] truncate ${
                  isSelected ? 'text-slate-950 font-bold' : 'text-slate-600 group-hover:text-slate-900'
                }`}>
                  {cat.name}
                </span>
                
                {cat.count && (
                  <span className="text-[10px] text-slate-400">
                    {cat.count}+ designs
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
