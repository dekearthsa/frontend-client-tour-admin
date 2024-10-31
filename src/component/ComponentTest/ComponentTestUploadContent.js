import React, { useState } from 'react';
import axios from "axios";

const ComponentTestUploadContent = () => {
    const [content1, setContent1] = useState('');
    const [isImage, setIsImage] = useState([]);

    const haddleChangeImage = (evt) => {
        const imageFiles = Array.from(evt.target.files);
        console.log("Selected files:", imageFiles);
        setIsImage(imageFiles);
    }

    const haddleChangeImageID = (evt) => {
        setContent1(evt.target.value);
    }

    const haddleSubmit = async () => {
        if (!isImage || isImage.length === 0) {
            alert("No image uploaded.");
            return;
        }

        const formData = new FormData();

        // Append each file individually with the key 'files'
        isImage.forEach((file) => {
            formData.append("files", file);
        });

        // Append other fields
        formData.append("imageName", content1);
        console.log("Image Name:", content1);
        console.log("Images:", isImage);

        try {
            // Let Axios set the 'Content-Type' header automatically
            const response = await axios.post("http://localhost:8089/api/upload/contents", formData, {
                headers: {
                    // 'Content-Type': 'multipart/form-data' // REMOVE THIS LINE
                }
            });
            console.log("Response:", response.data);
            alert("Files uploaded successfully.");
            // Optionally reset the form
            setIsImage([]);
            setContent1('');
        } catch (err) {
            console.error("Error uploading files:", err);
            alert("An error occurred while uploading the files.");
        }
    }

    return (
        <>
            <div>Test upload content</div>
            <input 
                type="text" 
                value={content1}
                onChange={haddleChangeImageID}
                placeholder="Image ID"
            />
            <input 
                multiple
                type='file'
                accept="image/*"
                onChange={haddleChangeImage}
            />
            <button onClick={haddleSubmit}>Submit</button>
        </>
    )
}

export default ComponentTestUploadContent;
