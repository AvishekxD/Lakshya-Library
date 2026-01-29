"use cleint";

import { GridBackgroundTwo } from "../ui/gridbackgroundtwo";
import { Iphone } from "../ui/iphone-view";
import { Safari } from "../ui/safari-view";

export function GoogleMaps() {
  return (
    <div className="relative md:max-w-2xl lg:max-w-full mx-auto ">
      
      <div>
        <div className="w-70 block md:hidden mx-auto">
          <Iphone>
            <div className="grid h-full grid-cols-1 md:grid-cols-2 pt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.876366942621!2d75.90753681450575!3d26.88063618317665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db9cc5d889be3%3A0x86137469afd90fce!2sLakshya%20Library!5e0!3m2!1sen!2sin!4v"
                  className="w-full h-full rounded-xl dark:invert-[0.95] dark:hue-rotate-180 dark:contrast-[1.05]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="flex justify-center flex-col mx-auto">
                  <h2 className="text-[22px] font-semibold bg-linear-to-br
                                  from-[#1f1f1f]
                                  to-[#888888]
                                  bg-clip-text
                                  text-transparent
                                  tracking-wider
                                  dark:from-white dark:to-[#a3a3a3]">You&#39;ll find us right here.</h2>
                  <p className="bg-linear-to-br
                                  from-[#1f1f1f]
                                  to-[#888888]
                                  bg-clip-text
                                  text-transparent
                                  dark:from-white dark:to-[#a3a3a3] text-xl">Lakshya Library</p>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    Purani chungi, Jaipur, Rajasthan <br />
                    150+ Seats / 300Mbps+<br />
                    08AM - 10PM
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <button className="text-neutral-800 dark:text-neutral-200 hover:dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-600 hover:bg-neutral-300/40 dark:hover:bg-neutral-500/80 px-4 py-2 border hover:scale-105 transition-all duration-300 ease-in-out border-neutral-400/60 shadow-md hover:shadow-xl dark:shadow-white/10 hover:border-white hover:dark:border-neutral-500 dark:border-neutral-500 rounded-xl">
                      Get directions
                    </button>
                    <button className="text-neutral-800 dark:text-neutral-200 hover:dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-600 hover:bg-neutral-300/40 dark:hover:bg-neutral-500/80 px-2 py-2 border hover:scale-105 transition-all duration-300 ease-in-out border-neutral-400/60 shadow-md hover:shadow-xl dark:shadow-white/10 hover:border-white hover:dark:border-neutral-500 dark:border-neutral-500 rounded-xl">
                      Check Availability
                    </button>
                  </div>
                </div>

                
              </div>
          </Iphone>
        </div>
        <div className="hidden md:block">
            <Safari url="lakshyalibrary.in">
              <div className="grid h-full grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-center flex-col mx-auto">
                  <h2 className="md:text-2xl lg:text-4xl font-semibold bg-linear-to-br
                                  from-[#1f1f1f]
                                  to-[#888888]
                                  bg-clip-text
                                  text-transparent
                                  dark:from-white dark:to-[#a3a3a3]">You&#39;ll find us right here</h2>
                  <p className="bg-linear-to-br
                                  from-[#1f1f1f]
                                  to-[#888888]
                                  bg-clip-text
                                  text-transparent
                                  dark:from-white dark:to-[#a3a3a3] text-xl">Lakshya Library</p>
                  <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                    Purani chungi, Jaipur, Rajasthan <br />
                    150+ Seats / 300Mbps+<br />
                    08AM - 10PM
                  </p>
                  <div className="pt-4 flex sm:gap-2 lg:gap-2">
                    <button className="text-neutral-800 dark:text-neutral-200 hover:dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-600 hover:bg-neutral-300/40 dark:hover:bg-neutral-500/80 sm:px-4 sm:py-2 lg:px-7 lg:py-2 border hover:scale-105 transition-all duration-300 ease-in-out border-neutral-400/60 shadow-md hover:shadow-xl dark:shadow-white/10 hover:border-white hover:dark:border-neutral-500 dark:border-neutral-500 rounded-md">
                      Get directions
                    </button>
                    <button className="text-neutral-800 dark:text-neutral-200 hover:dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-600 hover:bg-neutral-300/40 dark:hover:bg-neutral-500/80 sm:px-2 sm:py-2 lg:px-7 lg:py-2 border hover:scale-105 transition-all duration-300 ease-in-out border-neutral-400/60 shadow-md hover:shadow-xl dark:shadow-white/10 hover:border-white hover:dark:border-neutral-500 dark:border-neutral-500 rounded-md">
                      Check Availability
                    </button>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.876366942621!2d75.90753681450575!3d26.88063618317665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db9cc5d889be3%3A0x86137469afd90fce!2sLakshya%20Library!5e0!3m2!1sen!2sin!4v"
                  className="w-full h-full rounded-xl dark:invert-[0.95] dark:hue-rotate-180 dark:contrast-[1.05]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Safari>
          </div>
        </div>
      
      <GridBackgroundTwo />
    </div>
  );
}