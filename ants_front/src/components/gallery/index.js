import React, { useEffect, useState } from 'react';
import './style.css';
import img1 from '../../resources/images/img1.png'; // import your images
import img2 from '../../resources/images/img2.png';
import img3 from '../../resources/images/img3.png';

export default function Gallery() {
  const [slideIndex, setSlideIndex] = useState(1);
  const images = [img1, img2, img3, img1, img2, img3, img1, img2, img3]; // use the imported images directly

  useEffect(() => {
    showSlides(slideIndex);
  }, []); 

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

   if(slides[n-1]){
       slides[n - 1].style.display ="block";
       dots[n - 1].className += " GalleryActive"; 
       captionText.innerHTML= dots[n-1]?.alt;
   }
    
   setSlideIndex(n); 
}

let plusSlides =(n)=>{
   setSlideIndex(prev=>{
     let newIndex=prev+n;
     showSlides(newIndex);
     return newIndex;
   });
}

let currentSlide =(n)=>{
   setSlideIndex(n);
   showSlides(n);
}


return (
<div className="GalleryContainer">
        {images.map((imageSrc,index)=>(
            <div className="mySlides" key={index}>
                {/* <div className="numbertext">{`${index+1} / ${images.length}`}</div> */}
                <img src={imageSrc}/>
            </div>
        ))}

        <a className="prev" onClick={()=>plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={()=>plusSlides(1)}>&#10095;</a>

        <div className="caption-container">
          <p id="caption"></p>
        </div>

        <div className='slideBox'>
          {images.map((imageSrc,index)=>(
            <div key={index} className='column'>
              <img 
                  key={index}
                  src={imageSrc}
                  onClick={()=>currentSlide(index+1)}
                  //alt={`Image ${index+1}`}
                  className='demo cursor'
              />
            </div>
          ))}
         </div>  
</div>      
 );
}
