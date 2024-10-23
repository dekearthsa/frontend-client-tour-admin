import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ComponentFindBar = () => {

    const demoDataListRegion = [
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

    const [isMangeTitleRegion, setMangeTitleRegion] = useState("Adding province");
    const [isListRegion, setListRegion] = useState([]);
    const [isRegion, setRegion] = useState([]);
    const [isProvince, setProvince] = useState("");
    const [isPopup, setPopup] = useState(false);
    const [isAddingRegion, setAddingRegion] = useState();
    const [isAddingProvince, setAddingProvince] = useState();



    const navigate = useNavigate();


    const haddlePopupNewProvince = () => {
        if (isPopup) {
            setPopup(false)
        } else {
            setPopup(true)
        }
    }

    const haddleCreateRegionAndProvince = async () => {

        const payload = {
            region: isAddingRegion,
            province: isAddingProvince
        }

        try{
            const updateStatus = await axios.post("http://localhost:8888/create/province",payload)
            if(updateStatus.status === 200){
                alert("Create province success!")
            }else{
                alert(`Error ${updateStatus.status}`)
            }
        }catch(err){
            alert(err)
        }
    }


    const haddleChangeMenuTitleAdding = (menu) => {
        
        if (isMangeTitleRegion === "Adding province") {
            setMangeTitleRegion(menu)
        } else if (isMangeTitleRegion === "Update province") {
            setMangeTitleRegion(menu)
        } else if (isMangeTitleRegion === "Remove province") {
            setMangeTitleRegion(menu)
        }
    }

    const handleButtonClick = () => {
        // const listRegion = await axios.get("")
        if (isProvince !== "none") {
            const listRegion = demoDataListRegion;
            let isRegion;
            for (let i = 0; i < listRegion.length; i++) {
                for (let j = 0; j < listRegion[i].data.length; j++) {
                    if (listRegion[i].data[j] === isProvince) {
                        isRegion = listRegion[i].reigon
                    }
                }
            }
            // console.log(isProvince, isRegion)
            navigate('/shop', {
                state: {
                    locationStateProvince: isProvince,
                    locationStateRegion: isRegion
                }
            });
        }

    };



    const funcFetchListRegion = async () => {
        let listProvince = [];
        for (let i = 0; i < demoDataListRegion.length; i++) {
            for (let j = 0; j < demoDataListRegion[i].data.length; j++) {
                if (demoDataListRegion[i].data[j] !== "All") {
                    listProvince.push(demoDataListRegion[i].data[j])
                }
            }
        }
        setListRegion(demoDataListRegion);
        setRegion(listProvince);
    }

    const funcInit = async () => {
        await funcFetchListRegion();
    }

    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-ins');
        fadeElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.remove('opacity-0', 'translate-y-10');
                el.classList.add('opacity-100', 'translate-y-0');
            }, index * 200); // Faster cascading effect for a luxurious feel
        });
        funcInit();
    }, []);
    return (

        <div className="p-4 md:mr-[20%] mt-[8%]">
            {
                isPopup ?
                    <div className='fixed top-0 left-0 w-[50%] h-[65vh] z-[999] bg-white rounded-md translate-x-[500px] translate-y-[200px] shadow-lg'>
                        <div className='flex justify-end mr-5 mt-4'>
                            <button
                                onClick={haddlePopupNewProvince}
                            >X</button>
                        </div>
                        <div className='title-c text-center mt-5 mb-5 text-[20px] font-bold'>{isMangeTitleRegion}</div>
                        <div className='border-[1px] border-gray-600 w-[98%] m-auto h-[660px] rounded-lg'>
                            <div className='h-[40px] border-b-[1px] border-black grid grid-cols-3'>
                                <div className='border-r-[1px] border-black text-center'>
                                    <button
                                        className='text-center  rounded-tl-lg bg-blue-400 text-white font-bold w-[100%] h-[100%]'
                                        onClick={() => {
                                            haddleChangeMenuTitleAdding("Adding province")
                                        }}
                                    >Adding</button>
                                </div>
                                <div className='border-r-[1px] border-black'>
                                    <button
                                        className='text-center  w-[100%] h-[100%] bg-yellow-400 text-white font-bold'
                                        onClick={() => {
                                            haddleChangeMenuTitleAdding("Update province")
                                        }}
                                    >Update</button>
                                </div>
                                <div>
                                    <button
                                        className='text-center  w-[100%] h-[100%] rounded-tr-lg bg-red-400 text-white font-bold'
                                        onClick={() => {
                                            haddleChangeMenuTitleAdding("Remove province")
                                        }}
                                    >Remove</button>
                                </div>
                            </div>
                            <div className='mt-[50px] text-center'>
                                {
                                    isMangeTitleRegion === "Adding province" ?
                                        <div className='grid grid-cols-2'>
                                            <label className='text-[20px] font-bold'>Region name</label>
                                            <input
                                                className='ml-5 border-[1px] border-black w-[250px] h-[50px] rounded-lg'
                                                onChange={(evt) => {
                                                    setAddingRegion(evt.target.value)
                                                }}
                                            />
                                        </div>
                                        : ""
                                }
                                {
                                    isMangeTitleRegion === "Adding province" && (isAddingRegion) ?

                                        <div className='mt-5 grid grid-cols-2'>
                                            <label className='text-[20px] font-bold'>Province name</label>
                                            <input
                                                className='ml-5 border-[1px] border-black  w-[250px] h-[50px] rounded-lg'
                                                onChange={(evt) => {
                                                    setAddingProvince(evt.target.value)
                                                }}
                                            />
                                        </div>
                                        : ""
                                }
                                {
                                    isMangeTitleRegion === "Adding province" && (isAddingProvince) ?
                                        <div className='flex justify-center mt-[100px]'>
                                            <  button 
                                                className='bg-gray-500 text-white w-[100px] pt-1 pb-1 rounded-md font-bold shadow-lg'
                                                onClick={()=> {
                                                    haddleCreateRegionAndProvince()
                                                }}
                                            >ADD</button>
                                        </div>
                                        : ""
                                }

                                {
                                    isMangeTitleRegion === "Update province" ?
                                        <div>
                                            {
                                                isListRegion.map((el, idx) => {
                                                    return (
                                                        <div className='set-grid-find-bar mt-2'>
                                                            <div>
                                                                <label className='text-[20px] font-bold'>Region</label>
                                                                <input
                                                                    className='border-[1px] border-black h-[40px] ml-3'
                                                                    value={el.reigon}
                                                                    onChange={(evt) => {
                                                                        setListRegion()
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className='text-[20px] font-bold'>Province</label>
                                                                <input
                                                                    className='border-[1px] border-black w-[80%] h-[40px] ml-3'
                                                                    value={el.data}
                                                                    onChange={() => {
                                                                        
                                                                    }}
                                                                />
                                                            </div>

                                                        </div>
                                                    )

                                                })
                                            }
                                            <div className='flex justify-center'>
                                                < button 
                                                    className='mt-8 bg-gray-500 text-white w-[100px] pt-1 pb-1 rounded-md font-bold shadow-lg'
                                                    onClick={() => {

                                                    }}
                                                >UPDATE</button>
                                            </div>
                                        </div>
                                        : ""
                                }

                                {
                                    isMangeTitleRegion === "Remove province" ?
                                        <div className='overflow-y-auto h-[500px] w-[99%]'>
                                            <table className='table-container'>
                                                <thead >
                                                    <tr>
                                                        <th>Region</th>
                                                        <th>Province</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                            {
                                                isListRegion.map((el, idx) => {
                                                    return (
                                                        <tbody>
                                                            <tr>
                                                                <td>{el.reigon}</td>
                                                                <td>{el.data}</td>
                                                                <td>
                                                                    <button className='bg-red-400 text-white p-2 rounded-lg'>Remove</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )

                                                })
                                            }
                                            </table>
                                        </div>
                                        : ""
                                }
                            </div>
                        </div>
                    </div> : ""
            }
            <div className="text-center lg:translate-y-[-50px] md:text-right">
                <h1 className="font-bold text-white text-[24px] lg:text-4xl leading-tight  opacity-0 translate-y-10 fade-ins duration-1000 ease-out transform transition-all">
                    Explore Thailand With Us!
                </h1>
                <div className="flex justify-center md:justify-end mt-6 fade-ins opacity-0 translate-y-10 duration-1000 ease-out transform transition-all">
                    <select
                        onChange={(e) => setProvince(e.target.value)}
                        name="region"
                        id="region"
                        className="h-12 w-[220px] md:w-[300px] rounded-l-full px-4 text-gray-700"
                    >
                        <option value="none">Select Province</option>
                        {isRegion.map((el, idx) => (
                            <option key={idx} value={el}>{el}</option>
                        ))}
                    </select>
                    <button
                        onClick={handleButtonClick}
                        className="h-12 w-[100px] rounded-r-full bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors duration-300"
                    >
                        Find
                    </button>
                    {/* <button
                        className='w-[50px] h-[50px] rounded-full bg-gray-600 ml-5 font-bold text-white shadow-lg'
                        onClick={haddlePopupNewProvince}
                    >
                        ADD
                    </button> */}
                </div>
                <p className="mt-6 text-white font-bold fade-ins opacity-0 translate-y-10 duration-1000 ease-out transform transition-all">
                    Discover Thailand's hotspots and hidden gems with local experts.
                </p>
            </div>
        </div>
    );
}

export default ComponentFindBar