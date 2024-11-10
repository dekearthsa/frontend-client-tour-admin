import React, { useState, useEffect } from 'react';
// import CoverFlowCarousel from '../component/CoponentAbout/CoverFlowCarousel';
import ComponentHomeNavbar from '../component/ComponentHome/ComponentHomeNavbar';
import axios from "axios";

const AboutPage = () => {
    
    const [isContact, setContact] = useState();
    const [isGetInTouch, setGetInTouch] = useState();
    const [isIntro, setIntro] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPhoneScreen, setIsphoneScreen] = useState();
    const [items, setItems] = useState([]);


    const haddleFetchContact = async () => {
        const fetchContact = await axios.get("https://backend-node-content-505177410747.asia-southeast1.run.app/api/get/content");

        setContact(fetchContact.data);
        setGetInTouch(fetchContact.data.titleContact);
        setIntro(fetchContact.data.introContact);
        setItems(JSON.parse(fetchContact.data.items));
    };

    const haddleWindowScreenCss = async () => {
        const screen = window.innerWidth;
        if (screen <= 800) {
            await setIsphoneScreen(true)
        } else {
            await setIsphoneScreen(false)
        }
    }

    const handlePrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNext = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const haddleChangeArrayItems = (idx, value, title) => {
        if(title === "imgUrl"){
            const updateItems = items.map((item, index) => 
                index === idx  ? {...item, image: value }:item,
            )
            setItems(updateItems)
        }else if(title === "title"){
            const updateItems = items.map((item, index) => 
                index === idx  ? {...item, title: value }:item,
            )
            setItems(updateItems)
        }else if(title === "desc"){
            const updateItems = items.map((item, index) => 
                index === idx  ? {...item, description: value }:item,
            )
            setItems(updateItems)
        }
    }

    const haddleRemoveCard = (idx) => {
        let newArray = [...items];
        newArray.splice(idx, 1);
        setItems(newArray);
    }

    const haddleAddingCard = () => {
        const newEl = {
            image: "https://via.placeholder.com/300",
            title: "Demo title",
            description: "Demo description",
        }
        setItems([...items, newEl])
    }
    
    const haddleUpdateCard =  async () => {
        const payload = {
            titleContact: isGetInTouch,
            introContact: isIntro,
            items: items
        }

        const dataStatus = await axios.post("https://backend-node-content-505177410747.asia-southeast1.run.app/api/content/update", payload);
        if(dataStatus.status === 200){
            alert("Update success!")
            window.location.reload();
        }else{
            alert(dataStatus.status)
        }
    }

    useEffect(() => {
        haddleWindowScreenCss();
        haddleFetchContact();
    }, []);

    useEffect(() => {
    }, [isContact, isGetInTouch, isIntro]);

    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800">
            {/* Navbar Section */}
            <div className="text-white absolute pt-10 font-bold w-[100%] z-10">
                <ComponentHomeNavbar />
            </div>

            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center"
                style={{
                    backgroundImage: `url(https://wallpapercosmos.com/w/full/5/5/1/294267-3840x2160-desktop-4k-bangkok-wallpaper.jpg)`,
                    height: '50vh',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-1 flex items-center justify-center h-full">
                    <h1 className="fade-in duration-1000 ease-out transform transition-all text-5xl md:text-7xl font-extrabold text-white text-center px-4 ">
                        Contact Us
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 lg:h-[85vh] shadow-2xl rounded-xl p-8 md:p-16">
                    {isContact ? (
                        <>
                            <h2 className="fade-in duration-1500 ease-out transform transition-all text-4xl md:text-5xl font-extrabold mb-8 text-center ">
                                <input
                                    className="text-black text-center rounded-lg input-contact"
                                    value={isGetInTouch}
                                    onChange={(evt) => {
                                        setGetInTouch(evt.target.value)
                                    }}
                                />
                            </h2>
                            <p className="fade-in duration-2000 ease-out transform transition-all text-lg md:text-xl lg:mb-12 text-center">
                                <textarea
                                    className="text-center w-[90%] text-black rounded-lg input-contact"
                                    value={isIntro}
                                    onChange={(evt) => {
                                        setIntro(evt.target.value)
                                    }}
                                ></textarea>
                            </p>

                            {/* CoverFlowCarousel Component */}
                            
                            <div className=" mt-24 md:mt-32 lg:pt-[130px]">
                                {/* <CoverFlowCarousel items={isContact.items} /> */}
                                {
                                    !isPhoneScreen ? <div className="relative w-full max-w-5xl mx-auto">
                                        <div className="flex items-center justify-center space-x-0">
                                            {items.map((item, index) => {
                                                const isActive = index === currentIndex;
                                                const isPrev = index === (currentIndex === 0 ? items.length - 1 : currentIndex - 1);
                                                const isNext = index === (currentIndex === items.length - 1 ? 0 : currentIndex + 1);

                                                let cardClass = `absolute transition-transform duration-700 transform ease-in-out`;
                                                if (isActive) {
                                                    cardClass += " scale-110 z-30 shadow-2xl";
                                                } else if (isPrev) {
                                                    cardClass += " -translate-x-28 scale-95 z-20 opacity-70";
                                                } else if (isNext) {
                                                    cardClass += " translate-x-28 scale-95 z-20 opacity-70";
                                                } else {
                                                    cardClass += " scale-75 opacity-40 z-10";
                                                }

                                                return (
                                                    <div key={index} className={cardClass}>
                                                        <div className="w-[400px] h-[350px]   bg-gradient-to-b from-black to-gray-900 text-white rounded-xl overflow-hidden shadow-xl border border-gray-700">
                                                            <div className='text-white text-[20px] flex justify-end'>
                                                                <button 
                                                                    className='translate-x-[-20px] translate-y-[10px] rounded-full bg-gray-500 w-10 h-10'
                                                                    onClick={() => {
                                                                        haddleRemoveCard(index);
                                                                    }}
                                                                >X</button>
                                                            </div>
                                                            <div className="p-6 text-center flex flex-col justify-center h-full">
                                                                <img 
                                                                    src={item.image} 
                                                                    alt={item.title} 
                                                                    className="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full mb-4 object-cover shadow-inner border-4 border-gray-700" 
                                                                />
                                                                <input 
                                                                    className='text-black mb-2 rounded-md' 
                                                                    value={item.image}
                                                                    onChange={(evt) => {
                                                                        haddleChangeArrayItems(index, evt.target.value,"imgUrl");
                                                                    }}
                                                                />
                                                                <h3 className="text-xl md:text-2xl font-extrabold mb-2">
                                                                    <input 
                                                                        className='text-black mb-2 rounded-md text-center' 
                                                                        value={item.title}
                                                                        onChange={(evt) => {
                                                                            haddleChangeArrayItems(index, evt.target.value,"title");
                                                                        }}
                                                                    />
                                                                </h3>
                                                                <p className="text-gray-400 text-sm md:text-base">
                                                                    <textarea 
                                                                        className='text-black w-[95%] text-center' 
                                                                        value={item.description}
                                                                        onChange={(evt) => {
                                                                            haddleChangeArrayItems(index, evt.target.value,"desc");
                                                                        }}
                                                                    >
                                                                    </textarea>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center justify-between w-full px-4">
                                            <button
                                                onClick={handlePrev}
                                                className="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white p-3 md:p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
                                            >
                                                &#8249;
                                            </button>
                                            <button
                                                onClick={handleNext}
                                                className="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white p-3 md:p-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
                                            >
                                                &#8250;
                                            </button>
                                        </div>
                                        <div className="flex justify-center mt-8 space-x-4">
                                            {items.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${currentIndex === index ? 'bg-indigo-500' : 'bg-gray-500'
                                                        }`}
                                                    onClick={() => setCurrentIndex(index)}
                                                />
                                            ))}
                                        </div>
                                    </div> : <div className="">
                                        <div className="">
                                            {items.map((item, index) => {
                                                return (
                                                    <div key={index} className='mt-10  fade-in duration-1000 ease-out transform transition-all'>
                                                        <div className="bg-gradient-to-b from-black to-gray-900 text-white rounded-xl overflow-hidden shadow-xl border border-gray-700">
                                                            <div className="p-6 text-center flex flex-col justify-center h-full">
                                                                <img src={item.image} alt={item.title} className="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full mb-4 object-cover shadow-inner border-4 border-gray-700" />
                                                                <h3 className="text-xl md:text-2xl font-extrabold mb-2">{item.title}</h3>
                                                                <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                }
                                
                            </div>
                            
                        </>
                    ) : (
                        <p className="text-center text-white">Loading contact information...</p>
                    )}
                </div>
                <div className='text-white text-[30px] flex justify-center mt-10 '>
                    <button 
                        className='border-[1px] border-white w-[20%] rounded-md hover:bg-gray-600'
                        onClick={() => {
                            haddleAddingCard(); 
                        }}
                    >Adding Card</button>
                </div>
                <div className='text-white mt-[70px] text-[30px] flex justify-center'>
                    <button 
                        className='border-[1px] border-white w-[30%] rounded-md hover:bg-gray-600'
                        onClick={() => {
                            haddleUpdateCard();
                        }}
                    >Update</button>
                </div>
            </div>
            
        </div>
    );
};

export default AboutPage;
