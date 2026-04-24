"use client";
import React, { useRef } from 'react';
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
        <div className="absolute top-0 left-0 h-full w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex space-x-4 md:space-x-6 items-center whitespace-nowrap px-4 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {/* Render array 3 times for a smooth infinite scroll without gaps */}
          {[...WORKFORCE_STATS, ...WORKFORCE_STATS, ...WORKFORCE_STATS].map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 shrink-0 bg-white px-5 md:px-6 py-3 md:py-4 rounded-full border border-zinc-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-md hover:border-zinc-200 transition-all cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#3a3532]"></div>
              <span className="text-zinc-900 font-bold text-xl md:text-2xl leading-none">{stat.value}</span>
              <span className="text-zinc-500 uppercase tracking-widest text-[9px] md:text-[11px] font-bold leading-none mt-1">{stat.label}</span>
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
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 max-w-3xl mx-auto"
        >
          {PROJECT_STATS.map((stat, index) => {
            const splitLabel = stat.label.split(' ');
            return (
              <div 
                key={index}
                className="flex-1 flex items-center justify-center gap-4 bg-[#faf9f8] px-6 py-5 rounded-2xl border border-zinc-100 hover:bg-zinc-50 transition-colors shadow-sm"
              >
                <span className="text-4xl md:text-5xl font-serif font-bold text-[#3a3532]">{stat.value}</span>
                <div className="flex flex-col items-start">
                  <span className="text-zinc-500 uppercase tracking-widest text-[10px] md:text-xs font-bold leading-tight">
                    {splitLabel[0]}
                  </span>
                  <span className="text-zinc-800 uppercase tracking-widest text-[10px] md:text-xs font-bold leading-tight">
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
