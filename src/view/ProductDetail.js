import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ComponentHomeNavbar from '../component/ComponentHome/ComponentHomeNavbar';
import ComponentBottonBar from '../component/ComponentHome/ComponentBottonBar';
import ComponentStarToprate from '../component/ComponentHome/ComponentStarToprate';
import ComponentProductDetailPopup from "../component/ComponentShop/ComponentProductDetailPopup";

const ProductDetail = () => {
    const [countImage, setCountImage] = useState();
    const [isPopup, setPopup] = useState(false);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get('title');
    const images = JSON.parse(searchParams.get("img"));
    const rate = searchParams.get("rate");
    const intro = searchParams.get("intro");
    const setPricePrice = searchParams.get("price");
    const setPriceJSON = JSON.parse(setPricePrice);
    const content = searchParams.get("content");
    const setContentJSON = JSON.parse(content);

    const haddlePopup = () => {
        if (!isPopup) {
            setPopup(true)
        } else {
            setPopup(false)
        }
    }

    useEffect(() => {
        setCountImage(images.length - 4);
    }, [])

    return (
        <>
            <div
                className="bg-cover bg-center h-full  w-[100%] bg-[rgb(250,250,250)] bg-gradient-to-tl from-[rgba(250,250,250,1)] to-[rgba(67,89,96,1)]"
                // style={{
                //     backgroundImage: `url(https://img.goodfon.com/original/2048x1128/b/40/bangkok-thailand-bangkok-tailand-gorod-krasota-noch.jpg)`,
                // }}
            >
                <div className="min-h-screen opacity-90">

                    <div className="top-0 font-bold text-[20px] bg-slate-800  text-white shadow-md pb-[65px]">
                        <div className='translate-y-[30px]'>
                            <ComponentHomeNavbar />
                        </div>
                    </div>

                    <div className="container mx-auto px-4 py-12">
                        {
                            isPopup ? <div className="fixed inset-0 shadow-xlrounded-xl bg-white z-10">
                                <div className='right-0  mr-10 absolute z-50 text-white text-[40px]'>
                                    <button
                                        onClick={() => {
                                            haddlePopup();
                                        }}
                                    >X</button>
                                </div>

                                <ComponentProductDetailPopup images={images} />
                            </div> : <div className=""></div>
                        }

                        <div className="mt-[30px]  grid grid-cols-2  gap-1">
                            <div className=''>
                                {
                                    images.map((el, idx) => {
                                        if (idx <= 1) {
                                            return (
                                                <div
                                                    onClick={() => {
                                                        haddlePopup();
                                                    }}
                                                    key={idx}
                                                    className="mb-1 h-[260px]  lg:h-[350px] overflow-hidden rounded-md lg:rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                                                >
                                                    <img
                                                        className="w-full h-full object-cover"
                                                        src={`${el}`}
                                                        alt={`Slide ${idx + 1}`}
                                                    />
                                                </div>
                                            )
                                        }

                                    })
                                }
                            </div>
                            <div className=''>
                                {
                                    images.map((el, idx) => {
                                        if (idx > 1 && idx < 4) {
                                            return (
                                                <div
                                                    onClick={() => {
                                                        haddlePopup();
                                                    }}
                                                    key={idx}
                                                    className="h-[172px] lg:h-[232px] mb-1 overflow-hidden rounded-md lg:rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                                                >
                                                    <img
                                                        className="w-full h-full object-cover"
                                                        src={`${el}`}
                                                        alt={`Slide ${idx + 1}`}
                                                    />
                                                </div>
                                            )
                                        } else if (idx === 4) {
                                            return (
                                                <div
                                                    onClick={() => {
                                                        haddlePopup();
                                                    }}
                                                    key={idx}
                                                    className="h-[172px] lg:h-[232px] mb-1 overflow-hidden rounded-md lg:rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl "
                                                >
                                                    <div className='h-[172px] lg:h-[232px] mb-1 absolute inset-0 m-auto w-24 text-white z-50  flex items-center justify-center text-[30px] lg:text-[60px] font-bold'>+{countImage}</div>
                                                    <img
                                                        className="w-full h-full object-cover opacity-70"
                                                        src={`${el}`}
                                                        alt={`Slide ${idx + 1}`}
                                                    />
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                                    
                        <div className="mt-12 on-set-detail-bg-product rounded-lg shadow-lg p-8 md:p-12 ">
                             {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
                            <div className="mb-8">
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#0a9396" className="w-8 h-8 lg:w-[50px] lg:h-[50px]" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                                        </svg>
                                        <h1 className="text-[20px] lg:text-[35px] font-extrabold text-gray-800 ml-4">{title}</h1>
                                    </div>
                                    <div>
                                        <ComponentStarToprate star={rate} />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-[70px]">
                                <h2 className="text-[20px] lg:text-[35px] font-bold text-gray-800 flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0a9396" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#0a9396" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                    </svg>
                                    <span className="ml-4">Introduction</span>
                                </h2>
                                <p className="text-[25px] text-gray-600 leading-relaxed">{intro}</p>
                            </div>
                            <div className="mt-10">
                                <h2 className="text-[20px] lg:text-[35px] font-bold text-gray-800 flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0a9396" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
                                        <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                                    </svg>
                                    <span className="ml-4">Prices</span>
                                </h2>
                                <div className="space-y-6 lg:w-[350px]">
                                    {setPriceJSON.map((el, idx) => (
                                        <div key={idx} className="bg-gray-50 border border-gray-300 rounded-lg p-4 flex justify-between items-center shadow-sm">
                                            <span className="text-gray-700 font-medium lg:text-[20px]">Persons: {el.person}</span>
                                            <span className="text-gray-900 font-semibold lg:text-[20px]">฿{el.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-10">
                                <h2 className="text-[20px] lg:text-[35px] font-bold text-gray-800 flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0a9396" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
                                        <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                                    </svg>
                                    <span className="ml-4">Activities</span>
                                </h2>
                                <div className="space-y-6">
                                    {setContentJSON.map((el, idx) => (
                                        <div key={idx} className="bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm">
                                            <h3 className="text-[25px] font-semibold text-gray-800">DAY {el.day}</h3>
                                            <img className='mt-5 object-fill rounded-lg w-[260px] h-[150px] lg:w-[550px] lg:h-[310px]' src={el.image} />
                                            <p className="text-[20px] text-gray-600 mt-10">{el.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ComponentBottonBar />
                </div>
            </div>
        </>

    );
}

export default ProductDetail
