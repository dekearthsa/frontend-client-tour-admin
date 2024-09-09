import React from 'react';

const ComponentBottonBar = () => {
    return (
        <div id="c-bottom-bar" className="bg-red-500 w-full py-6 flex flex-col md:flex-row justify-between items-center">
            {/* Contact Section */}
            <div className="text-center md:text-left">
                <div className="font-bold text-white text-lg md:ml-10">CONTACT</div>
                <div className="lg:ml-10 flex flex-col md:flex-row items-center md:items-start mt-4 space-y-4 md:space-y-0">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <span className="font-bold text-white ml-3">
                            reservation.psdntianna@gmail.com
                        </span>
                    </div>
                    <div className="flex items-center">
                        <img width={25} height={25} src={require("../../img/whatsapp (1).png")} alt="WhatsApp" className="lg:ml-10" />
                        <span className="font-bold text-white ml-3">
                            +66898512076 , +66834784611
                        </span>
                    </div>
                </div>
            </div>
            {/* Social Media Section */}
            <div className="mt-6 lg:mt-0 lg:mr-10">
                <a href="https://www.facebook.com/psdcnxtravel" target="_blank" rel="noopener noreferrer">
                    <img width={30} height={30} src={require("../../img/facebook (1).png")} alt="Facebook" className="transition-transform transform hover:scale-110" />
                </a>
            </div>
        </div>
    );
}

export default ComponentBottonBar;
