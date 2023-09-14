import React, { useState } from 'react';
import './style.css';

export default function ImgInput() {
    const [previewUrl, setPreviewUrl] = useState([]);

    const fileChangeHandler = event => {
        let files = Array.from(event.target.files); // FileList to Array

        Promise.all(files.map(file => {
            return new Promise((resolve,reject) => {
                let reader = new FileReader();
                reader.onloadend = event => {
                    let image = new Image();
                    image.src = event.target.result;
                    image.onload = () => resolve({
                        url: reader.result, width: image.width, height: image.height
                    });
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }))
        .then(newImages => setPreviewUrl(prevImages => [...prevImages, ...newImages]), error => console.error(error));
    };

    return (
        <div className="image-upload">
            <input type="file" accept="image/*" onChange={fileChangeHandler} id="file" className="input-file" multiple />
            <label htmlFor="file" className="upload-label">+</label>
            {previewUrl &&
                previewUrl.map((imageData, index) => (
                    <div key={index} >
                        <div className='imgLoader' >
                        <img 
                            key={index}
                            src={imageData.url}
                            style={{
                                maxWidth: 200,
                                maxHeight: 200,
                                width: imageData.width > imageData.height ? '100%' : 'auto',
                                height: imageData.height >= imageData.width ? '100%' : 'auto'
                            }}
                        />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}