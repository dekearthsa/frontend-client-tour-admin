import React, { useState } from 'react';

const ComponentProductDetailPopup = ({images, idx}) => {
    const slides = images;

    const [currentIndex, setCurrentIndex] = useState(idx);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        // console.log("goToNextSlide => ",currentIndex)
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        // console.log("goToPrevSlide => ",currentIndex)
    };

    return (
        <div className="h-[100vh]  relative w-full">
            <div className="overflow-hidden h-[100vh] rounded-lg relative">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={slide}
                            alt={"img"+"_"+index}
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-4 left-1/2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    ></button>
                ))}
            </div>

            {/* Slider Controls */}
            <button
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
                onClick={goToPrevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70">
                    <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    {/* <span className="sr-only">Previous</span> */}
                </span>
            </button>
            <button
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
                onClick={goToNextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70">
                    <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                    </svg>
                    {/* <span className="sr-only">Next</span> */}
                </span>
            </button>
        </div>
    );
};

export default ComponentProductDetailPopup;
