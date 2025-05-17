"use client";

import Button from "./ui/Button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-[250px] -left-[150px] bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute w-[500px] h-[500px] bottom-[50px] -right-[150px] bg-white opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Browser Icons */}
      <motion.div 
        className="absolute inset-0 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-16 mt-16">
          <svg className="w-32 h-32 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.003h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.366zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" />
          </svg>
          <svg className="w-32 h-32 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1.5C6.202 1.5 1.5 6.323 1.5 12.232c0 5.015 3.414 9.304 8.148 10.612.596.086.815-.265.815-.589 0-.292-.011-1.262-.017-2.291-3.317.74-4.02-1.421-4.02-1.421-.542-1.425-1.325-1.803-1.325-1.803-1.084-.763.083-.749.083-.749 1.199.086 1.829 1.273 1.829 1.273 1.066 1.888 2.795 1.343 3.478 1.027.108-.796.415-1.342.755-1.651-2.65-.308-5.435-1.368-5.435-6.089 0-1.344.465-2.444 1.23-3.307-.124-.308-.535-1.556.116-3.245 0 0 1.002-.33 3.285 1.264.952-.273 1.97-.41 2.984-.415 1.013.006 2.032.142 2.985.416 2.28-1.594 3.28-1.264 3.28-1.264.653 1.69.242 2.937.119 3.245.767.863 1.23 1.962 1.23 3.307 0 4.734-2.79 5.778-5.451 6.08.43.381.815 1.132.815 2.28 0 1.65-.015 2.976-.015 3.382 0 .327.216.683.825.567 4.729-1.308 8.144-5.597 8.144-10.608C22.5 6.323 17.798 1.5 12 1.5z" />
          </svg>
          <svg className="w-32 h-32 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.443 5.35c.639 0 1.23.05 1.77.198a3.83 3.83 0 0 1 1.377.544c.394.247.689.594.885 1.039.197.445.295.94.295 1.583 0 .643-.148 1.189-.444 1.634-.295.446-.787.812-1.378 1.09.836.247 1.475.693 1.918 1.339.443.642.689 1.435.689 2.373 0 .693-.148 1.286-.394 1.78a3.515 3.515 0 0 1-1.082 1.238c-.443.346-.984.594-1.573.742a6.85 6.85 0 0 1-1.869.247H0V5.35h7.443Zm-.394 5.39c.541 0 .984-.148 1.328-.395.344-.247.492-.693.492-1.287 0-.346-.05-.642-.197-.841-.148-.247-.296-.395-.541-.494a1.777 1.777 0 0 0-.689-.198c-.246 0-.541-.049-.787-.049h-3.41v3.264h3.804Zm.246 5.588c.295 0 .59 0 .885-.05a2.48 2.48 0 0 0 .787-.197 1.353 1.353 0 0 0 .59-.445c.146-.198.245-.495.245-.89 0-.692-.197-1.188-.59-1.484-.394-.297-.935-.445-1.672-.445H3.262v3.511h4.033ZM14.443 21v-5.885h.05L19.475 21h3.41v-1.04l-5.424-6.323 4.886-5.687V6.903h-3.262l-4.591 5.539h-.05V6.903h-2.788V21h2.787Z" />
          </svg>
          <svg className="w-32 h-32 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 7.975a1.975 1.975 0 100-3.95 1.975 1.975 0 000 3.95z" />
            <path d="M14 7.5a4 4 0 11-8 0 4 4 0 018 0zm8-1.027s-2.96-.352-5.015 1.318a25.367 25.367 0 00-3.984 4.884 8.808 8.808 0 00-2.997-3.989c-2.979-2.475-6.004-1.179-6.004-1.179S1.752 13.642 0 22h4.5c.8-3.8 2.913-8.817 4.195-10.276A11.35 11.35 0 0112 17.583c2 .073 2.273-1.747 2.25-3.083a44.346 44.346 0 013.717-4.43c2.146-1.901 3.948-1.762 3.948-1.762S23.051 11.872 24 22h-4.5c-.25-4.507-1.424-11.822-3.5-14.079a20.477 20.477 0 00-2.395 3.081C13.886 9.885 14.001 9.79 14 7.5c0-.972.168-1.708.5-2.5-.5.5-1.527 1.957-1.5 2.964-.032 3.207-.662 4.767.5 7.36-.762.713-1.194 1.51-1.194 2.872 0 .5-.159 1.167-.557 1.714-.123.163-.157.355-.16.504a7.442 7.442 0 01-.72-.55c-1.664-1.442-2.755-3.588-2.755-6.059a6.501 6.501 0 012.7-5.306c-.342.62-.444 1.318-.444 1.318s.481-2.5 2.5-3z" />
          </svg>
        </div>
      </motion.div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.span 
            className="px-4 py-1 bg-white/20 text-white rounded-full mb-6 inline-block font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Available for All Major Browsers
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ready to transform your browsing experience?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-indigo-100 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Install DevDash New Tab now and enjoy all these powerful features with a beautiful, customizable interface that makes every new tab productive.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              href="#" 
              variant="secondary" 
              size="lg" 
              className="shadow-xl shadow-indigo-900/30 hover:scale-105 transition-transform"
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              }
            >
              Download for Chrome
            </Button>
            
            <Button 
              href="#" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 hover:scale-105 transition-transform"
            >
              Other Browsers
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-indigo-200">Widgets</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-indigo-200">Free</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-white mb-1">10k+</div>
              <div className="text-indigo-200">Users</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
