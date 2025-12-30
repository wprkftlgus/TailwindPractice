import { useEffect, useState, useRef } from "react";
import picture1 from "../src/assets/1.jpg";
import picture2 from "../src/assets/2.jpg";
import picture3 from "../src/assets/3.jpg";
import picture4 from "../src/assets/4.jpg";
import picture5 from "../src/assets/5.jpg";
import women from "../src/assets/women.jpg";
import ring from "../src/assets/ring.png";
import react from "../src/assets/react.png"
import health from "../src/assets/health.png"
import apple1 from "../src/assets/apple1.jpg"
import apple2 from "../src/assets/apple2.jpg"
import apple3 from "../src/assets/apple3.jpg"
import apple4 from "../src/assets/apple4.jpg"
import apple5 from "../src/assets/apple5.jpg"
import apple6 from "../src/assets/apple6.jpg"
import watch1 from "../src/assets/watch1.jpg"
import watch2 from "../src/assets/watch2.png"
import run from "../src/assets/run.png"
import clock from "../src/assets/clock.png"

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

  const trigger1 = useRef<HTMLDivElement>(null);
  const trigger2 = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggerRef1 = trigger1.current;
    const triggerRef2 = trigger2.current;
    const bgRef = bg.current;

    if (!triggerRef1 || !triggerRef2 || !bgRef) return;

    const observer1 = new IntersectionObserver(
      (entries1) => {
        const entry1 = entries1[0];

        if (entry1.isIntersecting) {
          bgRef.classList.add("bg-fixed", "bg-blur");
        } 
      }, { threshold: 0.5 }
    );
    const observer2 = new IntersectionObserver(
      (entries2) => {
        const entry2 = entries2[0];

        if (entry2.isIntersecting) {
          bgRef.classList.remove("bg-fixed", "bg-blur")
        }
      }, { threshold: 0.5 }
    );
    observer1.observe(triggerRef1);
    observer2.observe(triggerRef2);

  },[]);

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
      <div className="relative w-full h-[2000px]">
      <div ref={bg} className="absolute inset-0 transition-all duration-2000" style={{backgroundImage: `url(${women})`, 
      backgroundSize: "cover", backgroundPosition: "center"}}>
      </div>
      <div className="relative">
      <div className=" mx-auto w-300 pt-30">
      <div className="text-white font-bold max-w-[525px] ml-140">
      <div className="text-[#50c1fc] font-medium">Health</div> 
      <div className="text-6xl">Know <br />your body<br /> by heart.</div>
      <div className="mt-10">The more insights you have, the more empowered you are to take action. From the ECG app to the Vitals app and more, Apple Watch Series 11 provides a bigger picture of your health, so you can stay informed. And now Series 11 takes the next big step in heart health with a pioneering feature — hypertension notifications.1</div>
      </div>
      </div>
      <div className=" max-w-3xl mx-auto pt-70">
      <div className="text-white font-bold">
        <div ref={trigger1} className=" text-4xl max-w-100">Get notified of chronic high blood pressure.</div>
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
      <div className="text-white">
      <div className="text-2xl pt-30 mb-5">More features to empower your health.</div>
      <div className="flex w-1000 gap-3">
      <div className="flex flex-col">
      <div className=" w-110 h-75 relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple1})`, borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="text-xs max-w-90 p-4">Wake up to your sleep score. Sleep quality is influenced by factors such as sleep duration, bed­time consistency, how often you wake up and time spent in each sleep stage. Sleep score analyses these factors every night and provides a classification and a score. You’ll see how the score is calculated, so you can understand the quality of your sleep and learn how to make it more restorative.</div>
      </div>
      <div className="flex flex-col">
      <div className=" w-110 h-75 relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple2})`, borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="text-xs max-w-90 p-4">Keep an eye on sleep apnoea. Sleep apnoea is a condition where people experience repeated interruptions in their regular respiratory pattern during sleep. If untreated, it can lead to increased risk of hypertension, type 2 diabetes, cardiac issues and more. Series 11 can monitor for breathing disturbances over time and notify you of possible sleep apnoea.11</div>
      </div>
      <div className="flex flex-col">
      <div className=" w-110 h-75 relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple3})`, borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="text-xs max-w-90 p-4">The Vitals app. Your daily health status, ASAP. Quickly see your overnight health data — including heart rate, respiratory rate, wrist temperature, blood oxygen and sleep duration — and get notified if multiple metrics are ever outside your typical range.6</div>
      </div>
      <div className="flex flex-col">
      <div className=" w-110 h-75 relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple4})`, borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="text-xs max-w-90 p-4">Follow your heart on the ECG app. With Series 11 you can check for signs of atrial fibrillation, or AF, right from your wrist by using the ECG app to generate a single‑lead electrocardiogram.12</div>
      </div>
      <div className="flex flex-col">
      <div className=" w-110 h-75 relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple5})`, borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="text-xs max-w-90 p-4">Stay on the pulse with the Heart Rate app. You can check your heart rate at any time — and get automatic notifications for a high or low heart rate or an irregular rhythm.13</div>
      </div>
      <div className="flex flex-col">
      <div className=" w-110 h-75 relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple6})`, borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="text-xs max-w-90 p-4">Cycle Tracking keeps you in the loop. Since cycles vary, the best way to understand what’s normal for you is by tracking your menstrual cycle. You can use Cycle Tracking to log your period, record symptoms and get predictions about your next period or fertile window.14 It can also notify you if a cycle deviation is detected.</div>
      </div>
      </div>
      
      
      </div>
      </div>
      </div>
      <div className="mx-auto max-w-2xl mt-30" style={{textAlign: "center"}}>
      <div className="text-2xl text-[#fa1858]">Fitness</div>
      <div ref={trigger2} className="text-6xl mt-5 mb-10">Better by every measure.</div>
      <div className="text-xl mb-10">Whether you’re training for a marathon or swimming lengths, Apple Watch Series 11 serves up endless ways to work out. And it uses helpful metrics to count every move, so you know how to push harder and train smarter. Let’s go — the starting line is on your wrist.</div>
      </div>
      <div>
       <div className="flex">
       <div style={{backgroundImage: `url(${watch1})`, width: 600, height: 600, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
       <div className="flex flex-col">
       <div style={{backgroundImage: `url(${run})`, width: 50, height: 50, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
       <div className="text-xs w-60 pt-2">A refreshed Workout app. An improved layout highlights four new corner buttons, making it even quicker to access your go‑to features like Pacer, Race Route and Custom Workout.</div>
       </div>
       </div>
       <div className="flex">
       <div className="flex flex-col">
       <div style={{backgroundImage: `url(${clock})`, width: 50, height: 50, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
       <div className="text-xs w-60 pt-2">Run circles around your Activity rings. Move. Exercise. Stand. The Activity app can track your daily activity. You can easily pause your rings or adjust your goals for each day of the week.</div>
       </div>
       <div className="" style={{backgroundImage: `url(${watch2})`, width: 600, height: 600, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
      </div>
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
