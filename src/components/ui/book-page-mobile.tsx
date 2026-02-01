"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Caveat } from "next/font/google";

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

export default function BookAnimation1() {
    const [index, setIndex] = useState(0);

    const next = () =>
        setIndex((prev) => Math.min(prev + 1, plans.length - 1));
    const prev = () =>
        setIndex((prev) => Math.max(prev - 1, 0));

    return (
        <div className="w-full flex flex-col items-center justify-center bg-white dark:bg-black">

            <div className="relative w-70 h-122.5 sm:w-90 sm:h-130 ">
                <AnimatePresence>
                    <motion.div
                        key={index}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -80) next();
                            if (info.offset.x > 80) prev();
                        }}
                        onClick={next}
                        initial={{ opacity: 0, y: 40, rotate: -2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0, y: -40, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 260, damping: 25 }}
                        className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900
                                    rounded-2xl border border-zinc-200 dark:border-zinc-700
                                    shadow-xl p-6 flex flex-col cursor-pointer"
                    >
                        {/* Paper texture */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />

                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-mono text-zinc-400">
                                0{index + 1}
                            </span>
                            <span
                                style={{ fontFamily: caveat.style.fontFamily }}
                                className="text-lg font-bold text-zinc-700 dark:text-zinc-200"
                            >
                                Plans
                            </span>
                        </div>

                        <div className="absolute top-0 right-0 w-36 h-32 overflow-hidden pointer-events-none z-10">
                            {plans[index].popular && (
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
                                                bg-linear-to-r from-green-600 via-emerald-500 to-green-600 
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

                        {/* Content */}
                        <h3 className="text-2xl font-extrabold mt-8 uppercase">
                            {plans[index].title}
                        </h3>

                        <p className="text-sm text-zinc-500 mt-2">
                            {plans[index].desc}
                        </p>

                        <div className="mt-6 space-y-3">
                            {plans[index].features.map((feat, i) => (
                                <div
                                    key={i}
                                    className="flex items-center text-sm text-zinc-700 dark:text-zinc-300"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mr-3" />
                                    {feat}
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-12.5 -right-2.5">
                            <img src="/girl-study.png" alt="Lakshya-Library-book-girl-study" className="w-60 bottom-10 opacity-80" />
                        </div>
                        {/* Footer */}
                        <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700 flex justify-between items-center">
                            <div className="flex items-center gap-1.5">
                                <span className="text-[24px] font-black text-black dark:text-white">
                                    {plans[index].price}
                                </span>
                                <div className="flex flex-col items-start">
                                    {plans[index].originalPrice && (
                                        <span className="text-[10px] text-neutral-500 font-semibold line-through dark:text-neutral-400">
                                            {plans[index].originalPrice}
                                        </span>
                                    )}
                                    {plans[index].originalPrice && (
                                        <span className="text-[10px] tracking-tight font-semibold text-green-600 dark:text-green-400">
                                            SAVE {Math.round(
                                                ((parseInt(plans[index].originalPrice.slice(1)) -
                                                    parseInt(plans[index].price.slice(1))) /
                                                    parseInt(plans[index].originalPrice.slice(1))) *
                                                100
                                            )}%
                                        </span>
                                    )}
                                </div>
                            </div>
                            <span className="text-[10px] tracking-widest text-zinc-400">
                                TAP / SWIPE →
                            </span>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination dots */}
            <div className="flex gap-2 mt-6">
                {plans.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${i === index
                                ? "bg-black dark:bg-white"
                                : "bg-zinc-300 dark:bg-zinc-700"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
