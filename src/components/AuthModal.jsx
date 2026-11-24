import React, { useState } from 'react';
import { 
  X, 
  User, 
  Smartphone, 
  Mail, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  Gift, 
  Package, 
  ArrowRight, 
  LogOut,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function AuthModal({ 
  isOpen, 
  onClose, 
  currentUser, 
  onLogin, 
  onLogout 
}) {
  if (!isOpen) return null;

  const [mode, setMode] = useState('otp'); // 'otp' | 'email'
  const [step, setStep] = useState('input'); // 'input' | 'verify'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address to receive your OTP');
      return;
    }
    setError('');
    setStep('verify');
    setOtp('9250'); // Demo convenience auto-fill
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp !== '9250' && otp.length < 4) {
      setError('Invalid OTP. Please enter 9250');
      return;
    }
    setError('');
    const user = {
      name: fullName.trim() || email.split('@')[0],
      phone: phoneNumber ? `+91 ${phoneNumber}` : '+91 98765 43210',
      email: email.trim(),
      points: 250,
      joinedDate: 'November 2026'
    };
    onLogin(user);
    onClose();
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    setError('');
    const user = {
      name: fullName.trim() || email.split('@')[0],
      phone: '+91 9876543210',
      email: email.trim(),
      points: 250,
      joinedDate: 'November 2026'
    };
    onLogin(user);
    onClose();
  };

  const handleQuickDemoLogin = () => {
    const demoUser = {
      name: 'Ananya Sharma',
      phone: '+91 98765 43210',
      email: 'ananya.sharma@example.com',
      points: 350,
      joinedDate: 'Silver Club Member'
    };
    onLogin(demoUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all relative border border-stone-200">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-slate-600 flex items-center justify-center transition"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* IF USER IS ALREADY LOGGED IN: SHOW PROFILE VIEW */}
          {currentUser ? (
            <div className="p-6 sm:p-7">
              {/* Profile Header */}
              <div className="flex items-center space-x-3.5 pb-5 border-b border-stone-200">
                <div className="w-14 h-14 rounded-full bg-slate-900 text-amber-300 flex items-center justify-center font-serif text-2xl font-bold border-2 border-amber-400 shadow-md">
                  {currentUser.name ? currentUser.name[0].toUpperCase() : 'U'}
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h3 className="font-serif font-bold text-lg text-slate-900">
                      {currentUser.name}
                    </h3>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-xs text-slate-500">{currentUser.phone || currentUser.email}</p>
                  <span className="inline-block mt-1 text-[10px] bg-amber-50 text-amber-800 font-bold px-2 py-0.5 rounded-full border border-amber-200">
                    PMS Silver Club Privileged
                  </span>
                </div>
              </div>

              {/* PMS Silver Rewards Card */}
              <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-stone-900 text-white shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-amber-300 uppercase tracking-widest font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Silver Rewards
                    </span>
                    <p className="font-serif text-2xl font-bold mt-1 text-white">
                      {currentUser.points} Coins
                    </p>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Worth ₹{currentUser.points} on your next order
                    </p>
                  </div>
                  <Award className="w-8 h-8 text-amber-400 opacity-80" />
                </div>
              </div>

              {/* Recent Orders Preview */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                  <Package className="w-3.5 h-3.5 text-amber-600" />
                  <span>Recent Orders</span>
                </h4>

                <div className="bg-stone-50 border border-stone-200 p-3 rounded-2xl text-xs space-y-1.5">
                  <div className="flex justify-between items-center font-medium">
                    <span className="text-slate-900 font-semibold">Order #PMS-84920</span>
                    <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      In Transit 🚚
                    </span>
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    Solitaire Sparkle Ring • ₹1,899 • Free Express Delivery
                  </p>
                </div>
              </div>

              {/* Sign Out Button */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={onClose}
                  className="text-xs text-slate-600 hover:text-slate-900 underline font-medium"
                >
                  Continue Shopping
                </button>

                <button
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="flex items-center space-x-1.5 text-xs text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3.5 py-2 rounded-xl font-semibold transition"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          ) : (
            /* IF LOGGED OUT: SHOW SIGN IN / REGISTER FORM */
            <div>
              {/* Top Luxury Banner */}
              <div className="bg-gradient-to-r from-slate-900 to-stone-900 text-white p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-white p-1 rounded-lg inline-flex items-center shadow-xs">
                    <img 
                      src="/pms-logo.jpg" 
                      alt="PMS Silver Trend" 
                      className="h-8 w-auto object-contain rounded" 
                    />
                  </div>
                  <div className="flex items-center space-x-1.5 text-amber-300 text-[11px] font-semibold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                    <Gift className="w-3.5 h-3.5 text-amber-400" />
                    <span>₹200 Welcome Gift</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  Sign In to PMS Silver Trend
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Lala Pradeep Kumar Mohit Agarwal Saraf • 925 Hallmark Privileges
                </p>
              </div>

              {/* Mode Toggle: Email OTP vs Password */}
              <div className="px-6 pt-4 flex border-b border-stone-100 text-xs font-semibold">
                <button
                  onClick={() => {
                    setMode('otp');
                    setStep('input');
                    setError('');
                  }}
                  className={`flex-1 pb-3 text-center transition border-b-2 ${
                    mode === 'otp'
                      ? 'border-slate-900 text-slate-900'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-600" />
                    <span>Instant Email OTP</span>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setMode('email');
                    setError('');
                  }}
                  className={`flex-1 pb-3 text-center transition border-b-2 ${
                    mode === 'email'
                      ? 'border-slate-900 text-slate-900'
                      : 'border-transparent text-slate-400 hover:text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Password Login</span>
                  </div>
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6 space-y-4">
                
                {/* Error Banner */}
                {error && (
                  <div className="text-xs text-rose-600 bg-rose-50 border border-rose-200 p-2.5 rounded-xl">
                    {error}
                  </div>
                )}

                {/* EMAIL OTP FLOW */}
                {mode === 'otp' && (
                  <>
                    {step === 'input' ? (
                      <form onSubmit={handleSendOtp} className="space-y-3.5">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Ananya Sharma"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Email Address
                          </label>
                          <div className="relative">
                            <input
                              required
                              type="email"
                              placeholder="you@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full text-xs p-2.5 pl-9 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                            />
                            <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          </div>
                          <div className="mt-2 p-2.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-[11px] text-amber-950 flex items-start space-x-2">
                            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <span>
                              OTP will be sent to this email from <strong>pmsdhampur25@gmail.com</strong>
                            </span>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm py-3 rounded-xl transition shadow-md flex items-center justify-center space-x-1.5"
                        >
                          <span>Get OTP on Email</span>
                          <ArrowRight className="w-4 h-4 text-amber-300" />
                        </button>
                      </form>
                    ) : (
                      /* OTP VERIFICATION STEP */
                      <form onSubmit={handleVerifyOtp} className="space-y-3.5">
                        <div className="text-center pb-1">
                          <div className="inline-flex items-center space-x-1.5 text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-2.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>OTP sent from pmsdhampur25@gmail.com</span>
                          </div>
                          <p className="text-xs text-slate-600">
                            Enter the 4-digit verification code sent to:
                          </p>
                          <p className="text-xs font-bold text-slate-900 mt-0.5">
                            {email}
                          </p>
                        </div>

                        <div>
                          <input
                            type="text"
                            maxLength={4}
                            required
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                            placeholder="Enter 4-digit OTP"
                            className="w-full text-center tracking-[0.5em] text-lg font-bold p-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900 bg-stone-50"
                          />
                          <p className="text-[10px] text-slate-400 text-center mt-1">
                            Demo Code: <strong className="text-slate-800">9250</strong>
                          </p>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm py-3 rounded-xl transition shadow-md flex items-center justify-center space-x-1.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Verify & Sign In</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setStep('input')}
                          className="w-full text-center text-xs text-slate-500 hover:text-slate-800 underline"
                        >
                          Change Email Address
                        </button>
                      </form>
                    )}
                  </>
                )}

                {/* EMAIL / PASSWORD FLOW */}
                {mode === 'email' && (
                  <form onSubmit={handleEmailLogin} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="Ananya Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Password</label>
                      <input
                        required
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full text-xs p-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm py-3 rounded-xl transition shadow-md"
                    >
                      Sign In with Email
                    </button>
                  </form>
                )}

                {/* Quick 1-Click Demo Login Button for Testing */}
                <div className="pt-3 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={handleQuickDemoLogin}
                    className="w-full text-xs py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-semibold border border-amber-200 transition flex items-center justify-center space-x-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Quick 1-Click Demo Login (Ananya Sharma)</span>
                  </button>
                </div>

              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
