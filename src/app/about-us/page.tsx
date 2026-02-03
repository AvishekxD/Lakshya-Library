"use client";

import { motion, easeOut } from 'framer-motion';

const fadeInScroll = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: easeOut }
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } }
};

export default function AboutContactFAQ() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-24">

            {/* 1. ABOUT US SECTION */}
            <motion.section
                id="about"
                {...fadeInScroll}
                className="max-w-4xl space-y-6 h-full mt-24 text-clip mx-auto"
            >
                <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-300 text-center">About Us</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mx-auto">
                    Lakshya Library is a dedicated study space built for students who want focus, comfort, and consistency. We believe great results come from great environments - quiet, reliable, and thoughtfully designed for deep work.
                    From uninterrupted high-speed Wi-Fi and power backup to comfortable seating and calm lighting, every detail is crafted to help you stay in the zone. Whether you’re preparing for competitive exams, building your career, or just need a distraction-free place to study, Lakshya Library gives you the space to show up daily and do your best work.
                    We’re not just a library - we’re a community of learners moving forward, one focused session at a time.
                    Your goals. Your grind. Your Lakshya.
                </p>

                {/* Animated Cards Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid text-center grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:max-w-4xl mx-auto"
                >
                    <motion.div variants={fadeInScroll} className="p-6 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-xl shadow-sm">
                        <h3 className="font-bold text-neutral-950 dark:text-neutral-300">Our Mission</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-300 mt-2">To provide a distraction-free environment...</p>
                    </motion.div>
                    <motion.div variants={fadeInScroll} className="p-6 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-xl shadow-sm">
                        <h3 className="font-bold text-neutral-950 dark:text-neutral-300">Our Vision</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-300 mt-2">To become the go-to study space for learners...</p>
                    </motion.div>
                </motion.div>
            </motion.section>

            <hr className="border-neutral-200 dark:border-neutral-700" />

            {/* 2. CONTACT US SECTION */}
            <motion.section
                id="Contact-Us"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 h-110 items-center"
            >
                <div className="space-y-4 md:space-y-6">
                    <h2 className="text-4xl font-semibold dark:text-neutral-300 bg-linear-to-br from-[#1f1f1f] to-[#888888] bg-clip-text text-transparent tracking-wider">
                        Get In Touch
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-500">Have questions? Contact us or visit our Library.</p>

                    <div className="space-y-4">
                        <div className="flex-col items-center gap-3 text-neutral-700 dark:text-neutral-300 font-semibold">
                            Phone: +91 96800 28230 <br />
                            08AM - 10PM <br />
                            <p className="font-normal text-neutral-500 mt-4">
                                Ready to study without interruptions? <br />
                                Join Lakshya Library and make every hour count.
                            </p>
                        </div>

                        <a href="https://www.google.com/maps/dir/?api=1&destination=26.880591,75.909680" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 hover:scale-105 transition-all duration-300 rounded-xl text-neutral-800 font-medium bg-neutral-200 hover:bg-neutral-300">
                            Visit our Library
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <motion.iframe
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.876366942621!2d75.90753681450575!3d26.88063618317665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db9cc5d889be3%3A0x86137469afd90fce!2sLakshya%20Library!5e0!3m2!1sen!2sin!4v"
                    className="w-full h-full rounded-xl border border-neutral-600/40 shadow-lg"
                    loading="lazy"
                />
            </motion.section>

            <hr className="border-neutral-200 dark:border-neutral-700" />

            {/* 3. FAQ SECTION */}
            <motion.section
                id="FAQ"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="space-y-8 pb-20"
            >
                <h2 className="text-4xl font-bold text-center text-neutral-900 dark:text-neutral-300">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {[
                        // { q: "How do I get started?", a: "Simply click the 'Plans' link in the navbar to choose your package." },
                        { q: "Where are you located?", a: "VWJ5+7R8 Purani Chungi, Rani Nagar Road, Agra Rd, Paldi Meena, Jaipur, Rajasthan 302031" },
                        { q: "Is there a free trial?", a: "Yes, we offer a 3-day free trial for all new users." },
                        { q: "Do you provide books?", a: "Lakshya Library is primarily a study space, not a traditional book library. You’re encouraged to bring your own books, notes, laptop, or study material." },
                        { q: "What are the working hours?", a: "Our working hours depend on your selected plan. Some plans offer full-day access. Please check the plans section or contact us for the latest timings." },
                        { q: "Do you offer daily or monthly passes?", a: "Yes, we offer flexible plans including daily passes for short sessions and monthly memberships for regular learners. This helps you choose what fits your routine and budget." },
                        { q: "Is prior booking required?", a: "Walk-ins are welcome, but during peak hours seats may fill up. We recommend booking in advance (if booking is enabled) to ensure availability." },
                        { q: "Can I use my laptop and charger?", a: "Absolutely. You can bring your laptop, charger, and other study accessories. Power points are available at most seats." },
                        { q: "Is Lakshya Library suitable for online classes?", a: "Yes. With stable Wi-Fi and power backup, Lakshya Library is ideal for attending online classes, watching lectures, and doing research." },
                        { q: "Are there any rules I should know about?", a: "To keep the space comfortable for everyone, we request users to Maintain silence, Keep phones on silent, Respect shared spaces, Keep the area clean" },
                        { q: "Is the environment really quiet?", a: "Yes. We maintain a strict no-noise policy to ensure everyone gets a peaceful study experience. Phone calls and loud conversations are discouraged inside the study zones." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInScroll}
                            className="p-6 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-lg hover:shadow-xs dark:hover:shadow-amber-800 hover:shadow-green-600 transition shadow-md bg-white"
                        >
                            <h4 className="font-bold text-neutral-800  dark:text-neutral-300 text-lg">{item.q}</h4>
                            <p className="text-neutral-600 dark:text-neutral-400 mt-2">{item.a}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}