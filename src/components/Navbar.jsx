import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  FileCheck
} from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  cartTotal, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenSearch,
  onOpenCertificate,
  selectedCategory, 
  onSelectCategory,
  userPincode,
  onOpenPincodeModal
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'all', label: 'All Jewellery' },
    { id: 'rings', label: 'Rings' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'bracelets', label: 'Bracelets' },
    { id: 'mangalsutras', label: 'Mangalsutras' },
    { id: 'anklets', label: 'Anklets' },
    { id: 'men', label: "Men's Silver" },
    { id: 'gifting', label: 'Gift Sets', badge: 'Popular' },
  ];

  return (
    <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${
      isScrolled ? 'shadow-md border-b border-slate-100 py-2.5' : 'border-b border-slate-200/70 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Navbar Row */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Brand Logo - Luxury Typography like GIVA / Minous */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onSelectCategory('all')}>
            <div className="w-9 h-9 rounded-full bg-slate-900 text-amber-300 flex items-center justify-center font-serif text-lg font-bold shadow-sm border border-amber-400/40">
              P
            </div>
            <div>
              <div className="flex items-baseline space-x-1.5">
                <span className="font-serif text-2xl sm:text-2xl font-bold tracking-wider text-slate-900">
                  PMS
                </span>
                <span className="font-serif text-xl sm:text-xl font-light tracking-widest text-slate-600">
                  SILVER
                </span>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-semibold -mt-1">
                925 Fine Jewellery
              </p>
            </div>
          </div>

          {/* Quick Pincode delivery lookup pill (inspired by GIVA) */}
          <button 
            onClick={onOpenPincodeModal}
            className="hidden xl:flex items-center space-x-1.5 text-xs text-slate-600 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 transition"
          >
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>Deliver to: <strong className="text-slate-900 font-medium">{userPincode || 'Select Pincode'}</strong></span>
          </button>

          {/* Search Bar Input (Trigger for interactive modal or instant input) */}
          <div className="hidden md:flex flex-1 max-w-xs lg:max-w-md mx-2">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center space-x-3 text-left text-sm text-slate-400 bg-slate-50 hover:bg-slate-100/80 px-4 py-2 rounded-full border border-slate-200/90 transition shadow-inner group"
            >
              <Search className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition" />
              <span className="text-xs lg:text-sm text-slate-500 font-normal">Search "Solitaire Ring", "Mangalsutra", "Gift"...</span>
              <kbd className="hidden lg:inline-block ml-auto text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-400">⌘K</kbd>
            </button>
          </div>

          {/* Right Action Icons: Certificate, Search (mobile), Wishlist, Cart */}
          <div className="flex items-center space-x-2 sm:space-x-3.5">
            
            {/* Authenticity Certificate Modal trigger button */}
            <button
              onClick={onOpenCertificate}
              className="hidden sm:flex items-center space-x-1 text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 px-2.5 py-1.5 rounded-full font-medium transition"
              title="View BIS 925 Hallmarking Certificate"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>BIS 925 Verified</span>
            </button>

            {/* Wishlist Button */}
            <button 
              onClick={onOpenWishlist}
              className="p-1.5 sm:p-2 text-slate-700 hover:text-rose-600 relative transition group"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 transition-transform group-hover:scale-110" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-fade-in shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button with Total Amount Pill */}
            <button 
              onClick={onOpenCart}
              className="flex items-center space-x-1.5 sm:space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition shadow-sm hover:shadow"
              aria-label="Open Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="text-left hidden sm:block">
                <span className="text-xs font-semibold tracking-wide">
                  {cartTotal > 0 ? `₹${cartTotal.toLocaleString('en-IN')}` : 'Bag'}
                </span>
              </div>
            </button>

          </div>
        </div>

        {/* Mobile Tap-to-Search Bar (Minous & GIVA mobile style) */}
        <div className="mt-2.5 md:hidden">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center space-x-2.5 text-left text-xs text-slate-400 bg-stone-100 hover:bg-stone-200/70 px-3.5 py-2.5 rounded-full border border-stone-200/80 transition"
          >
            <Search className="w-4 h-4 text-slate-400" />
            <span className="text-slate-500 truncate">Search "Solitaire Ring", "Mangalsutra", "Gift"...</span>
          </button>
        </div>

        {/* Secondary Category Navigation Bar (Desktop) */}
        <nav className="hidden lg:flex items-center justify-center space-x-7 pt-3 mt-1 border-t border-slate-100 text-sm font-medium">
          {navLinks.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`relative py-1 text-xs tracking-wider uppercase transition cursor-pointer flex items-center space-x-1.5 ${
                  isActive
                    ? 'text-slate-950 font-bold border-b-2 border-slate-900'
                    : 'text-slate-600 hover:text-slate-950 hover:border-b-2 hover:border-slate-300'
                }`}
              >
                <span>{cat.label}</span>
                {cat.badge && (
                  <span className="bg-rose-100 text-rose-700 text-[9px] font-semibold px-1.5 py-0.2 rounded-full lowercase tracking-normal">
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-50 animate-slide-up">
            
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-300 flex items-center justify-center font-serif text-sm font-bold">
                  P
                </div>
                <span className="font-serif font-bold text-lg text-slate-900">PMS Silver</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Pincode & Trust alert in Mobile Menu */}
            <div className="p-3 bg-slate-50 border-b border-slate-200 text-xs flex items-center justify-between">
              <div className="flex items-center space-x-1.5 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Pincode: <strong>{userPincode || '400001'}</strong></span>
              </div>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPincodeModal();
                }}
                className="text-amber-700 font-semibold underline text-[11px]"
              >
                Change
              </button>
            </div>

            {/* Category Links */}
            <div className="flex-1 overflow-y-auto py-3 px-2">
              <p className="px-3 text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">
                Shop Collections
              </p>
              {navLinks.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition ${
                    selectedCategory === cat.id 
                      ? 'bg-slate-900 text-white' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{cat.label}</span>
                  {cat.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      selectedCategory === cat.id ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-rose-100 text-rose-700 font-medium'
                    }`}>
                      {cat.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Footer Trust */}
            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <div className="flex items-center space-x-2 text-xs text-slate-600 mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>BIS 925 Hallmarked Purity Guaranteed</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCertificate();
                }}
                className="w-full text-center text-xs py-2 bg-white border border-slate-200 rounded-md font-medium text-slate-700 hover:bg-slate-100"
              >
                View Authenticity Certificate
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
