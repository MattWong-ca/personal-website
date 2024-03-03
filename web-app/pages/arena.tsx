import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../src/app/globals.css';

function StartAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const [blackScreenVisible, setBlackScreenVisible] = useState(true);
  const [showRedScreen, setShowRedScreen] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    // Set a timeout to mark the black screen removal after the astronaut animation is complete
    const timeout = setTimeout(() => {
      setBlackScreenVisible(false);
      const timeout2 = setTimeout(() => {
        setShowRedScreen(false);        
      }, 1000);
      return () => clearTimeout(timeout2);

    }, 11000); // Adjust the delay to match the astronaut animation duration

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${blackScreenVisible ? 'w-full h-full flex absolute' : ''}`}>
      <div className={`${'full-screen-slide'} ${blackScreenVisible ? '' : 'slide-out'}`}>
        <div className={`falling-image-container ${isVisible ? 'falling' : ''}`}>
          <Image
            src="/spaceman.png"
            alt="Spaceman"
            width={170}
            height={0}
            style={{ marginLeft: 'auto', marginTop: '15px', marginRight: '20px' }}
          />
        </div>
      </div>
        <div className={`full-screen-slidee ${showRedScreen ? '' : 'slide-outt'}`}></div>
         </div>
  );
}

export default StartAnimation;