"use client";

export function UnderConstruction(){

    return(
        <div className="relative h-screen flex items-center justify-center">
            <div className="flex h-125 w-full flex-col items-center justify-center overflow-hidden">
                <span className="
                    text-center text-3xl md:text-[44px] font-bold bg-linear-to-br
                    from-[#1f1f1f]
                    to-[#888888]
                    bg-clip-text
                    text-transparent
                    dark:from-white dark:to-[#a3a3a3]"
                >
                This Area is Under-Construction. <br />Please check back later....
            </span>
            </div>
            
        </div>
    );
}
