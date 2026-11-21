import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlistItems, 
  onMoveToCart, 
  onRemoveFromWishlist 
}) {
  if (!isOpen) return null;

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
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              <h3 className="font-serif font-bold text-lg text-slate-900">
                Your Wishlist
              </h3>
              <span className="text-xs bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-full">
                {wishlistItems.length}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-stone-200 transition"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items list */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-stone-100">
            {wishlistItems.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-400 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-base text-slate-800">
                  Your wishlist is empty
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Click the heart icon on any jewellery piece you love to save it here for later.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 bg-slate-900 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-slate-800 transition"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              wishlistItems.map((product) => (
                <div key={product.id} className="py-4 first:pt-0 flex gap-3.5 items-center">
                  
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h4 className="font-medium text-xs text-slate-900 line-clamp-1">
                      {product.name}
                    </h4>
                    
                    <div className="flex items-baseline space-x-1.5 mt-1">
                      <span className="font-serif font-bold text-sm text-slate-900">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-slate-400 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => onMoveToCart(product)}
                        className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center space-x-1 transition"
                      >
                        <ShoppingBag className="w-3 h-3 text-amber-300" />
                        <span>Move to Bag</span>
                      </button>

                      <button
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="text-slate-400 hover:text-rose-600 p-1.5 transition rounded-lg hover:bg-stone-100"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
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
