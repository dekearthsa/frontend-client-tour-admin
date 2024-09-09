import React, { useState, useEffect } from 'react';
import {Buffer} from 'buffer';
import axios from 'axios';

// const IMG_NAME = ["Earth_1_E_2022-10-28T14:45:42.954263+07:00.png", "Earth_Screenshot 2566-10-02 at 20.19.13.png"]

const ImageDisplay = () => {
    const [imageBuffers, setImageBuffers] = useState([]);

    const haddleFetch = async () => {
        try{
            const binImgData = await axios.get("https://test-fetct-img-cloud-store-zt27agut7a-as.a.run.app/api/get/img");
            console.log(binImgData.data)
            setImageBuffers(binImgData.data)
            console.log(imageBuffers)
        }catch(err){
            console.log(err)
        }

    }

    useEffect(() => {
        haddleFetch();
      }, []);
  
    return (
      <div>
        {imageBuffers.map((imageBuffer, index) => (
        <img
          key={index}
          src={`data:image/jpeg;base64,${Buffer.from(imageBuffer).toString('base64')}`}
          alt={`Image ${index}`}
        />
      ))}

      </div>
    );
  };
  
  export default ImageDisplay;