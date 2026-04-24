"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WORKFORCE_STATS = [
  { label: "Vehicles", value: "15" },
  { label: "Supervisor", value: "4" },
  { label: "Mason", value: "20" },
  { label: "Labour", value: "35" },
  { label: "Electrician", value: "7" },
  { label: "Plumber", value: "9" },
  { label: "Carpenter", value: "27" },
  { label: "Steel Fixer", value: "15" },
  { label: "Painters", value: "5" },
];

const PROJECT_STATS = [
  { label: "Running Projects", value: "25" },
  { label: "Completed Projects", value: "800+" },
];

export default function WorkForce() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-12 md:py-20 bg-white border-b border-zinc-100 overflow-hidden" ref={ref}>
      
      {/* Beautiful Dot Pattern Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#faf9f8]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#3a3532" />
            </pattern>
            <linearGradient id="dotFade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3a3532" stopOpacity="0" />
              <stop offset="50%" stopColor="#3a3532" stopOpacity="1" />
              <stop offset="100%" stopColor="#3a3532" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="absolute inset-0 bg-linear-to-b from-white/90 via-transparent to-white/90 pointer-events-none" />
      </div>

      {/* Colorful Light Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-300/15 rounded-full blur-[120px] pointer-events-none z-0 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-300/15 rounded-full blur-[120px] pointer-events-none z-0 -translate-x-1/3 translate-y-1/3" />

      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-8 md:mb-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px bg-zinc-200 w-8 md:w-12"></div>
            <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs md:text-sm">
              Our Capacity
            </p>
            <div className="h-px bg-zinc-200 w-8 md:w-12"></div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 leading-tight">
            Work <span className="italic text-zinc-500">Force</span>
          </h2>
        </motion.div>
      </div>

      {/* Animated Marquee for Workforce Stats */}
      <div className="relative z-10 w-full flex overflow-x-hidden group mb-10 md:mb-16">

        <motion.div
          className="flex space-x-4 md:space-x-6 items-center whitespace-nowrap px-4 py-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {/* Render array 3 times for a smooth infinite scroll without gaps */}
          {[...WORKFORCE_STATS, ...WORKFORCE_STATS, ...WORKFORCE_STATS].map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 shrink-0 bg-[#333333] px-5 md:px-6 py-3 md:py-4 rounded-full border border-zinc-800/50 shadow-[12px_12px_24px_rgba(0,0,0,0.15),-8px_-8px_20px_rgba(255,255,255,0.8)] hover:shadow-[16px_16px_32px_rgba(0,0,0,0.2),-8px_-8px_20px_rgba(255,255,255,0.9)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
              <span className="text-white font-bold text-xl md:text-2xl leading-none">{stat.value}</span>
              <span className="text-zinc-400 uppercase tracking-widest text-[9px] md:text-[11px] font-bold leading-none mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Static Compact Cards for Projects */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center gap-8 md:gap-12 max-w-2xl mx-auto py-8"
        >
          {PROJECT_STATS.map((stat, index) => {
            const splitLabel = stat.label.split(' ');
            return (
            <div 
              key={index}
              className="flex-1 flex flex-col items-center justify-center gap-2 bg-[#333333] px-8 py-8 rounded-3xl border border-zinc-800/50 transition-all duration-500 shadow-[15px_15px_35px_rgba(0,0,0,0.15),-10px_-10px_25px_rgba(255,255,255,0.8)] hover:shadow-[20px_20px_45px_rgba(0,0,0,0.2),-10px_-10px_25px_rgba(255,255,255,0.9)] hover:-translate-y-1.5"
            >
                <span className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">{stat.value}</span>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-zinc-500 uppercase tracking-widest text-[10px] md:text-xs font-bold leading-tight">
                    {splitLabel[0]}
                  </span>
                  <span className="text-zinc-300 uppercase tracking-widest text-[10px] md:text-xs font-bold leading-tight">
                    {splitLabel[1]}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
