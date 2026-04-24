"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const [isLargeDevice, setIsLargeDevice] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsLargeDevice(window.innerWidth >= 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", isLargeDevice ? "50%" : "0%"]);
  const card1Y = useTransform(scrollYProgress, [0, 1], ["0%", isLargeDevice ? "80%" : "0%"]);
  const buildingY = useTransform(scrollYProgress, [0, 1], ["0%", isLargeDevice ? "40%" : "0%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", isLargeDevice ? "10%" : "0%"]);
  const opacity = useTransform(scrollYProgress, isLargeDevice ? [0, 0.8] : [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 pb-48 md:pb-20 overflow-hidden bg-[#e5e5e5]"
    >
      {/* Sky Gradient Background [Z-0] */}
      <div className="absolute inset-0 bg-linear-to-b from-[#cfd4d8] to-[#e8e7e6] z-0" />

      {/* Colorful Light Blobs behind Heading */}
      <div className="absolute top-[20%] left-[5%] w-[600px] h-[600px] bg-orange-300/30 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-sky-300/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Floating Card 1 (Center, Behind Hills) [Z-10] -> BIG CARD */}
      <motion.div
        style={{ y: card1Y, opacity }}
        initial={isLargeDevice ? { opacity: 0, y: 100 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: isLargeDevice ? 0.8 : 0 }}
        className="absolute top-[25%] left-[calc(45%+12px)] transform -translate-x-1/2 bg-white/95 backdrop-blur-md p-8 rounded-4xl shadow-2xl w-full max-w-md z-10 hidden lg:block pointer-events-auto border border-white/20"
      >
        <div className="flex gap-2 mb-6">
          <span className="px-4 py-1.5 border border-zinc-200 rounded-full text-xs text-zinc-600">Heritage</span>
          <span className="px-4 py-1.5 border border-zinc-200 rounded-full text-xs text-zinc-600">Expertise</span>
          <span className="px-4 py-1.5 bg-[#3a3532] text-white rounded-full text-xs">Quality</span>
        </div>
        <h3 className="text-2xl text-[#2c2926] font-medium mb-3 pr-10 leading-tight">35 Years of Excellence</h3>
        <p className="text-zinc-500 text-sm mb-8 font-light">Delivering exceptional, environmentally responsible construction.</p>
        
        <div className="relative h-36 rounded-2xl overflow-hidden bg-zinc-100 flex items-center justify-center group cursor-pointer mx-auto w-full shadow-inner">
           <Image 
             src="https://weburbanist.com/wp-content/uploads/2016/04/architecture-gif-perspective-shift.gif" 
             alt="Room Tour" 
             fill 
             unoptimized
             className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
           />
           <div className="absolute z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
             <Play size={18} className="text-[#3a3532] ml-1" />
           </div>
           <span className="absolute top-3 right-3 text-[10px] font-bold tracking-widest bg-white/80 px-2 py-1 rounded text-zinc-800">PREVIEW</span>
        </div>
      </motion.div>

      {/* Landscape Background with Transparent Sky [Z-20] */}
      <motion.div 
        className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="relative w-full h-[60vh] md:h-[70vh] translate-y-10">
          <Image 
            src="/newhero.png"
            alt="Hero Landscape"
            fill
            priority
            className="object-cover object-bottom w-full"
          />
        </div>
      </motion.div>

      <div className="container relative z-50 mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between h-full pt-4 pointer-events-none">
        
        {/* Left Side Content [Z-50] */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="flex-1 flex flex-col justify-center max-w-2xl mt-8 lg:-mt-20 z-50 pointer-events-none"
        >
          <motion.h1 
            initial={isLargeDevice ? { opacity: 0, y: 50 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-[4rem] text-[#2c2926] font-medium leading-[1.1] mb-6 pointer-events-auto"
          >
            THE PERFECT <br />
            HOME<sup className="text-xl md:text-3xl top-[-0.8em] relative font-light">®</sup>
          </motion.h1>

          <motion.div
            initial={isLargeDevice ? { opacity: 0, x: -30 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4 text-[#2c2926] text-base md:text-lg font-medium mb-12 pointer-events-auto"
          >
            <span className="w-12 h-0.5 bg-[#2c2926]" />
            <p>/ We craft custom homes /</p>
          </motion.div>

          <motion.div
            initial={isLargeDevice ? { opacity: 0, y: 30 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6 pointer-events-auto"
          >
            <Link 
              href="#projects" 
              className="inline-flex items-center justify-center px-10 py-4 bg-[#3a3532] hover:bg-[#2a2624] text-white rounded-full uppercase tracking-widest text-xs font-medium transition-all hover:scale-105 shadow-[10px_10px_25px_rgba(58,53,50,0.3),-8px_-8px_20px_rgba(255,255,255,0.6)] hover:shadow-[14px_14px_30px_rgba(58,53,50,0.4),-8px_-8px_20px_rgba(255,255,255,0.7)]"
            >
              Start
            </Link>
            {/* <Link href="#about" className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-zinc-300 text-[#2c2926] hover:bg-white transition-colors shadow-[6px_6px_15px_rgba(0,0,0,0.05),-6px_-6px_15px_rgba(255,255,255,0.8)]">
              <Play size={18} className="ml-1" />
            </Link> */}
          </motion.div>

          {/* Mobile Only Center Card Substitute */}
          <motion.div
            initial={isLargeDevice ? { opacity: 0, y: 50 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isLargeDevice ? 1 : 0.3 }}
            className="block lg:hidden mt-12 bg-white/95 p-6 rounded-2xl shadow-xl w-full max-w-sm pointer-events-auto border border-white/20"
          >
            <div className="flex gap-2 mb-4 flex-wrap">
              <span className="px-3 py-1 border border-zinc-200 rounded-full text-[10px] text-zinc-600">Heritage</span>
              <span className="px-3 py-1 border border-zinc-200 rounded-full text-[10px] text-zinc-600">Expertise</span>
              <span className="px-3 py-1 bg-[#3a3532] text-white rounded-full text-[10px]">Quality</span>
            </div>
            <h3 className="text-xl text-[#2c2926] font-medium mb-2 leading-tight">35 Years of Excellence</h3>
            <p className="text-zinc-500 text-xs font-light">Delivering exceptional, environmentally responsible construction.</p>
          </motion.div>
        </motion.div>

        {/* Right Side Graphics Container */}
        <div className="flex-1 relative h-[60vh] lg:h-auto mt-12 lg:mt-0 pointer-events-none">
          
          {/* Parallax Building (Foreground) [Z-40] */}
          <motion.div
            style={{ y: buildingY, opacity }}
            initial={isLargeDevice ? { opacity: 0, x: 50, y: 100 } : false}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: isLargeDevice ? 0.4 : 0, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 right-0 w-full md:w-[65%] lg:w-[60%] h-full z-40 drop-shadow-2xl hidden md:block pointer-events-none"
          >
            <div className="relative w-full h-[150%] transform scale-[2.2] origin-bottom-right translate-y-36 lg:translate-y-48 translate-x-20 lg:translate-x-32 xl:translate-x-48">
              <Image 
                src="/hero-img.png"
                alt="Modern Custom Home"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom stats/info bar [Z-60] */}
      <motion.div 
        initial={isLargeDevice ? { opacity: 0, y: 50 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: isLargeDevice ? 1.5 : 0 }}
        className="absolute bottom-0 left-0 w-full z-60 bg-linear-to-t from-black/90 via-black/60 to-transparent pt-20 md:pt-32 pb-6 md:pb-8 pointer-events-none"
      >
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:flex md:flex-row md:justify-between items-end gap-y-4 gap-x-4 md:gap-6 pointer-events-auto lg:pr-[40%] xl:pr-[45%]">
          
          {/* Materials */}
          <div className="col-span-1 flex gap-3 items-center">
            <div className="hidden md:block w-14 h-14 relative rounded-xl overflow-hidden shadow-sm shrink-0 border border-white/20">
              <Image src="/640182.jpg" alt="Materials" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-xs md:text-sm text-white mb-0.5 md:mb-1 font-bold drop-shadow-md leading-tight">Premium Materials</h3>
              <p className="text-white/80 text-[10px] font-medium leading-tight drop-shadow-sm hidden md:block">Working exclusively with industry verified global suppliers.</p>
            </div>
          </div>
          
          {/* Customers */}
          <div className="col-span-1 flex flex-col items-end md:items-start text-right md:text-left">
            <div className="flex -space-x-2 md:-space-x-3 mb-1 md:mb-2 justify-center">
              <div className="w-6 h-6 md:w-8 rounded-full border border-white/20 bg-zinc-300 overflow-hidden relative shadow-sm"><Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="User" fill className="object-cover"/></div>
              <div className="w-6 h-6 md:w-8 rounded-full border border-white/20 bg-zinc-400 overflow-hidden relative shadow-sm"><Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt="User" fill className="object-cover"/></div>
            </div>
            <div className="flex items-baseline gap-1 md:gap-2 drop-shadow-md">
              <h4 className="text-sm md:text-xl text-white italic font-serif font-bold leading-none">2m+</h4>
              <p className="text-white/80 text-[8px] md:text-[9px] uppercase tracking-widest font-bold">Customers</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="col-span-2 md:col-span-1 w-full md:w-auto flex flex-row justify-between items-center md:flex-col md:items-end mt-1 md:mt-0 pt-3 md:pt-0 border-t border-white/10 md:border-none">
            <h3 className="text-[10px] md:text-xs text-white uppercase tracking-wider leading-tight font-bold drop-shadow-md">We combine nature & home comfort</h3>
            <Link href="#about" className="text-[10px] md:text-[9px] uppercase tracking-widest border-b border-white/50 pb-0.5 md:pb-1 text-white hover:text-white/80 transition-colors font-bold drop-shadow-sm shrink-0 ml-4 md:ml-0">Learn More</Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
