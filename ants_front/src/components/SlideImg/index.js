import React, { useEffect, useState } from 'react';
import './style.css';

export default function ImgSlide() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [images, setImages] = useState([]);
  //이미지를 추가하는 만큼의 슬라이드
  useEffect(() => {
    showSlides(slideIndex);
  }, [images]); // 첫번째 이미지가 크게 보여지게


  let showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length) { n = 1; }
    if (n < 1) { n = slides.length; }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("GalleryActive", "");
    }

    if (slides[n - 1]) {
      slides[n - 1].style.display = "block";
      dots[n - 1].className += " GalleryActive"; // Make sure to add a space before the class name
      if (captionText) {
        captionText.innerHTML = dots[n - 1]?.alt;
      }
    }

    setSlideIndex(n); // Update the slide index state after the changes are made
  }

  let plusSlides = (n) => {
    setSlideIndex(prev => {
      let newIndex = prev + n;
      showSlides(newIndex);
      return newIndex;
    });
  }

  let currentSlide = (n) => {
    setSlideIndex(n);
    showSlides(n);
  }

  const handleFileInput = (e) => {
    Array.from(e.target.files).forEach(file => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = (e) => {
        setImages((prevImages) => [...prevImages, e.target.result]);
      };
    });
  };

  return (
    <div className="GalleryContainer">
    {images.length === 0 ? (
      <div className="file-input-wrapper">
        <button type="button" className="custom-button">이미지선택</button>
        <input type="file" className="hidden-file-input" onChange={handleFileInput} multiple />
      </div>
    ) : (
      <>
        {images.map((imageSrc, index) => (
          <div className="mySlides" key={index}>
            <div className="numbertext">{`${index + 1} / ${images.length}`}</div>
            <img src={imageSrc} />
          </div>
        ))}

      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

      <div className="caption-container">
        <span id="caption"></span>
      </div>

      <div className="row">
            {images.map((imageSrc, index) => (
              <div key={index} className='column'>
                <img
                  key={index}
                  src={imageSrc}
                  onClick={() => currentSlide(index + 1)}
                  className='demo cursor'
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}