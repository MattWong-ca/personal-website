/*import { useEffect, useState } from 'react';
import '/Users/matt_wong/Desktop/personal-website/web-app/src/app/globals.css';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';

// Fonts
const title = Poppins({
  subsets: ["latin-ext"],
  weight: ["700"],
  style: ["normal"]
});

const inter = Inter({
  subsets: ["latin"],
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

export default function Test() {
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
    { src: '/about.png', text: 'About', link: 'https://www.linkedin.com/in/mattwong-ca/' },
    { src: '/briefcase.png', text: 'Work', link: 'https://www.linkedin.com/in/mattwong-ca/' },
    { src: '/projects.png', text: 'Projects', link: 'https://www.linkedin.com/in/mattwong-ca/' },
    { src: '/education.jpeg', text: 'Education', link: 'https://www.linkedin.com/in/mattwong-ca/' }
  ];
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to toggle the visibility of the popup and set its content
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div style={{ overflow: 'hidden', height: '100vh', display: 'flex', position: 'relative' }}>
      <div style={{ position: 'relative' }}>
      <button style={{ zIndex: '1000' }} onClick={togglePopup}>Show Component</button>
    </div>
      {isPopupVisible ? (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
        <div style={{ width: '60%', height: '70%', backgroundColor: 'black', borderRadius: '10px', textAlign: 'center' }}>
          <div style={{ width: '100%', height: '20px', backgroundColor: 'grey', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}></div>
          <p>This is the content of the centered component.</p>
        </div>
      </div>
      ) : null} 
    </div>
  );
}*/

import React, { useState } from 'react';

function CenteredComponent() {
  return (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
      <div style={{ width: '60%', height: '70%', backgroundColor: 'black', borderRadius: '10px', textAlign: 'center' }}>
        <div style={{ width: '100%', height: '20px', backgroundColor: 'grey', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}></div>
        <p>This is the content of the centered component.</p>
      </div>
    </div>
  );
}

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div style={{ position: 'relative', zIndex: '100' }}>
      <button style={{ position: 'relative', zIndex: '1000' }} onClick={() => setShowComponent(!showComponent)}>Show Component</button>
      {showComponent && <CenteredComponent />}
    </div>
  );
}

export default App;