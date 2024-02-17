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
  // Time on status bar
  const [currentTime, setCurrentTime] = useState('');
  const { DateTime } = require('luxon');
  function updateCurrentTimeET() {
    const currentFormattedTime = DateTime.local().setZone('America/New_York').toFormat('h:mm');
    setCurrentTime(currentFormattedTime);
  }
  useEffect(() => {
    const intervalId = setInterval(updateCurrentTimeET, 1000);
    return () => clearInterval(intervalId);
  });

  const icons = [
    { src: '/about.png', text: 'About', link: 'https://www.linkedin.com/in/mattwong-ca/' },
    { src: '/briefcase.png', text: 'Work', link: 'https://www.linkedin.com/in/mattwong-ca/' },
    { src: '/projects.png', text: 'Projects', link: 'https://www.linkedin.com/in/mattwong-ca/' },
    { src: '/education.jpeg', text: 'Education', link: 'https://www.linkedin.com/in/mattwong-ca/' }
  ];

  // MUI
  const [open, setOpen] = React.useState(false);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [workOpen, setWorkOpen] = React.useState(false);
  const [projectsOpen, setProjectsOpen] = React.useState(false);
  const [educationOpen, setEducationOpen] = React.useState(false);
  const [phoneOpen, setPhoneOpen] = React.useState(false);

  return (
    <div style={{ overflow: 'hidden', height: '100vh', display: 'flex', position: 'relative', zIndex: '100' }}>
      <div style={{ width: '60%', position: 'relative', backgroundImage: `url('https://img.freepik.com/free-photo/cardboard-texture_1194-5419.jpg')` }}>
        {/* Content for the 60% width column */}
        <div style={{ marginTop: '12.5rem', marginLeft: '6.25rem' }}>
          {/* New container with 50px padding */}
          <h1 className={`${title.className} nameOutline`} style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>MATTHEW WONG</h1>
          <h1 className={`${title.className} name`} style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>MATTHEW WONG</h1>
          <p className={`${tagline.className} `} style={{ fontSize: '1.6rem' }}>Building software & studying engineering <br /> at UWaterloo!</p>
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
        style={{ backgroundSize: 'cover', backgroundImage: `url('./mountainValleyBackground.jpeg')` }}
      >
        {/* iPhone */}
        <div className="bg-gray-300 w-100 h-300 rounded-70 bg-cover pt-3 relative"
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
              <IconAndText src={'/about.png'} onClick={() => setAboutOpen(true)} text='About' />
              <IconAndText src={'/briefcase.png'} onClick={() => setWorkOpen(true)} text='Work' />
              <IconAndText src={'/projects.png'} onClick={() => setProjectsOpen(true)} text='Projects' />
              <IconAndText src={'/education.jpeg'} onClick={() => setEducationOpen(true)} text='Education' />
            </div>
          </div>

          {/* Bottom icon bar */}
          <div className="flex justify-center absolute bottom-4 w-full">
            <div style={{ gap: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(240, 240, 240, 0.15)', borderRadius: '30px', width: '310px', height: '80px' }}>
              {/* Either need to make these bigger or my custom ones smaller */}
              <IconAndText src={'/mail.webp'} onClick={() => setOpen(true)} />
              <IconAndText src={'/camera.webp'} link='https://www.linkedin.com/in/mattwong-ca/' />
              <IconAndText src={'/safari.webp'} link='https://www.google.com/search?q=matt+wong+waterloo' />
              <IconAndText src={'/phone.webp'} onClick={() => setPhoneOpen(true)} />

              {/* MUI */}
              <Modal
                open={open}
                onClose={() => setOpen(false)}
              >
                <Box className={`no-outline`} sx={popupStyle}>
                  <div style={{ width: '100%', height: '30px', backgroundColor: '#a5b1c2', borderTopLeftRadius: '9px', borderTopRightRadius: '9px' }}></div>
                  <div style={{ paddingLeft: '10%', paddingRight: '10%', overflow: 'auto' }}>
                    <p className={`${tagline.className}`} style={{ marginTop: '50px', color: 'white', fontSize: '35px' }}>Email</p>
                    <hr style={{ backgroundColor: 'white', height: '2px', border: 'none' }} />
                    <p className={`${experience.className}`} style={{ paddingTop: '10px', color: 'white', fontSize: '18px' }}>elonmusk@gmail.com</p>
                  </div>
                </Box>
              </Modal>

              {/* About */}
              <Modal
                open={aboutOpen}
                onClose={() => setAboutOpen(false)}
              >
                <Box className={`no-outline`} sx={popupStyle}>
                  <div style={{ width: '100%', height: '30px', backgroundColor: '#a5b1c2', borderTopLeftRadius: '9px', borderTopRightRadius: '9px' }}></div>
                  <div style={{ paddingLeft: '10%', paddingRight: '10%', overflow: 'auto' }}>
                    <p className={`${tagline.className}`} style={{ marginTop: '50px', color: 'white', fontSize: '35px' }}>About</p>
                    <hr style={{ backgroundColor: 'white', height: '2px', border: 'none' }} />
                    <div className="flex" style={{ paddingTop: '10px' }}>
                      <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>TLDR</p>
                      <Image
                        src="/profilepic.png"
                        alt="Profile pic"
                        width={200}
                        height={0}
                        style={{ marginLeft: 'auto', pointerEvents: 'none', userSelect: 'none' }}
                      />
                    </div>
                  </div>
                </Box>
              </Modal>

              {/* Work */}
              <Modal
                open={workOpen}
                onClose={() => setWorkOpen(false)}
              >
                <Box className={`no-outline`} sx={popupStyle}>
                  <div style={{ width: '100%', height: '30px', backgroundColor: '#a5b1c2', borderTopLeftRadius: '9px', borderTopRightRadius: '9px' }}></div>
                  <div style={{ paddingLeft: '10%', paddingRight: '10%', overflow: 'auto' }}>
                    <p className={`${tagline.className}`} style={{ marginTop: '50px', color: 'white', fontSize: '35px' }}>Work</p>
                    <hr style={{ backgroundColor: 'white', height: '2px', border: 'none' }} />
                    <p className={`${experience.className}`} style={{ paddingTop: '10px', color: 'white', fontSize: '18px' }}>elonmusk@gmail.com</p>
                  </div>
                </Box>
              </Modal>

              {/* Projects */}
              <Modal
                open={projectsOpen}
                onClose={() => setProjectsOpen(false)}
              >
                <Box className={`no-outline`} sx={popupStyle}>
                  <div style={{ width: '100%', height: '30px', backgroundColor: '#a5b1c2', borderTopLeftRadius: '9px', borderTopRightRadius: '9px' }}></div>
                  <div style={{ paddingLeft: '10%', paddingRight: '10%', overflow: 'auto' }}>
                    <p className={`${tagline.className}`} style={{ marginTop: '50px', color: 'white', fontSize: '35px' }}>Projects</p>
                    <hr style={{ backgroundColor: 'white', height: '2px', border: 'none' }} />
                    <p className={`${experience.className}`} style={{ paddingTop: '10px', color: 'white', fontSize: '18px' }}>elonmusk@gmail.com</p>
                  </div>
                </Box>
              </Modal>

              {/* Education */}
              <Modal
                open={educationOpen}
                onClose={() => setEducationOpen(false)}
              >
                <Box className={`no-outline`} sx={popupStyle}>
                  <div style={{ width: '100%', height: '30px', backgroundColor: '#a5b1c2', borderTopLeftRadius: '9px', borderTopRightRadius: '9px' }}></div>
                  <div style={{ paddingLeft: '10%', paddingRight: '10%', overflow: 'auto' }}>
                    <p className={`${tagline.className}`} style={{ marginTop: '50px', color: 'white', fontSize: '35px' }}>Education</p>
                    <hr style={{ backgroundColor: 'white', height: '2px', border: 'none' }} />
                    <p className={`${experience.className}`} style={{ paddingTop: '10px', color: 'white', fontSize: '18px' }}>elonmusk@gmail.com</p>
                  </div>
                </Box>
              </Modal>

              {/* Phone */}
              <Modal
                open={phoneOpen}
                onClose={() => setPhoneOpen(false)}
              >
                <Box className={`no-outline`} sx={popupStyle}>
                  <div style={{ width: '100%', height: '30px', backgroundColor: '#a5b1c2', borderTopLeftRadius: '9px', borderTopRightRadius: '9px' }}></div>
                  <div style={{ paddingLeft: '10%', paddingRight: '10%', overflow: 'auto' }}>
                    <p className={`${tagline.className}`} style={{ marginTop: '50px', color: 'white', fontSize: '35px' }}>Phone 🤠</p>
                    <hr style={{ backgroundColor: 'white', height: '2px', border: 'none' }} />
                    <div style={{ paddingTop: '10px' }}>
                      <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>My phone is always on silent. Please use Discord, Telegram, or email for fastest response times!</p>
                    </div>
                  </div>
                </Box>
              </Modal>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const popupStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '80%',
  bgcolor: '#0097e6',
  boxShadow: 24,
  borderRadius: '12px',
  overflowY: 'auto'
};