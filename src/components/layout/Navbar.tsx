"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Teams', href: '#teams' },
  { name: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we have scrolled past 50px for the styling
      setIsScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
        setMobileMenuOpen(false); // Close menu on scroll down
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-100 transition-all duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'} ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2 text-black' : 'bg-transparent py-4 text-[#2c2926]'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center mt-1">
          <div className="relative w-48 h-16 md:w-56 md:h-20">
            <Image src="/logo.png" alt="Al Mustaqbal Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm tracking-wide hover:opacity-70 transition-opacity`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="#contact" className="text-sm uppercase tracking-widest border-b border-current pb-1 hover:opacity-70 transition-opacity">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white text-black shadow-lg py-6 flex flex-col items-center space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="#contact" className="text-lg font-bold mt-4" onClick={() => setMobileMenuOpen(false)}>
              CONTACT US
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
