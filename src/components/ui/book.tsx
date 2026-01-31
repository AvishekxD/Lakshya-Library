"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Caveat } from "next/font/google";
import Image from "next/image"

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const plans = [
  {
    title: "Day Pass",
    price: "₹59",
    originalPrice: "₹99",
    desc: "Perfect for quick study sessions.",
    features: ["2 PM - 8 PM", "High-speed Wi-Fi"],
  },
  {
    title: "Monthly",
    price: "₹700",
    originalPrice: "₹1000",
    popular: true,
    desc: "Our most popular student plan.",
    features: ["Reserved Seat", "6 Hours window", "Printer"],
  },
  {
    title: "Quarterly",
    price: "₹1899",
    originalPrice: "₹2499",
    desc: "Dedicated for exam seasons.",
    features: ["Priority Support", "24/7 Access", "Tea/Coffee"],
  },
  {
    title: "Yearly",
    price: "₹7499",
    originalPrice: "₹9999",
    desc: "Complete academic year coverage.",
    features: ["Premium Cabin", "Guest Passes", "Free Printing"],
  },
];

const quotes = [
  
  "`Success is the sum of small efforts repeated daily.`",
  "`The secret of getting ahead is getting started` - Rabindranath Tagore",
  "`Discipline is choosing between what you want now and what you want most.`",
  "`Dream big. Study smart. Stay consistent.`",
  "`Your future self will thank you for today’s effort.`"
];

export default function BookAnimation() {
  const [page, setPage] = useState(0);
  
  const handleFlip = (e: React.MouseEvent<HTMLDivElement>) => {

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isLeftSide = clickX < rect.width / 2;

    setPage((prev) => {
      if (isLeftSide) {
        return Math.max(prev - 1, 0);
      } else {
        return Math.min(prev + 1, plans.length);
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-150  bg-white dark:bg-black transition-colors duration-700">
      {/* Perspective Container */}
      <div
        className="relative flex items-center justify-center perspective-[1800px]"
        style={{ width: "880px", height: "600px" }}
      >
        {/* Left Static Cover */}
        <div className="absolute left-[10%] w-[40%] h-[90%] bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-800 rounded-l-2xl shadow-2xl flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />
          
          <div className="">
            <div style={{ fontFamily: caveat.style.fontFamily }} className="text-2xl absolute border border-black dark:border-white rounded-lg px-14 bottom-2 opacity-20 right-22 font-semibold flex items-center justify-between text-black dark:text-white tracking-tighter">
                Plans
            </div>
            
            <div className="relative -top-15 -left-15 opacity-45 hidden dark:block">
              <Image
                src="/moon.png"
                alt="Moon glow"
                width={96}
                height={96}
                className="absolute inset-0 blur-2xl opacity-60 brightness-125 hue-rotate-15
                          animate-[moon-glow_6s_ease-in-out_infinite]"
              />
              <Image
                src="/moon.png"
                alt="Moon"
                width={96}
                height={96}
                className="relative"
              />
            </div>

            <div
              className="h-125 w-120 absolute right-27 top-10 bg-neutral-800 dark:bg-white/60 overflow-hidden"
              style={{
                  WebkitMaskImage: "url('/tree.png')",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskImage: "url('/tree.png')",
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                  maskPosition: "center",
              }} 
            />
            
          </div>
          
        </div>

        {/* Right Base Stack */}
        <div className="absolute right-[10%] w-[40%] h-[90%] bg-zinc-200 dark:bg-zinc-800 rounded-r-2xl shadow-inner" />

        {/* Pages */}
        {plans.map((plan, index) => (
          
          <motion.div
            key={index}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => handleFlip(e)}
            initial={false}
            animate={{
              rotateY: index < page ? -180 : 0,
              rotateX: index < page ? 2 : 0,
              z: index < page ? 80 : 0,
              boxShadow:
                index < page
                  ? "20px 10px 40px rgba(0,0,0,0.25)"
                  : "5px 0 15px rgba(0,0,0,0.1)",
            }}
            transition={{
              rotateY: {
                type: "spring",
                stiffness: 800,
                damping: 222,
                mass: 0.8,
              },
              rotateX: {
                type: "spring",
                stiffness: 120,
                damping: 18,
              },
              z: {
                duration: 1.5,
                ease: "easeInOut",
              },
            }}
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              zIndex: plans.length - index,
            }}
            className="absolute right-[10%] w-[40%] h-[90%] cursor-pointer rounded-r-2xl group"
          >
            {/* FRONT */}
            <div className="absolute inset-0 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-r-2xl p-8 flex flex-col backface-hidden">
              {/* Motion blur illusion */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: index < page ? 1 : 0 }}
                transition={{ duration: 5.3 }}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.15), transparent)",
                }}
              />
                <div className="absolute top-0 right-0 w-36 h-32 overflow-hidden pointer-events-none z-10">
                  {plan.popular && (
                    <motion.div
                        initial={{ x: "30%", y: "-20%", rotate: 45 }}
                        animate={{
                          scale: [1, 1.03, 1],
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{
                          backgroundSize: "200% 200%", 
                        }}
                        className="absolute right-4 top-10 w-40 py-1
                                  bg-linear-to-r from-green-500 via-emerald-400 to-green-500
                                  dark:from-green-600 dark:via-emerald-500 dark:to-green-600 
                                  text-xs font-bold text-white shadow-lg text-center"
                      >
                        Most Popular
                        <motion.div
                          initial={{ left: "-100%" }}
                          animate={{ left: "100%" }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.5, 
                            repeatDelay: 2, 
                            ease: "easeInOut" 
                          }}
                          className="absolute top-0 h-full w-12 bg-white/40 skew-x-30 blur-sm"
                        />
                      </motion.div>
                  )}
                </div>
              <div className="flex-1 relative">
                  <div className="absolute -bottom-6 -right-12">
                    <img src="/girl-study.png" alt="Lakshya-Library-book-girl-study" loading="lazy" className="w-60 bottom-10 opacity-80"/>
                  </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono text-zinc-400 italic">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[10px]">
                    L.L.
                  </div>
                </div>
                <h3 className="text-3xl font-bold mt-10 text-black dark:text-white uppercase tracking-tight">
                  {plan.title}
                </h3>
                <p className="text-zinc-500 text-sm mt-2">{plan.desc}</p>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mr-3" />
                      {feat}
                    </div>
                  ))}
                </div>
               
              </div>

              <div className="mt-auto border-t border-zinc-100 dark:border-zinc-800 pt-4 flex justify-between items-baseline">
                
                <div className="flex items-baseline gap-2">
                    <span className="text-[28px] font-black text-black dark:text-white">
                      {plan.price}
                    </span>
                    <div className=" flex gap-1 items-baseline">
                      {plan.originalPrice && (
                        <span className="text-sm text-neutral-500 line-through dark:text-neutral-400">
                          {plan.originalPrice}
                        </span>
                      )}
                      {plan.originalPrice && (
                      <span className="text-[10px] tracking-tight font-semibold text-green-500 dark:text-green-400">
                        SAVE {Math.round(
                          ((parseInt(plan.originalPrice.slice(1)) -
                            parseInt(plan.price.slice(1))) /
                            parseInt(plan.originalPrice.slice(1))) *
                            100
                        )}%
                      </span>
                    )}
                    </div>  
                </div>
                <span className="text-[10px] text-zinc-400 group-hover:translate-x-1 transition-transform">
                  FLIP PAGE →
                </span>
              </div>
            </div>

            {/* BACK */}
            <div
              className="absolute inset-0 text-sm bg-zinc-50 dark:bg-zinc-950 rounded-l-2xl 
              backface-hidden flex items-center justify-center pl-6 pr-4 
              border-l-10 border-zinc-200 dark:border-zinc-800 shadow-2xl pointer-events-none"
              style={{ transform: "rotateY(180deg)" }}
            >
              <div className="absolute bottom-20 px-10 text-center">
                <motion.p
                  key={page}
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 0.35, x: 0 }}
                  transition={{ duration: 1.6 }}
                  style={{ fontFamily: "Caveat, cursive" }}
                  className="text-xl font-black text-zinc-700 dark:text-zinc-200"
                >
                  {page > 0 ? quotes[page - 1] : "Open the book to begin."}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
        {/* back cover page */}
        <motion.div
          animate={{
            opacity: page === plans.length ? 1 : 0,
            scale: page === plans.length ? 1 : 0.98,
          }}
          transition={{ opacity: { duration: 1.2 }, scale: { type: "spring", stiffness: 200, damping: 20 } }}
          className={`absolute right-[10%] w-[40%] h-[90%] 
            bg-zinc-100 dark:bg-zinc-900 
            rounded-r-2xl shadow-inner 
            border border-zinc-300 dark:border-zinc-700
            flex flex-col justify-center items-center px-12
            pointer-events-none`}
          style={{ fontFamily: caveat.style.fontFamily }}
          
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />

          <div className="relative text-center space-y-6">
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight">
              Lakshya Library
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              A quiet space built for focus, consistency, and long study hours.
              Designed for students who take their goals seriously.
            </p>

            <div className="pt-4 border-t border-zinc-300 dark:border-zinc-700 text-xs tracking-widest text-zinc-500">
              EST. 2021 · STUDY · GROW · REPEAT
            </div>
          </div>
        </motion.div>

      </div>

      {/* Reset */}
      <button
        onClick={() => setPage(0)}
        className="mt-8 z-1 px-6 py-2 text-xs font-mono uppercase tracking-widest border border-zinc-300 dark:border-zinc-700 text-zinc-500 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
      >
        Close Book
      </button>
    </div>
  );
}