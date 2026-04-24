"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

export default function Mission() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column - Images */}
          <div className="relative h-150 w-full hidden lg:block">
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <Image 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000"
                alt="Construction Site"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl z-20"
            >
              <Image 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000"
                alt="Modern Building"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-24 relative">
            
            {/* Colorful Light Blobs */}
            <div className="absolute top-[0%] right-[10%] w-[350px] h-[350px] bg-amber-300/20 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-[0%] right-[20%] w-[400px] h-[400px] bg-teal-300/20 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* Mission */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-px bg-[#3a3532]" />
                <h3 className="text-sm uppercase tracking-widest text-[#3a3532] font-semibold">Our Mission</h3>
              </div>
              <h4 className="text-4xl md:text-5xl text-[#2c2926] font-medium mb-6 leading-tight">
                Quality and <br /> Professionalism
              </h4>
              <p className="text-zinc-600 text-xl leading-relaxed font-light">
                The company&apos;s mission is to provide great, high-quality, and sufficient construction services to our clients while maintaining the highest degree of professionalism, as well as the enthusiasm and dedication of our staff.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-px bg-[#3a3532]" />
                <h3 className="text-sm uppercase tracking-widest text-[#3a3532] font-semibold">Our Vision</h3>
              </div>
              <h4 className="text-4xl md:text-5xl text-[#2c2926] font-medium mb-6 leading-tight">
                The First Option <br /> in Construction
              </h4>
              <p className="text-zinc-600 text-xl leading-relaxed font-light">
                The company&apos;s vision is to be the first option in the construction industry. In our relationships with our suppliers, subcontractors, professional colleagues, and consumers, we strive to maintain the greatest standards of professionalism, ethics, honesty, and respect.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
