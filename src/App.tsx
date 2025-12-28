import { useEffect, useState } from "react";
import picture1 from "../src/assets/1.jpg";
import picture2 from "../src/assets/2.jpg";
import picture3 from "../src/assets/3.jpg";
import picture4 from "../src/assets/4.jpg";
import picture5 from "../src/assets/5.jpg";
import women from "../src/assets/women.jpg";
import ring from "../src/assets/ring.png";
import react from "../src/assets/react.png"
import health from "../src/assets/health.png"
import watch1 from "../src/assets/watch1.jpg"
import watch2 from "../src/assets/watch2.jpg"

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
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 4500);
    return() => clearTimeout(timer);
  }, [currentIndex]);
  return (
    <div className=" font-lexend">
      <div className="flex w-full p-2 bg-gray-50 z-1 fixed">
      <div className="mx-auto flex justify-between  items-center">
      <div className="font-bold">Apple</div>
      <div className="flex cursor-pointer gap-2 text-xs">
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
      <div className="w-full" style={{backgroundImage: `url(${women})`, height: 1000, 
      backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className=" mx-auto w-300 pt-30">
      <div className="text-white font-bold max-w-[525px] ml-140">
      <div className="text-[#50c1fc] font-medium">Health</div> 
      <div className="text-6xl">Know <br />your body<br /> by heart.</div>
      <div className="mt-10">The more insights you have, the more empowered you are to take action. From the ECG app to the Vitals app and more, Apple Watch Series 11 provides a bigger picture of your health, so you can stay informed. And now Series 11 takes the next big step in heart health with a pioneering feature — hypertension notifications.1</div>
      </div>
      </div>
      </div>
      <div className="w-full backdrop-[blur(40px)_brightness(60%)bg-white/30] " style={{backgroundImage: `url(${women})`, height: 1100, 
      backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className=" max-w-3xl mx-auto pt-20">
      <div className="text-white font-bold">
        <div className=" text-4xl max-w-100">Get notified of chronic high blood pressure.</div>
        <div className="mt-2.5 max-w-150">Hypertension, or high blood pressure, impacts over 1.3 billion adults worldwide and is a leading cause of heart attack, stroke and kidney disease. The condition frequently goes undiagnosed because it often has no symptoms — and even during a doctor’s visit, with a single measurement it can be easily missed.</div>
      </div>
      <div className="flex gap-5 text-white text-xs mt-12">
        <div className="max-w-70">
        <div 
        style={{backgroundImage: `url(${ring})`, width: 25, height:35, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
        <div>Receive hypertension notifications, just by wearing your watch. Series 11 can notify you if it identifies patterns of hypertension.1 How? The optical sensor provides data to an algorithm that can detect potential hypertension by analysing how your blood vessels respond to beats of the heart over 30‑day periods.</div>
        </div>
        <div className="max-w-70">
        <div style={{backgroundImage: `url(${react})`, width: 25, height:35, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
        <div>Ground­breaking insights. Grounded in science. We developed hypertension notifications using advanced machine learning methods and a series of studies, totalling over 100,000 participants. The feature was then validated in a clinical study.</div>
        </div>
        <div className="max-w-70">
        <div style={{backgroundImage: `url(${health})`, width: 25, height:40, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
        <div>Set up a blood pressure log. If you receive a hypertension notification and have access to a blood pressure cuff, you can track your blood pressure in the Health app on iPhone to create a report that will lead to more meaningful conversations with your healthcare provider.</div>
        </div>
      </div>
      </div>
      </div>
      <div className="mx-auto max-w-2xl" style={{textAlign: "center"}}>
      <div className="text-2xl text-[#fa1858]">Fitness</div>
      <div className="text-6xl mt-5 mb-10">Better by every measure.</div>
      <div className="text-xl mb-10">Whether you’re training for a marathon or swimming lengths, Apple Watch Series 11 serves up endless ways to work out. And it uses helpful metrics to count every move, so you know how to push harder and train smarter. Let’s go — the starting line is on your wrist.</div>
      </div>
      <div className="max-w-2xl mx-auto">
      <div className=" text-4xl font-bold">Apple Watch</div>
      <div className="flex">
      <div className="mr-12 font-bold text-xl cursor-pointer">
        <div className=" font-light text-base cursor-auto text-[#6e6e73]">Explore Watch</div>
        <div>Explore All Apple Watch</div>
        <div>Apple Watch Series 11</div>
        <div>Apple Watch SE 3</div>
        <div>Apple Watch Ultra 3</div>
        <div>Apple Watch Nike</div>
        <div>Apple Watch Hermès</div>
      </div>
      <div className="mr-7 font-bold cursor-pointer">
        <div className=" font-light cursor-auto text-[#6e6e73]">Shop Watch</div>
        <div>Shop Apple Watch</div>
        <div>Apple Watch Straps</div>
        <div>Apple Watch Accessories</div>
        <div>Apple Trade In</div>
        <div>Financing</div>
        <div>Personal Setup</div>
      </div>
      <div className="font-bold cursor-pointer">
        <div className=" font-light cursor-auto text-[#6e6e73]">More from Watch</div>
        <div>Apple Watch Support</div>
        <div>AppleCare</div>
        <div>watchOS 26</div>
        <div>Apps by Apple</div>
        <div>Apple Fitness+</div>
      </div>
      </div>
      <div className="cursor-pointer">
      <div className="mt-3.5 mb-1 ">Compare Watch</div>
      <div>Why Apple Watch</div>
      </div>
      </div>
    </div>
  )
}
