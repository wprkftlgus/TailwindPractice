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
    <div className="overflow-x-hidden overflow-y-hidden font-lexend">
      <div className="flex w-full p-2 bg-gray-50 z-2 fixed">
      <div className="mx-auto gap-50 flex justify-between  items-center">
      <div className="font-bold">Apple Watch Series 11</div>
      <div className="flex cursor-pointer gap-5 text-xs items-center">
      <div>Overview</div>
      <div>Why Apple Watch</div>
      <div>Tech Specs</div>
      <div className="bg-blue-700 px-2 py-1 text-white" style={{borderRadius: 15}}>buy</div>
      </div>
      </div>
      </div>
      <div className="w-full">
      <div className="mx-auto w-400 font-bold text-5xl pb-15 pt-25">Get the highlights.</div>
      </div>
      <div className="w-200 overflow-hidden">
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
      <div className=" mx-auto pt-30 max-w-250">
      <div className="text-white font-bold ml-100">
      <div className="text-[#50c1fc] text-3xl">Health</div> 
      <div className="text-8xl mt-4">Know <br />your body<br /> by heart.</div>
      <div className="mt-10 text-xl">The more insights you have, the more empowered you are to take action. From the ECG app to the Vitals app and more, Apple Watch Series 11 provides a bigger picture of your health, so you can stay informed. And now Series 11 takes the next big step in heart health with a pioneering feature — hypertension notifications.1</div>
      </div>
      </div>
      <div className="w-300 mx-auto pt-70">
      <div className="text-white font-bold">
        <div ref={trigger1} className=" text-6xl w-180">Get notified of chronic high blood pressure.</div>
        <div className="mt-6 text-2xl w-230">Hypertension, or high blood pressure, impacts over 1.3 billion adults worldwide and is a leading cause of heart attack, stroke and kidney disease. The condition frequently goes undiagnosed because it often has no symptoms — and even during a doctor’s visit, with a single measurement it can be easily missed.</div>
      </div>
      <div className="flex gap-15 text-white text-base mt-20 w-300">
        <div className="max-w-100">
        <div className="mb-4" 
        style={{backgroundImage: `url(${ring})`, width: 35, height:45, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
        <div>Receive hypertension notifications, just by wearing your watch. Series 11 can notify you if it identifies patterns of hypertension.1 How? The optical sensor provides data to an algorithm that can detect potential hypertension by analysing how your blood vessels respond to beats of the heart over 30‑day periods.</div>
        </div>
        <div className="max-w-100">
        <div className="mb-4"  
        style={{backgroundImage: `url(${react})`, width: 35, height:45, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
        <div>Ground­breaking insights. Grounded in science. We developed hypertension notifications using advanced machine learning methods and a series of studies, totalling over 100,000 participants. The feature was then validated in a clinical study.</div>
        </div>
        <div className="max-w-100">
        <div className="mb-2"  
        style={{backgroundImage: `url(${health})`, width: 35, height:54, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
        <div>Set up a blood pressure log. If you receive a hypertension notification and have access to a blood pressure cuff, you can track your blood pressure in the Health app on iPhone to create a report that will lead to more meaningful conversations with your healthcare provider.</div>
        </div>
      </div>
      </div>
      <div className="text-white">
      <div className="text-2xl pt-30 mb-5">More features to empower your health.</div>
      <div className=" overflow-hidden flex gap-3">
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
      <div className="mx-auto w-200 mt-30" style={{textAlign: "center"}}>
      <div className="text-3xl font-bold text-[#fa1858]">Fitness</div>
      <div ref={trigger2} className="text-8xl font-bold mt-5 mb-10">Better by every measure.</div>
      <div className="text-2xl mb-10">Whether you’re training for a marathon or swimming lengths, Apple Watch Series 11 serves up endless ways to work out. And it uses helpful metrics to count every move, so you know how to push harder and train smarter. Let’s go — the starting line is on your wrist.</div>
      </div>
      <div className="mx-auto grid grid-cols-2 grid-rows-2 gap-x-60 gap-y-1">
       <div className="translate-x-[calc(40vw-600px)]" style={{backgroundImage: `url(${watch1})`, width: 950, height: 950, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
       <div className="flex flex-col z-1 mt-5">
       <div style={{backgroundImage: `url(${run})`, width: 70, height: 70, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
       <div className="text-base w-100 pt-2">A refreshed Workout app. An improved layout highlights four new corner buttons, making it even quicker to access your go‑to features like Pacer, Race Route and Custom Workout.</div>
       </div>
       <div className="flex flex-col z-1 translate-x-[calc(45vw-450px)] translate-y-90">
       <div style={{backgroundImage: `url(${clock})`, width: 70, height: 70, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
       <div className="text-base w-100 pt-2">Run circles around your Activity rings. Move. Exercise. Stand. The Activity app can track your daily activity. You can easily pause your rings or adjust your goals for each day of the week.</div>
       </div>
       <div className="relative -translate-x-50 -translate-y-90" style={{backgroundImage: `url(${watch2})`, width: 950, height: 950, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div>
      </div>
      <div className="text-white relative w-full h-[1900px]">
       <div className="absolute inset-0" style={{backgroundImage: `url(${girlrunning})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
       <div className="mx-auto w-300 pt-35">
       <div className="text-5xl font-bold w-130 mb-6">To know you is to move you.</div> 
       <div className="text-2xl w-155">Now, in addition to detailed insights, Apple Watch Series 11 provides personalised fitness encouragement. With Apple Intelligence from your nearby iPhone, Workout Buddy gives you audible motivation in real time. Together with Workout media, Heart Rate Zones and Custom Workouts, there are even more brains behind the burn.</div>
       </div>
       <div className="mx-auto w-200 pt-35">
        <div className="ml-100">
        <div className="relative inset-0 items-center bg-center" style={{backgroundImage: `url(${color})` ,width: 600, height: 200 ,backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
          <div className="text-5xl font-bold w-120 mb-3">Way to go! That was your fastest 5K ever.</div> 
        </div>
       <div className="text-base font-bold w-130">Meet your new Workout Buddy. A brand‑new text‑to‑speech model generates personalised pep talks using voice data from an Apple Fitness+ trainer, so it has the right energy, style and tone for a workout.4 Time to buddy up.</div>
       </div>
       </div>
       </div>
      </div>
      <div className="relative max-w-2xl mx-auto">
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
      <div className="text-gray-600 bg-gray-100">
      <div className="mx-auto w-250 bg-gray-100">
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
       <div className="text-xs pt-3">
        <div className="pb-3">Apple Watch Ultra 3, Apple Watch Series 11 and Apple Watch SE 3 require iPhone 11 or later with iOS 26 or later.</div>
        <div className="pb-3">Straps subject to availability.</div>
        <div className="pb-3">To use Apple Pay you need a supported card from a participating card issuer. To check if your card is compatible with Apple Pay, contact your card issuer.</div>
        <div className="pb-3">Apple Pay is not available in all markets. View Apple Pay countries and regions.</div>
        <div className="pb-3">Features are subject to change. Some features, applications and services may not be available in all regions or all languages. View complete list.</div>
       </div>
      </div>
      </div>
    </div>
  )
}
