import React, { useState } from 'react';
import './style.css';

export default function ImgInput() {
    const [previewUrl, setPreviewUrl] = useState([]);

    const fileChangeHandler = event => {
        let files = Array.from(event.target.files); // FileList to Array

        Promise.all(files.map(file => {
            return new Promise((resolve, reject) => {
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

    const onDragStart = (e, index) => {
        e.dataTransfer.setData("index", index);
    }

    const onDrop = (e, targetIndex) => {
        const draggedIndex = e.dataTransfer.getData("index");
        swapImage(draggedIndex, targetIndex)
    }

    const swapImage = (draggedIndex, targetIndex) => {
        setPreviewUrl(prevState => {
            let clonedState = [...prevState];
            let temp = clonedState[draggedIndex];
            clonedState[draggedIndex] = clonedState[targetIndex];
            clonedState[targetIndex] = temp;

            return clonedState;
        })
    }

    const deleteImage = (index) => {
        setPreviewUrl(prevState => prevState.filter((_, i) => i !== index));
    }


    return (
        <div className="image-upload">
            <input type="file" accept="image/*" onChange={fileChangeHandler} id="file" className="input-file" multiple />
            <label htmlFor="file" className="upload-label">+</label>
            {previewUrl &&
                previewUrl.map((imageData, index) => (
                    <div className='imgLoader' key={index} draggable onDragStart={(e) => onDragStart(e, index)} onDrop={(e) => onDrop(e, index)}
                        onDragOver={(e) => { e.preventDefault(); }}>
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
                        <button className='delBtn' onClick={() => deleteImage(index)}>×</button>
                    </div>
                ))
            }
        </div>
    );
}