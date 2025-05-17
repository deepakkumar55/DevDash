"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function PremiumHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const calculateMovement = (axis: 'x' | 'y', intensity: number = 1) => {
    const value = axis === 'x' ? mousePosition.x - 0.5 : mousePosition.y - 0.5;
    return value * intensity * 40;
  };
  
  return (
    <motion.section 
      ref={heroRef}
      className="relative pt-40 pb-32 overflow-hidden"
      style={{ opacity, scale, y }}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute w-[800px] h-[800px] -top-[400px] -left-[400px] bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-premium-blob opacity-60"
          style={{ 
            x: calculateMovement('x', -0.5),
            y: calculateMovement('y', -0.5)
          }}
        />
        <motion.div 
          className="absolute w-[600px] h-[600px] top-1/3 -right-[300px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-premium-blob-2 animation-delay-2000 opacity-60"
          style={{ 
            x: calculateMovement('x', 0.4),
            y: calculateMovement('y', 0.3)
          }}
        />
        <motion.div 
          className="absolute w-[500px] h-[500px] bottom-0 left-1/4 bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-premium-blob-3 animation-delay-4000 opacity-50"
          style={{ 
            x: calculateMovement('x', 0.3),
            y: calculateMovement('y', 0.5)
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/30 mb-8 border border-gray-100 dark:border-gray-700"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Introducing DevDash Premium New Tab
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-8 leading-tight relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient-premium">
              Your Ultimate Developer 
              <br />
              Dashboard Experience
            </span>
            <motion.span
              className="absolute -z-10 w-full h-full top-0 left-0 blur-2xl opacity-30"
              style={{ 
                background: 'linear-gradient(45deg, rgba(79, 70, 229, 0.4) 0%, rgba(236, 72, 153, 0.4) 100%)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your browsing experience with a stunningly beautiful, feature-rich new tab that brings all your developer tools together.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="#extension" className="btn-ultra-premium">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
                Experience DevDash
              </span>
            </Link>
            
            <Link 
              href="#"
              className="relative overflow-hidden rounded-xl px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all group flex items-center justify-center font-medium gap-2 hover:-translate-y-1 active:translate-y-0"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Extension
              
              <span className="absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
              </span>
            </Link>
          </motion.div>
          
          {/* 3D tilting browser mockup */}
          <motion.div 
            className="mt-20 max-w-4xl mx-auto perspective-2000"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              transform: `perspective(2000px) rotateX(${calculateMovement('y', 0.03)}deg) rotateY(${calculateMovement('x', -0.03)}deg)`
            }}
          >
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-200/70 dark:border-gray-700/30">
                {/* Browser chrome */}
                <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3 flex items-center">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-700 rounded-full h-8 flex items-center px-4 text-sm text-gray-500 dark:text-gray-400 overflow-hidden">
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "auto" }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="whitespace-nowrap overflow-hidden"
                    >
                      chrome://newtab
                    </motion.span>
                  </div>
                </div>
                
                {/* Browser content */}
                <div className="h-[220px] w-full bg-gradient-to-br from-indigo-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-90">
                    <Image
                      src="/dashboard-preview.png"
                      alt="DevDash Preview"
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transform scale-[1.02] rounded-b-lg"
                      style={{
                        filter: 'blur(0.5px)',
                        boxShadow: '0 0 40px rgba(79, 70, 229, 0.1)'
                      }}
                    />
                  </div>
                  
                  {/* Glint effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                    initial={{ left: '-100%', opacity: 0 }}
                    animate={{ left: '100%', opacity: 0.2 }}
                    transition={{ duration: 1.5, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    style={{ width: '50%', transform: 'skewX(-20deg)' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Sponsors section */}
          <motion.div
            className="mt-20 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h6 className="text-sm font-medium text-gray-400 dark:text-gray-500 mb-6 tracking-wider uppercase">
              Trusted by developers at leading companies
            </h6>
            
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {['Google', 'Microsoft', 'Amazon', 'Netflix', 'GitHub'].map((company, i) => (
                <motion.div 
                  key={i} 
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.7 }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                >
                  <div className="text-xl font-semibold text-gray-400 dark:text-gray-500">
                    {company}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
