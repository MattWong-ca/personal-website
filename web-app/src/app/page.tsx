"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import IconAndText from './components/IconAndText';
import './globals.css';
import { Poppins } from 'next/font/google';

// Fonts
const title = Poppins({
  subsets: ["latin-ext"],
  weight: ["700"],
  style: ["normal"]
});

const tagline = Poppins({
  subsets: ["latin-ext"],
  weight: ["600"],
  style: ["normal"]
});

const experience = Poppins({
  subsets: ["latin-ext"],
  weight: ["400"],
  style: ["normal"]
});

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');
  const { DateTime } = require('luxon');

  function updateCurrentTimeET() {
    const etTime = DateTime.local().setZone('America/New_York');
    const formattedTime = etTime.toFormat('h:mm');
    setCurrentTime(formattedTime);
  }

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(updateCurrentTimeET, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  });

  const icons = [
    { src: '/about.png', text: 'About' },
    { src: '/about.png', text: 'About' },
    { src: '/about.png', text: 'About' },
    { src: '/about.png', text: 'About' },
  ];

  return (
    <div style={{ overflow: 'hidden', height: '100vh', display: 'flex' }}>
      <div style={{ width: '60%', position: 'relative', backgroundImage: `url('https://img.freepik.com/free-photo/cardboard-texture_1194-5419.jpg')` }}>
        {/* Content for the 60% width column */}
        <div style={{ marginTop: '12.5rem', marginLeft: '6.25rem' }}>
          {/* New container with 50px padding */}
          <h1 className="nameOutline" style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>MATTHEW WONG</h1>
          <h1 className={`${title.className} name`} style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>MATTHEW WONG</h1>
          <p className={`${tagline.className} `} style={{ fontSize: '1.6rem' }}>Shipping software at hackathons and studying engineering at UWaterloo!</p>
          <p className={`${tagline.className} `} style={{ fontSize: '1.6rem', marginTop: '2rem' }}>Experience</p>
          <div style={{ marginLeft: '1.3rem' }}>
            <p className={`${experience.className} `} style={{ fontSize: '1.3rem', marginTop: '0.5rem' }}>➔ Full stack developer, ExaCare</p>
            <p className={`${experience.className} `} style={{ fontSize: '1.3rem', marginTop: '0.5rem' }}>➔ iOS developer, theScore Bet</p>
            <p className={`${experience.className} `} style={{ fontSize: '1.3rem', marginTop: '0.5rem' }}>➔ Store designer, Shopify</p>
          </div>
        </div>
        <div style={{ position: 'relative', marginTop: '30px', right: '40px' }}>
          <Image
            src="/basketball.webp"
            alt="Basketball icon"
            width={300}
            height={0}
          // style={{ animation: 'hoverUpDown 15s ease infinite' }}
          />
        </div>
        <div style={{ transform: 'rotate(10deg)', position: 'absolute', bottom: 20, right: 30 }}>
          <Image
            src="/ethereum.webp"
            alt="3D Ethereum icon"
            width={150}
            height={0}
            style={{ animation: 'hoverUpDown 15s ease infinite' }}
          />
        </div>

      </div>
      <div className="flex-1 border-l-4 border-black"
        style={{ backgroundSize: 'cover', backgroundImage: `url('https://512pixels.net/downloads/macos-wallpapers-6k/10-3-6k.jpg')` }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '20px', width: '100%'}}>
          <p>{currentTime}</p>
          <Image src="/statusbar.png" alt="iPhone Status Bar" width={80} height={50} className="filter brightness-0 invert" />
        </div>
      </div>
    </div>
  );
}

{/*
        <div className="bg-gray-300 w-100 h-300 border-4 border-black rounded-70 flex items-start justify-center bg-cover pt-3"
          style={{ backgroundImage: `` }}>
          <div className="relative">
            <div className="w-70 flex items-center">
              <p className="text-m text-white justify-start pr-5 pl-2">{currentTime}</p>
              <div className="bg-black rounded-xl w-20 h-6 mx-auto"></div>
              <Image src="/statusbar.png" alt="iPhone Status Bar" width={80} height={50} className="filter brightness-0 invert justify-end" />
            </div>
            <div  className="pt-8 pl-1 flex space-x-5">
              {icons.map((item, itemIndex) => (
                <IconAndText key={itemIndex} src={item.src} text={item.text} />
              ))}
            </div>
            <div className="absolute bottom-0 w-100 h-20 bg-black rounded-70"></div>
          </div>
        </div>
        */ }