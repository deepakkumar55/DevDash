"use client";

import Button from "./ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Interactive cursor glow effect */}
      <div className="cursor-glow"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-72 -left-72 bg-purple-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] top-1/3 -right-72 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[600px] h-[600px] bottom-0 left-1/4 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 mb-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Introducing DevDash New Tab
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Transform Your Browser's New Tab Into a Developer Dashboard
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Boost your productivity with a beautiful, customizable dashboard packed with developer tools, widgets, and integrations - all in your browser's new tab.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              href="#extension" 
              variant="gradient" 
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
              }
            >
              See It In Action
            </Button>
            
            <Button 
              href="#"
              variant="outline" 
              size="lg"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              }
            >
              Download Extension
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-6 grayscale opacity-60"
          >
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.375 0 0 5.375 0 12c0 5.301 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.083-.727.083-.727 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.418-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.301-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0112 5.803c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.192.695.8.578C20.566 21.797 24 17.3 24 12c0-6.625-5.375-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H5.764C2.455 3 0 5.466 0 8.787v7.426C0 19.534 2.455 22 5.764 22h13.471C22.545 22 25 19.534 25 16.213V8.787C25 5.466 22.545 3 19.236 3zM10.1 16.136h-2.441v-7.5h2.441v7.5zm2.858-6.25h-1.875v6.25h-.93v-6.25H8.278v-1.25h4.68v1.25zm.545 8.576l-.774-1.12a.506.506 0 0 0-.466-.25c-.139 0-.278.056-.466.25l-.774 1.12-1.337-.173 1.73-2.5c.186-.269.372-.366.697-.366.326 0 .512.097.697.366l1.73 2.5-1.037.173zm3.09-3.576c0 .778-.62 1.25-1.551 1.25H13.56v-7.5h1.482c.93 0 1.551.472 1.551 1.25v5z" />
              </svg>
              <span>VSCode</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm-1.36-5.866H8.126c-.1 0-.15 0-.21-.05-.06-.05-.08-.1-.08-.15 0-.05 0-.105.03-.16l1.695-2.97-1.695-2.97c-.03-.056-.03-.106-.03-.16 0-.055.025-.1.08-.15.06-.06.11-.06.21-.06h2.516c.455 0 .77.15.946.5l1.033 1.92 1.065-1.92c.175-.35.49-.5.945-.5h2.517c.1 0 .151 0 .21.056.06.05.075.1.075.15s0 .11-.03.16l-1.695 2.97 1.695 2.97c.03.055.03.11.03.16 0 .05-.024.1-.08.15-.06.05-.11.05-.21.05h-2.517c-.45 0-.77-.15-.945-.5l-1.035-1.9-1.035 1.9c-.175.35-.49.5-.945.5zm9.805-10.644h-15.05c-.17 0-.296-.13-.296-.304V5.125c0-.175.126-.305.296-.305h15.05c.17 0 .296.13.296.305v2.065c0 .175-.126.3-.296.3z" />
              </svg>
              <span>Stack Overflow</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0v24h24V0H0zm22.034 22.034H1.966V1.966h20.068v20.068z" />
                <path d="M0 0v24h24V0H0zM19.59 7l-9.83 9.83-5.27-5.27L6 13.07l3.76 3.76L21.07 8.5 19.59 7z" />
              </svg>
              <span>Trello</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.667 11.667a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zm5.833 0a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM17.5 10c0 .966.784 1.75 1.75 1.75A1.75 1.75 0 0021 10a1.75 1.75 0 00-1.75-1.75A1.75 1.75 0 0017.5 10zm-15 3.5a2.5 2.5 0 00.664 1.7 12.846 12.846 0 007.036 4.169c.266.043.532-.103.65-.355a11.191 11.191 0 011.3-2.1.448.448 0 00-.026-.506 15.701 15.701 0 01-1.69-2.037.45.45 0 01.15-.626 17.96 17.96 0 005.338-3.669.42.42 0 01.666.084 7.614 7.614 0 01.631 1.174.43.43 0 00.552.215 8.707 8.707 0 001.628-.663.434.434 0 00.21-.562c-1.953-3.619-3.274-4.326-3.274-4.326-.854-1.336-2.293-2.39-2.293-2.39A10.227 10.227 0 002.5 13.5z" />
              </svg>
              <span>Discord</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
