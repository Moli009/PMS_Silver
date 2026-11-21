import React, { useState } from 'react';
import { 
  Smartphone, 
  Monitor, 
  RotateCw, 
  Wifi, 
  Battery, 
  Signal, 
  X,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export default function PhoneSimulator({ children, isEnabled, onToggle }) {
  const [deviceModel, setDeviceModel] = useState('iphone15'); // 'iphone15' | 'pixel8' | 'galaxy'
  const [scale, setScale] = useState(1);

  const devices = {
    iphone15: { name: 'iPhone 15 Pro', width: 393, height: 852, radius: 'rounded-[50px]', bezel: 'p-3.5', island: true },
    pixel8: { name: 'Google Pixel 8', width: 412, height: 915, radius: 'rounded-[44px]', bezel: 'p-3', island: false },
    galaxy: { name: 'Samsung S24', width: 360, height: 780, radius: 'rounded-[40px]', bezel: 'p-3', island: false }
  };

  const currentDevice = devices[deviceModel];

  if (!isEnabled) {
    return (
      <>
        {children}
        {/* Floating Trigger to enter Phone Preview anytime */}
        <div className="fixed bottom-20 sm:bottom-6 right-5 z-40">
          <button
            onClick={onToggle}
            className="group flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-full shadow-2xl border border-slate-700/80 hover:scale-105 transition-all duration-200 cursor-pointer"
            title="Open Interactive Phone Preview Simulator"
          >
            <Smartphone className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span className="text-xs font-semibold tracking-wide">Phone Preview Mode</span>
            <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-1.5 py-0.2 rounded-full">390px</span>
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start py-6 px-4 relative overflow-x-hidden font-sans">
      
      {/* Top Floating Simulator Control Header */}
      <header className="w-full max-w-4xl bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-3 sm:px-6 mb-6 flex flex-wrap items-center justify-between gap-3 shadow-xl z-30">
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center border border-amber-400/30">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-serif font-bold text-sm text-white flex items-center gap-1.5">
              <span>PMS Silver Mobile Simulator</span>
              <span className="text-[10px] font-sans font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full">
                Interactive
              </span>
            </h2>
            <p className="text-[11px] text-slate-400">
              Minous & GIVA mobile responsive view • {currentDevice.width} × {currentDevice.height} px
            </p>
          </div>
        </div>

        {/* Device Switcher & Scale */}
        <div className="flex items-center space-x-3 text-xs">
          
          {/* Device Model Selector */}
          <div className="flex items-center bg-slate-800/80 border border-slate-700 rounded-xl px-2.5 py-1.5">
            <select
              value={deviceModel}
              onChange={(e) => setDeviceModel(e.target.value)}
              className="bg-transparent text-slate-200 text-xs font-medium focus:outline-none cursor-pointer"
            >
              <option value="iphone15" className="bg-slate-900 text-white">iPhone 15 Pro (393px)</option>
              <option value="pixel8" className="bg-slate-900 text-white">Google Pixel 8 (412px)</option>
              <option value="galaxy" className="bg-slate-900 text-white">Samsung S24 (360px)</option>
            </select>
          </div>

          {/* Zoom / Scale */}
          <div className="hidden sm:flex items-center bg-slate-800/80 border border-slate-700 rounded-xl px-2 py-1 space-x-1">
            <button 
              onClick={() => setScale(0.9)} 
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition ${scale === 0.9 ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              90%
            </button>
            <button 
              onClick={() => setScale(1)} 
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition ${scale === 1 ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              100%
            </button>
          </div>

          {/* Exit Button */}
          <button
            onClick={onToggle}
            className="flex items-center space-x-1.5 bg-white hover:bg-stone-100 text-slate-950 px-3.5 py-1.5 rounded-xl font-semibold transition shadow"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Full Desktop</span>
          </button>

        </div>

      </header>

      {/* Realistic Luxury Smartphone Chassis */}
      <div 
        className="relative transition-transform duration-300 ease-out origin-top"
        style={{ transform: `scale(${scale})` }}
      >
        
        {/* Outer Titanium Frame */}
        <div className={`relative bg-gradient-to-b from-[#2A2B2F] via-[#1E1F23] to-[#121316] ${currentDevice.bezel} ${currentDevice.radius} shadow-[0_25px_70px_rgba(0,0,0,0.85)] border-4 border-[#3D3E44] ring-1 ring-white/10`}>
          
          {/* Side Hardware Buttons Mockups */}
          {/* Volume Buttons Left */}
          <div className="absolute -left-[7px] top-28 w-[3px] h-12 bg-[#2D2E33] rounded-l-sm" />
          <div className="absolute -left-[7px] top-44 w-[3px] h-12 bg-[#2D2E33] rounded-l-sm" />
          {/* Power Button Right */}
          <div className="absolute -right-[7px] top-36 w-[3px] h-16 bg-[#2D2E33] rounded-r-sm" />

          {/* Device Screen Glass */}
          <div 
            className={`relative bg-[#FAF9F6] text-slate-900 rounded-[38px] overflow-hidden flex flex-col shadow-inner`}
            style={{ 
              width: `${currentDevice.width}px`, 
              height: `${currentDevice.height}px` 
            }}
          >
            
            {/* iOS Dynamic Island & Status Bar */}
            <div className="sticky top-0 inset-x-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md pt-3 pb-1 px-6 flex items-center justify-between text-xs text-slate-900 select-none border-b border-stone-200/40">
              
              {/* Left Clock */}
              <span className="font-semibold text-xs tracking-tight">9:41</span>

              {/* Dynamic Island Capsule */}
              {currentDevice.island && (
                <div className="w-24 h-6 bg-black rounded-full flex items-center justify-between px-2.5 mx-auto -mt-1 shadow-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800/80" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>
              )}

              {/* Right System Icons */}
              <div className="flex items-center space-x-1.5 text-slate-800">
                <Signal className="w-3.5 h-3.5" />
                <Wifi className="w-3.5 h-3.5" />
                <Battery className="w-4 h-4 fill-slate-800 text-slate-800" />
              </div>

            </div>

            {/* Scrollable Mobile Web Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth relative no-scrollbar">
              {children}
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="w-full bg-[#FAF9F6] py-1.5 flex justify-center items-center pointer-events-none select-none">
              <div className="w-32 h-1 bg-slate-900/40 rounded-full" />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
