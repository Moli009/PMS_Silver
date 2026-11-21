import React from 'react';
import { BUDGET_TIERS } from '../data/products';
import { Tag, Sparkles, ChevronRight } from 'lucide-react';

export default function BudgetFilter({ selectedBudget, onSelectBudget }) {
  const budgetIcons = {
    'all': '✨',
    'under-1499': '💎',
    'under-2499': '🌟',
    'under-3999': '👑',
    'above-4000': '💫'
  };

  const budgetSubtitles = {
    'all': 'Explore full 925 range',
    'under-1499': 'Daily studs, toe rings & minis',
    'under-2499': 'Bestselling pendants & bands',
    'under-3999': 'Tennis bracelets & mangalsutras',
    'above-4000': 'Luxury solitaires & gift sets'
  };

  return (
    <section className="py-6 bg-[#FDFBF7] border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center">
              <Tag className="w-3.5 h-3.5" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
              Shop by Budget
            </h3>
          </div>

          <p className="text-xs text-slate-500">
            Handcrafted silver luxury at transparent, pocket-friendly prices
          </p>
        </div>

        {/* Budget Cards Carousel (Optimized for Mobile Touch) */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible no-scrollbar pb-1 sm:pb-0 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
          {BUDGET_TIERS.map((tier) => {
            const isSelected = selectedBudget === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => onSelectBudget(tier.id)}
                className={`w-[140px] sm:w-auto shrink-0 p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-200 border cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg -translate-y-0.5'
                    : 'bg-white hover:bg-stone-50 text-slate-800 border-stone-200 shadow-2xs hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-lg sm:text-xl">{budgetIcons[tier.id]}</span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  )}
                </div>

                <div className="font-serif font-bold text-xs sm:text-base leading-tight">
                  {tier.label}
                </div>

                <p className={`text-[10px] sm:text-[11px] mt-0.5 transition-colors line-clamp-1 ${
                  isSelected ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {budgetSubtitles[tier.id]}
                </p>

                <div className={`mt-1.5 flex items-center text-[9px] sm:text-[10px] font-semibold transition ${
                  isSelected ? 'text-amber-300' : 'text-slate-400 group-hover:text-slate-700'
                }`}>
                  <span>Browse</span>
                  <ChevronRight className="w-2.5 h-2.5 ml-0.5" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
