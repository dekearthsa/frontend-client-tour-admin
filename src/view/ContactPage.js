import { useState, useEffect } from 'react';
import ComponentHomeNavbar from '../component/ComponentHome/ComponentHomeNavbar';
import ComponentBottonBar from '../component/ComponentHome/ComponentBottonBar';

const ContactPage = () => {

    const demoPic = [
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
        "https://www.digi.com/images/blog/edge_compute_aws_greengrass-io",
    ]

    const [countImg, setCountImg] = useState();

    const funcCalRage = () => {
        setCountImg(demoPic.length - 2)
    }

    useEffect(() => {
        funcCalRage();
    }, [])

    return (
        <>
            <div className="text-white  bg-black h-[100px] pt-10 font-bold w-[100%] z-10 ">
                <ComponentHomeNavbar />
            </div>
            <div className='bg-gradient-to-b from-slate-300 via-slate-100 to-slate-50 shadow-inner'>
                <div className='set-c-about md:w-[50%] pt-10 border-b-[1px] border-gray-500 md:h-[350px] m-auto'>
                    <div className='title-c-about suse-font-bold md:text-[30px] text-gray-600'>Our history</div>
                    <div className='set-grid-about-r'>
                        <div className='mt-[40px] text-[18px]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div 
                            className='text-center set-img-text-01 duration-500 md:hover:text-[270px] md:hover:translate-y-[-70px]'
                            >
                                01
                            </div>
                    </div>
                </div>
                <div className='set-c-about md:w-[50%] mt-10 border-b-[1px] border-gray-500 md:h-[350px] m-auto'>
                    <div className='title-c-about suse-font-bold text-[30px] sm:text-right  text-gray-600'>Our vision</div>
                    <div className='set-grid-about-l '>
                        <div 
                            className='text-center set-img-text-02 duration-500 md:hover:text-[270px] md:hover:translate-y-[-70px]'
                        >02</div>
                        <div className='mt-[40px] text-[18px]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
                <div className='set-c-about md:w-[50%] mt-10 border-b-[1px] border-gray-500 md:h-[350px] m-auto'>
                    <div className='title-c-about suse-font-bold text-[30px]  text-gray-600'>Our services</div>
                    <div className='set-grid-about-r '>
                        <div className='mt-[40px] text-[18px]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div
                            className='text-center set-img-text-03 duration-500 md:hover:text-[270px] md:hover:translate-y-[-70px]'
                        >03</div>
                    </div>
                </div>
                <div className='set-c-about md:w-[50%]  mt-10 border-b-[1px] border-gray-500 md:h-[350px] m-auto'>
                    <div className='title-c-about suse-font-bold text-[30px] sm:text-right  text-gray-600'>Our staff</div>
                    <div className='set-grid-about-l '>
                        <div
                            className='text-center set-img-text-04 duration-500 md:hover:text-[270px] md:hover:translate-y-[-70px]'
                        >
                            04
                        </div>
                        <div className='mt-[40px] text-[18px]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <ComponentBottonBar/>
            </div>
        </>
    )
}

export default ContactPage