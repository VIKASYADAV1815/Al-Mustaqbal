"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    content: "The attention to detail and the sheer elegance of the design exceeded all my expectations. Absolutely stunning work.",
    author: "Sarah Jenkins",
    role: "Creative Director, Studio X",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    content: "Minimalist, fast, and incredibly intuitive. It completely transformed how we engage with our audience.",
    author: "David Chen",
    role: "Founder, Minimalist Tech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    content: "An absolute pleasure to work with. The final product was not just a website, but a piece of art.",
    author: "Elena Rodriguez",
    role: "Marketing Head, Nova Corp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    content: "Their team brought a level of creativity and technical expertise that we simply couldn't find elsewhere.",
    author: "Michael Chang",
    role: "CEO, Vertex Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    content: "Seamless integration, beautiful aesthetics, and top-tier performance. They delivered exactly what we needed.",
    author: "Jessica Alba",
    role: "Product Manager, Innovate AI",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isLargeDevice, setIsLargeDevice] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsLargeDevice(window.innerWidth >= 1024);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 md:py-24 bg-[#faf9f8] text-zinc-900 overflow-hidden"
    >
      {/* Light Theme Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      {/* Colorful Light Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-300/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[40%] w-[400px] h-100 bg-emerald-300/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-12 md:mb-16">
        <motion.div 
          initial={isLargeDevice ? { opacity: 0, y: 20 } : false}
          animate={isLargeDevice ? (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }) : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-zinc-300 w-8 md:w-12"></div>
            <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs md:text-sm">
              Testimonials
            </p>
            <div className="h-px bg-zinc-300 w-8 md:w-12"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4 text-center text-[#2c2926]">
            Client <span className="font-serif italic text-zinc-500 font-semibold">Stories</span>
          </h2>
          <p className="text-zinc-500 max-w-lg text-center text-sm md:text-base font-light">
            Don't just take our word for it. Here's what some of our recent partners have to say about our collaboration.
          </p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Scrolling Marquee */}
      <div className="relative flex overflow-x-hidden w-full group pb-8">

        <motion.div
          className="flex space-x-4 md:space-x-6 px-4 md:px-6 items-center w-max"
          animate={isLargeDevice ? { x: ["0%", "-50%"] } : { x: 0 }}
          transition={isLargeDevice ? { repeat: Infinity, duration: 45, ease: "linear" } : {}}
          whileHover={isLargeDevice ? { animationPlayState: "paused" } : {}}
        >
          {/* Double array for infinite seamless scrolling */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <motion.div
              key={`${testimonial.id}-${idx}`}
              whileHover={isLargeDevice ? { y: -5, scale: 1.01 } : {}}
              transition={{ duration: 0.3 }}
              className="w-[280px] md:w-[360px] shrink-0 p-6 md:p-8 rounded-2xl bg-[#333333] border border-zinc-800/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] transition-shadow duration-300 relative group/card"
            >
              <Quote className="w-8 h-8 text-zinc-800 mb-4 group-hover/card:text-zinc-700 transition-colors duration-300" />
              
              <p className="text-sm md:text-base leading-relaxed text-zinc-300 mb-8 min-h-25 font-light">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/50 mt-auto">
                <div className="w-10 h-10 rounded-full relative overflow-hidden border border-zinc-800 shrink-0 bg-zinc-900">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">
                    {testimonial.author}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
