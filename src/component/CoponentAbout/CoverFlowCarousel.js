// import React, { useState, useEffect } from 'react';
// const CoverFlowCarousel = ({ items }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isPhoneScreen, setIsphoneScreen] = useState();
//     // const lengthData = [1,2,3]

//     const handlePrev = () => {
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
//         setCurrentIndex(newIndex);
//     };

//     const handleNext = () => {
//         const isLastSlide = currentIndex === items.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex);
//     };

//     const haddleWindowScreenCss = async () => {
//         const screen = window.innerWidth;
//         if (screen <= 800) {
//             await setIsphoneScreen(true)
//         } else {
//             await setIsphoneScreen(false)
//         }
//     }

//     useEffect(() => {
//         haddleWindowScreenCss();
//     })


//     if(!isPhoneScreen){
//         return (
//             <div className="relative w-full max-w-5xl mx-auto">
//                 <div className="flex items-center justify-center space-x-0">
//                     {items.map((item, index) => {
//                         const isActive = index === currentIndex;
//                         const isPrev = index === (currentIndex === 0 ? items.length - 1 : currentIndex - 1);
//                         const isNext = index === (currentIndex === items.length - 1 ? 0 : currentIndex + 1);
    
//                         let cardClass = `absolute transition-transform duration-700 transform ease-in-out`;
//                         if (isActive) {
//                             cardClass += " scale-110 z-30 shadow-2xl";
//                         } else if (isPrev) {
//                             cardClass += " -translate-x-28 scale-95 z-20 opacity-70";
//                         } else if (isNext) {
//                             cardClass += " translate-x-28 scale-95 z-20 opacity-70";
//                         } else {
//                             cardClass += " scale-75 opacity-40 z-10";
//                         }
    
//                         return (
//                             <div key={index} className={cardClass}>
//                                 <div className="w-[400px] h-80   bg-gradient-to-b from-black to-gray-900 text-white rounded-xl overflow-hidden shadow-xl border border-gray-700">
//                                     <div className="p-6 text-center flex flex-col justify-center h-full">
//                                         <img src={item.image} alt={item.title} className="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full mb-4 object-cover shadow-inner border-4 border-gray-700" />
//                                         <h3 className="text-xl md:text-2xl font-extrabold mb-2">{item.title}</h3>
//                                         <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center justify-between w-full px-4">
//                     <button
//                         onClick={handlePrev}
//                         className="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white p-3 md:p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
//                     >
//                         &#8249;
//                     </button>
//                     <button
//                         onClick={handleNext}
//                         className="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white p-3 md:p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
//                     >
//                         &#8250;
//                     </button>
//                 </div>
//                 <div className="flex justify-center mt-8 space-x-4">
//                     {items.map((_, index) => (
//                         <div
//                             key={index}
//                             className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
//                                 currentIndex === index ? 'bg-indigo-500' : 'bg-gray-500'
//                             }`}
//                             onClick={() => setCurrentIndex(index)}
//                         />
//                     ))}
//                 </div>
//             </div>
//         );
//     }else{
//         return (
//             <div className="">
//                 <div className="">
//                     {items.map((item, index) => {
//                         return (
//                             <div key={index} className='mt-10  fade-in duration-1000 ease-out transform transition-all'>
//                                 <div className="bg-gradient-to-b from-black to-gray-900 text-white rounded-xl overflow-hidden shadow-xl border border-gray-700">
//                                     <div className="p-6 text-center flex flex-col justify-center h-full">
//                                         <img src={item.image} alt={item.title} className="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full mb-4 object-cover shadow-inner border-4 border-gray-700" />
//                                         <h3 className="text-xl md:text-2xl font-extrabold mb-2">{item.title}</h3>
//                                         <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         );
//     }
    
// };

// export default CoverFlowCarousel;
