"use client";

import { useEffect, useState } from 'react';

export default function PremiumCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [previousPosition, setPreviousPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const addEventListeners = () => {
      // Don't render custom cursor on touch devices
      if (window.matchMedia('(pointer: coarse)').matches) return;
      
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };
    
    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])'
      );
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setLinkHovered(true));
        el.removeEventListener('mouseleave', () => setLinkHovered(false));
      });
    };
    
    const onMouseMove = (e: MouseEvent) => {
      setPreviousPosition(position);
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseEnter = () => {
      setVisible(true);
    };
    
    const onMouseLeave = () => {
      setVisible(false);
    };
    
    const onMouseDown = () => {
      setClicked(true);
    };
    
    const onMouseUp = () => {
      setClicked(false);
    };
    
    // Add cursor trail effects
    const createTrailDot = (x: number, y: number) => {
      const trailDot = document.createElement('div');
      trailDot.className = 'trail-dot';
      trailDot.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(var(--premium-primary), 0.5);
        border-radius: 50%;
        top: ${y}px;
        left: ${x}px;
        pointer-events: none;
        z-index: 9997;
        opacity: 1;
        transition: opacity 0.5s ease;
      `;
      document.body.appendChild(trailDot);
      
      setTimeout(() => {
        trailDot.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(trailDot);
        }, 500);
      }, 100);
    };
    
    // Add sparkle effect on click
    const createSparkle = (x: number, y: number) => {
      for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const angle = (Math.PI * 2 * i) / 8;
        const velocity = 2 + Math.random() * 2;
        
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
          position: fixed;
          width: ${size}px;
          height: ${size}px;
          background: rgba(var(--premium-primary), 0.8);
          border-radius: 50%;
          top: ${y}px;
          left: ${x}px;
          pointer-events: none;
          z-index: 9997;
        `;
        document.body.appendChild(sparkle);
        
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = x;
        let posY = y;
        let opacity = 1;
        let frame = 0;
        
        const animate = () => {
          frame++;
          posX += vx;
          posY += vy;
          opacity -= 0.03;
          
          if (opacity <= 0) {
            document.body.removeChild(sparkle);
            return;
          }
          
          sparkle.style.left = `${posX}px`;
          sparkle.style.top = `${posY}px`;
          sparkle.style.opacity = opacity.toString();
          
          requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
      }
    };
    
    // Click handler
    const handleClick = (e: MouseEvent) => {
      createSparkle(e.clientX, e.clientY);
    };
    
    // Add trail effect on rapid movement
    let lastTrailTime = 0;
    const addTrail = () => {
      const now = performance.now();
      const timeDiff = now - lastTrailTime;
      
      const distance = Math.sqrt(
        Math.pow(position.x - previousPosition.x, 2) + 
        Math.pow(position.y - previousPosition.y, 2)
      );
      
      if (distance > 20 && timeDiff > 50) {
        createTrailDot(position.x, position.y);
        lastTrailTime = now;
      }
      
      requestAnimationFrame(addTrail);
    };
    
    addEventListeners();
    document.addEventListener('click', handleClick);
    requestAnimationFrame(addTrail);
    
    return () => {
      removeEventListeners();
      document.removeEventListener('click', handleClick);
    };
  }, [position, previousPosition]);
  
  if (!visible) return null;
  
  return (
    <>
      <div 
        className={`cursor-dot ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.5 : linkHovered ? 1.5 : 1})`,
          backgroundColor: linkHovered ? 'rgba(236, 72, 153, 1)' : 'rgba(79, 70, 229, 1)'
        }}
      />
      <div 
        className="cursor-outline"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          width: `${linkHovered ? '60px' : '40px'}`,
          height: `${linkHovered ? '60px' : '40px'}`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
          borderColor: linkHovered ? 'rgba(236, 72, 153, 0.5)' : 'rgba(79, 70, 229, 0.5)',
          transitionDuration: clicked ? '100ms' : '300ms'
        }}
      />
    </>
  );
}
