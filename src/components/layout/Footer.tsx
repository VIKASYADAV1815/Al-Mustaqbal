"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Ready to build <br /> your future?
            </h2>
            <p className="text-zinc-400 max-w-sm mb-8">
              Al Mustaqbal Group of Companies is a major and reputable construction business serving thousands of corporate clients.
            </p>
            <Link 
              href="#contact" 
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              Start a project
            </Link>
          </div>
          
          <div>
            <h4 className="text-zinc-500 font-medium mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="hover:text-zinc-400 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-zinc-400 transition-colors">Services</Link></li>
              <li><Link href="#cases" className="hover:text-zinc-400 transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-zinc-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-zinc-500 font-medium mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-zinc-300">
              <li>Sharjah & Ajman, UAE</li>
              <li>info@almustaqbal.com</li>
              <li>+971 50 123 4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Al Mustaqbal Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
