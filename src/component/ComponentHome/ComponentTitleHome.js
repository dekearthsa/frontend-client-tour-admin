import imgHeader from "../../img/CA_ChiangMai_TH_Header.webp";
import ComponentFindBar from "./ComponentFindBar";

const ComponentTitleHome = () => {
    return (
        <div 
            className="h-[70vh] bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${imgHeader})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/10"></div>
            <div className="relative flex justify-center md:justify-end items-center h-full">
                <ComponentFindBar />
            </div>
        </div>
    );
};

export default ComponentTitleHome;