"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import IconAndText from './components/IconAndText';

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
    <div className="h-screen flex">
      <div className="bg-blue-500 w-3/5">
        {/* Content for the 60% width column */}
        <div className="mt-50 ml-25">
          {/* New container with 50px padding */}
          <h1 className="text-5xl font-bold">MATT WONG</h1>
          <p className="text-xl">Software Developer. Studying Biomedical Engineering at the University of Waterloo.</p>
          <p>EXPERIENCE</p>
          <p>&gt; ExaCare</p>
          <p>ACCOMPLISHMENTS</p>
          <p>&gt; Academic</p>
        </div>
      </div>
      <div className="bg-red-500 flex-1 flex items-center justify-center border-l-4 border-black">
        <div className="w-100 h-300 border-4 border-black rounded-70 flex items-start justify-center bg-cover pt-3"
          style={{ backgroundImage: `url('https://i.pinimg.com/736x/30/86/1b/30861b54751c4f458c0054fb500dc76e.jpg')` }}>
          <div>
            <div className="w-70 flex items-center">
              <p className="text-m text-white justify-start pr-5 pl-2">{currentTime}</p>
              <div className="bg-black rounded-xl w-20 h-6 mx-auto"></div>
              <Image src="/statusbar.png" alt="iPhone Status Bar" width={80} height={50} className="filter brightness-0 invert justify-end" />
            </div>
            <div className="pt-8 pl-1 flex space-x-5">
              {icons.map((item, itemIndex) => (
                <IconAndText key={itemIndex} src={item.src} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}