"use client";

import Image from "next/image";
import { BackgroundLines } from "../ui/background-lines";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroContent } from "./HeroContent";
import LibraryStatusBadge from "./library-status/LibraryStatusBadge";

export default function Hero() {
    const [index, setIndex] = useState(0);

    const SIX_HOURS = 6 * 60 * 60 * 1000;

    const getHeadingIndex = () => {
        return Math.floor(Date.now() / SIX_HOURS) % heroContent.headings.length;
    };

    const [headingIndex, setHeadingIndex] = useState(getHeadingIndex);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroContent.subHeadings.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setHeadingIndex(getHeadingIndex());
        }, 60 * 1000); // check every minute

        return () => clearInterval(interval);
    }, []);


    return (
        <main className="bg-white/80 dark:bg-background text-gray-900 pt-16">
            {/* Container-wise centered section */}
            <section className="max-w-5xl mx-auto px-6 pt-6 flex flex-col items-center text-center">

                {/* 1. Image / BackgroundLines*/}
                <BackgroundLines className="flex items-center justify-center flex-col px-4">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="
                            relative z-10
                            w-44 h-[218px]
                            md:w-[292px] md:h-[350px]
                        "
                    >
                        <Image
                            src="/HeroSection-img.png"
                            alt="Hero section image"
                            fill
                            priority
                            sizes="(max-width: 768px) 176px, 292px"
                            className="object-contain "
                        />
                    </motion.div>
                </BackgroundLines>

                {/* 2. Heading & Sub-heading */}

                <AnimatePresence mode="wait">
                    <motion.h1
                        key={heroContent.headings[headingIndex]}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="
                            max-w-4xl
                            text-4xl sm:text-5xl md:text-6xl
                            font-extrabold tracking-tight mb-2
                            bg-linear-to-br
                            from-[#1f1f1f]
                            to-[#888888]
                            bg-clip-text
                            text-transparent
                            dark:from-white dark:to-[#a3a3a3]
                            "
                    >
                        {heroContent.headings[headingIndex]}
                    </motion.h1>
                </AnimatePresence>

                <div className="mt-2 md:mb-0 mb-2 h-10 sm:h-12  text-neutral-700 dark:text-neutral-400/90">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={heroContent.subHeadings[index]}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="text-base sm:text-lg md:text-xl text-muted-foreground "
                        >
                            {heroContent.subHeadings[index]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* 3. Button & Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="my-1.5"
                >
                    <button className="spark-button">
                        <span className="spark"></span>
                        <span className="backdrop"></span>
                        <span className="text text-white">Check Availability</span>
                    </button>
                </motion.div>

                {/* 4. Now Open Badge  */}
                <LibraryStatusBadge />
                    
            </section>
        </main>
    );
}