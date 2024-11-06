import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import ComponentHomeNavbar from '../ComponentHome/ComponentHomeNavbar';
import ComponentBottonBar from '../ComponentHome/ComponentBottonBar';
import ComponentProductDetailPopup from "../ComponentShop/ComponentProductDetailPopup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const  ComponentAdminEditProductDetail = () => {

    const location = useLocation();
    const { 
        title, 
        images,
        rate,
        ord,
        intro,
        setPricePrice,
        content
    } = location.state || {};

    const navigate = useNavigate();
    
    const [isTitle, setTitle] = useState(title);
    // const [isRegion, setRegion] = useState();
    // const [isProvince, setProvince] = useState();

    const [isOrd, setOrd] = useState(ord);
    const [isRate, setRate] = useState(rate);
    const [isIntro, setIntro] = useState(intro);

    const [isPrice, setPrice] = useState();
    const [isPerson,setPerson] = useState();
    const [isPricePerPerson, setPricePerPerson] = useState(setPricePrice);
    const [isDayContent, setDayContent] = useState();
    const [isContent, setContent] = useState();

    const [isImageName, setImageName] = useState([]);
    const [isImageFiles, setImageFiles] = useState([]);
    const [isArrayImages, setArrayImages] = useState(images);
    const [imageFilesToPush, setImageFilesToPush] = useState([]);
    const [isDemoShowImages, setDemoShowImages] = useState([]);

    const [isPopup, setPopup] = useState(false);
    const [isArrayActivites, setArrayActivites] = useState(content);
    

    
    // console.log("content => ", isArrayActivites)

    const haddlePopup = () => {
        if (!isPopup) {
            setPopup(true)
        } else {
            setPopup(false)
        }
    }

    const handleImageChange = (event) => {
        setArrayImages([]);
        setImageFiles([]);
        setImageName([]);
        const files = Array.from(event.target.files);
        // console.log("Selected files:", files); // Debugging
        let arrayImageName = [];
        files.forEach((file) => {
            arrayImageName.push(file.name)
        });

        const newImages = files.map((file) => URL.createObjectURL(file));
        setArrayImages((prevImages) => [...prevImages, ...newImages]);
        setImageFiles((prevFiles) => [...prevFiles, ...files]);
        setImageName((prevName) => [...prevName, ...arrayImageName])
    };

    const haddleAddingPricePerPerson = () => {
        const arrayPrice = {
                person: isPerson,
                price: isPrice}
        setPricePerPerson([...isPricePerPerson, arrayPrice])
        // console.log("isPricePerPerson => ", isPricePerPerson)
    }


    const haddleAddingContent = () => {
        if (isDayContent && isContent && isArrayImages.length > 0) {
            const arrayContent = {
                day: isDayContent,
                content: isContent,
                image: isArrayImages,
                imageName: isImageName
            };
            setImageFilesToPush([...imageFilesToPush , ...isImageFiles])
            setDemoShowImages([...isDemoShowImages, ...isArrayImages]);
            setArrayActivites([...isArrayActivites, arrayContent]);
            setDayContent('');
            setContent('');
            setImageFiles([]);
            setArrayImages([]);
        }
    }


    const haddleUpdateProduct = async () => {
        console.log("imageFilesToPush => ", imageFilesToPush)
        console.log("title => ", isTitle)
        console.log("ord => ", isOrd)
        console.log("rate => ", isIntro)
        console.log("pricePerPerson => ", isPricePerPerson)
        console.log("activites => ", isArrayActivites)
        const formData = new FormData();
        

        // Append other fields
        imageFilesToPush.forEach((file) => {
            formData.append("images", file);
        });
        // formData.append("images", isImageFiles)
        formData.append("title", isTitle || '');
        // formData.append("region", isRegion || '');
        // formData.append("province", isProvince || '');
        formData.append("ord", String(isOrd || 0));
        formData.append("rate", String(isRate || 0));
        formData.append("intro", String(isIntro || ''));
        formData.append("pricePerPerson", JSON.stringify(isPricePerPerson));
        formData.append("activites", JSON.stringify(isArrayActivites));


        try {
            const statusCreate = await axios.post("https://backend-node-product-505177410747.asia-southeast1.run.app/api/update/product", formData, {
                headers: {
                    // 'Content-Type': `multipart/form-data`
                }
            });
            console.log(statusCreate.data);
            if (statusCreate.status === 200) {
                alert("Create successful!");
                navigate("/shop")
                // Reset the form
                // setImageFiles([]);
                // setImageFilesToPush([]);
                // setTitle('');
                // setRegion('');
                // setProvince('');
                // setOrd('');
                // setRate('');
                // setIntro('');
                // setPrice('');
                // setPricePerPerson([]);
                // setArrayActivites([]);
                // setDemoShowImages([]);
                // window.location("/")
            } else {
                // setImageFiles([]);
                // setImageFilesToPush([]);
                // setTitle('');
                // setRegion('');
                // setProvince('');
                // setOrd('');
                // setRate('');
                // setIntro('');
                // setPrice('');
                // setPricePerPerson([]);
                // setArrayActivites([]);
                // setDemoShowImages([]);
                alert(`Error ${statusCreate.status}`);
                
            }
        } catch (err) {
            console.log(err);
            // setImageFiles([]);
            alert("An error occurred while creating the product.");
        }
    }



    const haddleRemovePrice = (idx) => {
        let newArray = [...isPricePerPerson];
        newArray.splice(idx, 1);
        setPricePerPerson(newArray);
    }

    const haddleRemoveActivites = (idx) => {
        let newArray = [...isArrayActivites];
        newArray.splice(idx, 1);
        setArrayActivites(newArray);
    }


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
                    
                    <div className="container mx-auto px-4 py-12 ">
                        
                        {
                            isPopup ? <div className="fixed inset-0 shadow-xlrounded-xl bg-white z-10">
                                <div className='right-0  mr-10 absolute z-50 text-white text-[40px]'>
                                    <button
                                        onClick={() => {
                                            haddlePopup();
                                        }}
                                    >X</button>
                                </div>

                                <ComponentProductDetailPopup images={isDemoShowImages} />
                            </div> : <div className=""></div>
                        }

                        <div className="mt-[30px]  grid grid-cols-2  gap-1">
                            
                            <div className=''>
                                {
                                    isDemoShowImages.map((el, idx) => {
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
                                    isDemoShowImages.map((el, idx) => {
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
                                                    <div className='h-[172px] lg:h-[232px] mb-1 absolute inset-0 m-auto w-24 text-white z-50  flex items-center justify-center text-[30px] lg:text-[60px] font-bold'></div>
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
                            <div className='text-center text-4xl font-bold text-gray-700 mb-[100px]'>Update product</div>

                            <div className="mb-8">
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#0a9396" className="w-8 h-8 lg:w-[50px] lg:h-[50px]" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                                        </svg>
                                        <h1 className="text-[20px] lg:text-[35px]   text-gray-800 ml-4">
                                            <span className='font-bold'>Title: </span>
                                            <input
                                                value={isTitle}
                                                className='placeholder:text-[20px] placeholder:translate-y-[-5px] placeholder:translate-x-[15px] rounded-md  border-b-[1px] border-gray-500 '
                                                placeholder='Product title..'
                                                onChange={((evt) => {
                                                    setTitle(evt.target.value)
                                                })}
                                            />
                                        </h1>
                                    </div>
                                    <div>
                                        <div className='grid grid-cols-2'>
                                            <h1 className='font-bold text-[20px] mr-5 translate-y-3'>Popular rate</h1>
                                            <input
                                                className='w-[80px] rounded-md text-center border-b-[1px] border-gray-500 text-lg font-bold translate-y-3'
                                                type='number'
                                                min='0'
                                                max='5'
                                                value={isRate}
                                                onChange={((evt) => {
                                                    setRate(evt.target.value)
                                                })}
                                            />
                                        </div>
                                        <div className='grid grid-cols-2 mt-10'>
                                            <h1 className='font-bold text-[20px] mr-5 translate-y-3'>Ordial num rate</h1>
                                            <input
                                                className='w-[80px] rounded-md text-center border-b-[1px] border-gray-500 text-lg font-bold  translate-y-3'
                                                type='number'
                                                min='0'
                                                max='5'
                                                value={isOrd}
                                                onChange={((evt) => {
                                                    setOrd(evt.target.value)
                                                })}
                                            />
                                        </div>
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
                                <p className="text-[25px] text-gray-600 leading-relaxed">
                                    <textarea 
                                        value={isIntro}
                                        className='h-[500px] w-[100%] border-[1px] border-gray-600 rounded-md'
                                        onChange={((evt) => {
                                            setIntro(evt.target.value)
                                        })}
                                    ></textarea>
                                </p>
                            </div>
                            <div className="mt-10">
                                <h2 className="text-[20px] lg:text-[35px] font-bold text-gray-800 flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0a9396" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
                                        <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                                    </svg>
                                    <span className="ml-4">Prices</span>
                                </h2>
                                <div className="space-y-6 ">
                                    <div className="lg:w-[650px] bg-gray-50 border border-gray-300 rounded-lg p-4 flex justify-between items-center shadow-sm">
                                        <span className='font-bold'>Person</span>
                                        <span>
                                            <input
                                                className='border-b-[1px] border-gray-700'
                                                placeholder='Number Person'
                                                type="number"
                                                value={isPerson}
                                                onChange={((evt) => {
                                                    setPerson(evt.target.value)
                                                })}
                                            />
                                        </span>
                                        <span className='font-bold'>Price</span>
                                        <span>
                                            <input
                                                className='border-b-[1px] border-gray-700'
                                                placeholder='Amount price'
                                                type="number"
                                                value={isPrice}
                                                onChange={((evt) => {
                                                    setPrice(evt.target.value)
                                                })}
                                            />
                                        </span>
                                        <button 
                                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                                            onClick={haddleAddingPricePerPerson}
                                            >add</button>
                                    </div>
                                    {
                                        isPricePerPerson.map((el, idx) => (
                                            <div key={idx} className= "lg:w-[350px] bg-gray-50 border border-gray-300 rounded-lg p-4 flex justify-between items-center shadow-sm">
                                                {/* {el} */}
                                                <span className='font-bold'>Person {el.person}</span>
                                                <span className='font-bold'>Price ฿{el.price}</span>
                                                <span>
                                                    <button 
                                                        className='text-white font-bold text-xl bg-red-500 hover:bg-red-700 w-10 h-10 rounded-full'
                                                        onClick={() => haddleRemovePrice(idx)}
                                                    >-</button>
                                                </span>
                                            </div>
                                        ))
                                    }
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
                                    
                                    <div  className="bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm">
                                        <div className='flex'>
                                            <h3 className='text-xl font-bold mr-3'>Day</h3>
                                            <input
                                                className='border-b-[1px] border-gray-700 w-[100px] placeholder:text-center'
                                                type='number'
                                                placeholder='Day'
                                                min='1'
                                                onChange={((evt) => {
                                                    setDayContent(evt.target.value)
                                                })}
                                            />
                                        </div>
                                        <div className='a-c-img flex mt-10'>
                                            <h3 className='font-bold text-xl'>Image file</h3>
                                            <input
                                                multiple
                                                className='ml-3'
                                                type='file'
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                        <div className='mt-10'>
                                            <div className='font-bold text-xl'>Content</div>
                                            <textarea  
                                                className='h-[500px] w-[100%] border-[1px] border-gray-600 rounded-md'
                                                onChange={((evt) => {
                                                    setContent(evt.target.value)
                                                })}
                                            >
                                            </textarea>
                                        </div>
                                        <div className='mt-5 mb-5 flex justify-end'>   
                                            <button 
                                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                                                onClick={haddleAddingContent}
                                                >Add activities</button>
                                        </div>
                                        {
                                            
                                        isArrayActivites.map((el, idx) => (
                                        <div key={idx} className="bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm mt-10">
                                            <div className='flex justify-between'>
                                                <h3 className="text-[25px] font-semibold text-gray-800">DAY {el.day}</h3>
                                                <button 
                                                    className='text-white font-bold text-xl bg-red-500 hover:bg-red-700 w-10 h-10 rounded-full'
                                                    onClick={() => {
                                                        haddleRemoveActivites(idx);
                                                    }}
                                                >-</button>
                                            </div>
                                            <div className='grid grid-cols-2'>
                                                {
                                                    el.image.map((img, idx) => (
                                                        <img 
                                                            key={idx}
                                                            className='mt-5 object-fill rounded-lg w-[260px] h-[150px] lg:w-[550px] lg:h-[310px]' 
                                                            src={img} 
                                                        />
                                                    ))
                                                }
                                            </div>
                                            
                                            <p className="text-[20px] text-gray-600 mt-10">{el.content}</p>
                                        </div>
                                        ))
                                    }
                                    </div>
                                </div>
                                <div className='text-center mt-10 mb-10'>
                                    <button 
                                        onClick={haddleUpdateProduct}
                                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                                    >Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ComponentBottonBar />
                </div>
            </div>
        </>
    )
}

export default ComponentAdminEditProductDetail