import { useState } from "react";
import picture1 from "../src/assets/1.jpg";
import picture2 from "../src/assets/2.jpg";
import picture3 from "../src/assets/3.jpg";
import picture4 from "../src/assets/4.jpg";
import picture5 from "../src/assets/5.jpg";

export default function App() {
  const images: string[] = [
    picture1,picture2,picture3,picture4,picture5
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => prev === images.length -1 ? 0 : prev + 1)
  }
  const prevSlide = () => {
    setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)
  }
  console.log(currentIndex);
  return (
    <div>
      <div className="flex w-full p-2 bg-gray-50 z-1 fixed">
      <div className="mx-auto flex justify-between gap-50 items-center">
      <div className="font-bold">Apple</div>
      <div className="flex cursor-pointer gap-1.5 text-xs">
      <div>Overview</div>
      <div>Why Apple Watch</div>
      <div>Tech Specs</div>
      <div>buy</div>
      </div>
      </div>
      </div>
      <div className="w-full">
      <div className="mx-auto font-bold text-4xl mx-auto pb-15 pt-25">Get the highlights.</div>
      </div>
      <div className="w-300 overflow-hidden">
        <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
        {images.map((img, index) => (
          <img key={index} src={img}  className="w-full flex-shrink-0"/>
        ))}
        </div>
        
      </div>
      <button className="w-20 h-20 bg-amber-700" onClick={prevSlide}>prev</button>
      <button className="w-20 h-20 bg-amber-700" onClick={nextSlide}>next</button>
    </div>
  )
}
