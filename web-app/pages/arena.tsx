import React, { useState, useEffect } from 'react';
import '../src/app/globals.css';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to mark the animation as complete after a delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Adjust the delay as needed

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <div className={`full-screen-slide ${isVisible ? 'slide-out' : ''}`}>
      
    </div>
    <div className="content">
        <h1>Welcome to My Website!</h1>
        <p>This content slides out from the top on the first load.</p>
      </div>
    </>
  );
}

export default App;