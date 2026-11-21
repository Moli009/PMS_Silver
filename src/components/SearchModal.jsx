import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Star, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct, onSelectCategory }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim() === '' 
    ? PRODUCTS.slice(0, 4) 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.finish.toLowerCase().includes(query.toLowerCase())
      );

  const popularSearches = ['Solitaire Ring', 'Mangalsutra', 'Rose Gold', 'Gift Box', 'Under 1500', 'Tennis Bracelet'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-start justify-center p-4 pt-12 sm:pt-20 text-center">
        <div className="w-full max-w-2xl transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all relative border border-stone-200">
          
          {/* Search Header Input */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center space-x-3 bg-stone-50">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 925 silver rings, earrings, pendants, mangalsutra..."
              className="flex-1 text-sm bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="text-xs font-semibold bg-stone-200 hover:bg-stone-300 text-slate-700 px-2.5 py-1.5 rounded-lg transition"
            >
              ESC
            </button>
          </div>

          {/* Quick Tags */}
          <div className="px-5 py-3 bg-white border-b border-stone-100 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
            <span className="text-slate-400 text-[11px] font-medium shrink-0">Popular:</span>
            {popularSearches.map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="shrink-0 bg-stone-100 hover:bg-stone-200 text-slate-700 px-2.5 py-1 rounded-full text-[11px] transition"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 divide-y divide-stone-100">
            <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-2">
              {query.trim() === '' ? 'Trending Designs' : `Results (${filtered.length})`}
            </div>

            {filtered.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-xs">
                No jewellery matched "{query}". Try searching "Silver", "Ring" or "Rose Gold".
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSelectProduct(item);
                    onClose();
                  }}
                  className="py-3 flex items-center gap-3.5 hover:bg-stone-50 rounded-2xl px-2 cursor-pointer transition"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover bg-stone-100 border border-stone-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 capitalize">
                      {item.category} • {item.finish} finish
                    </p>
                    <div className="flex items-center space-x-1 text-[11px] mt-0.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-slate-700">{item.rating}</span>
                      <span className="text-slate-400">({item.reviewCount})</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="font-serif font-bold text-sm text-slate-900">
                      ₹{item.price.toLocaleString('en-IN')}
                    </p>
                    <span className="text-[10px] text-rose-600 font-semibold bg-rose-50 px-1.5 py-0.2 rounded">
                      {item.discount}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
