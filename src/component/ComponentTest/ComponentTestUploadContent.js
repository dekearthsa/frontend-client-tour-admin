import React, { useState } from 'react';
import axios from "axios";

const ComponentTestUploadContent  =  () => {
    const [content1, setContent1] = useState(null);
    const [isImage, setIsImage] = useState(null);

    const haddleChangeImage = (evt) => {
        const imageFile = evt.target.files[0];
        setIsImage(imageFile)
    }

    const haddleChangeImageID = (evt) => {
        const setImageId = evt.target.value;
        setContent1(setImageId);
    }

    const haddleSubmit = async () => {

        if(!isImage){
            alert("No image upload.")
        }else{
            const formData = new FormData();    

            const setHeader = {
                headers: {
                    'Content-Type': `multipart/form-data`
                }
            }
            
            formData.append("imageName", content1);
            console.log("asd ==> ",content1)
            formData.append("image", isImage);

            await axios.post("http://localhost:8089/api/upload/content" ,formData,  setHeader)
            // console.log(statusRelpy.data);
            // if(statusRelpy.data.status === 200){
            //     alert("success!")
            // }else{  
            //     alert(statusRelpy.data.desc)
            // }
        }

    }

    return (
        <>
            <div>Test upload content</div>
            <input 
                type="text" 
                onChange={haddleChangeImageID}
            />
            <input 
                type='file'
                accept="image/*"
                onChange={haddleChangeImage}
            />
            <button onClick={haddleSubmit}>Submit</button>
        </>
    )
}

export default ComponentTestUploadContent