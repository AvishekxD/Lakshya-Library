"use client"

export default function Footer() {
    return (
        <footer className="mx-auto shadow-md dark:border-[0.5px] dark:border-neutral-900 mb-4 max-w-7xl bg-linear-to-br from-white to-green-100/40 to-180% dark:from-background dark:to-neutral-800/80 text-gray-800 rounded-xl">
            <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6 dark:text-white">
                    Just A footer don't take it serious
                </div>
                <p className="text-center max-w-4xl dark:text-white font-normal leading-relaxed">
                    To the outsider, we focus solely on market synergy and customer satisfaction. 
                    We sell the finest 'soap' on the market. But if you see us with a black eye at 
                    the morning meeting, just remember: you’re looking at a team that doesn’t know 
                    how to quit. As I only say to a few people — Welcome to Fight Club.
                </p>
            </div>
            
        </footer>
    );
};
