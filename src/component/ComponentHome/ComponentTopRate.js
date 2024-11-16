import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  ComponentCardLoading  from '../ComponentAnimationLoading/ComponentCardLoading';

// import axios from "axios"
// import ComponentStarToprate from "./ComponentStarToprate";

const ComponentTopRate = () => {
    // const [dataPop,  setDataPop] = useState([]);
    const [isPopData, setIsPopData] = useState([]);
    const [loading, setLoading] = useState(true);


    const funcRandomPopular = (data) => {
        const lengthData = data.length;
        const dupIdx = [];
        const setDataPop = [];

        for (let i = 0; i < 4; i++) {
            while (true) {
                const rndIdx = Math.floor(Math.random() * lengthData);
                if (!dupIdx.includes(rndIdx)) {
                    dupIdx.push(rndIdx);
                    setDataPop.push(data[rndIdx]);
                    break;
                }
            }
        }
        return setDataPop;
    };

    const haddleGetDataPopular = async () => {
        let arrayPopular = []
        const fetchProduct = await axios.get("https://backend-node-product-505177410747.asia-southeast1.run.app/api/get/product");
        for(let i = 0; i < fetchProduct.data.length; i++){
            if(fetchProduct.data[i].ord === 5){
                if(i > 4){
                    break
                }
                arrayPopular.push(fetchProduct.data[i])
            }
        }
        setLoading(false)
        setIsPopData(arrayPopular);
    };

    useEffect(() => {
        haddleGetDataPopular();
    }, []);

    return (
        <div className="p-6 md:p-10 lg:p-16 w-[95%] md:w-[90%] m-auto">
            <div className="text-gray-600 text-[18px] md:text-[20px] font-medium">Special Offers</div>
            <div className="text-[28px] md:text-[36px] font-bold text-gray-800 mb-8">Top Rated Tours</div>
            {
                loading === true? <ComponentCardLoading/> : ""
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                
                {isPopData.map((el, idx) => (
                    <Link
                        key={idx}
                        to={{
                            pathname: `product/:${el.title}`,
                            search: `?region=${encodeURIComponent(el.region)}
                                    &province=${encodeURIComponent(el.province)}
                                    &title=${encodeURIComponent(el.title)}
                                    &intro=${encodeURIComponent(el.intro)}
                                    &price=${encodeURIComponent(el.pricePerPerson)}
                                    &img=${encodeURIComponent(el.images)}
                                    &content=${encodeURIComponent(el.content)}
                                    &rate=${encodeURIComponent(el.rate)}
                                    &ord=${encodeURIComponent(el.ord)}
                                    &static_id=${encodeURIComponent(el.static_id)}
                                    `
                        }}
                        className="group"
                    >
                        <div className="relative overflow-hidden rounded-3xl shadow-lg transform transition-transform duration-500 hover:scale-105 bg-gradient-to-r from-gray-100 to-gray-200">
                            <img
                                className="w-full h-[200px] md:h-[250px] object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
                                src={JSON.parse(el.images)[0]}
                                alt={el.title}
                            />
                            <div className="p-6 text-gray-800">
                                <div className="flex justify-start mb-2 text-yellow-500">
                                    {[...Array(el.rate)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </div>
                                <h3 className="text-[22px] md:text-[24px] font-bold mb-1">{el.title}</h3>
                                <p className="text-gray-600 text-[14px] md:text-[16px] mb-4">{el.intro.slice(0,33)}...</p>
                                <p className="text-gray-500 text-[16px]">Starting from:</p>
                                <p className="text-gray-800 text-[24px] font-bold">฿{JSON.parse(el.pricePerPerson)[0]['price']}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ComponentTopRate