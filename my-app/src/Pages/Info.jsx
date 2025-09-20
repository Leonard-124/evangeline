
// import React from 'react'
// import burger2 from "../assets/images/burger2.jpg"
// import bike from "../assets/images/bike.jpg"
// import ferari from "../assets/images/ferari.jpg"
// import { useState, useEffect } from 'react'




// const Info = () => {
//   const images = [burger2, bike, ferari]
//   const [currentImage, setCurrentImage] = useState(0)

//   useEffect(()=>{
//     const interval = setInterval(()=>{
//       setCurrentImage((prev)=> (prev +1) % images.length)
//     },4000)
//     return ()=> clearInterval(interval)
//   },[images.length])
  

//   return (
//     <div className='flex  items-center bg-amber-50 '>
//         <div className=''>
//       <img src={images[currentImage]} alt={`slideshow ${currentImage + 1}`}  className='h-[650px] w-[1000px] object-cover mb-2'/>
      
//     </div>
//     <div>
//         <p className=' text-center font-serif'>
//             We are at the top of the global village to bring you services
// closer to your doorstep than ever before. We have a dedicated
// team that  we'll ensure that you have been served to our level
// best, we wish tou a good time as you will be exploring various
// tools within the website.
//         </p>
//     </div>
//     </div>
    

//   )
// }

// export default Info


import React, { useState, useEffect, useRef, useCallback } from "react";
import hague from "../assets/Arts/hague.jpg";
import cottonbro from "../assets/Arts/cottonbro.jpg";

const slides = [
  {
    text: "Beautiful Mountain View",
    image: hague,
    link: "https://example.com/mountain",
  },
  {
    text: "Sunny Beach Paradise",
    image: cottonbro,
    link: "https://example.com/beach",
  },
  {
    text: "City Skyline at Night",
    image: hague,
    link: "https://example.com/city",
  },
];

const Info = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSlide, setShowSlide] = useState(false);
  const intervalRef = useRef(null);

  const advanceSlide = useCallback((direction = 1) => {
    setCurrentIndex((prev) =>
      (prev + direction + slides.length) % slides.length
    );
  }, []);

  const startAutoPlay = useCallback(() => {
    intervalRef.current = setInterval(() => advanceSlide(1), 8000);
  }, [advanceSlide]);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlide(true);
      startAutoPlay();
    }, 3000);

    return () => {
      clearTimeout(timer);
      stopAutoPlay();
    };
  }, [startAutoPlay, stopAutoPlay]);

  if (!showSlide) {
    return (
      <div className="text-center py-6 text-lg font-medium text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-4 mx-auto p-4 h-[400px] w-full mt-22"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="flex flex-row justify-between items-center gap-6 bg-[#ffffff73] transition-opacity duration-1000 opacity-100">
        {/* Left Arrow */}
        <button
          className="text-2xl p-2 hover:text-blue-500 transition"
          onClick={() => advanceSlide(-1)}
        >
          ⬅
        </button>

        {/* Text + Link */}
        <div className="flex flex-col items-center justify-center w-[300px]">
          <p className="text-lg font-semibold text-gray-800">
            {slides[currentIndex].text}
          </p>
          <a
            href={slides[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Visit Link
          </a>
        </div>

        {/* Image + Right Arrow */}
        <div className="flex items-center">
          <div className="h-[400px] w-[900px] overflow-hidden">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].text}
              className="w-full h-full object-cover shadow-md transition-opacity duration-1000 opacity-100"
            />
          </div>
          <button
            className="text-2xl p-2 hover:text-blue-500 transition"
            onClick={() => advanceSlide(1)}
          >
            ➡
          </button>
        </div>
      </div>

      {/* Progress Lines */}
      <div className="flex gap-2 mt-2 justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-12 rounded-full transition-colors duration-1000 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Info;