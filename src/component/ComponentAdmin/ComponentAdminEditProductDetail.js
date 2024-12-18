import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ComponentHomeNavbar from '../ComponentHome/ComponentHomeNavbar';
import ComponentBottonBar from '../ComponentHome/ComponentBottonBar';
import ComponentProductDetailPopup from "../ComponentShop/ComponentProductDetailPopup";
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ComponentPopupLoadingCreateUpdate from './ComponentPopupLoadingCreateUpdate';
import 'ckeditor5/ckeditor5.css';

const ComponentAdminEditProductDetail = () => {

    const location = useLocation();
    const {
        title,
        images,
        rate,
        region,
        province,
        ord,
        intro,
        setPricePrice,
        content,
        static_id
    } = location.state || {};

    const listRegion = [
        {
            "reigon": "Northern",
            "data": [
                "All",
                "Chiang Mai",
                "Chiang Rai",
                "Lampang",
                "Lamphun",
                "Mae Hong Son",
                "Nan",
                "Phayao",
                "Phrae",
                "Uttaradit"
            ],
        },
        {
            "reigon": "Northeastern",
            "data": [
                "All",
                "Amnat Charoen",
                "Bueng Kan",
                "Buriram",
                "Chaiyaphum",
                "Kalasin",
                "Khon Kaen",
                "Loei",
                "Maha Sarakham",
                "Mukdahan",
                "Nakhon Phanom",
                "Nakhon Ratchasima",
                "Nong Bua Lamphu",
                "Nong Khai",
                "Roi Et",
                "Sakon Nakhon",
                "Si Sa Ket",
                "Surin",
                "Ubon Ratchathani",
                "Udon Thani",
                "Yasothon"
            ],
        },
        {
            "reigon": "Central",
            "data": [
                "All",
                "Ang Thong",
                "Ayutthaya",
                "Bangkok",
                "Chai Nat",
                "Lopburi",
                "Nakhon Nayok",
                "Nakhon Pathom",
                "Nonthaburi",
                "Pathum Thani",
                "Phetchabun",
                "Phra Nakhon Si Ayutthaya",
                "Phichit",
                "Phitsanulok",
                "Saraburi",
                "Sing Buri",
                "Suphan Buri",
                "Uthai Thani"
            ],
        },
        {
            "reigon": "Eastern",
            "data": [
                "All",
                "Chachoengsao",
                "Chanthaburi",
                "Chonburi",
                "Prachin Buri",
                "Rayong",
                "Sa Kaeo",
                "Trat"
            ],
        },
        {
            "reigon": "Western",
            "data": [
                "All",
                "Kanchanaburi",
                "Phetchaburi",
                "Prachuap Khiri Khan",
                "Ratchaburi",
                "Tak"
            ],
        },
        {
            "reigon": "Southern",
            "data": [
                "All",
                "Chumphon",
                "Krabi",
                "Nakhon Si Thammarat",
                "Narathiwat",
                "Pattani",
                "Phang Nga",
                "Phatthalung",
                "Phuket",
                "Ranong",
                "Satun",
                "Songkhla",
                "Surat Thani",
                "Trang",
                "Yala"
            ]
        },
    ];
    // console.log("region=> ",region)
    // console.log("province=> ",province)
    const [isTitle, setTitle] = useState(title);
    const [listLocation, setListLocation] = useState(listRegion);
    const [listProvince, setListProvince] = useState([]);
    const [isRegion, setRegion] = useState(region);
    const [isProvince, setProvince] = useState(province);

    // console.log(ord)
    const [isOrd, setOrd] = useState(ord);
    const [isRate, setRate] = useState(rate);
    // const [isIntro, setIntro] = useState(intro);

    const [isPrice, setPrice] = useState();
    const [isPerson, setPerson] = useState();
    const [isPricePerPerson, setPricePerPerson] = useState(setPricePrice);
    const [isDayContent, setDayContent] = useState();
    // const [isContent, setContent] = useState();

    const [isImageName, setImageName] = useState([]);
    const [isImageFiles, setImageFiles] = useState([]);
    const [isArrayImages, setArrayImages] = useState(images);
    const [imageFilesToPush, setImageFilesToPush] = useState([]);
    const [isDemoShowImages, setDemoShowImages] = useState([]);

    const [isPopup, setPopup] = useState(false);
    const [isArrayActivites, setArrayActivites] = useState(content);
    const [loading, setLoading] = useState(false);

    const editorContainerRef = useRef(null);
    const editorRef = useRef(null);
    const [isLayoutReady, setIsLayoutReady] = useState(false);
    const [editorData, setEditorData] = useState(''); // State to store editor content
    const [editorDataIntro, setEditorDataIntro] = useState(intro);
    const fileInputRef = useRef(null);


    const haddlePopup = () => {
        if (!isPopup) {
            setPopup(true)
        } else {
            setPopup(false)
        }
    }

    useEffect(() => {
        setIsLayoutReady(true);

        return () => setIsLayoutReady(false);
    }, []);

    const editorConfig = {
        toolbar: {
            items: ['undo', 'redo', '|', 'bold', 'italic', '|', 'link'],
            shouldNotGroupWhenFull: false,
        },
        // Add any additional plugins or configurations as needed
        initialData: '',
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://',
            decorators: {
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file',
                    },
                },
            },
        },
        placeholder: 'Type or paste your content here!',
    };

    const haddleEditorDataIntro = (evt, editor) => {
        const data = editor.getData();
        setEditorDataIntro(data);
    }

    // Handler for editor content changes
    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditorData(data);
    };

    const handleImageChange = (event) => {
        // Optionally clear previous selections
        setArrayImages([]);
        setImageFiles([]);
        setImageName([]);

        const files = Array.from(event.target.files);

        // Extract file names
        const arrayImageName = files.map((file) => file.name);

        // Create object URLs for image previews
        const newImages = files.map((file) => URL.createObjectURL(file));

        // Update state with new images, files, and names
        setArrayImages(newImages);
        setImageFiles(files);
        setImageName(arrayImageName);
    };

    const haddleAddingPricePerPerson = () => {
        const arrayPrice = {
            person: isPerson,
            price: isPrice
        }
        setPricePerPerson([...isPricePerPerson, arrayPrice])
        // console.log("isPricePerPerson => ", isPricePerPerson)
    }


    const haddleAddingContent = () => {
        if (isDayContent) {
            const arrayContent = {
                day: isDayContent,
                content: editorData,
                image: isArrayImages,
                imageName: isImageName
            };
            setImageFilesToPush([...imageFilesToPush, ...isImageFiles])
            setDemoShowImages([...isDemoShowImages, ...isArrayImages]);
            setArrayActivites([...isArrayActivites, arrayContent]);
            setDayContent('');
            // setContent('');
            setImageFiles([]);
            setArrayImages([]);
            setEditorData("");
        }
    }


    const haddleUpdateProduct = async () => {
        setLoading(true)
        const formData = new FormData();

        if (imageFilesToPush.length !== 0) {
            // Append other fields
            imageFilesToPush.forEach((file) => {
                formData.append("images", file);
            });
            formData.append("static_id", static_id)
            formData.append("title", isTitle.trim());
            formData.append("ord", String(isOrd));
            formData.append("rate", String(isRate));
            formData.append("intro", String(editorDataIntro));
            formData.append("pricePerPerson", JSON.stringify(isPricePerPerson));
            formData.append("activites", JSON.stringify(isArrayActivites));
            formData.append("region", isRegion)
            formData.append("province", isProvince)
            try {
                const statusCreate = await axios.post("https://backend-node-product-505177410747.asia-southeast1.run.app/api/update/product", formData, {
                    headers: {
                        // 'Content-Type': `multipart/form-data`
                    }
                });
                // console.log(statusCreate.data);
                if (statusCreate.status === 200) {
                    alert("Update successful!");
                    setLoading(false)
                    window.location.reload();
                    // navigate("/shop")
                } else {
                    setLoading(false)
                    alert(`Error ${statusCreate.status}`);

                }
            } catch (err) {
                console.log(err);
                setLoading(false)
                alert("An error occurred while update the product. : ", err);
            }
        } else {
            const payload = {
                static_id: static_id,
                title: isTitle.trim(),
                ord: Number(isOrd),
                rate: Number(isRate),
                intro: String(editorDataIntro),
                pricePerPerson: JSON.stringify(isPricePerPerson),
                activites: JSON.stringify(isArrayActivites),
                region: isRegion,
                province: isProvince
            }
            // console.log("payload => ",payload)
            try {
                const statusCreate = await axios.post("https://backend-node-product-505177410747.asia-southeast1.run.app/api/update/noimg/product", payload, {
                    headers: {
                        // 'Content-Type': `multipart/form-data`
                    }
                });
                // console.log(statusCreate.data);
                if (statusCreate.status === 200) {
                    alert("Update successful!");
                    // window.location.reload();
                    // navigate("/shop")
                } else {
                    alert(`Error ${statusCreate.status}`);

                }
            } catch (err) {
                console.log(err);
                // setImageFiles([]);
                alert("An error occurred while update the product. : ", err);
            }
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
            {
                loading? <ComponentPopupLoadingCreateUpdate/> :""
            }
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
                                                value={isRate.trim()}
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
                                                value={isOrd.trim()}
                                                onChange={((evt) => {
                                                    setOrd(evt.target.value)
                                                })}
                                            />
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div>
                                <h1 className="text-[20px] lg:text-[35px] mt-10  text-gray-800 ml-4">
                                    <span className='font-bold'>Region: </span>
                                    
                                    <select
                                        onChange={(e) => {
                                            setRegion(e.target.value)
                                            for (let i = 0; i < listLocation.length; i++) {
                                                if (listLocation[i]['reigon'] === e.target.value) {
                                                    setListProvince(listLocation[i]['data'])
                                                }
                                            }
                                        }}
                                        name="region"
                                        id="region"
                                        className="h-12 w-[220px] md:w-[300px] rounded-l-full px-4 text-gray-700"
                                        value={isRegion}
                                    >
                                        <option value="none">Select Region</option>
                                        {listLocation.map((el, idx) => (
                                            <option key={idx} value={el['reigon']}>{el['reigon']}</option>
                                        ))}
                                    </select>
                                    <span className='ml-5'>Default is: {isRegion}</span>
                                </h1>
                                <h1 className="text-[20px] lg:text-[35px] mt-10  text-gray-800 ml-4">
                                    <span className='font-bold'>Province: </span>
                                    <select
                                        onChange={(e) => setProvince(e.target.value)}
                                        name="province"
                                        id="province"
                                        className="h-12 w-[220px] md:w-[300px] rounded-l-full px-4 text-gray-700"
                                        value={isProvince}
                                    >
                                        <option value="none">Select Province</option>
                                        {listProvince.map((el, idx) => (
                                            <option key={idx} value={el}>{el}</option>
                                        ))}
                                    </select>
                                    <span className='ml-5'>Default is: {isProvince}</span>
                                </h1>
                            </div>
                            <div className="mt-[70px]">
                                <h2 className="text-[20px] lg:text-[35px] font-bold text-gray-800 flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#0a9396" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="#0a9396" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                    </svg>
                                    <span className="ml-4">Introduction</span>
                                </h2>
                                <div className="main-container">
                                        <div
                                            className="editor-container editor-container_classic-editor"
                                            ref={editorContainerRef}
                                        >
                                            <div className="editor-container__editor mt-10">
                                                <div ref={editorRef}>
                                                    {isLayoutReady && (
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            config={editorConfig}
                                                            data={editorDataIntro}
                                                            onChange={haddleEditorDataIntro}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                            <div key={idx} className="lg:w-[350px] bg-gray-50 border border-gray-300 rounded-lg p-4 flex justify-between items-center shadow-sm">
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

                                    <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm">
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
                                            <div >
                                                <div className="main-container">
                                                    <div
                                                    className="editor-container editor-container_classic-editor"
                                                    ref={editorContainerRef}
                                                    >
                                                    <div className="editor-container__editor">
                                                        <div ref={editorRef}>
                                                            {isLayoutReady && (
                                                                <CKEditor
                                                                    editor={ClassicEditor}
                                                                    config={editorConfig}
                                                                    data={editorData}
                                                                    onChange={handleEditorChange}
                                                                />
                                                            )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

                                                    {/* <p className="text-[20px] text-gray-600 mt-10">{el.content}</p> */}
                                                    <div
                                                    className="text-[20px] text-gray-600 mt-10"
                                                    
                                                    >
                                                        <div
                                                            className='content'
                                                            dangerouslySetInnerHTML={{ __html: el.content }}
                                                        >

                                                        </div>
                                                </div>
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