import React from 'react';
import { Home, Grid, Search, Heart, ShoppingBag } from 'lucide-react';

export default function MobileBottomNav({ 
  onHomeClick, 
  onCategoryClick, 
  onSearchClick, 
  onWishlistClick, 
  onCartClick, 
  wishlistCount, 
  cartCount,
  activeTab = 'home'
}) {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 py-1.5 px-3 flex items-center justify-around shadow-lg transition-all sm:hidden">
      
      {/* Home */}
      <button
        onClick={onHomeClick}
        className={`flex flex-col items-center justify-center p-1 w-14 transition ${
          activeTab === 'home' ? 'text-slate-950 font-bold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Home</span>
      </button>

      {/* Categories */}
      <button
        onClick={onCategoryClick}
        className={`flex flex-col items-center justify-center p-1 w-14 transition ${
          activeTab === 'categories' ? 'text-slate-950 font-bold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <Grid className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Explore</span>
      </button>

      {/* Search */}
      <button
        onClick={onSearchClick}
        className="flex flex-col items-center justify-center p-1 w-14 text-slate-500 hover:text-slate-800 transition"
      >
        <Search className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Search</span>
      </button>

      {/* Wishlist */}
      <button
        onClick={onWishlistClick}
        className="flex flex-col items-center justify-center p-1 w-14 text-slate-500 hover:text-rose-600 relative transition"
      >
        <div className="relative">
          <Heart className="w-5 h-5 mb-0.5" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </div>
        <span className="text-[10px] tracking-tight">Wishlist</span>
      </button>

      {/* Cart */}
      <button
        onClick={onCartClick}
        className="flex flex-col items-center justify-center p-1 w-14 text-slate-500 hover:text-slate-950 relative transition"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 mb-0.5 text-slate-900" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-amber-500 text-slate-950 text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <span className="text-[10px] tracking-tight font-semibold text-slate-900">Bag</span>
      </button>

    </nav>
  );
}
