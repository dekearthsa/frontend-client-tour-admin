import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import ComponentStarToprate from "./ComponentStarToprate"
import axios from "axios"



const ComponentPopularFeature =   () => {
    const [dataPop,  setDataPop] = useState([]);
    const [isPopData, setIsPopData] = useState([]);
    const demoPop = [
        {
            images: '["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test1",
            region: "Northern",
            ord: 5,
            rate: 5,
            intro: "1111",
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images:'["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test2",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images:'["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test3",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images:'["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test4",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images:'["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test5",
            region: "Northern",
            intro: "22222",
            ord: 5,
            rate: 5,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
        {
            images:'["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg","https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg", "https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]',
            title: "test6",
            region: "Northern",
            intro: "22222",
            ord: 4,
            rate: 4,
            pricePerPerson: '[{"person": 1, "price": 1000}, {"person": 2, "price": 2000}]',
            content: '[{"day":1, "content":"aaaaa", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":2, "content":"bbbbb", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]},{"day":3, "content":"Cccccc", "image":["https://as1.ftcdn.net/v2/jpg/03/30/56/26/1000_F_330562667_q3zqwfRQQGbzZNZ0XKDrxuBNRDfyhnNO.jpg"]}]'
        },
    ]

    const funcRandomPopular = async (data) => {
        const lengthData = data.length;
        const setDataPop = [];
        const dupIdx = [];
        try {
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
        } catch (err) {
            return setDataPop;
        }
    };

    const haddleGetDataPopular = async () => {
        let arrayPopular = []
        const fetchProduct = await axios.get("https://backend-node-product-505177410747.asia-southeast1.run.app/api/get/product")
        for(let i = 0; i < fetchProduct.data.length; i++){
            if(fetchProduct.data[i].ord === 5){
                arrayPopular.push(fetchProduct.data[i])
                if(i === 4){
                    break
                }
            }
        }
        setIsPopData(arrayPopular);
    };

    useEffect(() => {
        haddleGetDataPopular();
    }, []);

    return (
        <div className="max-[100%] mx-auto mt-12 ">
            <div className="text-center">
                <div className="text-gray-500 text-lg">Feature</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Popular Destinations</h2>
            </div>
            <div className="lg:flex lg:justify-center  mt-10">
                {isPopData.map((el, idx) => (
                    <div key={idx} className="group w-[85%] m-auto lg:w-[450px]  lg:ml-5 lg:mr-5">
                        <Link
                            to={{
                                pathname: `product/:${el.title}`,
                                search: `?region=${encodeURIComponent(el.region)}
                                    &title=${encodeURIComponent(el.title)}
                                    &intro=${encodeURIComponent(el.intro)}
                                    &price=${encodeURIComponent(el.pricePerPerson)}
                                    &img=${encodeURIComponent(el.images)}
                                    &content=${encodeURIComponent(el.content)}
                                    &rate=${encodeURIComponent(el.rate)}`
                            }}
                        >
                            <div className="relative overflow-hidden bg-white rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    className="h-64 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    src={JSON.parse(el.images)[0]}
                                    alt={el.title}
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800 truncate">{el.title}</h3>
                                    <p className="text-gray-500 mt-2">{el.intro}</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-lg font-bold text-indigo-600">From ฿{JSON.parse(el.pricePerPerson)[0].price}</span>
                                        <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">{el.rate} ★</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ComponentPopularFeature