import React from 'react';
import { Home, Grid, Heart, ShoppingBag, User } from 'lucide-react';

export default function MobileBottomNav({ 
  onHomeClick, 
  onCategoryClick, 
  onWishlistClick, 
  onCartClick,
  onAuthClick,
  currentUser,
  wishlistCount, 
  cartCount,
  activeTab = 'home'
}) {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 py-1.5 px-2 flex items-center justify-around shadow-lg transition-all sm:hidden">
      
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

      {/* Account / Login */}
      <button
        onClick={onAuthClick}
        className="flex flex-col items-center justify-center p-1 w-14 text-slate-500 hover:text-slate-950 relative transition"
      >
        {currentUser ? (
          <div className="w-5 h-5 rounded-full bg-slate-900 text-amber-300 flex items-center justify-center text-[10px] font-bold mb-0.5">
            {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
          </div>
        ) : (
          <User className="w-5 h-5 mb-0.5" />
        )}
        <span className="text-[10px] tracking-tight font-medium">
          {currentUser ? 'Account' : 'Login'}
        </span>
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
