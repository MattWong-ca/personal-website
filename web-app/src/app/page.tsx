"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import IconAndText from './components/IconAndText';
import './globals.css';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Box, Modal, Typography } from '@mui/material';
import BasicModal from './mui';

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
    { src: '/about.png', text: 'About', link: 'https://www.linkedin.com/in/mattwong-ca/' },
    { src: '/briefcase.png', text: 'Work', link: 'https://www.linkedin.com/in/mattwong-ca/' },
    { src: '/projects.png', text: 'Projects', link: 'https://www.linkedin.com/in/mattwong-ca/' },
    { src: '/education.jpeg', text: 'Education', link: 'https://www.linkedin.com/in/mattwong-ca/' }
  ];
  const [isPopupVisible, setPopupVisible] = useState(false);
  // const popupRef = useRef<HTMLDivElement | null>(null);
  // const iconRef = useRef<HTMLDivElement | null>(null);

  // Function to toggle the visibility of the popup and set its content
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (
  //     popupRef.current &&
  //     !popupRef.current.contains(event.target as Node) &&
  //     iconRef.current &&
  //     !iconRef.current.contains(event.target as Node)
  //   ) {
  //     setPopupVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   // Add event listener on component mount
  //   document.addEventListener('mousedown', handleClickOutside);
  //   // Remove event listener on component unmount
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  // MUI
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ overflow: 'hidden', height: '100vh', display: 'flex', position: 'relative', zIndex: '100' }}>
      <div style={{ width: '60%', position: 'relative', backgroundImage: `url('https://img.freepik.com/free-photo/cardboard-texture_1194-5419.jpg')` }}>
        {/* Content for the 60% width column */}
        <div style={{ marginTop: '12.5rem', marginLeft: '6.25rem' }}>
          {/* New container with 50px padding */}
          <h1 className={`${title.className} nameOutline`} style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>MATTHEW WONG</h1>
          <h1 className={`${title.className} name`} style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>MATTHEW WONG</h1>
          <p className={`${tagline.className} `} style={{ fontSize: '1.6rem' }}>Building software, designing products, & studying engineering at UWaterloo!</p>
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

      {/* 40% screen, mountain valley background */}
      <div className="flex-1 flex items-center justify-center border-l-4 border-black"
        style={{ backgroundSize: 'cover', backgroundImage: `url('https://images-s3.twelvesouth.com/large_files/Wallpapers_6/12S_Mountain_InnValley_Right_23.jpg')` }}
      >
        {/* iPhone */}
        <div className="bg-gray-300 w-100 h-300 rounded-70 bg-cover pt-3 relative"
          // In case I want to add opaque boxShadow back: 5px 5px 0 black
          style={{ border: '8px solid black', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)', backgroundImage: `url('https://512pixels.net/downloads/macos-wallpapers-6k/10-3-6k.jpg')` }}>

          {/* Status bar */}
          <div style={{ height: '26px' }} className="flex justify-center">
            <div className="w-70 flex items-center" style={{ justifyContent: 'space-between' }}>
              {currentTime ? (<p className="apple" style={{ fontSize: '1rem', color: 'white', justifyContent: 'start', paddingLeft: '0.5rem', paddingTop: '0.125rem' }}>{currentTime}</p>) : (<p className="apple" style={{ fontSize: '1rem', color: 'white', justifyContent: 'start', paddingLeft: '0.5rem', paddingTop: '0.125rem' }}>1:23</p>)}
              <Image src="/statusbar.png" alt="iPhone Status Bar" width={80} height={50} className="filter brightness-0 invert pr-1" />
            </div>
            <div className="bg-black rounded-xl w-20 h-6 mx-auto absolute pt-3"></div>
          </div>

          {/* Icons */}
          <div className="flex justify-center">
            <div className="pt-7 flex space-x-5">
              {icons.map((item, itemIndex) => (
                <IconAndText key={itemIndex} src={item.src} text={item.text} link={item.link} />
              ))}
            </div>
          </div>
          {/* <div className="flex justify-center">
            <div className="pt-4 flex space-x-5">
              {icons.map((item, itemIndex) => (
                <IconAndText key={itemIndex} src={item.src} text={item.text} link={item.link} />
              ))}
            </div>
          </div> */}
          {/* Bottom icon bar */}
          <div className="flex justify-center absolute bottom-4 w-full">
            <div style={{ gap: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(240, 240, 240, 0.15)', borderRadius: '30px', width: '310px', height: '80px' }}>
              {/* Either need to make these bigger or my custom ones smaller */}
              <div onClick={handleOpen} className="flex flex-col items-center">
                <Image src={'/mail.webp'} alt="About me icon" width={55} height={55} className="rounded-40"></Image>
                <p style={{ marginTop: '0px', fontSize: '11px', maxWidth: '55px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} className="apple text-white"></p>
              </div>
              <IconAndText src={'/camera.webp'} link='https://www.linkedin.com/in/mattwong-ca/' />
              <IconAndText src={'/safari.webp'} link='https://www.google.com/search?q=matt+wong+waterloo' />
              <IconAndText src={'/phone.webp'} link='https://www.linkedin.com/in/mattwong-ca/' />
              {/* <div className="flex flex-col items-center">
                <Image style={{ position: 'relative', zIndex: '1000' }} onClick={togglePopup} src={'/phone.webp'} alt="About me icon" width={55} height={55} className="rounded-40"></Image>
                <p style={{ marginTop: '0px', fontSize: '11px', maxWidth: '55px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} className="apple text-white">{'text'}</p>
              </div> */}

              {/* MUI */}
              <Modal
                  open={open}
                  onClose={handleClose}
                  // aria-labelledby="modal-modal-title"
                  // aria-describedby="modal-modal-description"
                >
                  <Box className={`no-outline`} sx={style}>
                    <div style={{ width: '100%', height: '26px', backgroundColor: 'grey', borderTopLeftRadius: '9px', borderTopRightRadius: '9px' }}></div>
                    <div style={{ paddingLeft: '10%', paddingRight: '10%', overflow: 'auto' }}>
                    <p className={`${tagline.className}`} style={{ marginTop: '50px', color: 'white', fontSize: '35px' }}>Email</p>
                    <hr style={{ backgroundColor: 'white', height: '2px', border: 'none' }} />
                    <p className={`${experience.className}`} style={{ color: 'white' }}>elonmusk@gmail.com</p>

                    </div>
                    
                    <Typography /*id="modal-modal-title" variant="h6" component="h2"*/>
                      
                    </Typography>
                    <Typography /*id="modal-modal-description" sx={{ mt: 2 }}*/>
                      
                    </Typography>
                  </Box>
                </Modal>
            </div>
          </div>

        </div>
      </div>
      {/* <div style={{ position: 'relative', zIndex: '100' }}>
        {isPopupVisible && (<div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '999' }}>
          <div style={{ width: '60%', height: '70%', backgroundColor: 'black', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ width: '100%', height: '20px', backgroundColor: 'grey', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}></div>
            <p>This is the content of the centered component.</p>
          </div>
        </div>)}
      </div> */}



    </div>
  );
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '70%',
  bgcolor: '#130f40',
  boxShadow: 24,
  // p: 4,
  borderRadius: '12px',
  overflowY: 'auto' 
};

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
          </div>
        </div>
        */ }

{/* <div style={{ marginTop: '15px', paddingLeft: '20px', paddingRight: '20px', display: 'flex', justifyContent: 'space-between', height: '20px', width: '100%'}}>
          <p className="apple">{currentTime}</p>
          <Image src="/statusbar.png" alt="iPhone Status Bar" width={80} height={50} className="filter brightness-0 invert" />
        </div> */}