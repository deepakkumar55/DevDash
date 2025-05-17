import Section from "./ui/Section";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials = [
    {
      quote: "DevDash has completely transformed how I manage my projects. The insights I get have increased my productivity by 40%, and I can't imagine going back to my old workflow.",
      author: "Sarah Johnson",
      role: "Senior Developer at TechCorp",
      avatar: "/avatars/avatar-1.jpg",
      company: "/logos/techcorp.svg"
    },
    {
      quote: "The insights I get from DevDash have helped me identify bottlenecks and improve my team's performance significantly. We ship features 30% faster now.",
      author: "Michael Chen",
      role: "Engineering Lead at StartupX",
      avatar: "/avatars/avatar-2.jpg",
      company: "/logos/startupx.svg"
    },
    {
      quote: "As a freelance developer managing multiple clients, DevDash has been a game-changer for tracking projects and managing my time effectively.",
      author: "Elena Rodriguez",
      role: "Independent Developer",
      avatar: "/avatars/avatar-3.jpg",
      company: "/logos/freelance.svg"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <Section bgColor="dark" id="testimonials">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium inline-block mb-4">
          Testimonials
        </span>
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          What Developers Are Saying
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Don't take our word for it. Hear from developers who've transformed their workflow with DevDash.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl"></div>
        
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative">
            <svg className="text-indigo-400 dark:text-indigo-500 w-16 h-16 mb-6 opacity-30" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10,8L4,16l6,8h3L7,16l6-8H10z M20,8l-6,8l6,8h3l-6-8l6-8H20z"/>
            </svg>
            
            <div className="mb-8 min-h-[200px]">
              <div 
                className={`transition-all duration-500 ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}
              >
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-indigo-200 dark:border-indigo-800">
                    <div className="w-full h-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-xl font-bold text-indigo-600 dark:text-indigo-400">
                      {testimonials[currentIndex].author.charAt(0)}
                    </div>
                    {/* Replace with actual image when available */}
                    {/* <Image 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].author} 
                      width={56} 
                      height={56} 
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                  
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentIndex === index 
                        ? 'bg-indigo-600 w-8'
                        : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  ></button>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
