import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../globals.css';

function StartAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSixtyPercentScreen, setShowSixtyPercentScreen] = useState(true);
  const [showFortyPercentScreen, setShowFortyPercentScreen] = useState(true);

  useEffect(() => {
    // Force reset all states on component mount
    setIsVisible(false);
    setShowSixtyPercentScreen(true);
    setShowFortyPercentScreen(true);

    // Small delay to ensure DOM is ready, then start animation
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
      
      const sixtyPercentTimeout = setTimeout(() => {
        setShowSixtyPercentScreen(false);
        
        const fortyPercentTimeout = setTimeout(() => {
          setShowFortyPercentScreen(false);
        }, 1000);
        
        return () => clearTimeout(fortyPercentTimeout);
      }, 11000);
      
      return () => clearTimeout(sixtyPercentTimeout);
    }, 100);

    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <div className={showSixtyPercentScreen ? 'w-full h-full flex absolute' : ''}>
      <div className={`sixtyPercentSide ${showSixtyPercentScreen ? '' : 'slideOutDown'}`}>
        <div className={`fallingImageContainer ${isVisible ? 'falling' : ''}`}>
          <Image
            src="/spaceman.png"
            alt="Spaceman"
            width={170}
            height={0}
            style={{ marginLeft: 'auto', marginTop: '15px', marginRight: '20px', zIndex: '9999' }}
          />
        </div>
      </div>
      <div className={`fortyPercentSide ${showFortyPercentScreen ? '' : 'slideOutUp'}`}></div>
    </div>
  );
}

export default StartAnimation;