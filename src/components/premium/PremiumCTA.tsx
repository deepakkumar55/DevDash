"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PremiumCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section ref={ref} className="py-28 relative overflow-hidden" id="cta">
      {/* Background with stunning gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 z-0 overflow-hidden">
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(120deg, #4f46e5, #7e22ce, #c026d3, #4f46e5)",
            backgroundSize: "300% 300%",
            animation: "gradient-ultra 15s ease infinite"
          }}
        ></div>
        
        {/* Soft glow effect */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-400 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-400 rounded-full filter blur-[100px] opacity-20"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern-premium opacity-10 z-0"></div>
      
      {/* Floating particles */}
      <motion.div 
        className="absolute w-20 h-20 rounded-full bg-white/10 z-0"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: "20%",
          left: "10%",
        }}
      />
      
      <motion.div 
        className="absolute w-10 h-10 rounded-full bg-white/10 z-0"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: "50%",
          right: "15%",
        }}
      />
      
      <motion.div 
        className="absolute w-16 h-16 rounded-full bg-white/10 z-0"
        animate={{
          y: [0, 60, 0],
          x: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          bottom: "15%",
          left: "20%",
        }}
      />
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="font-medium text-white">
              Available for All Major Browsers
            </span>
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Elevate Your Browser Experience Today
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of developers who have transformed their browsing experience with DevDash Premium. Take your productivity to new heights.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.a 
              href="#"
              className="btn-ultra-premium group relative overflow-hidden rounded-xl px-10 py-5 text-lg font-medium text-white shadow-2xl"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Extension
              </span>
            </motion.a>
            
            <motion.a 
              href="#"
              className="flex items-center justify-center gap-2 rounded-xl px-10 py-5 text-lg font-medium text-white border border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all"
              whileHover={{ y: -5 }}
              whileTap={{ y: 0 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Demo
            </motion.a>
          </motion.div>
          
          {/* Browser logos */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {["Chrome", "Firefox", "Edge", "Safari", "Opera"].map((browser, i) => (
              <motion.div 
                key={browser}
                className="flex flex-col items-center"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 mb-2 flex items-center justify-center text-white text-2xl">
                  {browser === "Chrome" && <span>C</span>}
                  {browser === "Firefox" && <span>F</span>}
                  {browser === "Edge" && <span>E</span>}
                  {browser === "Safari" && <span>S</span>}
                  {browser === "Opera" && <span>O</span>}
                </div>
                <span className="text-white/70 text-sm">{browser}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
