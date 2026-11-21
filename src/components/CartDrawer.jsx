import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Gift, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Tag,
  Check
} from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onCheckout,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon
}) {
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  // Free Gift Threshold: ₹2,999 gets free silver polish cloth & luxury pouch
  const freeGiftThreshold = 2999;
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const remainingForGift = Math.max(0, freeGiftThreshold - subtotal);
  const giftProgress = Math.min(100, Math.round((subtotal / freeGiftThreshold) * 100));

  // Calculate discounts
  let discountAmount = 0;
  if (appliedCoupon === 'SPARKLE500' && subtotal >= 2999) {
    discountAmount = 500;
  } else if (appliedCoupon === 'PMS10') {
    discountAmount = Math.round(subtotal * 0.10);
  } else if (appliedCoupon === 'GIFT925') {
    discountAmount = 200;
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    const code = couponInput.trim().toUpperCase();

    if (code === 'SPARKLE500') {
      if (subtotal < 2999) {
        setCouponError('Add items worth ₹2,999 to apply SPARKLE500');
        return;
      }
      onApplyCoupon('SPARKLE500');
      setCouponInput('');
    } else if (code === 'PMS10') {
      onApplyCoupon('PMS10');
      setCouponInput('');
    } else if (code === 'GIFT925') {
      onApplyCoupon('GIFT925');
      setCouponInput('');
    } else {
      setCouponError('Invalid coupon code. Try PMS10 or SPARKLE500');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col z-50 animate-slide-left">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/50">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-slate-800" />
              <h3 className="font-serif font-bold text-lg text-slate-900">
                Your Shopping Bag
              </h3>
              <span className="text-xs bg-slate-200 text-slate-800 font-bold px-2 py-0.5 rounded-full">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-stone-200 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Dynamic Free Gift Progress Bar (GIVA / Minous style) */}
          <div className="p-4 bg-amber-50/70 border-b border-amber-200/60 text-xs">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center space-x-1.5 font-semibold text-amber-900">
                <Gift className="w-4 h-4 text-amber-600" />
                {remainingForGift > 0 ? (
                  <span>Add <strong>₹{remainingForGift.toLocaleString('en-IN')}</strong> more for a FREE Silver Care Kit!</span>
                ) : (
                  <span className="text-emerald-800 font-bold flex items-center gap-1">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Unlocked: FREE Silver Polish Kit + Velvet Pouch!
                  </span>
                )}
              </div>
              <span className="font-bold text-amber-800">{giftProgress}%</span>
            </div>

            <div className="w-full bg-amber-200/60 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-amber-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${giftProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-stone-100">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-stone-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-base text-slate-800">
                  Your bag is empty
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Add pieces from our pure 925 sterling silver collections to sparkle everyday!
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 bg-slate-900 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition"
                >
                  Explore Jewellery
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedSize || 'std'}`} className="py-4 first:pt-0 flex gap-3.5">
                  
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-xs text-slate-900 line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id, item.selectedSize)}
                          className="text-slate-400 hover:text-rose-600 p-1 transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.selectedSize && (
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Size: <span className="font-medium text-slate-700">{item.selectedSize}</span>
                        </p>
                      )}

                      {item.giftWrap && (
                        <span className="inline-flex items-center text-[10px] text-amber-700 font-semibold bg-amber-50 px-1.5 py-0.5 rounded mt-1">
                          <Gift className="w-2.5 h-2.5 mr-1" />
                          Gift Wrapped
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Price */}
                      <div className="flex items-baseline space-x-1.5">
                        <span className="font-serif font-bold text-sm text-slate-900">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <span className="text-[11px] text-slate-400 line-through">
                          ₹{(item.originalPrice * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                          className="p-1 hover:bg-stone-100 text-slate-600 transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                          className="p-1 hover:bg-stone-100 text-slate-600 transition"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              ))
            )}
          </div>

          {/* Footer with Coupon & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50/50">
              
              {/* Coupon Box */}
              <div className="mb-4">
                {appliedCoupon ? (
                  <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl text-xs text-emerald-800 font-medium">
                    <div className="flex items-center space-x-1.5">
                      <Tag className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Code <strong>{appliedCoupon}</strong> applied!</span>
                    </div>
                    <button
                      onClick={onRemoveCoupon}
                      className="text-rose-600 hover:text-rose-800 text-[11px] font-bold underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon: PMS10 or SPARKLE500"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                      className="flex-1 text-xs uppercase px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                    />
                    <button
                      type="submit"
                      className="bg-slate-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl hover:bg-slate-800 transition"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[11px] text-rose-600 mt-1">{couponError}</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600 border-t border-stone-200 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Coupon Discount</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Insured Express Shipping</span>
                  <span className="text-emerald-700 font-semibold uppercase">FREE</span>
                </div>

                <div className="flex justify-between text-sm font-bold text-slate-900 border-t border-stone-200 pt-2">
                  <span>Grand Total</span>
                  <span className="font-serif text-base text-slate-900">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={onCheckout}
                className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3.5 px-4 rounded-2xl flex items-center justify-center space-x-2 shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>

              {/* Trust markers */}
              <div className="mt-3 flex items-center justify-center space-x-3 text-[10px] text-slate-500">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>BIS 925 Verified</span>
                </span>
                <span>•</span>
                <span>100% Secure Checkout</span>
                <span>•</span>
                <span>Doorstep Returns</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
