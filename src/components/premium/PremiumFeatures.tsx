"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function PremiumFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const features = [
    {
      title: "Clock & Date",
      description: "Beautiful time display with date that adapts to your timezone",
      icon: "🕒",
      details: [
        "Automatic timezone detection",
        "Multiple clock formats (12h/24h)",
        "Date localization support",
        "Custom styling options"
      ]
    },
    {
      title: "Quick To-Do List",
      description: "Lightweight task management right in your new tab",
      icon: "✅",
      details: [
        "Drag and drop task reordering",
        "Multiple lists support",
        "Task priority levels",
        "Due dates and reminders"
      ]
    },
    {
      title: "Weather Widget",
      description: "Real-time weather conditions for your location",
      icon: "☀️",
      details: [
        "Geolocation support",
        "7-day forecast",
        "Detailed weather data",
        "Multiple locations support"
      ]
    },
    {
      title: "Daily Quote",
      description: "Inspirational developer quotes to keep you motivated",
      icon: "💬",
      details: [
        "Developer-focused quotes",
        "Daily refresh",
        "Save favorites",
        "Share functionality"
      ]
    },
    {
      title: "Layout Customization",
      description: "Customize your dashboard by dragging widgets where you want them",
      icon: "🔄",
      details: [
        "Drag & drop interface",
        "Resize widgets",
        "Save multiple layouts",
        "Import/export configurations"
      ]
    }
  ];

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.querySelector(".ripple");
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  };

  return (
    <section className="py-28 relative overflow-hidden" id="features" ref={containerRef}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] -top-[400px] -right-[400px] bg-purple-600/10 dark:bg-purple-600/5 rounded-full blur-3xl animate-premium-blob opacity-60"></div>
        <div className="absolute w-[600px] h-[600px] bottom-0 left-[10%] bg-indigo-600/10 dark:bg-indigo-600/5 rounded-full blur-3xl animate-premium-blob-2 animation-delay-2000 opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-900/30 mb-6 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Powerful Widgets
            </span>
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything You Need In One Place
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Customize your new tab with 15+ premium widgets designed to boost your productivity and streamline your workflow.
          </motion.p>
        </div>
        
        {/* Feature tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {features.map((feature, index) => (
            <motion.button
              key={index}
              onClick={(e) => {
                setActiveTab(index);
                createRipple(e);
              }}
              className={`relative overflow-hidden px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)"
              }}
              whileTap={{ y: 0 }}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{feature.icon}</span>
                {feature.title}
              </span>
            </motion.button>
          ))}
        </div>
        
        {/* Feature display */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            {/* Feature details - left side on desktop, spans 2 columns */}
            <motion.div 
              className="md:col-span-2 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              key={`details-${activeTab}`}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl frost-glass">
                <div className="text-4xl mb-4">{features[activeTab].icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gradient-premium">{features[activeTab].title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{features[activeTab].description}</p>
                
                <ul className="space-y-4">
                  {features[activeTab].details.map((detail, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                    >
                      <div className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            {/* Feature illustration - right side on desktop, spans 3 columns */}
            <motion.div 
              className="md:col-span-3 order-1 md:order-2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              key={`illustration-${activeTab}`}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                <div className="card-ultra-premium w-full aspect-video relative">
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center">
                      <div className="text-[120px] animate-float">{features[activeTab].icon}</div>
                    </div>
                  </div>
                  
                  {/* Example widget UI */}
                  <div className="absolute bottom-8 right-8 shimmer">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-medium">{features[activeTab].title}</div>
                        <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </div>
                      </div>
                      {getWidgetContent(activeTab)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* More features badges */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl font-bold text-center mb-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            And Many More Features
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "GitHub Tracker", "Bookmarks Panel", "Calendar View", "Pomodoro Timer", 
              "Background Customizer", "Widget Toggle", "User Profile", "Settings Panel", 
              "Focus Tracker", "Keyboard Shortcuts"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                className="bg-white dark:bg-gray-800 rounded-full py-2 px-4 text-sm font-medium border border-gray-200 dark:border-gray-700 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)"
                }}
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          background-color: rgba(255, 255, 255, 0.3);
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

// Helper function to get widget content based on the active tab
function getWidgetContent(index: number) {
  switch(index) {
    case 0: // Clock
      return (
        <div className="text-center">
          <div className="text-2xl font-bold mb-1">3:42 PM</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Wednesday, May 8</div>
        </div>
      );
    case 1: // Todo
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 flex-shrink-0"></div>
            <div className="text-sm">Create new feature</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-indigo-500 border border-indigo-500 flex-shrink-0 flex items-center justify-center">
              <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-sm line-through text-gray-400">Update docs</div>
          </div>
        </div>
      );
    case 2: // Weather
      return (
        <div className="flex items-center justify-between">
          <div className="text-2xl">☀️</div>
          <div className="text-right">
            <div className="text-xl font-bold">72°F</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">San Francisco</div>
          </div>
        </div>
      );
    case 3: // Quote
      return (
        <div className="text-sm italic">
          "Code is like humor. When you have to explain it, it's bad."
          <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">- Cory House</div>
        </div>
      );
    case 4: // Layout
      return (
        <div className="grid grid-cols-2 gap-2">
          <div className="h-4 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-4 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-4 rounded bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-4 rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      );
    default:
      return <div>Widget Content</div>;
  }
}
