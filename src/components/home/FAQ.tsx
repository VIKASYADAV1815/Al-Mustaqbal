"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    question: "What type of construction projects do you handle?",
    answer: "We handle a wide range of projects including residential, commercial, and industrial construction. With 35 years of expertise, our team is equipped to manage everything from custom luxury homes to large-scale corporate facilities."
  },
  {
    question: "Do you provide architectural and interior design services?",
    answer: "Yes, we offer comprehensive architectural and interior design services. Our in-house team specializes in creating unique, functional, and aesthetically pleasing designs that perfectly align with your vision and requirements."
  },
  {
    question: "Where are your services available?",
    answer: "Al Mustaqbal Group primarily operates in the United Arab Emirates, with established offices in Sharjah and Ajman. We serve clients across the region with our high-quality construction services."
  },
  {
    question: "How do you ensure the quality of materials used?",
    answer: "We are committed to using only the best materials for our projects. We work exclusively with verified, reputable suppliers and conduct rigorous quality control checks throughout the construction process to ensure longevity and safety."
  },
  {
    question: "How can I start a project with Al Mustaqbal?",
    answer: "Starting a project is simple. You can reach out to us via our Contact Us section, email us at info@almustaqbal.com, or call our office. Our team will schedule an initial consultation to discuss your needs and project scope."
  },
  {
    question: "Do you handle all necessary permits and approvals?",
    answer: "Absolutely. We manage the entire permitting process, ensuring that all architectural plans and construction activities comply with local building codes and regulations."
  }
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section className="py-32 bg-[#f4f4f4] relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2c2926 2px, transparent 2px)', backgroundSize: '32px 32px' }} />

      {/* Colorful Light Blobs behind Heading */}
      <div className="absolute top-[10%] left-[5%] w-100 h-100 bg-cyan-300/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] left-[20%] w-[350px] h-[350px] bg-lime-300/20 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <motion.div
            initial={isLargeDevice ? { opacity: 0, y: 50 } : false}
            animate={isLargeDevice ? (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }) : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-px bg-[#3a3532]" />
                <h3 className="text-base uppercase tracking-widest text-[#3a3532] font-bold">FAQ</h3>
              </div>
              <h2 className="text-5xl md:text-6xl text-[#2c2926] font-medium leading-[1.1] mb-8">
                Frequently <br /> Asked Questions
              </h2>
              <p className="text-zinc-700 font-normal text-lg md:text-xl mb-12 leading-relaxed">
                Find answers to some of the most common questions about our construction services and processes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 md:grid grow mt-auto">
              <div className="relative h-32 md:h-48 lg:h-full min-h-40 rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/640182.jpg" 
                  fill 
                  className="object-cover" 
                  alt="Construction Detail" 
                />
              </div>
              <div className="relative h-32 md:h-48 lg:h-full min-h-40 rounded-3xl overflow-hidden shadow-xl mt-10 transform hover:scale-105 transition-transform duration-500">
                <Image 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800" 
                  fill 
                  unoptimized
                  className="object-cover" 
                  alt="Architecture Details" 
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={isLargeDevice ? { opacity: 0, x: 50 } : false}
            animate={isLargeDevice ? (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }) : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col h-full"
          >
            <div className="bg-[#333333] rounded-3xl shadow-[15px_15px_40px_rgba(0,0,0,0.1),-10px_-10px_20px_rgba(255,255,255,0.8)] border border-zinc-800/50 p-6 md:p-10 grow transition-all duration-500 hover:shadow-[20px_20px_50px_rgba(0,0,0,0.15),-10px_-10px_25px_rgba(255,255,255,0.9)]">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-zinc-800/50 last:border-0"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
                  >
                    <span className={`text-base md:text-lg font-medium pr-6 transition-colors ${openIndex === index ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isLargeDevice ? (openIndex === index ? 180 : 0) : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-zinc-600 group-hover:text-zinc-400"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={isLargeDevice ? { height: 0, opacity: 0 } : { opacity: 1 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={isLargeDevice ? { height: 0, opacity: 0 } : { opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="pb-4 pt-1 text-zinc-500 font-light leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
