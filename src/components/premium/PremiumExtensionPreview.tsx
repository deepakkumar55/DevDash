"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import PremiumButton from './PremiumButton';
import Image from 'next/image';

export default function PremiumExtensionPreview() {
  const [activeBg, setActiveBg] = useState('default');
  const [isHovered, setIsHovered] = useState(false);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const previewRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0.1, 0.2, 0.3, 0.4], [100, 0, 0, -100]);
  
  // Calculate rotation based on mouse position
  const calculateRotation = (clientX: number, clientY: number) => {
    if (!previewRef.current) return { x: 0, y: 0 };
    
    const rect = previewRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate the distance from the center (as a percentage from -1 to 1)
    const rotateY = ((clientX - centerX) / (rect.width / 2)) * 5; // Max 5deg rotation
    const rotateX = ((centerY - clientY) / (rect.height / 2)) * 5; // Max 5deg rotation
    
    return { x: rotateX, y: rotateY };
  };
  
  // Smooth springs for rotation
  const rotateX = useSpring(0, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 20 });
  
  // Convert rotation to CSS transform
  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  
  // Update rotation when mouse moves
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovered && previewRef.current) {
        const rotation = calculateRotation(e.clientX, e.clientY);
        rotateX.set(rotation.x);
        rotateY.set(rotation.y);
        
        // Update for element movements
        setMousePosition({
          x: (e.clientX - previewRef.current.getBoundingClientRect().left) / previewRef.current.offsetWidth,
          y: (e.clientY - previewRef.current.getBoundingClientRect().top) / previewRef.current.offsetHeight,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, rotateX, rotateY]);
  
  // Reset rotation when not hovered
  useEffect(() => {
    if (!isHovered) {
      rotateX.set(0);
      rotateY.set(0);
    }
  }, [isHovered, rotateX, rotateY]);
  
  // Update time every second
  useEffect(() => {
    function updateTime() {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDate(now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' }));
    }
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  
  // Background mapping
  const getBgClass = (bg: string) => {
    switch(bg) {
      case 'blue-500': return 'bg-gradient-to-br from-blue-500/20 to-blue-700/20';
      case 'emerald-500': return 'bg-gradient-to-br from-emerald-500/20 to-emerald-700/20';
      case 'violet-500': return 'bg-gradient-to-br from-violet-500/20 to-violet-700/20';
      default: return 'bg-gradient-to-br from-indigo-500/20 to-purple-600/20';
    }
  };
  
  // Glare element movement calculation
  const glareX = (mousePosition.x - 0.5) * 100; // -50% to 50%
  const glareY = (mousePosition.y - 0.5) * 100; // -50% to 50%
  
  return (
    <motion.section 
      className="py-28 overflow-hidden relative"
      style={{ opacity, scale, y }}
      id="extension"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600/10 dark:bg-indigo-600/5 rounded-full blur-3xl animate-premium-blob opacity-60"></div>
        <div className="absolute w-[600px] h-[600px] top-[30%] right-[10%] bg-purple-600/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-premium-blob-2 animation-delay-2000 opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/30 mb-8 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Ultra Premium New Tab Experience
            </span>
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Your Ultimate New Tab Dashboard
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transform every new tab into a productivity powerhouse with customizable widgets, beautiful design, and powerful developer tools.
          </motion.p>
        </div>
        
        {/* Preview Browser Window */}
        <div 
          ref={previewRef}
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="absolute -inset-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-3xl"
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
            style={{ transform }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)",
              borderColor: "rgba(79, 70, 229, 0.3)"
            }}
          >
            {/* Glare effect */}
            {isHovered && (
              <div 
                className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
                aria-hidden="true"
              >
                <div 
                  className="absolute bg-gradient-to-r from-transparent via-white to-transparent opacity-20 pointer-events-none"
                  style={{
                    width: '150%',
                    height: '150%',
                    transform: `translate(${glareX}%, ${glareY}%) rotate(-25deg)`,
                    top: '-25%',
                    left: '-25%',
                  }}
                />
              </div>
            )}
            
            {/* Browser chrome */}
            <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3 flex items-center">
              <div className="flex space-x-2 mr-4">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-red-500"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  whileHover={{ scale: 1.2 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-500"
                  whileHover={{ scale: 1.2 }}
                />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-700 rounded-full h-8 flex items-center px-4 text-sm text-gray-500 dark:text-gray-400 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    New Tab
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* New Tab Content */}
            <div className={`${getBgClass(activeBg)} h-[500px] overflow-hidden relative`}>
              {/* Dashboard Grid */}
              <div className="p-6 grid grid-cols-3 gap-4 h-full">
                {/* Left Column */}
                <div className="col-span-2 space-y-4">
                  {/* Clock & Greeting */}
                  <motion.div 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden frost-glass"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ 
                      boxShadow: "0 15px 30px -5px rgba(79, 70, 229, 0.2)",
                      y: -5
                    }}
                  >
                    <div className="text-4xl font-bold text-gray-800 dark:text-white text-glow">{time || '9:41 AM'}</div>
                    <div className="text-xl text-gray-600 dark:text-gray-300">Good morning, Developer</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date || 'Tuesday, May 7'}</div>
                    
                    {/* Decorative element */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"></div>
                  </motion.div>
                  
                  {/* Focus of the day */}
                  <motion.div 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 frost-glass relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ 
                      boxShadow: "0 15px 30px -5px rgba(79, 70, 229, 0.2)",
                      y: -5
                    }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-medium text-gradient-premium">Today's Focus</h3>
                      <motion.button 
                        className="text-indigo-500 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Edit
                      </motion.button>
                    </div>
                    <div className="text-xl font-medium text-gray-800 dark:text-white">Complete DevDash extension</div>
                    <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute -left-4 -top-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
                  </motion.div>
                  
                  {/* Todo List */}
                  <motion.div 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 frost-glass"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ 
                      boxShadow: "0 15px 30px -5px rgba(79, 70, 229, 0.2)",
                      y: -5
                    }}
                  >
                    <h3 className="font-medium mb-3 text-gradient-premium">Quick Tasks</h3>
                    <div className="space-y-2">
                      {[
                        { text: "Finalize extension design", completed: true },
                        { text: "Build widget components", completed: false },
                        { text: "Implement drag & drop", completed: false }
                      ].map((task, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                          whileHover={{ x: 2 }}
                        >
                          <motion.div 
                            className={`w-5 h-5 rounded-full border ${
                              task.completed 
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 border-transparent' 
                                : 'border-gray-300 dark:border-gray-600'
                            } flex items-center justify-center`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {task.completed && (
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </motion.div>
                          <span className={`${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'}`}>
                            {task.text}
                          </span>
                        </motion.div>
                      ))}
                      <div className="pt-2">
                        <input 
                          type="text" 
                          placeholder="Add new task..." 
                          className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-1 focus:outline-none focus:border-indigo-500 text-gray-800 dark:text-white placeholder-gray-400" 
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right Column */}
                <div className="col-span-1 space-y-4">
                  {/* Weather */}
                  <motion.div 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg text-center border border-gray-200/50 dark:border-gray-700/50 frost-glass relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ 
                      boxShadow: "0 15px 30px -5px rgba(79, 70, 229, 0.2)",
                      y: -5
                    }}
                  >
                    <motion.div 
                      className="text-4xl mb-2"
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      ☀️
                    </motion.div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white text-glow">72°F</div>
                    <div className="text-gray-600 dark:text-gray-300">San Francisco, CA</div>
                    
                    {/* Decorative rays */}
                    <div className="absolute -inset-2 opacity-20 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-400 -translate-x-1/2 -translate-y-1/2 rotate-0 blur-sm"></div>
                      <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-400 -translate-x-1/2 -translate-y-1/2 rotate-45 blur-sm"></div>
                      <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-400 -translate-x-1/2 -translate-y-1/2 rotate-90 blur-sm"></div>
                      <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-yellow-400 -translate-x-1/2 -translate-y-1/2 rotate-135 blur-sm"></div>
                    </div>
                  </motion.div>
                  
                  {/* Pomodoro */}
                  <motion.div 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 frost-glass"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ 
                      boxShadow: "0 15px 30px -5px rgba(79, 70, 229, 0.2)",
                      y: -5
                    }}
                  >
                    <h3 className="font-medium mb-3 text-gradient-premium">Pomodoro Timer</h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-glow">25:00</div>
                      <div className="flex justify-center gap-2">
                        <motion.button 
                          className="px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Start
                        </motion.button>
                        <motion.button 
                          className="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Reset
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Quote */}
                  <motion.div 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 frost-glass"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ 
                      boxShadow: "0 15px 30px -5px rgba(79, 70, 229, 0.2)",
                      y: -5
                    }}
                  >
                    <div className="text-gray-600 dark:text-gray-300 italic">
                      "Code is like humor. When you have to explain it, it's bad."
                    </div>
                    <div className="text-right mt-2 text-sm text-gray-500 dark:text-gray-400">
                      - Cory House
                    </div>
                  </motion.div>
                  
                  {/* GitHub Contributions */}
                  <motion.div 
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 frost-glass"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ 
                      boxShadow: "0 15px 30px -5px rgba(79, 70, 229, 0.2)",
                      y: -5
                    }}
                  >
                    <h3 className="font-medium mb-3 text-gradient-premium">GitHub Activity</h3>
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 35 }).map((_, i) => (
                        <motion.div 
                          key={i} 
                          className={`w-full aspect-square rounded-sm ${
                            Math.random() > 0.6 
                              ? Math.random() > 0.8 
                                ? 'bg-indigo-700 dark:bg-indigo-600' 
                                : 'bg-indigo-500 dark:bg-indigo-400' 
                              : 'bg-gray-200 dark:bg-gray-700'
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2, delay: 0.7 + i * 0.01 }}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Settings button */}
              <motion.div
                className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 cursor-pointer border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Background selector */}
        <div className="flex justify-center mt-10 gap-4">
          {[
            { id: 'default', gradient: 'from-indigo-400 to-purple-500' },
            { id: 'blue-500', gradient: 'from-blue-400 to-blue-600' },
            { id: 'emerald-500', gradient: 'from-emerald-400 to-emerald-600' },
            { id: 'violet-500', gradient: 'from-violet-400 to-violet-600' }
          ].map((bg) => (
            <motion.button 
              key={bg.id}
              onClick={() => setActiveBg(bg.id)} 
              className={`w-10 h-10 rounded-full bg-gradient-to-br ${bg.gradient} ${
                activeBg === bg.id ? 'ring-2 ring-offset-4 dark:ring-offset-gray-900 ring-indigo-500' : ''
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <PremiumButton 
            href="#" 
            variant="gradient" 
            size="xl"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            }
          >
            Download Premium Extension
          </PremiumButton>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Available for Chrome, Firefox & Edge
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free updates forever
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Premium support
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
