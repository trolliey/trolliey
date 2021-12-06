import React from 'react'
import { useState } from 'react';

function ImageUpload() {
    const fileObj = [];
    const fileArray = [];

    const [file, setFile] = useState([null])

    const uploadMultipleFiles = (e) => {
        fileObj.push(e.target.files)
        for (let i = 0; i < fileObj[0].length; i++) {
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
        }
        setFile(fileArray)
    }

    const uploadFiles = (e) => {
        e.preventDefault()
        console.log(file)
    }

    return (
        <div className="flex flex-col w-full flex-1">
            <form>
                <div className="form-group multi-preview">
                    {(fileArray || []).map(url => (
                        <img src={url} alt="..." />
                    ))}
                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={uploadMultipleFiles} multiple />
                </div>
                <button type="button" className="btn btn-danger btn-block" onClick={uploadFiles}>Upload</button>
            </form >
        </div>
    )
}

export default ImageUpload
