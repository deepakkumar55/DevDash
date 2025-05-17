"use client";

import { useEffect, useState } from 'react';
import Hero from '@/components/premium/PremiumHero';
import ExtensionPreview from '@/components/premium/PremiumExtensionPreview';
import Features from '@/components/premium/PremiumFeatures';
import CTA from '@/components/premium/PremiumCTA';
import Footer from '@/components/premium/PremiumFooter';
import Lottie from 'lottie-react';
import backgroundAnimation from '@/animations/background-gradient.json';
import PremiumLoader from '@/components/premium/PremiumLoader';

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  // Initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second loading animation
    
    return () => clearTimeout(timer);
  }, []);
  
  // Cursor glow effect
  useEffect(() => {
    if (loading) return;
    
    const cursorGlow = document.querySelector('.cursor-glow-premium') as HTMLElement;
    
    if (!cursorGlow) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) { // Only show on desktop
        cursorGlow.style.opacity = '1';
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
        
        // Add subtle size variation based on mouse velocity
        const vx = Math.abs(e.movementX);
        const vy = Math.abs(e.movementY);
        const velocity = Math.min(Math.sqrt(vx*vx + vy*vy), 20) / 20;
        
        const size = 500 + velocity * 100;
        cursorGlow.style.width = `${size}px`;
        cursorGlow.style.height = `${size}px`;
      }
    };
    
    const handleMouseLeave = () => {
      cursorGlow.style.opacity = '0';
    };
    
    // Interactive elements change cursor
    const handleElementInteraction = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursorGlow.style.width = '300px';
          cursorGlow.style.height = '300px';
          document.body.classList.add('interactive-element-hovered');
        });
        
        el.addEventListener('mouseleave', () => {
          cursorGlow.style.width = '500px';
          cursorGlow.style.height = '500px';
          document.body.classList.remove('interactive-element-hovered');
        });
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    handleElementInteraction();
    
    // Add scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-animation');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [loading]);
  
  if (loading) {
    return <PremiumLoader />;
  }
  
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
        <Lottie 
          animationData={backgroundAnimation} 
          loop 
          autoplay 
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-[5%] w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl floating-premium-slow"></div>
      <div className="absolute bottom-1/3 left-[10%] w-40 h-40 bg-purple-600/20 rounded-full blur-3xl floating-premium"></div>
      <div className="absolute top-1/2 left-[30%] w-24 h-24 bg-pink-600/20 rounded-full blur-3xl floating-premium-fast"></div>
      
      <div className="relative z-10">
        <Hero />
        <ExtensionPreview />
        <Features />
        <CTA />
        <Footer />
      </div>
      
      <div className="cursor-glow-premium"></div>
    </div>
  );
}
