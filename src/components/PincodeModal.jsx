import React, { useState } from 'react';
import { X, MapPin, Check, Truck } from 'lucide-react';

export default function PincodeModal({ isOpen, onClose, currentPincode, onSavePincode }) {
  const [pincode, setPincode] = useState(currentPincode || '');
  const [status, setStatus] = useState(null);

  if (!isOpen) return null;

  const popularCities = [
    { city: 'Mumbai', pincode: '400001' },
    { city: 'Delhi NCR', pincode: '110001' },
    { city: 'Bengaluru', pincode: '560001' },
    { city: 'Hyderabad', pincode: '500001' },
    { city: 'Pune', pincode: '411001' },
    { city: 'Chennai', pincode: '600001' },
  ];

  const handleCheck = (code) => {
    const pin = code || pincode;
    if (!pin || pin.length < 6) return;
    setStatus({
      pincode: pin,
      deliveryTime: '2-3 Business Days',
      cod: true
    });
    onSavePincode(pin);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all relative border border-stone-200 p-6">
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-slate-600 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-2 text-slate-900 mb-2">
            <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="font-serif font-bold text-lg">Check Delivery Estimates</h3>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Enter your 6-digit postal pincode to see express delivery timelines and Cash on Delivery eligibility.
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              maxLength={6}
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
              placeholder="e.g. 400001"
              className="flex-1 text-xs px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <button
              onClick={() => handleCheck(pincode)}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition"
            >
              Verify
            </button>
          </div>

          {/* Quick Popular Cities */}
          <div className="mt-4 pt-3 border-t border-stone-100">
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Popular Delivery Hubs:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {popularCities.map((c) => (
                <button
                  key={c.city}
                  onClick={() => {
                    setPincode(c.pincode);
                    handleCheck(c.pincode);
                  }}
                  className="text-xs bg-stone-100 hover:bg-stone-200 text-slate-700 px-2.5 py-1 rounded-lg transition"
                >
                  {c.city} ({c.pincode})
                </button>
              ))}
            </div>
          </div>

          {status && (
            <div className="mt-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-1">
              <div className="font-bold flex items-center space-x-1">
                <Check className="w-3.5 h-3.5" />
                <span>Express Courier Serviceable to {status.pincode}</span>
              </div>
              <p className="text-[11px] text-emerald-700">
                • Estimated Dispatch: <strong>Within 24 Hours</strong><br />
                • Estimated Delivery: <strong>{status.deliveryTime}</strong><br />
                • Cash on Delivery: <strong>Available</strong>
              </p>
            </div>
          )}

          <div className="mt-5">
            <button
              onClick={onClose}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 rounded-xl transition"
            >
              Done
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
