"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import IconAndText from './components/IconAndText';
import './globals.css';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';
import PopUp from './components/popup';

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

  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [workOpen, setWorkOpen] = React.useState(false);
  const [projectsOpen, setProjectsOpen] = React.useState(false);
  const [educationOpen, setEducationOpen] = React.useState(false);
  const [writingOpen, setWritingOpen] = React.useState(false);
  const [questsOpen, setQuestsOpen] = React.useState(false);
  const [featuresOpen, setFeaturesOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);
  const [emailOpen, setEmailOpen] = React.useState(false);
  const [phoneOpen, setPhoneOpen] = React.useState(false);

  return (
    <div style={{  /* backgroundSize: 'cover', backgroundImage: `url('https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png')`, */ overflow: 'hidden', height: '100vh', display: 'flex', position: 'relative', zIndex: '100' }}>
      <div style={{ width: '60%', position: 'relative' }}>
        {/* Content for the 60% width column */}
        <div className="w-full h-1/4 border-b-4 border-black flex">
          <div className="h-full border-r-4 border-black" style={{ width: '5%' }}></div>
          <div className="w-full">
            <div className="w-full h-1/5 border-b-4 border-black"></div>
            <div className="w-3/4 border-r-4 border-black" style={{ height: '81%' }}>
              <div className="w-3/4 h-full border-r-4 border-black">
                <div className="w-full border-b-4 border-black" style={{ height: '66%' }}></div>
              </div>
            </div>
          </div>

        </div>
        <div className="w-full h-1/2 border-b-4 border-black flex">
          <div className="w-1/5 h-full border-r-4 border-black"></div>
          <div className="w-3/5 h-full border-r-4 border-black flex">
            <div className="flex-1 p-4">MATTHEW WONG</div>
          </div>
        </div>
        <div className="w-full h-1/4 flex">
        <div className="w-1/5 h-full border-r-4 border-black">
          <div className="w-full h-1/6 border-b-4 border-black"></div>
          <div className="w-full h-1/6 border-b-4 border-black"></div>
        </div>
        <div className="w-full h-4/5 border-b-4 border-black"></div>
        </div>
        

        {/* <div style={{ marginTop: '12.5rem', marginLeft: '6.25rem' }}>
          <h1 className={`${title.className} nameOutline`} style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>MATTHEW WONG</h1>
          <h1 className={`${title.className} name`} style={{ fontSize: '3.75rem', fontWeight: 'bold' }}>MATTHEW WONG</h1>
          <p className={`${tagline.className} `} style={{ fontSize: '1.6rem' }}>Building software & studying engineering <br /> at UWaterloo!</p>
          <p className={`${tagline.className} `} style={{ fontSize: '1.6rem', marginTop: '2rem' }}>Experience</p>
          <div className={`${experience.className} `} style={{ marginLeft: '1.3rem', fontSize: '1.3rem' }}>
            <p style={{ marginTop: '0.5rem' }}>➔ Full stack developer, ExaCare</p>
            <p style={{ marginTop: '0.5rem' }}>➔ iOS developer, theScore Bet</p>
            <p style={{ marginTop: '0.5rem' }}>➔ Store designer, Shopify</p>
          </div>
        </div> */}
      </div>

      {/* 40% screen, mountain valley background */}
      <div className="flex-1 flex items-center justify-center border-l-4 border-black"
        style={{ backgroundSize: 'cover' }}
      >
        {/* iPhone */}
        <div className="bg-gray-300 w-100 h-300 rounded-70 bg-cover pt-3 relative"
          style={{ border: '8px solid black', backgroundImage: `url('https://512pixels.net/downloads/macos-wallpapers-6k/10-3-6k.jpg')` }}>

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

          <div className="flex justify-center">
            <div className="pt-4 flex space-x-5">
              <IconAndText src={'/writing.png'} onClick={() => setWritingOpen(true)} text='Writing' />
              <IconAndText src={'/quests.png'} onClick={() => setQuestsOpen(true)} text='Quests' />
              <IconAndText src={'/media.png'} onClick={() => setFeaturesOpen(true)} text='Features' />
              <IconAndText src={'/contact.png'} onClick={() => setContactOpen(true)} text='Contact' />
            </div>
          </div>

          {/* Bottom icon bar */}
          <div className="flex justify-center absolute bottom-4 w-full">
            <div style={{ gap: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(240, 240, 240, 0.15)', borderRadius: '30px', width: '310px', height: '80px' }}>
              {/* Either need to make these bigger or my custom ones smaller */}
              <IconAndText src={'/mail.webp'} onClick={() => setEmailOpen(true)} />
              <IconAndText src={'/camera.webp'} link='https://www.linkedin.com/in/mattwong-ca/' />
              <IconAndText src={'/safari.webp'} link='https://www.google.com/search?q=matt+wong+waterloo' />
              <IconAndText src={'/phone.webp'} onClick={() => setPhoneOpen(true)} />

              {/* About */}
              <PopUp title='About' open={aboutOpen} onClose={() => setAboutOpen(false)}>
                <div className="flex">
                  <div style={{ marginTop: '0.5rem' }}>
                    <p className={`${tagline.className}`} style={{ lineHeight: 'normal', color: 'white', fontSize: '25px' }}>TLDR</p>
                    <div className={`${experience.className}`} style={{ color: 'white', marginLeft: '1.3rem', fontSize: '18px' }}>
                      <p >➔ Software developer with 3+ years of experience</p>
                      <p style={{ marginTop: '0.5rem' }}>➔ 2nd year engineering student at UWaterloo</p>
                      <p style={{ marginTop: '0.5rem' }}>➔ Building in blockchain and exploring in AI</p>
                      <p style={{ marginTop: '0.5rem' }}>➔ Enjoys hackathons, travelling, & sports</p>
                    </div>
                  </div>
                  <Image
                    src="/profilepic.png"
                    alt="Profile pic"
                    width={200}
                    height={0}
                    style={{ marginLeft: 'auto', marginTop: '5px', pointerEvents: 'none', userSelect: 'none' }}
                  />
                </div>
                <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>More details soon...</p>
              </PopUp>

              {/* Work */}
              <PopUp title='Work' open={workOpen} onClose={() => setWorkOpen(false)}>
                <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>Soon... Full stack dev at ExaCare, iOS dev at theScore, store design at Shopify</p>
              </PopUp>

              {/* Projects */}
              <PopUp title='Projects' open={projectsOpen} onClose={() => setProjectsOpen(false)}>
                <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>Soon...</p>
              </PopUp>

              {/* Education */}
              <PopUp title='Education' open={educationOpen} onClose={() => setEducationOpen(false)}>
                <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>University of Waterloo, Carleton University, St. Robert CHS, soon SUTD</p>
              </PopUp>

              {/* Email */}
              <PopUp title='Email' open={emailOpen} onClose={() => setEmailOpen(false)}>
                <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>elonmusk@gmail.com or mark.zuckerberg@gmail.com</p>
              </PopUp>

              {/* Phone */}
              <PopUp title='Phone 🤠' open={phoneOpen} onClose={() => setPhoneOpen(false)}>
                <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>My phone is always on silent. Please use Discord, Telegram, or email for fastest response times!</p>
              </PopUp>

              {/* Writing */}
              <PopUp title='Writing' open={writingOpen} onClose={() => setWritingOpen(false)}>
                <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>My writing and notes...</p>
              </PopUp>

              {/* Quests */}
              <PopUp title='Quests' open={questsOpen} onClose={() => setQuestsOpen(false)}>
                <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>My side quests</p>
              </PopUp>

              {/* Features */}
              <PopUp title='Features' open={featuresOpen} onClose={() => setFeaturesOpen(false)}>
                <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>News features</p>
              </PopUp>

              {/* Contact */}
              <PopUp title='Contact' open={contactOpen} onClose={() => setContactOpen(false)}>
                <p className={`${experience.className}`} style={{ color: 'white', fontSize: '18px' }}>All my links...</p>
              </PopUp>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}