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
import girlrunning from "../src/assets/girlrunning.jpg"
import color from "../src/assets/color.png"
import watchmulti from "../src/assets/watchmulti.jpg"
import icon1 from "../src/assets/icon1.png"
import icon2 from "../src/assets/icon2.png"
import icon3 from "../src/assets/icon3.png"
import icon4 from "../src/assets/icon4.png"
import icon5 from "../src/assets/icon5.png"
import icon6 from "../src/assets/icon6.png"

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
    }, 450000);
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
          bgRef.classList.add("bg-fixed ", "bg-blur ");
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
    <div className="overflow-x-hidden overflow-y-hidden font-lexend">
      <div className="flex w-full border-b border-gray-300 bg-gray-50 z-2 fixed p-2 md:p-3">
      <div className="p-2 gap-[50vw] md:mx-auto md:gap-40 lg:gap-100 items-center flex">
      <div className="font-bold w-50 text-base md:text-xl cursor-pointer">Apple Watch Series 11</div>
      <div className="flex cursor-pointer gap-6 text-xs items-center">
      <div className="hidden md:block">Overview</div>
      <div className="hidden md:block">Why Apple Watch</div>
      <div className="hidden md:block">Tech Specs</div>
      <div className="bg-blue-500 px-3 py-1 text-white font-bold" style={{borderRadius: 15}}>Buy</div>
      </div>
      </div>
      </div>
      <div className="pl-5 pr-5">
      <div className="mx-auto max-w-320 font-bold text-3xl pb-10 md:pb-20 pt-50 md:text-6xl">Get the highlights.</div>
      <div className="md:max-w-370 lg:max-w-340 mx-auto md:pl-5 md:pr-5">
        <div 
        className="relative flex gap-10 transition-transform duration-500 ease-in-out h-[500px] md:h-[700px] lg:h-[900px]"
        style={{ transform: `translateX(calc(-${currentIndex} * (100% + 40px)))`}}>
        {images.map((img, index) => (
          <div className="relative w-full flex-shrink-0">
          <img key={index} src={img} className={`absolute w-full object-cover flex-shrink-0 h-[400px] md:h-[600px] lg:h-[800px]
          ${index === 1 ? "object-[50%_20%]" : ""}`}
          style={{borderRadius: 30}}/>
          {index === 0 && (<div className="relative font-bold mt-5 mx-auto max-w-100 pr-5 pl-5 md:mt-10 md:ml-15 md:text-xl md:max-w-130 lg:text-2xl lg:text-center lg:max-w-170 lg:mx-auto lg:mt-15">Turn resolutions into routines. Quit quitting your fitness goals with Apple Watch Series 11.</div>)}
          {index === 1 && (<div className="relative font-bold pl-5 top-10 max-w-50 md:top-0 md:mt-20 md:ml-15 md:text-xl md:max-w-80 md:text-xl lg:text-2xl lg:top-80 lg:left-10 lg:max-w-90">Sleep score gives you an easy way to track and help improve the quality of your Zzz.</div>)}
          {index === 2 && (<div className="relative max-w-50 pl-5 font-bold top-10 md:top-0 md:mt-20 md:ml-15 md:text-xl md:max-w-80 md:text-xl lg:top-80 lg:left-20 lg:text-2xl">Apple Watch Series 11 can spot signs of chronic high blood pressure and notify you of possible hypertension.</div>)}
          {index === 3 && (<div className="relative top-10 mx-auto max-w-60 md:max-w-130 font-bold md:text-xl lg:text-2xl">Up to <div className="inline-block text-green-600">24 hours</div> of battery life. Do the things you love for longer.</div>)}
          {index === 4 && (<div className="relative font-bold max-w-60 mx-auto md:mt-10 md:ml-15 md:text-xl md:max-w-130 lg:text-2xl lg:text-center lg:max-w-170 lg:mx-auto lg:mt-15">A glass display that’s 2x more scratch resistant than Series 10.3 Tough just got tougher.</div>)}
          </div>
        ))}
        </div>
        
      </div>
      <button className="w-20 h-20 bg-amber-700" onClick={prevSlide}>prev</button>
      <button className="w-20 h-20 bg-amber-700" onClick={nextSlide}>next</button>
      </div>
      <div className="relative w-full h-[1500px] pt-30">
        <div ref={bg} className="absolute inset-0 transition-all duration-2000" style={{backgroundImage: `url(${women})`, 
      backgroundSize: "cover", backgroundPosition: "center"}}>
        </div>
      <div className="absolute mx-auto max-w-300 ml-50">
      <div className="text-white font-bold md:ml-[15%] lg:ml-[50%]">
      <div className="text-[#50c1fc] text-xl md:text-2xl md:mb-5 lg:text-3xl">Health</div> 
      <div className="text-5xl md:text-6xl md:w-120 lg:text-8xl">Know <br className="hidden md:hidden" />your body<br /> by heart.</div>
      <div className="mt-5 text-base max-w-110 md:text-base md:w-130 md:mt-10 md:max-w-150 lg:text-2xl lg:max-w-120">The more insights you have, the more empowered you are to take action. From the ECG app to the Vitals app and more, Apple Watch Series 11 provides a bigger picture of your health, so you can stay informed. And now Series 11 takes the next big step in heart health with a pioneering feature — hypertension notifications.</div>
      </div>
      </div>
      </div>
      <div className="relative w-full h-[2000px]">
      <div ref={bg} className="absolute inset-0 transition-all duration-2000" style={{backgroundImage: `url(${women})`, 
      backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl"></div>
      </div>
      <div className="relative px-5 mx-auto pt-30 md:max-w-200 lg:max-w-300">
      
      <div className="mx-auto pt-10 max-w-100 md:max-w-300 md:pr-5 md:pl-5 lg:max-w-300">
      <div className="text-white font-bold">
        <div ref={trigger1} className="text-3xl max-w-100 md:text-4xl lg:text-5xl lg:max-w-160">Get notified of chronic high blood pressure.</div>
        <div className="mt-6 text-base max-w-120 md:text-xl md:max-w-170 lg:text-2xl lg:max-w-200">Hypertension, or high blood pressure, impacts over 1.3 billion adults worldwide and is a leading cause of heart attack, stroke and kidney disease. The condition frequently goes undiagnosed because it often has no symptoms — and even during a doctor’s visit, with a single measurement it can be easily missed.</div>
      </div>
      <div className=" text-white mt-20 text-sm md:text-base md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-10 lg:flex lg:gap-10 lg:max-w-300">
        <div className="mb-10 max-w-100 md:mb-0 md:max-w-85 lg:max-w-70">
        <div className="mb-4" 
        style={{backgroundImage: `url(${ring})`, width: 35, height:45, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
        <div>Receive hypertension notifications, just by wearing your watch. Series 11 can notify you if it identifies patterns of hypertension.1 How? The optical sensor provides data to an algorithm that can detect potential hypertension by analysing how your blood vessels respond to beats of the heart over 30‑day periods.</div>
        </div>
        <div className="mb-10 max-w-100 md:mb-0 md:max-w-85 lg:max-w-70">
        <div className="mb-4"  
        style={{backgroundImage: `url(${react})`, width: 35, height:45, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
        <div>Ground­breaking insights. Grounded in science. We developed hypertension notifications using advanced machine learning methods and a series of studies, totalling over 100,000 participants. The feature was then validated in a clinical study.</div>
        </div>
        <div className="max-w-100 md:max-w-85 lg:max-w-70">
        <div className="mb-2"  
        style={{backgroundImage: `url(${health})`, width: 35, height:54, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
        <div>Set up a blood pressure log. If you receive a hypertension notification and have access to a blood pressure cuff, you can track your blood pressure in the Health app on iPhone to create a report that will lead to more meaningful conversations with your healthcare provider.</div>
        </div>
      </div>
      </div>
      </div>
      <div className=" text-white absolute px-30">
      <div className="font-bold text-3xl pt-30 mb-5">More features to empower your health.</div>
      <div className="flex gap-3 overflow-x-scroll">
      <div className="">
      <div className="lg:w-[700px] lg:h-[500px] relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple1})`, backgroundPosition: "center",borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="text-base max-w-130 p-4">Wake up to your sleep score. Sleep quality is influenced by factors such as sleep duration, bed­time consistency, how often you wake up and time spent in each sleep stage. Sleep score analyses these factors every night and provides a classification and a score. You’ll see how the score is calculated, so you can understand the quality of your sleep and learn how to make it more restorative.</div>
      </div>
      <div className="">
      <div className="lg:w-[440px] lg:h-[500px] relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple2})`, backgroundPosition: "center", borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="mx-auto text-base max-w-100 p-4">Keep an eye on sleep apnoea. Sleep apnoea is a condition where people experience repeated interruptions in their regular respiratory pattern during sleep. If untreated, it can lead to increased risk of hypertension, type 2 diabetes, cardiac issues and more. Series 11 can monitor for breathing disturbances over time and notify you of possible sleep apnoea.</div>
      </div>
      <div className="">
      <div className="lg:w-[440px] lg:h-[500px] relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple3})`, backgroundPosition: "center", borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="mx-auto text-base max-w-100 p-4">The Vitals app. Your daily health status, ASAP. Quickly see your overnight health data — including heart rate, respiratory rate, wrist temperature, blood oxygen and sleep duration — and get notified if multiple metrics are ever outside your typical range.6</div>
      </div>
      <div className="">
      <div className="lg:w-[750px] lg:h-[500px] relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple4})`, backgroundPosition: "center", borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="text-base max-w-130 p-4">Follow your heart on the ECG app. With Series 11 you can check for signs of atrial fibrillation, or AF, right from your wrist by using the ECG app to generate a single‑lead electrocardiogram.12</div>
      </div>
      <div className="">
      <div className="lg:w-[440px] lg:h-[500px] relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple5})`, backgroundPosition: "center", borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="mx-auto text-base max-w-100 p-4">Stay on the pulse with the Heart Rate app. You can check your heart rate at any time — and get automatic notifications for a high or low heart rate or an irregular rhythm.13</div>
      </div>
      <div className="">
      <div className="lg:w-[440px] lg:h-[500px] relative">
      <div className="inset-0 absolute" style={{backgroundImage: `url(${apple6})`, backgroundPosition: "center", borderRadius: 20, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
      </div>
      <div className="mx-auto text-base max-w-100 p-4">Cycle Tracking keeps you in the loop. Since cycles vary, the best way to understand what’s normal for you is by tracking your menstrual cycle. You can use Cycle Tracking to log your period, record symptoms and get predictions about your next period or fertile window.14 It can also notify you if a cycle deviation is detected.</div>
      </div>
      </div>      
      </div>
      </div>
      <div className="p-5 mb-15 md:mb-0">
      <div className="mx-auto max-w-120 mt-20 md:max-w-250 md:text-center">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#fa1858]">Fitness</div>
      <div ref={trigger2} className="max-w-100 text-5xl mt-1 mb-5 md:mx-auto md:mt-5 md:mb-10 md:max-w-120 md:text-6xl lg:max-w-200 lg:text-8xl font-bold">Better by every measure.</div>
      <div className="font-bold mx-auto max-w-150 md:max-w-129 md:text-base lg:max-w-160 lg:text-2xl mb-20 text-gray-600">Whether you’re training for a marathon or swimming lengths, Apple Watch Series 11 serves up endless ways to work out. And it uses helpful metrics to count every move, so you know how to push harder and train smarter. Let’s go — the starting line is on your wrist.</div>
      </div>
      <div className="flex flex-col items-center mx-auto max-w-150 md:items-start md:max-w-250 lg:max-w-500 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-40 lg:gap-x-60 lg:gap-y-1">
       <div className="order-2 mt-10 w-[500px] h-[500px] mr-20 md:mt-0 md:order-none md:translate-x-[calc(50vw-500px)] lg:translate-x-[calc(40vw-600px)] md:w-[600px] md:h-[600px] lg:w-[950px] lg:h-[950px]" style={{backgroundImage: `url(${watch1})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
       <div className="order-1 md:order-none flex flex-col z-1 md:mt-5 max-w-120 md:max-w-90">
       <div style={{backgroundImage: `url(${run})`, width: 70, height: 70, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
       <div className="md:text-base pt-2">A refreshed Workout app. An improved layout highlights four new corner buttons, making it even quicker to access your go‑to features like Pacer, Race Route and Custom Workout.</div>
       </div>
       <div className="order-4 mt-10 flex flex-col max-w-110 md:mt-0 md:order-none md:max-w-90 z-1 md:translate-x-[calc(10vw-50px)] md:translate-y-40 lg:translate-x-[calc(45vw-450px)] lg:translate-y-90">
       <div style={{backgroundImage: `url(${clock})`, width: 70, height: 70, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
       <div className="text-base pt-2">Run circles around your Activity rings. Move. Exercise. Stand. The Activity app can track your daily activity. You can easily pause your rings or adjust your goals for each day of the week.</div>
       </div>
       <div className="order-3 mt-10 ml-20 md:mt-0 md:ml-0 md:order-none w-[500px] h-[500px] relative md:-translate-x-30 md:-translate-y-60 lg:-translate-x-50 lg:-translate-y-90 md:w-[600px] md:h-[600px] lg:w-[950px] lg:h-[950px]" style={{backgroundImage: `url(${watch2})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
      </div>
      </div>
      <div className="text-white relative w-full h-[1800px]">
       <div className="absolute inset-0 pl-10 pr-10" style={{backgroundImage: `url(${girlrunning})`, width: "100%" ,backgroundSize: "cover", backgroundPosition: "50% 0%",backgroundRepeat: "no-repeat"}}>
       <div className="mx-auto max-w-110 md:mx-0 md:max-w-100 pt-35 lg:max-w-300">
       <div className="font-bold text-3xl md:text-4xl lg:text-5xl lg:max-w-80 mb-6">To know you <br className="hidden lg:block"/> is to <br className="hidden md:block"/> move you.</div> 
       <div className="text-xl md:max-w-120 md:text-xl lg:text-2xl lg:max-w-110">Now, in addition to detailed insights, Apple Watch Series 11 provides personalised fitness encouragement. With Apple Intelligence from your nearby iPhone, Workout Buddy gives you audible motivation in real time. Together with Workout media, Heart Rate Zones and Custom Workouts, there are even more brains behind the burn.</div>
       </div>
       <div className="mx-auto w-200 pt-35">
        <div className="absolute bottom-10 ml-100">
        <div className="relative inset-0 items-center bg-center" style={{backgroundImage: `url(${color})` ,width: 600, height: 200 ,backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
          <div className="text-5xl font-bold w-120 mb-3">Way to go! That was your fastest 5K ever.</div> 
        </div>
       <div className="text-base font-bold w-130">Meet your new Workout Buddy. A brand‑new text‑to‑speech model generates personalised pep talks using voice data from an Apple Fitness+ trainer, so it has the right energy, style and tone for a workout.4 Time to buddy up.</div>
       </div>
       </div>
       </div>
      </div>
      <div className="max-w-120 md:max-w-300 mx-auto pb-50 pt-30 pr-5 pl-5 lg:max-w-250">
      <div className="md:text-center mx-auto">
      <div className="font-bold text-[#fa1858] text-2xl md:text-3xl">Safety</div>
      <div className="text-5xl mt-3 mb-5 md:text-6xl md:mt-5 md:mb-10 lg:text-8xl font-bold">A real lifeline</div>
      <div className="font-bold text-lg md:text-xl md:max-w-160 lg:text-2xl lg:max-w-220 mx-auto mb-10 text-gray-600">Packed with innova­tive safety firsts, Apple Watch Series 11 has your back. It’s designed to summon help when you need it most — even if you can’t reach your iPhone.</div>
      </div>
      <div className="mx-auto mb-10 md:mb-0 w-[350px] h-[350px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px]" style={{backgroundImage: `url(${watchmulti})`, backgroundSize: "cover"}}></div>
      <div className="font-bold md:max-w-220 mx-auto md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-10 md:gap-y-3 lg:max-w-250 lg:gap-x-1.5 lg:gap-y-1">
        <div className="mb-10 md:mb-0">
        <div style={{backgroundImage: `url(${icon1})`, width: 40, height: 50, backgroundSize: "cover"}}></div>
        <div className="mt-3 text-gray-700 md:text-base md:max-w-65 lg:text-lg md: lg:max-w-70">Emergency SOS. ASAP. Need urgent help? Just press and hold the side button on your Apple Watch Series 11 to try to call emergency services and share your location.</div>
        </div>
        <div className="mb-10 md:mb-0">
        <div style={{backgroundImage: `url(${icon2})`, width: 40, height: 50, backgroundSize: "cover"}}></div>
        <div className="mt-3 text-gray-700 md:text-base md:max-w-65 lg:text-lg md: lg:max-w-70">Fall Detection at the ready. If Series 11 detects that you’ve taken a hard fall, it can automatically help connect you with emergency services, provide call handlers with your location and notify loved ones.</div>
        </div>
        <div className="mb-10 md:mb-0">
        <div style={{backgroundImage: `url(${icon3})`, width: 40, height: 50, backgroundSize: "cover"}}></div>
        <div className="mt-3 text-gray-700 md:text-base md:max-w-65 lg:text-lg md: lg:max-w-70">Crash Detection. Your guardian on the go. If you’ve been in a serious car crash, Series 11 can automatically help call emergency services, share your location and notify your emergency contacts.</div>
        </div>
        <div className="mb-10 md:mb-0">
        <div style={{backgroundImage: `url(${icon4})`, width: 40, height: 50, backgroundSize: "cover"}}></div>
        <div className="mt-3 text-gray-700 md:text-base md:max-w-65 lg:text-lg md: lg:max-w-70">When you’re out, Check In. Your watch can automatically notify someone when you arrive at your destination. And if you’re going for a run after dark, you can start a Check In for the duration of your workout to let a friend know when you’re done.</div>
        </div>
        <div className="mb-10 md:mb-0">
        <div style={{backgroundImage: `url(${icon5})`, width: 40, height: 55, backgroundSize: "cover"}}></div>
        <div className="mt-3 text-gray-700 md:text-base md:max-w-65 lg:text-lg md: lg:max-w-70">Let Backtrack get you back on track. Backtrack in the Compass app uses GPS data to automatically create a path of where you’ve been when you’re off the grid. Easily add waypoints for anything of interest, like the trailhead or your campsite.</div>
        </div>
        <div className="mb-10 md:mb-0">
        <div style={{backgroundImage: `url(${icon6})`, width: 40, height: 50, backgroundSize: "cover"}}></div>
        <div className="mt-3 text-gray-700 md:text-base md:max-w-65 lg:text-lg md: lg:max-w-70">Set up your Medical ID. In an emergency, first responders are able to quickly access critical medical information — like allergies or medications — directly from your Series 11.</div>
        </div>
      </div>
      </div>
      <div className="relative max-w-150 md:max-w-300 mx-auto pl-10 pr-10 md:pl-15 md:pr-15 pb-50 text-gray-900">
      <div className="text-3xl font-bold mb-10 md:text-5xl ">Apple Watch</div>
      <div className="lg:flex w-300 gap-5">
      <div className="mr-12 font-bold text-xl md:text-2xl cursor-pointer">
        <div className=" font-light text-lg cursor-auto text-[#6e6e73] mb-2">Explore Watch</div>
        <div className="mb-2">Explore All Apple Watch</div>
        <div className="mb-2">Apple Watch Series 11</div>
        <div className="mb-2">Apple Watch SE 3</div>
        <div className="mb-2">Apple Watch Ultra 3</div>
        <div className="mb-2">Apple Watch Nike</div>
        <div className="mb-2">Apple Watch Hermès</div>
        <div className="text-base cursor-pointer font-bold">
         <div className="mt-5 mb-2 lg:mt-7 lg:mb-3 ">Compare Watch</div>
         <div>Why Apple Watch</div>
        </div>
      </div>
      <div className="md:flex lg:flex-row mt-10 lg:mt-0 lg:gap-5">
      <div className="mr-7 font-bold cursor-pointer">
        <div className=" font-light cursor-auto text-[#6e6e73] mb-2">Shop Watch</div>
        <div className="mb-2">Shop Apple Watch</div>
        <div className="mb-2">Apple Watch Straps</div>
        <div className="mb-2">Apple Watch Accessories</div>
        <div className="mb-2">Apple Trade In</div>
        <div className="mb-2">Financing</div>
        <div className="mb-2">Personal Setup</div>
      </div>
      <div className="mt-10 md:mt-0 font-bold cursor-pointer">
        <div className="font-light cursor-auto text-[#6e6e73] mb-2">More from Watch</div>
        <div className="mb-2">Apple Watch Support</div>
        <div className="mb-2">AppleCare</div>
        <div className="mb-2">watchOS 26</div>
        <div className="mb-2">Apps by Apple</div>
        <div className="mb-2">Apple Fitness+</div>
      </div>
      </div>
      </div>
      </div>
      <div className="pl-5 pr-5 text-gray-600 bg-gray-100">
      <div className="mx-auto max-w-250 bg-gray-100">
       <ol className="list-decimal list-inside text-xs pt-5">
        <li className="pb-2">Hypertension notifications are not intended for use by people under 22 years old, those who have been previously diagnosed with hypertension, or pregnant persons.</li>
        <li className="pb-2">All-day battery life including sleep tracking is based on the following use: 300 time checks, 90 notifications, 15 minutes of app use, a 60‑minute workout with music playback from Apple Watch via Bluetooth and 6 hours of sleep tracking, over the course of 24 hours; Apple Watch Series 11 (GPS) usage includes connection to iPhone via Bluetooth during the entire 24‑hour test; Apple Watch Series 11 (GPS + Cellular) usage includes a total of 4 hours of cellular connection and 20 hours of connection to iPhone via Bluetooth over the course of 24 hours. Battery life in Low Power Mode including sleep tracking is based on the following use: 530 time checks, 160 notifications, 26 minutes of app use, a 60‑minute workout with music playback from Apple Watch via Bluetooth and 6 hours of sleep tracking, over the course of 38 hours; Apple Watch Series 11 (GPS) usage includes connection to iPhone via Bluetooth during the entire 38‑hour test; Apple Watch Series 11 (GPS + Cellular) usage includes on‑demand cellular connection and 30 hours of connection to iPhone via Bluetooth over the course of 38 hours. Testing conducted by Apple in July and August 2025 using pre‑production Apple Watch Series 11 (GPS) and Apple Watch Series 11 (GPS + Cellular), each paired with an iPhone; all devices tested with pre‑release software. Battery life varies by use, configuration, mobile network, signal strength and many other factors; actual results will vary.</li>
        <li className="pb-2">Apple Watch Series 11 with Ion‑X glass has a ceramic coating that provides 2x more scratch resistance than Series 10 with Ion‑X glass.</li>
        <li className="pb-2">Requires an Apple Intelligence–enabled iPhone nearby and Bluetooth headphones with device and Siri language set to English. Apple Intelligence is available in beta. Some features may not be available in all regions or languages. For feature and language availability and system requirements, see <a className="underline cursor-pointer text-black">support.apple.com/en-gb/121115.</a></li>
        <li className="pb-2">Data plan required. 5G is available in selected markets and through selected network providers. Speeds vary based on site conditions and network. For details on 5G support, contact your provider and see <a className="underline cursor-pointer text-black">apple.com/uk/watch/cellular.</a></li>
        <li className="pb-2">The Vitals app is for wellness purposes only and not for medical use.</li>
        <li className="pb-2">Charge times are from 0–80% and 0–100% using the included Apple Watch Magnetic Fast Charger to USB‑C Cable. Testing conducted by Apple in July and August 2025 using pre‑production Apple Watch Series 11 (GPS) and Apple Watch Series 11 (GPS + Cellular), each paired with an iPhone; all devices tested with pre‑release software, Apple Watch Magnetic Fast Charger to USB‑C Cable (Model A2515) and Apple 20W USB‑C Power Adapter (Model A2305). Fast-charge testing conducted with drained Apple Watch units. Times measured from the appearance of the Apple logo as the unit started up. Charge time varies with adapter, region, settings, initial battery levels, usage and environmental factors; actual results will vary.</li>
        <li className="pb-2">The temperature sensing feature is not intended for medical use. Temperature sensing is available only on Apple Watch Series 8 and later, Apple Watch SE 3 and all Apple Watch Ultra models.</li>
        <li className="pb-2">Apple Watch Series 11 has a water resistance rating of 50 metres under ISO standard 22810:2010. This means that it may be used for shallow-water activities like swimming in a pool or ocean. Apple Watch Series 11 should not be used for scuba diving, waterskiing or other activities involving high‑velocity water or submersion below shallow depth. Water resistance is not a permanent condition and can diminish over time. For additional information, see support.apple.com/en-gb/109522.</li>
        <li className="pb-2">Apple Watch Series 11 is rated IP6X dust resistant.</li>
        <li className="pb-2">Sleep apnoea notifications are available on Apple Watch Series 9 and later, Ultra 2 and later, and SE 3. The feature is intended to detect signs of moderate to severe sleep apnoea for people 18 years old or older without a diagnosis of sleep apnoea.</li>
        <li className="pb-2">The ECG app is available on Apple Watch Series 4 and later (excluding Apple Watch SE models) and can generate an ECG similar to a single-lead electrocardiogram. Intended for use by people 22 years old and over.</li>
        <li className="pb-2">Irregular rhythm notification requires the latest version of watchOS and iOS. It is not intended for use by people under 22 years old or those who have been previously diagnosed with atrial fibrillation (AF).</li>
        <li className="pb-2">The Cycle Tracking app should not be used for birth control or to diagnose a health condition.</li>
        <li className="pb-2">The Blood Oxygen app is for wellness purposes only and not for medical use.</li>
        <li className="pb-2">An Apple Music subscription is required for automatic music selection.</li>
        <li className="pb-2">Available only in selected cities and public transport systems. Requires eligible device and OS version. <a className="underline cursor-pointer text-black">See here for details.</a></li>
        <li className="pb-2">A subscription is required for Apple Fitness+.</li>
        <li className="pb-2">Apple Pay is not available in all markets. For a list of Apple Pay countries and regions, visit <a className="underline cursor-pointer text-black">support.apple.com/en-gb/HT207957.</a></li>
        <li className="pb-2">Live Translation in Messages is available in Chinese (Simplified), English (UK, US), French (France), German, Italian, Japanese, Korean, Portuguese (Brazil) and Spanish (Spain) on Apple Watch Series 9 and later, Apple Watch Ultra 2 and later and Apple Watch SE 3 when paired with an Apple Intelligence–enabled iPhone.</li>
        <li className="pb-2">Requires an iPhone and Apple Watch with second-generation Ultra Wideband chip. Ultra Wideband availability varies by region.</li>
        <li className="pb-2">Emergency SOS requires a cellular connection or Wi‑Fi calling with an internet connection from your Apple Watch or nearby iPhone. You can use cellular models of Apple Watch to make an emergency call in many locations, provided that mobile service is available. Some mobile networks may not accept an emergency call from your Apple Watch if your Apple Watch isn’t activated, if it isn’t compatible with or configured to operate on a particular mobile network, if it isn’t set up for mobile service, or if the mobile network does not support emergency calling over IMS. See <a className="underline cursor-pointer">support.apple.com/en-gb/108374</a> and <a className="underline cursor-pointer text-black">apple.com/uk/watch/cellular</a> for more information.</li>
        <li className="pb-2">Trade-in values will vary based on the condition, year and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied towards qualifying new device purchase or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. In-store trade-in requires presentation of a valid photo ID. Offer may not be available in all stores, and may vary between in-store and online trade-in. Desktop computer trade-in is currently only available online and some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from <a className="underline cursor-pointer text-black">Apple’s trade-in partner</a> for trade-in and recycling of eligible devices. Restrictions and limitations may apply.</li>
        <li className="pb-2">When angled away from the user as compared with Apple Watch Series 9 or earlier.</li>
        <li className="pb-2">All‑day battery life is based on the following use: 300 time checks, 90 notifications, 15 minutes of app use and a 60‑minute workout with music playback from Apple Watch via Bluetooth, over the course of 18 hours; Apple Watch SE 3 (GPS) usage includes connection to iPhone via Bluetooth during the entire 18‑hour test; Apple Watch SE 3 (GPS + Cellular) usage includes a total of 4 hours of cellular connection and 14 hours of connection to iPhone via Bluetooth over the course of 18 hours. Battery life in Low Power Mode including sleep tracking is based on the following use: 430 time checks, 130 notifications, 20 minutes of app use, a 60‑minute workout with music playback from Apple Watch via Bluetooth and 6 hours of sleep tracking, over the course of 32 hours; Apple Watch SE 3 (GPS) usage includes connection to iPhone via Bluetooth during the entire 32‑hour test; Apple Watch SE 3 (GPS + Cellular) usage includes on‑demand cellular connection and 24 hours of connection to iPhone via Bluetooth over the course of 32 hours. Testing conducted by Apple in July and August 2025 using pre‑production Apple Watch SE 3 (GPS) and Apple Watch SE 3 (GPS + Cellular), each paired with an iPhone; all devices tested with pre‑release software. Battery life varies by use, configuration, mobile network, signal strength and many other factors; actual results will vary.</li>
       </ol>
       <div className="text-xs pt-3 border-b border-gray-400 pb-1">
        <div className="pb-3">Apple Watch Ultra 3, Apple Watch Series 11 and Apple Watch SE 3 require iPhone 11 or later with iOS 26 or later.</div>
        <div className="pb-3">Straps subject to availability.</div>
        <div className="pb-3">To use Apple Pay you need a supported card from a participating card issuer. To check if your card is compatible with Apple Pay, contact your card issuer.</div>
        <div className="pb-3">Apple Pay is not available in all markets. <a className="underline cursor-pointer text-black">View Apple Pay countries and regions.</a></div>
        <div className="pb-3">Features are subject to change. Some features, applications and services may not be available in all regions or all languages. <a className="underline cursor-pointer text-black">View complete list.</a></div>
       </div>
       <div>
        <div className="flex items-center gap-3 text-xs pt-5 pb-5">
        <svg viewBox="0 0 180 180" className=" h-4 w-4 cursor-pointer">
         <path fill="#000" d="m108,35
             c5.587379,-6.7633 9.348007,-16.178439 8.322067,-25.546439
             c-8.053787,0.32369 -17.792625,5.36682 -23.569427,12.126399
             c-5.177124,5.985922 -9.711121,15.566772 -8.48777,24.749359
             c8.976891,0.69453 18.147476,-4.561718 23.73513,-11.329308" />
         <path fill="#000" d="M88,162.415214
             c-12.24469,0 -16.072174,6.151901 -26.213551,6.550446
             c-10.52422,0.398254 -18.538303,-10.539917 -25.26247,-20.251053
             c-13.740021,-19.864456 -24.24024,-56.132286 -10.1411,-80.613663
             c7.004152,-12.157551 19.521101,-19.85622 33.10713,-20.053638
             c10.334515,-0.197132 20.089069,6.952717 26.406689,6.952717" />
           <path fill="#000" d="M85,55
             c6.313614,0 18.167473,-8.59832 30.628998,-7.335548
             c5.21682,0.217129 19.860519,2.1073 29.263641,15.871029
             c-0.75766,0.469692 -17.472931,10.200527 -17.291229,30.443592
             c0.224838,24.213104 21.241287,32.270615 21.474121,32.373459
             c-0.177704,0.56826 -3.358078,11.482742 -11.072464,22.756622
             c-6.668747,9.746841 -13.590027,19.457977 -24.493088,19.659103
             c-10.713348,0.197403 -14.158287,-6.353043 -26.406677,-6.353043" />
        </svg>
        <div>&gt;</div>
        <div className="cursor-pointer">Watch</div>
        <div>&gt;</div>
        <div className="cursor-pointer">Apple Watch Series 11</div>
        </div>
        <div className="flex text-xs gap-5">
          <div className="max-w-35 lg:max-w-50">
            <div>
            <div className="font-black mb-1">Shop and Learn</div>
            <div className="cursor-pointer hover:underline inline-block mr-40 mb-1">Store</div>
            <div className="cursor-pointer hover:underline inline-block mr-40 mb-1">Mac</div>
            <div className="cursor-pointer hover:underline inline-block mr-40 mb-1">iPad</div>
            <div className="cursor-pointer hover:underline inline-block mr-40 mb-1">iPhone</div>
            <div className="cursor-pointer hover:underline inline-block mr-40 mb-1">Watch</div>
            <div className="cursor-pointer hover:underline inline-block mr-40 mb-1">Vision</div>
            <div className="cursor-pointer hover:underline inline-block mr-40 mb-1">AirPods</div>
            <div className="cursor-pointer hover:underline inline-block mr-40 mb-1">AirTag</div>
            <div className="cursor-pointer hover:underline inline-block mr-40 mb-1">Accessories</div>
            <div className="cursor-pointer hover:underline inline-block mb-1">Gift Cards</div>
            </div>
            <div>
            <div className="font-black mb-1 pt-3">Apple Wallet</div>
            <div className="cursor-pointer hover:underline inline-block mr-40 mb-1">Wallet</div>
            <div className="cursor-pointer hover:underline inline-block mb-1">Apple Pay</div>  
            </div>
          </div>
          <div className="max-w-35 lg:max-w-50">
            <div>
            <div className="font-black mb-1">Account</div>
            <div className="cursor-pointer hover:underline inline-block mb-1">Manage Your Apple Account</div>
            <div className="cursor-pointer hover:underline inline-block mb-1">Apple Store Account</div>
            <div className="cursor-pointer hover:underline inline-block mb-1">iCloud.com</div>
            </div>
            <div>
              <div className="font-black mb-1 pt-3">Entertainment</div>
              <div className="w-30 cursor-pointer hover:underline inline-block mr-20 mb-1">Apple One</div>
              <div className="w-30 cursor-pointer hover:underline inline-block mr-20 mb-1">Apple TV</div>
              <div className="w-30 cursor-pointer hover:underline inline-block mr-20 mb-1">Apple Music</div>
              <div className="w-30 cursor-pointer hover:underline inline-block mr-20 mb-1">Apple Arcade</div>
              <div className="w-30 cursor-pointer hover:underline inline-block mr-20 mb-1">Apple Fitness+</div>
              <div className="w-30 cursor-pointer hover:underline inline-block mr-20 mb-1">Apple News+</div>
              <div className="w-30 cursor-pointer hover:underline inline-block mr-20 mb-1">Apple Podcasts</div>
              <div className="w-30 cursor-pointer hover:underline inline-block mr-20 mb-1">Apple Books</div>
              <div className="w-30 cursor-pointer hover:underline inline-block mr-20 mb-1">Apple Store</div>
            </div>
          </div>
          <div className="max-w-35 lg:max-w-50">
            <div className="font-black mb-1">Apple Store</div>
            <div className="w-32 cursor-pointer hover:underline inline-block mr-20 mb-1">Find a Store</div>
            <div className="w-32 cursor-pointer hover:underline inline-block mr-20 mb-1">Genius Bar</div>
            <div className="w-32 cursor-pointer hover:underline inline-block mr-20 mb-1">Today at Apple</div>
            <div className="w-32 cursor-pointer hover:underline inline-block">Group Reservations</div>
            <div className="w-32 cursor-pointer hover:underline inline-block">Apple Summer Camp</div>
            <div className="w-32 cursor-pointer hover:underline inline-block mr-20 mb-1">Apple Store App</div>
            <div className="w-32 cursor-pointer hover:underline inline-block">Certified Refurbished</div>
            <div className="w-32 cursor-pointer hover:underline inline-block mr-20 mb-1">Apple Trade In</div>
            <div className="w-32 cursor-pointer hover:underline inline-block mr-20 mb-1">Financing</div>
            <div className="w-32 cursor-pointer hover:underline inline-block mr-20 mb-1">Order Status</div>
            <div className="w-32 cursor-pointer hover:underline inline-block mr-20 mb-1">Shopping Help</div>
          </div>
          <div className="max-w-35 lg:max-w-60">
            <div>
            <div className="font-black mb-1">For Business</div>
            <div className="cursor-pointer hover:underline inline-block mb-1">Apple and Business</div>
            <div className="cursor-pointer hover:underline inline-block mb-1">Shop for Business</div>
            </div>
            <div>
            <div className="font-black mb-1 pt-3">For Education</div>
            <div className="cursor-pointer hover:underline inline-block mb-1">Apple and Education</div>
            <div className="cursor-pointer hover:underline inline-block mb-1">Shop for University</div>
            </div>
            <div>
            <div className="font-black mb-1 pt-3">For Healthcare</div>
            <div  className="cursor-pointer hover:underline inline-block mb-1">Apple and Healthcare</div>
            </div>
            <div>
            <div className="font-black mb-1 pt-3">For Goverment</div>
            <div  className="cursor-pointer hover:underline inline-block mb-1">Apple and Goverment</div>
            </div>
          </div>
          <div className="max-w-35 lg:max-w-50">
            <div>
            <div className="font-black mb-1">Apple Values</div>
            <div  className="cursor-pointer hover:underline inline-block mr-20 mb-1">Accessibility</div>
            <div  className="cursor-pointer hover:underline inline-block mr-20 mb-1">Education</div>
            <div  className="cursor-pointer hover:underline inline-block mr-20 mb-1">Environment</div>
            <div  className="cursor-pointer hover:underline inline-block mr-20 mb-1">Privacy</div>
            <div  className="cursor-pointer hover:underline inline-block mb-1">Supply Chain Innovation</div>  
            </div>
            <div className="max-w-35 lg:max-w-50">
            <div className="font-black mb-1 pt-3">About People</div>
            <div className="cursor-pointer hover:underline inline-block mr-20 mb-1">Newsroom</div>
            <div className="cursor-pointer hover:underline inline-block mr-20 mb-1">Apple Leadership</div>
            <div className="cursor-pointer hover:underline inline-block mb-1">Career Opportunities</div>
            <div className="cursor-pointer hover:underline inline-block mr-20 mb-1">Warranty</div>
            <div className="cursor-pointer hover:underline inline-block mr-20 mb-1">Investors</div> 
            <div className="cursor-pointer hover:underline inline-block mb-1">Ethics & Compliance</div>  
            <div className="cursor-pointer hover:underline inline-block mr-20 mb-1">Events</div>  
            <div className="cursor-pointer hover:underline inline-block mb-1">European Job Creation</div>  
            <div className="cursor-pointer hover:underline inline-block mr-20 mb-1">Contact Apple</div>   
            </div>
          </div>
        </div>
        <div className="text-xs pb-5 pt-7">
         <div className="text-gray-500 border-b border-gray-400 pb-5">More ways to shop: <div className="inline-block text-blue-500 underline cursor-pointer">find an Apple Store</div> or <div className="inline-block text-blue-500 underline cursor-pointer">other retailer</div> near you. Or call <div className="inline-block text-blue-500 underline cursor-pointer">0800 048 0408.</div></div>
         <div className="lg:flex gap-10 pt-5">
          <div className="text-gray-500">Copyright © 2025 Apple Inc. All rights reserved.</div>
          <div className="flex gap-2 mt-1 lg:mt-0">
          <div className="hover:underline hover:cursor-pointer">Privacy Policy</div>
          <div>|</div>
          <div className="hover:underline hover:cursor-pointer">Use of Cookies</div>
          <div>|</div>
          <div className="hover:underline hover:cursor-pointer">Terms of Use</div>
          <div>|</div>
          <div className="hover:underline hover:cursor-pointer">Sales and Refunds</div>
          <div>|</div>
          <div className="hover:underline hover:cursor-pointer">Legal</div>
          <div>|</div>
          <div className="hover:underline hover:cursor-pointer">Site Map</div>
          </div>
          
         </div>
         <div className="pl-15 text-right">United Kingdom</div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
