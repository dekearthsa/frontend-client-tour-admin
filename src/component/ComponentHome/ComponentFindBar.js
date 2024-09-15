import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ComponentFindBar = () => {

    const demoDataListRegion = [
        {
            "reigon": "Northern",
            "data": [
                "All",
                "Chiang_Mai",
                "Chiang_Rai",
                "Lampang",
                "Lamphun",
                "Mae_Hong_Son",
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
                "Amnat_Charoen",
                "Bueng_Kan",
                "Buriram",
                "Chaiyaphum",
                "Kalasin",
                "Khon_Kaen",
                "Loei",
                "Maha_Sarakham",
                "Mukdahan",
                "Nakhon_Phanom",
                "Nakhon_Ratchasima",
                "Nong_Bua_Lamphu",
                "Nong_Khai",
                "Roi_Et",
                "Sakon_Nakhon",
                "Si_Sa_Ket",
                "Surin",
                "Ubon_Ratchathani",
                "Udon_Thani",
                "Yasothon"
            ],
        },
        {
            "reigon": "Central",
            "data": [
                "All",
                "Ang_Thong",
                "Ayutthaya",
                "Bangkok",
                "Chai_Nat",
                "Lopburi",
                "Nakhon_Nayok",
                "Nakhon_Pathom",
                "Nonthaburi",
                "Pathum_Thani",
                "Phetchabun",
                "Phra_Nakhon_Si_Ayutthaya",
                "Phichit",
                "Phitsanulok",
                "Saraburi",
                "Sing_Buri",
                "Suphan_Buri",
                "Uthai_Thani"
            ],
        },
        {
            "reigon": "Eastern",
            "data": [
                "All",
                "Chachoengsao",
                "Chanthaburi",
                "Chonburi",
                "Prachin_Buri",
                "Rayong",
                "Sa_Kaeo",
                "Trat"
            ],
        },
        {
            "reigon": "Western",
            "data": [
                "All",
                "Kanchanaburi",
                "Phetchaburi",
                "Prachuap_Khiri_Khan",
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
                "Nakhon_Si_Thammarat",
                "Narathiwat",
                "Pattani",
                "Phang_Nga",
                "Phatthalung",
                "Phuket",
                "Ranong",
                "Satun",
                "Songkhla",
                "Surat_Thani",
                "Trang",
                "Yala"
            ]
        },
    ];

    const [isRegion, setRegion] = useState([]);
    const [isProvince, setProvince] = useState("");
    const [isPopup, setPopup] = useState(false);
    const navigate = useNavigate();


    // const haddleBtnSubmit = () => {
    //     console.log(region);
    // }
    const haddlePopupNewProvince = () => {
        if(isPopup){
            setPopup(false)
        }else{
            setPopup(true)
        }
    }

    const haddleAddingNewProvince = () => {
        
    }

    const handleButtonClick = () => {
        // const listRegion = await axios.get("")
        
        if (isProvince !== "none"){
            const listRegion = demoDataListRegion;
            let isRegion;
            for(let i = 0; i < listRegion.length; i++){
                for(let j = 0; j < listRegion[i].data.length; j++){
                    if(listRegion[i].data[j] === isProvince){
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
        // axios here fetch data 
        // setRegion(demoDataListRegion);
        let listProvince = [];
        for(let i = 0; i < demoDataListRegion.length; i++ ){
            for(let j = 0; j < demoDataListRegion[i].data.length; j++){
                if(demoDataListRegion[i].data[j] !== "All" ){
                    listProvince.push(demoDataListRegion[i].data[j])
                }
            }
        }
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
    },[]);
    return (
        
        <div className="p-4 md:mr-[20%] mt-[8%]">
            {
                isPopup?
                <div className='fixed top-0 left-0 w-[50%] h-[50vh] z-[999] bg-white rounded-md translate-x-[500px] translate-y-[200px] shadow-lg'>
                    <div className='flex justify-end mr-5 mt-4'>
                        <button
                            onClick={haddlePopupNewProvince}
                        >X</button>
                    </div>
                    <div className='title-c text-center mt-5 mb-5 text-[20px] font-bold'>Adding province</div>
                    <div className='border-[1px] border-gray-600 w-[98%] m-auto h-[400px]'>

                    </div>
                    <div className='flex justify-center mt-7'>
                        <button className='bg-gray-500 text-white w-[100px] pt-1 pb-1 rounded-md font-bold shadow-lg'>UPDATE</button>
                    </div>
                </div>:""
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
                    <button
                        className='w-[50px] h-[50px] rounded-full bg-gray-600 ml-5 font-bold text-white shadow-lg'
                        onClick={haddlePopupNewProvince}
                    >
                        ADD
                    </button>
                </div>
                <p className="mt-6 text-white font-bold fade-ins opacity-0 translate-y-10 duration-1000 ease-out transform transition-all">
                    Discover Thailand's hotspots and hidden gems with local experts.
                </p>
            </div>
        </div>
    );
}

export default ComponentFindBar