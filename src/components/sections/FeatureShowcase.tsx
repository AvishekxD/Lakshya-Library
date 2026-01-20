"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Wifi,
  BookOpen,
  ShieldCheck,
  Clock,
  Users,
  ChevronRight,
} from "lucide-react";

const FEATURES = [
  {
    title: "Peaceful Study Environment",
    description:
      "Pin-drop silent atmosphere designed for deep focus and long study hours without distractions.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    points: ["Noise-free zone", "Ergonomic seating", "Focused ambience"],
  },
  {
    title: "High-Speed Wi-Fi",
    description:
      "Fast, stable internet for online exams, lectures, and daily research needs.",
    icon: Wifi,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    points: ["Unlimited access", "Stable speed", "Online exam ready"],
  },
  {
    title: "150+ Seating Capacity",
    description:
      "Spacious seating arrangement so every student gets a comfortable personal space.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    points: ["Personal desks", "Well-ventilated", "Crowd-free layout"],
  },
  {
    title: "Flexible Study Hours",
    description:
      "Study when your productivity peaks with extended and flexible timings.",
    icon: Clock,
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
    points: ["Early morning access", "Late-night study", "Routine-friendly"],
  },
  {
    title: "Safe & Secure",
    description:
      "Disciplined environment with CCTV surveillance for stress-free studying.",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1724977490800-7bf332e6f256?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: ["24/7 CCTV", "Secure entry", "Peace of mind"],
  },
];

export default function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation (PAUSES on interaction)
  useEffect(() => {
    if (!autoPlay) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoPlay]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setAutoPlay(false); 
  };

  return (
    <section className="py-24 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose{" "}
            <span className="text-primary">Lakshya Library?</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-zinc-300/70 max-w-2xl mx-auto">
            Everything you need to stay focused, consistent, and exam-ready —
            all under <br /> one peaceful roof.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT IMAGE */}
          <div className="relative h-105 rounded-3xl overflow-hidden shadow-lg shadow-neutral-800/60 dark:shadow-white/10 dark:hover:shadow-2xl hover:shadow-2xl hover:scale-105 transition-all duration-250 ease-in-out">
            <AnimatePresence mode="wait">
              <motion.div
                key={FEATURES[activeIndex].image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <Image
                  src={FEATURES[activeIndex].image}
                  alt={FEATURES[activeIndex].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-4">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={feature.title}
                  layout
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer rounded-2xl border transition ${
                    isActive
                      ? "border-primary bg-primary/10 dark:bg-primary/20"
                      : "border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700"
                  }`}
                >
                  <div className="p-5 flex gap-4 items-start">
                    {/* ICON (always visible) */}
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-primary text-white"
                          : "bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {feature.title}
                        </h3>
                        <ChevronRight
                          className={`w-5 h-5 transition ${
                            isActive ? "rotate-90 text-primary" : "text-gray-400"
                          }`}
                        />
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                              {feature.description}
                            </p>

                            <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              {feature.points.map((point) => (
                                <li key={point}>• {point}</li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
