"use client";

import { useState, useEffect } from 'react';
import Section from './ui/Section';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function ExtensionPreview() {
  const [activeBg, setActiveBg] = useState('default');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  
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
  
  return (
    <Section bgColor="dark" id="extension">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium inline-block mb-4">
          Browser Extension
        </span>
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Your Ultimate New Tab Dashboard
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Turn every new tab into a productivity powerhouse with customizable widgets, beautiful design, and powerful developer tools.
        </p>
      </div>
      
      {/* Preview Browser Window */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl"></div>
        
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Browser chrome */}
          <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3 flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-700 rounded-full h-8 flex items-center px-4 text-sm text-gray-500 dark:text-gray-400">
              New Tab
            </div>
          </div>
          
          {/* New Tab Content */}
          <div className={`bg-${activeBg === 'default' ? 'gradient-to-br from-indigo-50 to-gray-100 dark:from-gray-900 dark:to-gray-800' : activeBg} h-[500px] overflow-hidden relative`}>
            {/* Dashboard Grid */}
            <div className="p-6 grid grid-cols-3 gap-4 h-full">
              {/* Left Column */}
              <div className="col-span-2 space-y-4">
                {/* Clock & Greeting */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-gray-800 dark:text-white">{time || '9:41 AM'}</div>
                  <div className="text-xl text-gray-600 dark:text-gray-300">Good morning, Developer</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date || 'Tuesday, May 7'}</div>
                </div>
                
                {/* Focus of the day */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Today's Focus</h3>
                    <button className="text-indigo-500 text-sm">Edit</button>
                  </div>
                  <div className="text-xl font-medium text-gray-800 dark:text-white">Complete DevDash extension</div>
                  <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </div>
                
                {/* Todo List */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg">
                  <h3 className="font-medium mb-3">Quick Tasks</h3>
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
                      >
                        <div className={`w-5 h-5 rounded-full border ${task.completed ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300 dark:border-gray-600'} flex items-center justify-center`}>
                          {task.completed && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className={`${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'}`}>
                          {task.text}
                        </span>
                      </motion.div>
                    ))}
                    <div className="pt-2">
                      <input type="text" placeholder="Add new task..." className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-1 focus:outline-none focus:border-indigo-500 text-gray-800 dark:text-white placeholder-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="col-span-1 space-y-4">
                {/* Weather */}
                <motion.div 
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="text-4xl mb-2">☀️</div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">72°F</div>
                  <div className="text-gray-600 dark:text-gray-300">San Francisco, CA</div>
                </motion.div>
                
                {/* Pomodoro */}
                <motion.div 
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="font-medium mb-3">Pomodoro Timer</h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 dark:text-white mb-4">25:00</div>
                    <div className="flex justify-center gap-2">
                      <button className="px-4 py-1 bg-indigo-500 text-white rounded-full text-sm">Start</button>
                      <button className="px-4 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">Reset</button>
                    </div>
                  </div>
                </motion.div>
                
                {/* Quote */}
                <motion.div 
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
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
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h3 className="font-medium mb-3">GitHub Activity</h3>
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
                      ></motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Settings button */}
            <motion.div
              className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
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
      <div className="flex justify-center mt-8 gap-3">
        <button 
          onClick={() => setActiveBg('default')} 
          className={`w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 ${activeBg === 'default' ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-gray-800' : ''}`}
        ></button>
        <button 
          onClick={() => setActiveBg('blue-500')} 
          className={`w-8 h-8 rounded-full bg-blue-500 ${activeBg === 'blue-500' ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-gray-800' : ''}`}
        ></button>
        <button 
          onClick={() => setActiveBg('emerald-500')} 
          className={`w-8 h-8 rounded-full bg-emerald-500 ${activeBg === 'emerald-500' ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-gray-800' : ''}`}
        ></button>
        <button 
          onClick={() => setActiveBg('violet-500')} 
          className={`w-8 h-8 rounded-full bg-violet-500 ${activeBg === 'violet-500' ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-gray-800' : ''}`}
        ></button>
      </div>
      
      <div className="mt-10 text-center">
        <Button 
          href="#" 
          variant="gradient" 
          size="lg"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          }
        >
          Download Extension
        </Button>
      </div>
    </Section>
  );
}
