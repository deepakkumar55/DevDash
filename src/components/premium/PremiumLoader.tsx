"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function PremiumLoader() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 - prev) / 10;
        return Math.min(newProgress, 100);
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center z-50">
      <div className="relative w-32 h-32 mb-8">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ 
            scale: [1.2, 1.5, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          style={{
            borderColor: "rgba(79, 70, 229, 0.2)",
            borderTopColor: "rgba(79, 70, 229, 0.8)"
          }}
        />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="text-4xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          >
            D
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="text-2xl font-bold mb-8 text-gradient-premium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        DevDash
      </motion.div>
      
      <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.div
        className="mt-4 text-sm text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading your premium experience...
      </motion.div>
      
      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-500/30"
            initial={{ 
              opacity: 0,
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 - 50 + "%",
              scale: 0
            }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              x: Math.random() * 100 - 50 + "%", 
              y: Math.random() * 100 - 50 + "%"
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </div>
    </div>
  );
}
