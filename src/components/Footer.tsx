"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <motion.footer 
            // Reveal Animation Logic
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-t-xl border border-zinc-900/20 mx-1 shadow-sm shadow-zinc-900/20 text-white"
        >

            {/* CTA CARD */}
            <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative -top-6 mx-3 md:mx-9 rounded-2xl bg-linear-to-br 
                from-neutral-950 via-black dark:to-amber-700 to-purple-900 to-105% flex flex-col md:flex-row 
                items-center justify-between shadow-xs shadow-neutral-800 overflow-hidden"
            >
                <div className="max-w-2xl p-10">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                        Information is a maze<br /> we’re the librarians with the map.
                    </h2>
                    <p className="text-neutral-300 mb-6">
                        150+ Seats / 300mbps+
                    </p>
                    <button className="bg-white text-black px-5 py-2.5 rounded-lg font-medium hover:bg-neutral-200 transition">
                        Check Availability
                    </button>
                </div>

                {/* Decorative Graphic Placeholder */}
                <div className="absolute bg-[url('/moon.png')] bg-center bg-no-repeat bg-cover opacity-85 
                -right-8 -bottom-10 w-38 h-38 md:w-48 md:h-48 lg:w-65 lg:h-65 
                rounded-full border border-neutral-700 shadow-2xl shadow-white">
                </div>
            </motion.div>

            {/* FOOTER CONTENT */}
            <div className="px-8 md:px-20 pb-5">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-neutral-700">

                    {/* Company Info */}
                    <div className="text-neutral-700 dark:text-white">
                        <div className="flex items-center gap-2 my-2 font-semibold ">
                            Lakshya library
                        </div>
                        <p>
                            VWJ5+7R8 Purani Chungi<br />
                            Rani Nagar Road, Agra Rd<br />
                            Paldi Meena, Jaipur - 302031<br />
                            Rajasthan, India
                        </p>

                        <div className="my-2 space-y-1">
                            <p>+91 96800 28230</p>
                            {/* <p>support@lakshyalibrary.com</p> */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-neutral-700 dark:text-white font-semibold my-2">Quick links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#plans" className="hover:text-neutral-400 transition">
                                    Plans
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us#FAQ" className="hover:text-neutral-400 transition">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us#about" className="hover:text-neutral-400 transition">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us#Contact-Us" className="hover:text-neutral-400 transition">
                                    Contact us
                                </Link>
                            </li>
                            <li className="mt-3">
                                <a 
                                    href="https://www.google.com/maps/dir/?api=1&destination=26.880591,75.909680" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-neutral-400 transition-all duration-200 ease-in-out"
                                    >
                                    Get Directions
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <div>
                            <h4 className="text-neutral-700 dark:text-white font-semibold my-2">Social</h4>
                            <ul className="space-y-2 ">
                                <li>
                                    <a className="hover:text-neutral-400 transition-all duration-200 ease-in-out" 
                                        href="https://www.instagram.com/lakshya.library_/" 
                                        target="_blank" 
                                        rel="noopener noreferrer">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a className="hover:text-neutral-400 transition-all duration-200 ease-in-out"
                                        href="https://www.justdial.com/Jaipur/Lakshya-Library-Agra-Road-Jindo-Ki-Dhani/0141PX141-X141-220505224538-G8H6_BZDET" 
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Justdial
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            
                            <ul className="space-y-2 mt-2">
                                <li>
                                    <Link href="/legal" className="text-neutral-700 dark:text-neutral-100 hover:text-neutral-400 transition-all duration-200 ease-in-out font-semibold">
                                        Legal
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/legal/privacy-policy" className=" hover:text-neutral-400 transition-all duration-200 ease-in-out">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/legal/terms" className=" hover:text-neutral-400 transition-all duration-200 ease-in-out">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <ul>
                            <li className="mt-3">
                                © 2026 lakshyalibrary. <br />
                                All rights reserved.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}