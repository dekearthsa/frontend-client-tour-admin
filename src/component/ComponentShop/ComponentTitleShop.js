import {useState} from 'react';
import imgHeader from "../../img/CA_ChiangMai_TH_Header.webp"
// import TestImage from '../../img/Phuket_Island.jpg'
// import axios from 'axios'
import ComponentShopPopUp from "../ComponentShop/ComponentShopPopUp"

const ComponentTitleShop = () => {

    const [menuSelector, setMenuSelector] = useState('North');
    const [isPopup, setIsPopup] = useState(false);

    const cssNorth = "h-[200px] border-[1px] border-zinc-50 rounded-t-lg bg-[#EDEDED]"
    const cssNorthSection = "h-[200px] border-[1px] border-zinc-50 rounded-t-lg bg-[#8E8E8E] text-white"
    const cssWest = "border-l-[1px] border-zinc-50 bg-[#EDEDED]"
    const cssWestSection = "border-l-[1px] border-zinc-50 bg-[#8E8E8E] text-white"
    const cssCentral = "border-l-[1px] border-r-[1px] border-zinc-50 bg-[#EDEDED]"
    const cssCentralSelection = "border-l-[1px] border-r-[1px] border-zinc-50 bg-[#8E8E8E] text-white"
    const cssNorthEast = "border-r-[1px] border-zinc-50 bg-[#EDEDED]"
    const cssNorthEastSelection = "border-r-[1px] border-zinc-50 bg-[#8E8E8E] text-white"
    const cssSouth = "rounded-bl-lg border-l-[1px] border-t-[1px] border-b-[1px] border-zinc-50 bg-[#EDEDED]"
    const cssSouthSelection = "rounded-bl-lg border-l-[1px] border-t-[1px] border-b-[1px] border-zinc-50 bg-[#8E8E8E] text-white"
    const cssEast = "rounded-br-lg border-[1px] border-zinc-50 bg-[#EDEDED]";
    const cssEastSelection = "rounded-br-lg border-[1px] border-zinc-50 bg-[#8E8E8E] text-white"

    const haddleSelectMenu = (evt) => {
        setMenuSelector(evt)
    }

    const haddleOpenPopUp = () => {
        if(isPopup === false){
            setIsPopup(true);
        }else{
            setIsPopup(false);
        }
        
    }

    return (
        <>
        <div style={{backgroundImage: `url(${imgHeader})`}} className=" object-center object-cover text-center bg-gray-300 ">
            <div className="region-container  m-auto">
                <div className="w-[60%]  text-center m-auto pt-[140px] pb-10 ">
                    <div className={menuSelector === 'North'? cssNorthSection:cssNorth} onClick={() => haddleSelectMenu("North")}>
                        <div className="mt-[85px]">North</div>
                    </div>
                    <div className="grid grid-cols-3 h-[200px] ">
                        <div className={menuSelector === 'West'? cssWestSection : cssWest} onClick={() => haddleSelectMenu("West")}>
                            <div className="mt-[85px]">
                                West
                            </div>
                        </div>
                        <div className={menuSelector === 'Central'? cssCentralSelection : cssCentral} onClick={() => haddleSelectMenu("Central")}>
                            <div className="mt-[85px]">
                                Central region
                            </div>
                        </div>
                        <div className={menuSelector === 'NorthEast'? cssNorthEastSelection : cssNorthEast} onClick={() => haddleSelectMenu("NorthEast")}>
                            <div className="mt-[85px]">
                                Northeast
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 h-[200px] ">
                        <div className={menuSelector === 'South'? cssSouthSelection : cssSouth} onClick={() => haddleSelectMenu("South")}>
                            <div className="mt-[85px]">South</div>
                        </div>
                        <div className={menuSelector === 'East'? cssEastSelection : cssEast} onClick={() => haddleSelectMenu("East")}>
                            <div className="mt-[85px]">Eastern Region</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[100%] bg-red-400 text-white'>
            <div className="text-center m-auto   border-b-[1px] border-zinc-300 w-[100%]"></div>
            <div className="w-[70%] m-auto">
                <div className='text-[18px] font-bold pt-5 pb-5'>Region selection: { menuSelector }</div>
            </div>
        </div>
        <div>
            {
                isPopup === true ? (
                    <div className="fixed top-[10%] left-[10%] w-[80%] h-[700px] bg-white border-[1px] border-zinc-800  overflow-y-auto">
                        <div className='flex justify-end mr-5 mt-3'>
                        <button  onClick={()=> haddleOpenPopUp()}>X</button>
                        </div>
                        
                        <ComponentShopPopUp/>
                    </div>
                    
                ):(
                    <></>
                )
            }
        </div>
        
        <div className='mt-3 pb-5'>
            <div className='flex justify-end mr-10' onClick={() => haddleOpenPopUp()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
            </div>
        </div>
        </>
    )
}
export default ComponentTitleShop