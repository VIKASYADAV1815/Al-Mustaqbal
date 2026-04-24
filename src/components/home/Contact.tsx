"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 bg-white text-[#2c2926] relative overflow-hidden" ref={ref}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f4f4f4] rounded-full blur-[120px] opacity-80 transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Colorful Light Blobs behind Heading */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-red-300/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-fuchsia-300/20 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-[#3a3532]" />
              <h3 className="text-sm uppercase tracking-widest text-[#3a3532] font-semibold">Get in Touch</h3>
            </div>
            <h2 className="text-5xl md:text-6xl mb-8 leading-[1.1] font-medium">
              Let&apos;s build <br />
              <span className="text-[#a59b92] italic font-serif">together</span>
            </h2>
            <p className="text-zinc-500 mb-16 text-lg font-light leading-relaxed">
              Ready to start your next big project? Get in touch with our team of experts today. We are here to bring your vision to life.
            </p>
            
            <div className="space-y-8 text-sm uppercase tracking-widest font-medium">
              <div className="flex flex-col gap-2">
                <span className="text-zinc-400 text-xs">Location</span>
                <p className="text-lg normal-case tracking-normal font-light">Sharjah & Ajman, UAE</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-zinc-400 text-xs">Email</span>
                <p className="text-lg normal-case tracking-normal font-light">info@almustaqbal.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-zinc-400 text-xs">Phone</span>
                <p className="text-lg normal-case tracking-normal font-light">+971 50 123 4567</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#fcfcfc] p-10 md:p-14 rounded-4xl border border-zinc-100 shadow-sm">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative">
                    <input type="text" id="fname" className="peer w-full bg-transparent border-b border-zinc-300 py-3 text-[#2c2926] placeholder-transparent focus:outline-none focus:border-[#2c2926] transition-colors" placeholder="First Name" />
                    <label htmlFor="fname" className="absolute left-0 -top-3.5 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#2c2926]">First Name</label>
                  </div>
                  <div className="relative">
                    <input type="text" id="lname" className="peer w-full bg-transparent border-b border-zinc-300 py-3 text-[#2c2926] placeholder-transparent focus:outline-none focus:border-[#2c2926] transition-colors" placeholder="Last Name" />
                    <label htmlFor="lname" className="absolute left-0 -top-3.5 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#2c2926]">Last Name</label>
                  </div>
                </div>
                
                <div className="relative">
                  <input type="email" id="email" className="peer w-full bg-transparent border-b border-zinc-300 py-3 text-[#2c2926] placeholder-transparent focus:outline-none focus:border-[#2c2926] transition-colors" placeholder="Email Address" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#2c2926]">Email Address</label>
                </div>
                
                <div className="relative">
                  <textarea id="message" rows={4} className="peer w-full bg-transparent border-b border-zinc-300 py-3 text-[#2c2926] placeholder-transparent focus:outline-none focus:border-[#2c2926] transition-colors resize-none mt-2" placeholder="Message"></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-5 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#2c2926]">Tell us about your project</label>
                </div>
                
                <button type="button" className="bg-[#2c2926] text-white px-12 py-4 rounded-full uppercase tracking-widest text-sm font-medium hover:bg-black transition-colors w-full md:w-auto hover:scale-105 transform duration-300 shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
