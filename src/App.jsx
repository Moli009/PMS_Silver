import React, { useState, useMemo, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  PRODUCTS, 
  CATEGORIES, 
  METAL_FINISHES, 
  BUDGET_TIERS, 
  OCCASIONS 
} from './data/products';

import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryPills from './components/CategoryPills';
import BudgetFilter from './components/BudgetFilter';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CheckoutModal from './components/CheckoutModal';
import TrustSection from './components/TrustSection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import CertificateModal from './components/CertificateModal';
import PincodeModal from './components/PincodeModal';
import MobileBottomNav from './components/MobileBottomNav';

import { 
  SlidersHorizontal, 
  Sparkles, 
  RotateCcw, 
  Heart, 
  Check, 
  ArrowUpDown 
} from 'lucide-react';

export default function App() {
  // Navigation & Filtering States
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [selectedFinish, setSelectedFinish] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  // E-commerce States
  const [cartItems, setCartItems] = useState([
    {
      ...PRODUCTS[0],
      quantity: 1,
      selectedSize: 'Adjustable / Free Size'
    }
  ]);
  const [wishlist, setWishlist] = useState(['pms-002']);
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [userPincode, setUserPincode] = useState('400001');

  // Modals & Drawers States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isPincodeOpen, setIsPincodeOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Notification Toast State
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Keyboard shortcut: Cmd+K / Ctrl+K to open search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtered and Sorted Products computation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Metal Finish filter
      if (selectedFinish !== 'all' && product.finish !== selectedFinish) {
        return false;
      }
      // Occasion filter
      if (selectedOccasion !== 'all' && product.occasion !== selectedOccasion) {
        return false;
      }
      // Budget tier filter
      if (selectedBudget !== 'all') {
        const tier = BUDGET_TIERS.find((t) => t.id === selectedBudget);
        if (tier) {
          if (product.price < tier.min || product.price > tier.max) {
            return false;
          }
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return b.reviewCount - a.reviewCount; // 'popular'
    });
  }, [selectedCategory, selectedFinish, selectedOccasion, selectedBudget, sortBy]);

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.id === product.id && i.selectedSize === (product.selectedSize || i.selectedSize)
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          selectedSize: product.selectedSize || (product.category === 'rings' ? 'Adjustable / Free Size' : undefined)
        }
      ];
    });
    showToast(`Added "${product.name}" to your Bag`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === size))
    );
    showToast('Item removed from Bag');
  };

  // Wishlist operations
  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed from Wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved to your Wishlist ❤️`);
        return [...prev, product.id];
      }
    });
  };

  const handleMoveToCart = (product) => {
    handleAddToCart(product);
    setWishlist((prev) => prev.filter((id) => id !== product.id));
  };

  const wishlistedProducts = useMemo(() => {
    return PRODUCTS.filter((p) => wishlist.includes(p.id));
  }, [wishlist]);

  // Reset Filters
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedBudget('all');
    setSelectedFinish('all');
    setSelectedOccasion('all');
    setSortBy('popular');
  };

  const activeFiltersCount = (selectedCategory !== 'all' ? 1 : 0) +
    (selectedBudget !== 'all' ? 1 : 0) +
    (selectedFinish !== 'all' ? 1 : 0) +
    (selectedOccasion !== 'all' ? 1 : 0);

  // Cart total calculations
  const cartSubtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrderSuccess = (orderId) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setCartItems([]);
    setAppliedCoupon('');
  };

  const handleClaimFreeGift = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.4 }
    });
    showToast('🎉 Free Luxury Velvet Box & Authenticity Card unlocked on your order!');
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-900 pb-16 sm:pb-0">
        
        {/* 1. Rotating Announcement Bar */}
        <AnnouncementBar onOpenOffer={handleClaimFreeGift} />

        {/* 2. Main Luxury Header */}
        <Navbar
          cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
          cartTotal={cartSubtotal}
          wishlistCount={wishlist.length}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenCertificate={() => setIsCertificateOpen(true)}
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          userPincode={userPincode}
          onOpenPincodeModal={() => setIsPincodeOpen(true)}
        />

      <main className="flex-1">
        
        {/* 3. Luxury Hero Section */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onBudgetClick={(budgetId) => {
            setSelectedBudget(budgetId);
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Category Visual Pills */}
        <CategoryPills
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => {
            setSelectedCategory(catId);
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Shop by Budget Banner (Direct Minous.in Hallmark) */}
        <BudgetFilter
          selectedBudget={selectedBudget}
          onSelectBudget={(budgetId) => {
            setSelectedBudget(budgetId);
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 6. Product Catalog & Filter Workbench */}
        <section id="catalog" className="py-6 sm:py-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          
          {/* Catalog Top Filter & Sort Bar */}
          <div className="bg-white rounded-2xl p-3 sm:p-5 border border-stone-200/90 shadow-2xs mb-5 sm:mb-8">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
              
              {/* Active Category Title & Count */}
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-slate-900 capitalize">
                    {selectedCategory === 'all' ? 'All 925 Sterling Silver Pieces' : selectedCategory}
                  </h3>
                  <span className="text-[11px] sm:text-xs bg-stone-100 text-slate-700 font-semibold px-2 py-0.5 rounded-full border border-stone-200">
                    {filteredProducts.length} items
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Pure 925 silver core & protective anti-tarnish rhodium
                </p>
              </div>

              {/* Metal Finish Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
                <span className="text-xs font-semibold text-slate-500 mr-1 hidden sm:inline">Finish:</span>
                {METAL_FINISHES.map((finish) => {
                  const isSelected = selectedFinish === finish.id;
                  return (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish.id)}
                      className={`shrink-0 text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border transition cursor-pointer flex items-center space-x-1 sm:space-x-1.5 ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 font-semibold shadow-xs'
                          : 'bg-stone-50 hover:bg-stone-100 text-slate-700 border-stone-200'
                      }`}
                    >
                      {finish.color && (
                        <span 
                          className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border border-slate-400" 
                          style={{ backgroundColor: finish.color }}
                        />
                      )}
                      <span>{finish.name}</span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Sub-Filters: Occasion & Sort */}
            <div className="mt-4 pt-3.5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              
              {/* Occasions */}
              <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar py-1">
                <span className="text-slate-400 font-medium mr-1.5 shrink-0">Occasion:</span>
                {OCCASIONS.map((occ) => (
                  <button
                    key={occ.id}
                    onClick={() => setSelectedOccasion(occ.id)}
                    className={`shrink-0 px-2.5 py-1 rounded-lg transition ${
                      selectedOccasion === occ.id
                        ? 'bg-amber-100 text-amber-900 font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-stone-100'
                    }`}
                  >
                    {occ.label}
                  </button>
                ))}
              </div>

              {/* Sort Dropdown & Reset */}
              <div className="flex items-center space-x-2.5 ml-auto">
                {activeFiltersCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center space-x-1 text-rose-600 hover:text-rose-800 font-semibold px-2 py-1 rounded hover:bg-rose-50 transition"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset ({activeFiltersCount})</span>
                  </button>
                )}

                <div className="flex items-center space-x-1 bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-1.5">
                  <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent border-none focus:outline-none text-slate-800 font-medium cursor-pointer"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="newest">New Arrivals</option>
                  </select>
                </div>
              </div>

            </div>

          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-md mx-auto my-6">
              <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <h4 className="font-serif font-bold text-lg text-slate-900">
                No matching pieces found
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Try widening your budget filter or selecting "All Jewellery" to browse the complete 925 range.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-4 bg-slate-900 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setQuickViewProduct(p)}
                  onAddToCart={(p) => handleAddToCart(p)}
                  onToggleWishlist={(p) => handleToggleWishlist(p)}
                  isWishlisted={wishlist.includes(product.id)}
                />
              ))}
            </div>
          )}

        </section>

        {/* 7. Trust Pillars Section */}
        <TrustSection onOpenCertificate={() => setIsCertificateOpen(true)} />

        {/* 8. Customer Reviews & Ratings Wall */}
        <ReviewsSection />

        {/* 9. FAQs Section */}
        <FaqSection />

      </main>

      {/* 10. Luxury Footer */}
      <Footer
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          const el = document.getElementById('catalog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenCertificate={() => setIsCertificateOpen(true)}
      />

      {/* MODALS & DRAWERS */}
      
      {/* Quick View Product Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p) => handleAddToCart(p)}
        onToggleWishlist={(p) => handleToggleWishlist(p)}
        isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
        userPincode={userPincode}
        onUpdatePincode={(pin) => setUserPincode(pin)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={(code) => setAppliedCoupon(code)}
        onRemoveCoupon={() => setAppliedCoupon('')}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistedProducts}
        onMoveToCart={handleMoveToCart}
        onRemoveFromWishlist={(id) => setWishlist((prev) => prev.filter((i) => i !== id))}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        appliedCoupon={appliedCoupon}
        onOrderSuccess={handleOrderSuccess}
        userPincode={userPincode}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* BIS 925 Authenticity Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />

      {/* Pincode Lookup Modal */}
      <PincodeModal
        isOpen={isPincodeOpen}
        onClose={() => setIsPincodeOpen(false)}
        currentPincode={userPincode}
        onSavePincode={(pin) => setUserPincode(pin)}
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center space-x-2 animate-slide-up">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 11. Mobile Sticky Bottom Navigation (GIVA / Minous Mobile App Experience) */}
      <MobileBottomNav
        onHomeClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onCategoryClick={() => {
          const el = document.getElementById('catalog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onSearchClick={() => setIsSearchOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
      />

    </div>
  );
}
