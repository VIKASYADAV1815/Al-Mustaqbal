"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Architectural Design",
    number: "01",
    description: "Building the groundwork for a final architectural construction, balancing space utilisation and aesthetic components to achieve the best design."
  },
  {
    title: "Interior Design",
    number: "02",
    description: "Creating unique looks that combine elegance, grandeur, and a one-of-a-kind ambiance. Professionalism, uniqueness, and innovation."
  },
  {
    title: "Renovation Services",
    number: "03",
    description: "Planning and executing building or remodelling projects, providing our valued customers with the highest level of world-class construction."
  },
  {
    title: "Construction Services",
    number: "04",
    description: "Expert site construction management, quality management, warehouse management, and contract administration for your project."
  },
  {
    title: "Construction Planning",
    number: "05",
    description: "Extensive planning sessions covering every element. Adapting project planning for each client based on their particular requirements."
  },
  {
    title: "Project Management",
    number: "06",
    description: "End-to-end management ensuring your project is completed on time, within budget, and to the highest quality standards."
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
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
    <section id="services" className="py-32 bg-[#f4f4f4] relative overflow-hidden" ref={containerRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#2c2926 1px, transparent 1px), linear-gradient(90deg, #2c2926 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Colorful Light Blobs behind Heading */}
      <div className="absolute top-[10%] left-[-5%] w-112.5 h-[450px] bg-pink-300/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[10%] w-87.5 h-[350px] bg-yellow-300/20 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-24 relative z-10">
        
        {/* Left Sticky Header */}
        <div className="lg:w-5/12">
          <div className="sticky top-40">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-[#3a3532]" />
                <h2 className="text-base uppercase tracking-widest text-[#3a3532] font-bold">What We Do</h2>
              </div>
              <h3 className="text-6xl lg:text-7xl text-[#2c2926] font-medium leading-[1.1] mb-10">
                Company <br /> Services
              </h3>
              <p className="text-zinc-600 font-light text-xl leading-relaxed max-w-md">
                Delivering exceptional quality across every phase of your project with our comprehensive suite of premium construction services.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Scrollable Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-10 max-w-5xl">
          {services.map((service, index) => {
            return (
              <ServiceCard key={index} service={service} isLargeDevice={isLargeDevice} />
            );
          })}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, isLargeDevice }: { service: any, isLargeDevice: boolean }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.2 1"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div 
          ref={cardRef}
          style={isLargeDevice ? { scale, opacity, y } : { transform: 'translateZ(0)' }}
          initial={isLargeDevice ? false : { opacity: 0, y: 20 }}
          whileInView={isLargeDevice ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          className="bg-[#333333] p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-zinc-800/50 hover:border-zinc-700 group relative overflow-hidden flex flex-col justify-between h-full [will-change:transform,opacity]"
        >
      {/* Decorative Card Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
      
      <div className="flex flex-col gap-3 relative z-10 h-full">
        <div className="flex items-center justify-between">
          <span className="text-3xl text-[#1f2321] font-serif leading-none group-hover:text-zinc-600 transition-colors duration-500">
            {service.number}
          </span>
          <motion.div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:text-[#333333] transition-all duration-300 text-zinc-500 cursor-pointer">
            <ArrowRight size={14} />
          </motion.div>
        </div>
        
        <div className="mt-2 grow">
          <h4 className="text-lg md:text-xl text-white font-medium mb-2 transition-colors">
            {service.title}
          </h4>
          <p className="text-zinc-400 font-normal leading-relaxed text-sm line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
