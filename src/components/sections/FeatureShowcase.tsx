"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FeatureParts } from "./FeatureParts";
import { Particles } from "../ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function FeatureShowcase() {
    const { resolvedTheme } = useTheme()
    const [color, setColor] = useState("#ffffff")
    useEffect(() => {
      setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
    }, [resolvedTheme])
  return (
    <section className="pb-24 md:py-24 bg-white dark:bg-background">
      <div className="relative max-w-7xl mx-auto px-6 ">
        <div
          className="
              relative mx-auto h-200 overflow-hidden pointer-events-none
              my-[-18.8rem] 

              /* COLOR VARIABLES */
              [--horizon:var(--color-green-500)]
              [--border-color:black]

              dark:[--horizon:var(--color-one)]
              dark:[--border-color:hsl(var(--border))]

              /* MASK */
              mask-[radial-gradient(ellipse_at_center_center,#000_20%,transparent_70%)]

              /* GLOW */
              before:absolute before:inset-0 before:h-full before:w-full
              before:opacity-30
              dark:before:opacity-40
              before:bg-[radial-gradient(circle_at_bottom_center,var(--horizon),transparent_70%)]

              /* CURVE */
              after:absolute after:-left-1/2 after:top-1/2
              after:aspect-[1/0.7] after:w-[200%]
              after:rounded-[50%]
              after:border-t after:border-(--border-color)
              after:bg-background

              before:mix-blend-multiply
              dark:before:mix-blend-normal

            "
          >

        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-1"
        >
          <h2 className="text-3xl md:text-[44px] font-bold bg-linear-to-br
                            from-[#1f1f1f]
                            to-[#888888]
                            bg-clip-text
                            text-transparent
                            dark:from-white dark:to-[#a3a3a3]">
            Why Choose <span className="text-primary">Lakshya Library?</span>
          </h2>
          <p className="mt-4 md:text-lg text-gray-600 dark:text-zinc-300/70 max-w-2xl mx-auto">
            Everything you need to stay focused, consistent, and exam-ready —
            all under one peaceful roof.
          </p>
        </motion.div>
        
        {/* Layout */}
        <FeatureParts/> 
        <div >
          <Particles
            className="absolute inset-0 z-0 overflow-hidden "
            quantity={100}
            ease={80}
            refresh
          />
        </div>
        <div>
          <Particles
            className="absolute inset-0 z-0 overflow-hidden "
            quantity={100}
            ease={80}
            color={color}
            refresh
          />
        </div>
        
      </div>
    </section>
  );
}
