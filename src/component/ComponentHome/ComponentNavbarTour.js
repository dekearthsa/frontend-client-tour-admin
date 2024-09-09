import imgHeader from "../../img/CA_ChiangMai_TH_Header.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ComponentNavbarTour = () => {
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-ins');
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-10');
                el.classList.add('opacity-100', 'translate-y-0');
            }, index * 200); // Faster cascading effect for a luxurious feel
        });
    }, []);

    return (
        <div 
            className="relative h-[370px] mt-5 lg:rounded-lg overflow-hidden shadow-2xl"
            style={{ backgroundImage: `url(${imgHeader})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>

            <div className="relative flex flex-col items-center justify-center h-full  text-center text-white">
                <div className="fade-in lg:w-[40%] w-[90%] opacity-0 translate-y-10 bg-black/60 px-3 py-1 lg:px-6 lg:py-3 text-2xl md:text-3xl lg:text-4xl font-extrabold rounded-lg mb-3 transform transition-all duration-1000 ease-out">
                    Explore Thailand on Our Award-Winning Tours
                </div>
                <div className="fade-in lg:w-[40%]  w-[90%] opacity-0 translate-y-10 bg-black/60 px-3 py-1 lg:px-6 lg:py-2 text-lg md:text-xl font-semibold rounded-lg transform transition-all duration-1000 ease-out">
                    UNBEATABLE TOURS, LOVED BY TRAVELLERS
                </div>
                <Link to="/shop" className="mt-8 fade-in opacity-0 translate-y-10 transform transition-all duration-1000 ease-out">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-out hover:scale-110 hover:shadow-xl">
                        SHOW TOUR
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ComponentNavbarTour;
