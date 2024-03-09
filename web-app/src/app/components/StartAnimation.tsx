import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../globals.css';

function StartAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSixtyPercentScreen, setShowSixtyPercentScreen] = useState(true);
  const [showFortyPercentScreen, setShowFortyPercentScreen] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setShowSixtyPercentScreen(false);
      const timeout = setTimeout(() => {
        setShowFortyPercentScreen(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }, 11000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${showSixtyPercentScreen ? 'w-full h-full flex absolute' : ''}`}>
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