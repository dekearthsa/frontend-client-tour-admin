
import { useState } from 'react';
import  axios  from 'axios';

const ComponentShopPopUp = () => {

    const [region, setRegion] = useState("");
    const [title, setTitle] = useState("")
    const [isTitle, setIsTitle] = useState("");
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState();
    const [arrayActive, setArrayActive] = useState([]);
    const [isActiveDay, setIsActiveDay] = useState("");
    const [isActiveContent, setIsActiveContent] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [isIntroduction, setIsIntroduction] = useState("");
    const [arrayPrice, setArrayPrice] = useState([]);
    const [arrayPerson, setArrayPeron] = useState([]);
    const [isPrice, setIsPrice] = useState("");
    const [isPerson, setIsPerson] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isOrder, setIsOrder] = useState("");
    const [isRate, setIsRate] = useState(0);
    // const [isBr, setIsBr] = useState();

    const haddleTitle = () => {
        if(isTitle === ""){
            alert("Title can't be empty")
        }else{
            setTitle(isTitle)
            setIsTitle("")
        }
    }

    const handleImageChange = (event) => {
        const selectedFiles = event.target.files;
        setImages([])
        setFiles()
        if (selectedFiles) {
            const fileArray = Array.from(selectedFiles).map(file =>
                URL.createObjectURL(file)
            );
            setImages(prevImages => prevImages.concat(fileArray));
            setFiles(selectedFiles)
        }
    };

    const haddleIntroduction = () => {
        if(isIntroduction === ""){
            alert("Introduction can't be empty")
        }else{
            setIntroduction(isIntroduction)
        }
    }

    const haddleAddingPricePerPerson = () => {
        if(isPrice === "" && isPerson === ""){
            alert("Person and Price can't be null.")
        }else{

            arrayPrice.push(isPrice)
            arrayPerson.push(isPerson)
            setIsPrice("");
            setIsPerson("");
            setArrayPrice([...arrayPrice]);
            setArrayPeron([...arrayPerson]);
        }
    }

    const haddleRemovePricePerPerson = () =>{
        arrayPrice.pop();
        arrayPerson.pop();
        setArrayPrice([...arrayPrice])
        setArrayPeron([...arrayPerson])
    }


    const haddleActivity = () => {
        if(isActiveDay === "" && isActiveContent === ""){
            alert("Activity day and content must not empty")
        }else{

            if(isActiveDay <= 0){
                alert("Day can't lower than 1.")
            }else{
                const setJSONcontent = {
                    day: isActiveDay,
                    content: isActiveContent
                }
    
                arrayActive.push(setJSONcontent)
                setArrayActive([...arrayActive])
    
                setIsActiveDay("")
                setIsActiveContent("")
            }
        }
    }

    // const haddleTopRate = () => {
    //     if(isRate > 5 || isRate < 0){
    //         alert("Top rate must around 0-5")
    //         setIsRate(0)
    //     }else{

    //     }
    // }

    const haddleRemoveActivity = () => {
        arrayActive.pop();
        setArrayActive([...arrayActive])
    }

    const haddleOrderNumber = (e) => {
        if(e < 0){
            alert("Order can't below than 0")
        }else{
            setIsOrder(e)
        }
    }

    const haddleSubmitUploadContent = async (e) => {
        // e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        let setArrayPrice = []
        for(let i = 0; i < arrayPrice.length; i++){
            const setJSONPrice = {
                people: arrayPerson[i],
                price: arrayPrice[i]
            }
            setArrayPrice.push(setJSONPrice)
        }

        if(region === "" && title === "" && introduction === "" && arrayActive.length === 0 && setArrayPrice.length === 0 && isOrder === ""){
            alert("Region, title, introduction, activity, perice per person cannot be null");
        }else{
            const setJSON = {
                region: region,
                topRate: isRate,
                order: isOrder,
                title: title,
                intro: introduction,
                content: arrayActive,
                prices: setArrayPrice
            }
    
    
            const setStringJSON = JSON.stringify(setJSON);
            // console.log(files)
            for(let i = 0; i < files.length; i++){
                formData.append("image", files[i])
            }
            formData.append("data", setStringJSON);
    
            try{
                const headerConf = {
                    headers: {
                        'Content-Type': `multipart/form-data`
                    }
                }
    
                const resultOut = await axios.post("https://test-node-upload-image-zt27agut7a-as.a.run.app/api/upload/contents",formData, headerConf);
                if(resultOut.status === 200){
                    alert("Upload finish!")
                    setIsLoading(false);
                    setTitle("");
                    setIsTitle("");
                    setImages([]);
                    setFiles();
                    setArrayActive([]);
                    setIsActiveDay("");
                    setIsActiveContent("");
                    setIntroduction("");
                    setIsIntroduction("");
                    setArrayPrice([]);
                    setArrayPeron([]);
                    setIsPrice("");
                    setIsPerson("");
                    window.location.reload();
                }else{
                    alert("Image can't uploaded!")
                    setIsLoading(false);
                }
            }catch(err){
                // alert(err)
                console.log(err)
                setIsLoading(false);
                alert(err)
            }
        }
    }

    return (
        <div className="ml-10 mr-10 mt-10 z-[999px]">
            {
                !isLoading && (
                    <div>
                        <div className='font-bold flex '>
                            <div>Select Region: </div>
                            <div>
                                <select onChange={(e)=> setRegion(e.target.value)} name="region" id="region" className='border-b-[1px] border-zinc-500'>
                                    <option name=""></option>
                                    <option name="north">North</option>
                                    <option name="west">West</option>
                                    <option name="central">Central</option>
                                    <option name="northEast">NorthEast</option>
                                    <option name="south">South</option>
                                    <option name="east">East</option>
                                </select>
                            </div>
                        </div>
                        <div className='border-b-[1px] border-zinc-200 mt-3 mb-3'></div>
                        <div className='flex'>
                            <div className='font-bold'>Popular Place order</div>
                            <input className='border-b-[1px] border-zinc-500' type='number' onChange={(e) => haddleOrderNumber(e.target.value)}/>
                        </div>
                        <div className='border-b-[1px] border-zinc-200 mt-3 mb-3'></div>
                        <div className='mt-5 mb-5 font-bold'>Title product: {title}</div>
                    <div className="flex">
                        <div className="">Title product:</div>
                        <div className="ml-5 border-b-[1px] border-zinc-500">
                            <input value={isTitle} onChange={e => setIsTitle(e.target.value)} />
                        </div>
                        <span className='ml-5 text-[13px]'>
                            <button className='border-[1px] border-zinc-500 w-[80px] font-bold bg-zinc-500 rounded-md text-white' onClick={haddleTitle}>Submit</button>
                        </span>
                    </div>
                    <div className='border-b-[1px] border-zinc-200 mt-3 mb-3'></div>
                    <div>
                        <div className='flex mb-3'>
                            <div className='font-bold mr-3'>TopRate</div>
                            <div>{isRate}</div>
                        </div>
                        <div  className='flex'>
                            <div className='font-bold mr-3'>TopRate</div>
                            <div className='flex'>
                                <div>
                                    <input className='border-b-[1px] border-zinc-400 ' type='number' value={isRate} onChange={(e) => {
                                            if(e.target.value < 0 || e.target.value > 5){
                                                alert("Range toprate must between 0-5.")
                                                setIsRate(0)
                                            }else{
                                                setIsRate(e.target.value)
                                            }
                                        }}/>
                                </div>
                                <div className='ml-3'> 
                                    {/* <button className='border-[1px] border-zinc-500 w-[100px] font-bold bg-zinc-500 rounded-md text-white text-[13px]'
                                    onClick={haddleTopRate()}
                                    >Create Rate</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <hr/>
                    </div>
                    <div className="mt-10 flex">
                        <div>Select Images</div>
                        <div className='ml-5'>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <div className='mt-3'>
                        {images.length > 0 && (
                            <div className='grid grid-cols-5'>
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Uploaded Image ${index + 1}`}
                                        style={{ maxWidth: '100%', maxHeight: '200px', marginRight: '10px' }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='mt-5'>
                        <hr/>
                    </div>
                    <div className="mt-10">
                        <div className='font-bold'>Introduction</div>
                        <div className='mt-3 mb-3'>
                            {introduction}
                        </div>
                        <div>
                            {/* <div className='flex mt-2'>
                                <div className='font-bold text-center rounded-sm mr-5 border-[1px] border-zinc-500 w-[20px] h-[20px]'>B</div>
                                <div className='font-bold text-center rounded-sm mr-5 border-[1px] border-zinc-500 w-[20px] h-[20px]'>br</div>
                            </div> */}
                            <div className='mt-3'>
                                <textarea className='border-[1px] border-zinc-500 w-[310px] h-[250px] rounded-lg' value={isIntroduction} onChange={e => setIsIntroduction(e.target.value)}></textarea>
                            </div>
                            <div className='mt-3'>
                                <button className='bg-zinc-500 w-[160px] h-[30px] text-white rounded-md' onClick={haddleIntroduction}>Create introduction</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <hr/>
                    </div>
                    <div className='mt-10'>
                        {
                            arrayActive.map((text, idx) => 
                                <div key={idx}>
                                    <div className='flex'>
                                        <div className='font-bold'>DAY:</div>
                                        <div className='ml-4'>{text.day}</div>
                                    </div>
                                    <div className='mt-3'>
                                        <div className='font-bold'>CONTENT</div>
                                        <div>{text.content}</div>
                                    </div>
                                    <div className="w-[80%] mt-3">
                                        <hr/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='mt-5'>
                        <div>
                            Adding activity 
                        </div>
                        <div className='mt-3'>
                            <div>
                                <div>Day</div>
                                <div><input type="number" className='border-[1px] border-zinc-500' value={isActiveDay} onChange={e => setIsActiveDay(e.target.value)} /></div>
                            </div>
                            <div className='mt-5'>
                                <textarea className='border-[1px] border-zinc-500 w-[90%] h-[150px] rounded-md' value={isActiveContent} onChange={e => setIsActiveContent(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div>
                            <button className='border-[1px] border-zinc-500 w-[160px] rounded-md bg-zinc-500 text-white h-[40px]' onClick={haddleActivity}>Create activity</button>
                            <button className='ml-5 border-[1px] border-zinc-500 w-[160px] rounded-md bg-zinc-500 text-white h-[40px]' onClick={haddleRemoveActivity}>Remove activity</button>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <hr/>
                    </div>
                    <div className='mt-10'>
                        <div>Prices per person</div>
                        <div className=' mt-4'>
                            <div className='flex justify-start'>
                                <div className='flex'>
                                    <span>PRICE</span>
                                    <span className='ml-4'>
                                        {
                                            arrayPrice.map((text,idx) => 
                                                <div key={idx}>{text}</div>
                                            )
                                        }
                                    </span>
                                </div>
                                <div className='ml-5 flex'>
                                    <span>PERSON</span>
                                    <span className='ml-4'>
                                        {
                                            arrayPerson.map((text, idx) => 
                                                <div key={idx}>{text}</div>
                                            )
                                        }
                                    </span>

                                </div>
                            </div>
                            
                            <div className='flex justify-start mt-4'>
                                <div>
                                    <div>Perice</div>
                                    <input type='number' className='border-[1px] border-zinc-500 rounded-sm' value={isPrice} onChange={e => setIsPrice(e.target.value)} />
                                </div>

                                <div className='ml-10'>
                                    <div>Person</div>
                                    <input type='text' className='border-[1px] border-zinc-500 rounded-sm' value={isPerson} onChange={e => setIsPerson(e.target.value)}/>
                                </div>
                                <div className='mt-6 ml-5 flex'>
                                    <button onClick={haddleAddingPricePerPerson}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                    <button onClick={haddleRemovePricePerPerson}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-3">
                                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clip-rule="evenodd" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 mb-10'>
                        <hr/>
                    </div>
                    
                    <div className='mt-10 flex justify-center'>
                        {/* <form onSubmit={haddleSubmitUploadContent}> */}
                            <button className='bg-zinc-500 w-[140px] h-[40px] text-white font-bold rounded-md' onClick={haddleSubmitUploadContent}>Create Product</button>
                        {/* </form> */}
                    </div>
                <div className='pb-10'></div>
            </div>
                )
            }

            {
                isLoading && (
                    <div className='flex justify-center'>
                        Product is creating please wating...
                    </div>
                )
            }
                
        </div>

       
    )
}

export default ComponentShopPopUp