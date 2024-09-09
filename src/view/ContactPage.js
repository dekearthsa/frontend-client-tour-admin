import { useState, useEffect } from 'react';
import ComponentHomeNavbar from '../component/ComponentHome/ComponentHomeNavbar';

const ContactPage = () => {

    const demoPic = [
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
    ]

    
    const [countImg, setCountImg] = useState();

    const haddleFetchContact = async () => {
        
    }

    const funcCalRage = () => {
        setCountImg(demoPic.length - 2)
    }

    useEffect(() => {
        funcCalRage();
    }, [])

    return (
        <>
            <div className="text-white absolute bg-black h-[100px]  pt-10 font-bold w-[100%] z-10">
                <ComponentHomeNavbar />
            </div>
            <div className="translate-y-[200px]">
                <div className="translate-x-[75px] translate-y-[10px] relative flex h-5 w-5 m-auto text-center items-center   font-bold text-[20px]">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
                </div>
                <div className='flex justify-center '>
                    <div className="w-[150px] p-1 text-center font-bold text-[20px] border-[2px] border-red-300 rounded-lg">
                        <div className='text-red-600'>About page</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage