"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="about" className="relative py-32 bg-zinc-50 overflow-hidden" ref={ref}>
      {/* Colorful Light Blobs behind Heading */}
      <div className="absolute top-[20%] left-[-10%] w-125 h-125 bg-blue-400/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[10%] w-100 h-100 bg-indigo-300/20 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Heading & Image */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-zinc-900 leading-tight mb-8">
                About <br />
                <span className="italic text-zinc-500">Al Mustaqbal</span>
              </h2>
              <div className="flex items-center gap-6">
                <div className="h-px bg-zinc-300 w-24"></div>
                <p className="text-zinc-600 font-medium uppercase tracking-widest text-sm">
                  35 Years of Expertise
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group"
            >
              <Image 
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Construction Site Professional"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-zinc-700 text-xl leading-relaxed font-light"
          >
            <p>
              <strong className="font-semibold text-zinc-900">Al Mustaqbal Group of Companies</strong> is a major and reputable construction business with offices in Sharjah and Ajman, United Arab Emirates. We have 35 years of expertise, and the people who run the firm are seasoned professionals with extensive experience in construction and related activities. 
            </p>
            <p>
              We are a construction firm that serves thousands of corporate clients with exceptional, high-quality, environmentally responsible, and efficient building services and products.
            </p>
            <p>
              We have developed great connections with our clients as a result of our dedication and passion to provide the best services. Some of the largest and most established corporations are among our clients and partners. We are able to produce projects and services that benefit the community, our economy, and future generations by using our combined experience, technical skill, and local understanding.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
