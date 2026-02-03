"use client";

import BookAnimation from "../ui/book";
import BookAnimation1 from "../ui/book-page-mobile";

export default function Plans () {
    return (
        <div className="mx-auto flex flex-row items-center justify-center" id="plans">
            
            <div className="mt-20 hidden md:flex"> 
                <BookAnimation />
            </div>
            <div className="md:hidden">
                <BookAnimation1 />
            </div>
        </div>
    );
}