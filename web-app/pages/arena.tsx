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
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Start fade-in animation after a delay
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 12000); // Adjust timeout duration as needed

    // Cleanup function to clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={`${blackScreenVisible ? 'w-full h-full flex absolute' : ''}`}>
      {/* <div className={`${'sixtyPercentSide'} ${blackScreenVisible ? '' : 'slideOutDown'}`}>
        <div className={`fallingImageContainer ${isVisible ? 'falling' : ''}`}>
          <Image
            src="/spaceman.png"
            alt="Spaceman"
            width={170}
            height={0}
            style={{ marginLeft: 'auto', marginTop: '15px', marginRight: '20px' }}
          />
        </div>
      </div>
      <div className={`fortyPercentSide ${showRedScreen ? '' : 'slideOutUp'}`}></div> */}
      <div className={fadeIn ? 'fade-in' : ''} style={{ color: fadeIn ? '': 'white'}}>
        Content here
      </div>
    </div>
  );
}

export default StartAnimation;