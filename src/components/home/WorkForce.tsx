"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

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
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative py-12 md:py-20 bg-white border-b border-zinc-100 overflow-hidden" ref={ref}>
      
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Work Force Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
      </div>

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
          className="flex space-x-4 md:space-x-6 items-center whitespace-nowrap px-4 py-8 [will-change:transform]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Render array 3 times for a smooth infinite scroll without gaps */}
          {[...WORKFORCE_STATS, ...WORKFORCE_STATS, ...WORKFORCE_STATS].map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 shrink-0 backdrop-blur-md bg-white/30 border border-white/40 px-5 md:px-6 py-3 md:py-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
              <span className="text-zinc-900 font-bold text-xl md:text-2xl leading-none">{stat.value}</span>
              <span className="text-zinc-700 uppercase tracking-widest text-[9px] md:text-[11px] font-bold leading-none mt-1">{stat.label}</span>
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
              className="flex-1 flex flex-col items-center justify-center gap-2 backdrop-blur-md bg-white/30 px-8 py-8 rounded-3xl border border-white/40 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1.5"
            >
                <span className="text-5xl md:text-6xl font-serif font-bold text-zinc-900 tracking-tight">{stat.value}</span>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-zinc-600 uppercase tracking-widest text-[10px] md:text-xs font-bold leading-tight">
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
