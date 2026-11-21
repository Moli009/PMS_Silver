import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  CreditCard, 
  Smartphone, 
  Truck, 
  Banknote,
  ArrowRight,
  PackageCheck
} from 'lucide-react';

export default function CheckoutModal({ 
  isOpen, 
  onClose, 
  cartItems, 
  appliedCoupon, 
  onOrderSuccess,
  userPincode 
}) {
  if (!isOpen) return null;

  const [step, setStep] = useState('details'); // 'details' | 'payment' | 'success'
  const [formData, setFormData] = useState({
    name: 'Ananya Sharma',
    phone: '9876543210',
    email: 'ananya.sharma@example.com',
    address: 'Flat 402, Lotus Residency, MG Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: userPincode || '400001'
  });
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [orderNumber, setOrderNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  let discountAmount = 0;
  if (appliedCoupon === 'SPARKLE500' && subtotal >= 2999) discountAmount = 500;
  else if (appliedCoupon === 'PMS10') discountAmount = Math.round(subtotal * 0.10);
  else if (appliedCoupon === 'GIFT925') discountAmount = 200;
  const grandTotal = Math.max(0, subtotal - discountAmount);

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const generatedOrder = `PMS-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);
      setIsProcessing(false);
      setStep('success');
      if (onOrderSuccess) onOrderSuccess(generatedOrder);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={() => {
          if (step !== 'processing') onClose();
        }}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6 text-center">
        <div className="w-full max-w-2xl transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all relative border border-stone-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/70">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900">
                PMS Silver Express Checkout
              </h3>
            </div>
            {step !== 'success' && (
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Stepper Indicator */}
          {step !== 'success' && (
            <div className="px-6 pt-4 flex items-center justify-center space-x-8 text-xs font-semibold">
              <span className={`flex items-center space-x-1.5 ${
                step === 'details' ? 'text-slate-900 border-b-2 border-slate-900 pb-1' : 'text-emerald-700'
              }`}>
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">1</span>
                <span>Delivery Address</span>
              </span>

              <span className={`flex items-center space-x-1.5 ${
                step === 'payment' ? 'text-slate-900 border-b-2 border-slate-900 pb-1' : 'text-slate-400'
              }`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  step === 'payment' ? 'bg-slate-900 text-white' : 'bg-stone-200 text-slate-600'
                }`}>2</span>
                <span>Payment & Trust</span>
              </span>
            </div>
          )}

          {/* Content Body */}
          <div className="p-6">
            
            {/* Step 1: Address Details */}
            {step === 'details' && (
              <form onSubmit={handleDetailsSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number (For Tracking)</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Street Address / House No.</label>
                  <input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">City</label>
                    <input
                      required
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">State</label>
                    <input
                      required
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Pincode</label>
                    <input
                      required
                      type="text"
                      maxLength={6}
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-stone-100">
                  <div>
                    <span className="text-xs text-slate-500">Amount Payable:</span>
                    <p className="font-serif font-bold text-lg text-slate-900">₹{grandTotal.toLocaleString('en-IN')}</p>
                  </div>

                  <button
                    type="submit"
                    className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center space-x-2 transition"
                  >
                    <span>Proceed to Payment</span>
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Payment Options */}
            {step === 'payment' && (
              <div className="space-y-4">
                <p className="text-xs font-semibold text-slate-800">Select Instant Payment Method:</p>

                <div className="space-y-2.5">
                  <label className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition ${
                    paymentMethod === 'upi' ? 'border-slate-900 bg-amber-50/40 ring-1 ring-slate-900' : 'border-stone-200 hover:bg-stone-50'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="text-slate-900 focus:ring-slate-900" 
                      />
                      <Smartphone className="w-5 h-5 text-emerald-600" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">UPI Instant Payment (GPay, PhonePe, Paytm, QR)</p>
                        <p className="text-[10px] text-emerald-700 font-semibold">Extra ₹100 Cashback on UPI</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Fastest</span>
                  </label>

                  <label className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition ${
                    paymentMethod === 'card' ? 'border-slate-900 bg-amber-50/40 ring-1 ring-slate-900' : 'border-stone-200 hover:bg-stone-50'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="text-slate-900 focus:ring-slate-900" 
                      />
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">Credit / Debit Card (Visa, Mastercard, RuPay)</p>
                        <p className="text-[10px] text-slate-500">All major banks supported with 3D Secure OTP</p>
                      </div>
                    </div>
                  </label>

                  <label className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition ${
                    paymentMethod === 'cod' ? 'border-slate-900 bg-amber-50/40 ring-1 ring-slate-900' : 'border-stone-200 hover:bg-stone-50'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="text-slate-900 focus:ring-slate-900" 
                      />
                      <Banknote className="w-5 h-5 text-amber-700" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">Cash on Delivery (COD)</p>
                        <p className="text-[10px] text-slate-500">Pay cash or UPI at your doorstep upon arrival</p>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-stone-100">
                  <button
                    onClick={() => setStep('details')}
                    className="text-xs text-slate-600 hover:text-slate-900 underline font-medium"
                  >
                    Back to Address
                  </button>

                  <button
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm px-7 py-3 rounded-xl flex items-center space-x-2 transition shadow-lg"
                  >
                    {isProcessing ? (
                      <span>Verifying & Securing Order...</span>
                    ) : (
                      <>
                        <span>Pay ₹{grandTotal.toLocaleString('en-IN')} & Confirm</span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Success Screen */}
            {step === 'success' && (
              <div className="py-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    Order Confirmed
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-slate-900 mt-2">
                    Thank you for choosing PMS Silver!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
                    Your order <strong className="text-slate-900">{orderNumber}</strong> has been received and is being carefully hallmarked, polished, and packaged in our signature luxury velvet box.
                  </p>
                </div>

                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-left text-xs max-w-md mx-auto space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Shipping to:</span>
                    <span className="font-semibold text-slate-800">{formData.name}, {formData.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Estimated Delivery:</span>
                    <span className="font-semibold text-emerald-700">Within 48-72 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Certificate of Authenticity:</span>
                    <span className="font-semibold text-slate-800">Included in Package (BIS 925)</span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-8 py-3 rounded-full transition shadow-md"
                >
                  Continue Shopping
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
