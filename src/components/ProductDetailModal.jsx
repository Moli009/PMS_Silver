import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  RefreshCw, 
  Gift, 
  Check, 
  ShoppingBag, 
  Heart,
  ChevronRight,
  Info
} from 'lucide-react';

export default function ProductDetailModal({ 
  product, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted,
  userPincode,
  onUpdatePincode
}) {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('Free Size');
  const [pincodeInput, setPincodeInput] = useState(userPincode || '400001');
  const [pincodeStatus, setPincodeStatus] = useState({ checked: true, days: '2-3 Days', city: 'Mumbai / Metro' });
  const [giftWrap, setGiftWrap] = useState(false);
  const [giftNote, setGiftNote] = useState('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const ringSizes = ['10 (XS)', '12 (S)', '14 (M)', '16 (L)', 'Adjustable / Free Size'];

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (!pincodeInput || pincodeInput.length < 6) return;
    
    // Simulate smart delivery estimates
    const firstDigit = pincodeInput[0];
    let city = 'Delhi & North';
    let days = '2 Business Days';
    if (firstDigit === '4' || firstDigit === '3') {
      city = 'Mumbai & West';
      days = '1-2 Business Days';
    } else if (firstDigit === '5' || firstDigit === '6') {
      city = 'Bengaluru & South';
      days = '2-3 Business Days';
    } else if (firstDigit === '7') {
      city = 'Kolkata & East';
      days = '3 Business Days';
    }

    setPincodeStatus({ checked: true, days, city });
    if (onUpdatePincode) onUpdatePincode(pincodeInput);
  };

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedSize: product.category === 'rings' ? selectedSize : undefined,
      giftWrap,
      giftNote: giftWrap ? giftNote : undefined
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 md:p-6 text-center">
        <div className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all relative border border-stone-200">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Left Column: Image Gallery */}
            <div className="md:col-span-6 bg-stone-50 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200">
              
              {/* Main Preview Photo */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-stone-200">
                <img
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />

                {product.badge && (
                  <span className="absolute top-3 left-3 bg-slate-900 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-2.5 mt-4 overflow-x-auto pb-1">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx ? 'border-slate-900 shadow-sm scale-105' : 'border-stone-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Trust Badges under photos */}
              <div className="mt-5 pt-4 border-t border-stone-200 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-600">
                <div className="p-2 rounded-xl bg-white border border-stone-200/80">
                  <ShieldCheck className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
                  <span className="font-semibold block text-slate-800">BIS 925 Pure</span>
                  <span className="text-[10px] text-slate-400">Hallmarked</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-stone-200/80">
                  <Sparkles className="w-4 h-4 mx-auto text-amber-500 mb-1" />
                  <span className="font-semibold block text-slate-800">Anti-Tarnish</span>
                  <span className="text-[10px] text-slate-400">Rhodium Shield</span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-stone-200/80">
                  <RefreshCw className="w-4 h-4 mx-auto text-blue-600 mb-1" />
                  <span className="font-semibold block text-slate-800">30-Day Return</span>
                  <span className="text-[10px] text-slate-400">Doorstep Pickup</span>
                </div>
              </div>

            </div>

            {/* Right Column: Product Details & Actions */}
            <div className="md:col-span-6 p-6 sm:p-7 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
              <div>
                
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                    925 Sterling Silver
                  </span>

                  <div className="flex items-center space-x-1 text-xs">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-800">{product.rating}</span>
                    <span className="text-slate-400">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                {/* Product Name */}
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {product.name}
                </h2>

                {/* Pricing Block */}
                <div className="mt-3 flex items-baseline space-x-3">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full">
                    {product.discount}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Taxes included. Free insured delivery across India.
                </p>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Ring Size Selector if ring category */}
                {product.category === 'rings' && (
                  <div className="mt-5 pt-4 border-t border-stone-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-slate-800">Select Ring Size:</span>
                      <span className="text-[11px] text-amber-700 underline cursor-pointer">Ring Size Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ringSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                            selectedSize === size
                              ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                              : 'bg-white text-slate-700 border-stone-300 hover:border-slate-500'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pincode Delivery Check */}
                <div className="mt-5 pt-4 border-t border-stone-100">
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-800 mb-2">
                    <Truck className="w-4 h-4 text-slate-700" />
                    <span>Check Delivery to Your Pincode:</span>
                  </div>

                  <form onSubmit={handlePincodeCheck} className="flex gap-2">
                    <input
                      type="text"
                      maxLength={6}
                      value={pincodeInput}
                      onChange={(e) => setPincodeInput(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter 6-digit Pincode"
                      className="flex-1 text-xs px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                    <button
                      type="submit"
                      className="bg-stone-800 hover:bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-xl transition"
                    >
                      Check
                    </button>
                  </form>

                  {pincodeStatus.checked && (
                    <div className="mt-2 text-xs text-emerald-700 flex items-center space-x-1.5 bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                      <Check className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        Express delivery in <strong>{pincodeStatus.days}</strong> to {pincodeStatus.city} • Cash on Delivery Available
                      </span>
                    </div>
                  )}
                </div>

                {/* Gift Packaging Checkbox */}
                <div className="mt-4 p-3 rounded-xl bg-amber-50/60 border border-amber-200/60">
                  <label className="flex items-center space-x-2 text-xs text-slate-800 font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                      className="rounded text-amber-600 focus:ring-amber-500"
                    />
                    <Gift className="w-3.5 h-3.5 text-amber-700" />
                    <span>Add Free Personalized Greeting Card & Ribbon Gift Wrap</span>
                  </label>
                  {giftWrap && (
                    <input
                      type="text"
                      placeholder="Write your custom heartfelt note (e.g., Happy Birthday Love!)"
                      value={giftNote}
                      onChange={(e) => setGiftNote(e.target.value)}
                      className="w-full mt-2 text-xs p-2 bg-white rounded-lg border border-amber-200 focus:outline-none"
                    />
                  )}
                </div>

                {/* Product Specifications Table */}
                <div className="mt-5 pt-4 border-t border-stone-100">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                    Authentic Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="bg-stone-50 p-2 rounded-lg">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          {key}
                        </span>
                        <span className="font-medium text-slate-800 text-[11px]">
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons: Add to Bag & Wishlist */}
              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-3">
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3 rounded-2xl border transition-all ${
                    isWishlisted
                      ? 'bg-rose-50 border-rose-300 text-rose-600'
                      : 'bg-white border-stone-300 text-slate-600 hover:text-rose-600'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600' : ''}`} />
                </button>

                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-6 rounded-2xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all duration-300 shadow-md ${
                    addedAnimation
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white hover:shadow-lg'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-amber-300" />
                      <span>Add to Shopping Bag • ₹{product.price.toLocaleString('en-IN')}</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
