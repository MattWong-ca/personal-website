// import React, { useState, useEffect } from 'react';
// import '../src/app/globals.css';
// import Image from 'next/image';

// function Home() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Set a timeout to mark the animation as complete after a delay
//     const timeout = setTimeout(() => {
//       setIsVisible(true);
//     }, 1000); // Adjust the delay as needed

//     // Cleanup function to clear the timeout
//     return () => clearTimeout(timeout);
//   }, []);

//   const [isVisiblee, setIsVisiblee] = useState(false);
//   useEffect(() => {
//     // Set a timeout to mark the animation as complete after a delay
//     const timeout = setTimeout(() => {
//       setIsVisiblee(true);
//     }, 1000); // Adjust the delay as needed
//     // Cleanup function to clear the timeout
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className="w-full h-full flex">
//       <div style={{ width: '60%', height: '100vh', backgroundColor: 'black' }}>
//         <div className={`falling-image-container ${isVisiblee ? 'falling' : ''}`}>
//           <Image
//             src="/spaceman.png"
//             alt="Matt Wong profile picture"
//             width={170}
//             height={0}
//             style={{ marginLeft: 'auto', marginTop: '15px', marginRight: '20px' }}
//           />
//         </div>
//       </div>
//       <div  style={{ width: '40%', height: '100vh', backgroundColor: 'black'}}>
//       </div>
//     </div>
//   );
// }

// export default Home;

//      <>
//      <div className={`full-screen-slide ${isVisible ? 'slide-out' : ''}`}>

// </div>
// <div className="content">
//   <h1>Welcome to My Website!</h1>
//   <p>This content slides out from the top on the first load.</p>
// </div>
//      </>

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../src/app/globals.css';

const AnimationSequence = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [is60Visible, setIs60Visible] = useState(false);

  useEffect(() => {
    // Set a timeout to mark the spaceman animation as complete after a delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Adjust the delay as needed

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Set a timeout to mark the 60% div animation as complete after spaceman animation
    const timeout = setTimeout(() => {
      setIs60Visible(true);
    }, 2000); // Adjust the delay as needed

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div className="w-full h-full flex">
      <div style={{ width: '60%', height: '100vh', backgroundColor: 'black' }}>
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
      <div className={`slide-up-container ${is60Visible ? 'slide-up' : ''}`} style={{ width: '40%', height: '100vh', backgroundColor: 'black'}}>
        <p style={{ color: 'white' }}>This is the 60% div.</p>
      </div>
    </div>
  );
};

export default AnimationSequence;