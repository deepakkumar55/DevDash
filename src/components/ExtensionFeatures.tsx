"use client";

import Section from "./ui/Section";
import { motion } from "framer-motion";

export default function ExtensionFeatures() {
  const features = [
    {
      title: "Clock & Date",
      description: "Beautiful time display with date that adapts to your timezone",
      icon: "🕒"
    },
    {
      title: "Quick To-Do List",
      description: "Lightweight task management right in your new tab",
      icon: "✅"
    },
    {
      title: "Weather Widget",
      description: "Real-time weather conditions for your location",
      icon: "☀️"
    },
    {
      title: "Daily Quote",
      description: "Inspirational developer quotes to keep you motivated",
      icon: "💬"
    },
    {
      title: "Drag & Drop Layout",
      description: "Customize your dashboard by dragging widgets where you want them",
      icon: "🔄"
    },
    {
      title: "Background Customizer",
      description: "Choose from images, gradients, or animated backgrounds",
      icon: "🎨"
    },
    {
      title: "Bookmarks Panel",
      description: "Quick access to your most important sites and resources",
      icon: "🔖"
    },
    {
      title: "GitHub Tracker",
      description: "Monitor your contribution activity right from your tab",
      icon: "🐙"
    },
    {
      title: "Calendar View",
      description: "See upcoming events from Google Calendar at a glance",
      icon: "📅"
    },
    {
      title: "Pomodoro Timer",
      description: "Stay productive with built-in focus timing",
      icon: "⏱️"
    },
    {
      title: "Widget Toggle",
      description: "Show only the widgets you need, hide the rest",
      icon: "🔍"
    },
    {
      title: "User Profile",
      description: "Personalized greeting and settings that sync across devices",
      icon: "👤"
    },
    {
      title: "Settings Panel",
      description: "Easy configuration with intuitive tab navigation",
      icon: "⚙️"
    },
    {
      title: "Focus Tracker",
      description: "Set daily goals and track your progress",
      icon: "🎯"
    },
    {
      title: "Keyboard Shortcuts",
      description: "Power user features accessible via quick shortcuts",
      icon: "⌨️"
    }
  ];

  return (
    <Section bgColor="light" id="features">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium inline-block mb-4">
          Features
        </span>
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          15 Powerful Widgets Included
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Everything you need for a productive developer workflow, right in your new tab
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
