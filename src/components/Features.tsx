"use client"
import Section from "./ui/Section";
import { useState } from "react";

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    {
      title: "Project Metrics",
      description: "Comprehensive analytics across all your repositories with real-time performance tracking and visual reports.",
      icon: "📊",
      details: [
        "Real-time repository stats and insights",
        "Commit frequency and contribution analysis",
        "Code quality and performance metrics",
        "Custom dashboards and reporting tools"
      ],
      image: "/feature-metrics.png"
    },
    {
      title: "Productivity Tools",
      description: "Boost your workflow efficiency with integrated tools designed specifically for developer productivity.",
      icon: "⚡",
      details: [
        "AI-powered code suggestions",
        "Smart task prioritization",
        "Time tracking and focus sessions",
        "Personalized productivity insights"
      ],
      image: "/feature-productivity.png"
    },
    {
      title: "Seamless Integrations",
      description: "Connect with all your favorite development tools and services for a unified workflow experience.",
      icon: "🔄",
      details: [
        "GitHub, GitLab, and Bitbucket integration",
        "JIRA, Asana, and Trello connectivity",
        "CI/CD pipeline monitoring",
        "Slack and Discord notifications"
      ],
      image: "/feature-integrations.png"
    },
  ];

  return (
    <Section bgColor="light" id="features">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium inline-block mb-4">
          Powerful Features
        </span>
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Everything You Need in One Place
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Designed for developers by developers - all the tools you need to improve your workflow and boost productivity.
        </p>
      </div>
      
      <div className="mt-12">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === index 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {feature.icon} {feature.title}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">{features[activeTab].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{features[activeTab].description}</p>
            
            <ul className="space-y-4">
              {features[activeTab].details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl"></div>
            <div className="relative group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20">
              <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-6xl">{features[activeTab].icon}</div>
                {/* Replace with actual feature image when available */}
                {/* <Image 
                  src={features[activeTab].image} 
                  alt={features[activeTab].title} 
                  width={500} 
                  height={375} 
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <p className="font-medium">{features[activeTab].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
