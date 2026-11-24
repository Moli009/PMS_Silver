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
  FileCheck,
  User,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  cartTotal, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenSearch,
  onOpenCertificate,
  onOpenAuth,
  currentUser,
  selectedCategory, 
  onSelectCategory,
  selectedBudget,
  onSelectBudget,
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
    { 
      id: 'all', 
      label: 'All Jewellery', 
      mobileLabel: 'All 925 Fine Silver',
      badge: null 
    },
    { 
      id: 'rings', 
      label: 'Rings', 
      mobileLabel: 'Rings', 
      badge: 'Adjustable Free Size',
      badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200/90'
    },
    { 
      id: 'earrings', 
      label: 'Earrings & Huggies', 
      mobileLabel: 'Earrings & Huggies', 
      badge: 'Trending',
      badgeClass: 'bg-rose-50 text-rose-700 border border-rose-200/90'
    },
    { 
      id: 'necklaces', 
      label: 'Pendants & Necklaces', 
      mobileLabel: 'Pendants & Necklaces', 
      badge: null 
    },
    { 
      id: 'bracelets', 
      label: 'Bracelets & Cuffs', 
      mobileLabel: 'Bracelets & Cuffs', 
      badge: null 
    },
    { 
      id: 'mangalsutras', 
      label: 'Mangalsutras', 
      mobileLabel: 'Pure Silver Mangalsutras', 
      badge: 'Bestseller',
      badgeClass: 'bg-amber-100 text-amber-900 border border-amber-300 font-semibold'
    },
    { 
      id: 'men', 
      label: "Men's Silver", 
      mobileLabel: "Men's Silver Chains & Kadas", 
      badge: null 
    },
    { 
      id: 'gifting', 
      label: 'Gift Sets', 
      mobileLabel: 'Complete Gift Sets', 
      badge: 'Popular',
      badgeClass: 'bg-indigo-50 text-indigo-700 border border-indigo-200/90'
    },
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

          {/* Brand Logo - Official PMS Silver Trend Logo */}
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => onSelectCategory('all')}>
            <img 
              src="/pms-logo.jpg" 
              alt="PMS Silver Trend Logo" 
              className="h-9 sm:h-11 w-auto object-contain rounded-md shadow-2xs"
            />
            <div className="hidden sm:block">
              <div className="flex items-baseline space-x-1.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-slate-900">
                  PMS
                </span>
                <span className="font-serif text-lg sm:text-xl font-light tracking-widest text-slate-700">
                  SILVER TREND
                </span>
              </div>
              <p className="text-[9px] tracking-[0.16em] uppercase text-slate-400 font-semibold -mt-1">
                Lala Pradeep Kumar Mohit Agarwal Saraf
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

            {/* Login / Member Profile Button */}
            {currentUser ? (
              <button
                onClick={onOpenAuth}
                className="flex items-center space-x-1.5 text-xs text-slate-800 bg-amber-50 hover:bg-amber-100/80 border border-amber-200/90 px-2.5 sm:px-3 py-1.5 rounded-full font-medium transition shadow-2xs"
                title="My Account & Rewards"
              >
                <div className="w-5 h-5 rounded-full bg-slate-900 text-amber-300 flex items-center justify-center text-[10px] font-bold">
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <span className="hidden sm:inline font-semibold">{currentUser.name.split(' ')[0]}</span>
                <span className="hidden md:inline-block text-[10px] bg-amber-200/70 text-slate-800 font-bold px-1.5 rounded-full">
                  {currentUser.points} pts
                </span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center space-x-1.5 text-xs text-slate-700 hover:text-slate-950 bg-stone-50 hover:bg-stone-100 border border-stone-200/90 px-2.5 sm:px-3 py-1.5 rounded-full font-medium transition"
                aria-label="Sign In"
              >
                <User className="w-3.5 h-3.5 text-slate-700" />
                <span className="text-xs font-semibold">Login</span>
              </button>
            )}

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
              <div className="flex items-center space-x-2.5">
                <img 
                  src="/pms-logo.jpg" 
                  alt="PMS Silver Trend" 
                  className="h-8 w-auto object-contain rounded shadow-2xs"
                />
                <div>
                  <span className="font-serif font-bold text-base text-slate-900 block leading-tight">PMS Silver Trend</span>
                  <span className="text-[9px] text-slate-400 tracking-wider block font-medium">Lala Pradeep Kumar Mohit Agarwal Saraf</span>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Member Profile or Login Card in Mobile Drawer */}
            {currentUser ? (
              <div className="p-3.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-sm">
                    {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white leading-tight">{currentUser.name}</p>
                    <p className="text-[10px] text-amber-300 font-medium">{currentUser.points} Silver Coins Available</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="text-[11px] bg-white/10 hover:bg-white/20 border border-white/20 px-2.5 py-1 rounded-full font-medium"
                >
                  My Account
                </button>
              </div>
            ) : (
              <div className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200/60 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-slate-900">PMS Silver Member Club</p>
                    <p className="text-[10px] text-slate-500">Sign in & unlock ₹200 off voucher</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-sm shrink-0"
                >
                  Login / Join
                </button>
              </div>
            )}

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

            {/* Shop by Budget Quick Carousel in Hamburger Menu */}
            <div className="p-3 border-b border-slate-100 bg-white">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">
                Shop by Budget
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'under-1499', label: 'Under ₹1,499' },
                  { id: 'under-2499', label: 'Under ₹2,499' },
                  { id: 'under-3999', label: 'Under ₹3,999' },
                  { id: 'above-4000', label: 'Premium ₹4,000+' }
                ].map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      if (onSelectBudget) onSelectBudget(b.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-center py-1.5 px-2 rounded-lg text-xs font-semibold transition ${
                      selectedBudget === b.id
                        ? 'bg-slate-900 text-white font-bold'
                        : 'bg-stone-50 hover:bg-stone-100 text-slate-700 border border-stone-200/80'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Links with Visual Cues & Badges */}
            <div className="flex-1 overflow-y-auto py-3 px-3">
              <div className="flex items-center justify-between px-1 mb-2">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Shop Collections
                </p>
                <span className="text-[10px] text-amber-700 font-semibold">925 Pure Silver</span>
              </div>

              <div className="space-y-1">
                {navLinks.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onSelectCategory(cat.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between transition group ${
                        isSelected 
                          ? 'bg-slate-900 text-white shadow-sm' 
                          : 'text-slate-800 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? 'bg-amber-400' : 'bg-stone-300 group-hover:bg-slate-600'}`} />
                        <span className="truncate">{cat.mobileLabel || cat.label}</span>
                      </div>

                      {cat.badge ? (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${
                          isSelected 
                            ? 'bg-amber-400 text-slate-950 font-bold' 
                            : cat.badgeClass || 'bg-stone-100 text-slate-700'
                        }`}>
                          {cat.badge}
                        </span>
                      ) : (
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-amber-300' : 'text-slate-300 group-hover:text-slate-500'}`} />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Direct WhatsApp Concierge in Hamburger Drawer */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <a
                  href="https://wa.me/919876543210?text=Hello%20PMS%20Silver%20Trend,%20I%20need%20help%20choosing%20jewellery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-50 hover:bg-emerald-100/90 text-emerald-800 border border-emerald-200/80 rounded-xl px-3 py-2.5 flex items-center justify-between text-xs font-semibold transition"
                >
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                  </div>
                  <span className="text-[10px] bg-emerald-200/60 text-emerald-900 px-1.5 py-0.5 rounded font-bold">Stylist</span>
                </a>
              </div>
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
