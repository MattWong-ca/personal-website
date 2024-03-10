"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import IconAndText from './components/IconAndText';
import './globals.css';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';
import { EB_Garamond } from 'next/font/google';
import StartAnimation from './components/StartAnimation';
import NameBox from './components/NameBox';
import PopUp from './components/PopUp';
import Phone from './components/test';

export default function Home() {


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

  const [nameZoomIn, setNameZoomIn] = useState(false);
  const [taglineZoomIn, setTaglineZoomIn] = useState(false);
  const [shortcutsZoomIn, setShortcutsZoomIn] = useState(false);
  const [phoneZoomIn, setPhoneZoomIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNameZoomIn(true);
      const timeout = setTimeout(() => {
        setTaglineZoomIn(true);
        const timeout = setTimeout(() => {
          setShortcutsZoomIn(true);
        }, 200);
        return () => clearTimeout(timeout);
      }, 200);
      return () => clearTimeout(timeout);
    }, 11100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setPhoneZoomIn(true), 12200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="overflow-hidden h-screen flex relative z-50">
      <StartAnimation />
      <div className="leftWidth relative">
        {/* Content for the 60% width column */}
        <div className="w-full h-1/4 border-b-4 border-black flex">
          <div className="bg-red-600 h-full border-r-4 border-black" style={{ width: '5%' }}></div>
          <div className="w-full">
            <div className="bg-blue-500 w-full h-1/5 border-b-4 border-black"></div>
            <div className="w-full flex" style={{ height: '81%' }}>
              <div className="w-3/4 h-full border-r-4 border-black">
                <div className="bg-blue-500 w-3/4 h-full border-r-4 border-black" style={{ height: '99%' }}>
                  <div className="w-full border-b-4 border-black" style={{ height: '66%' }}>
                    <div className="bg-red-600 w-full h-full flex">
                      <div className="border-r-4 border-black" style={{ width: '34%' }}>
                        <div className="bg-yellow-400 w-full border-b-4 border-black" style={{ height: '53.5%' }}></div>
                        <div className="bg-white w-full" style={{ height: '46.5%' }}></div>
                      </div>
                      <div className="bg-white w-1/3 border-r-4 border-black"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-400 w-1/4 h-1/2 border-b-4 border-black"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 border-b-4 border-black flex">
          <div className="bg-black w-1/5 h-full border-r-4 border-black">
            <div className="w-full h-full flex">
              <div className="h-full border-r-4 border-black" style={{ width: '85.7%' }}>
                <div className="bg-blue-500 w-full border-b-4 border-black" style={{ height: '34%' }}>
                </div>
                <div className="w-full h-1/3 border-b-4 border-black">
                  <div className="w-full h-full flex">
                    <div className="bg-white w-1/2 h-full border-r-4 border-black"></div>
                    <div className="bg-white w-1/2 h-full"></div>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-400 h-full" style={{ width: '14.3%' }}></div>
            </div>
          </div>
          <div className="w-3/5 h-full p-4 border-r-4 border-black">
            <NameBox
              nameZoomIn={nameZoomIn}
              taglineZoomIn={taglineZoomIn}
              shortcutsZoomIn={shortcutsZoomIn}
              setAboutOpen={() => setAboutOpen(true)}
              setWorkOpen={() => setWorkOpen(true)}
              setContactOpen={() => setContactOpen(true)}
              setFeaturesOpen={() => setFeaturesOpen(true)}
            />
          </div>
          <div className="w-1/5 h-full">
            <div className="bg-red-600 w-full h-1/5 border-b-4 border-black"></div>
            <div className="w-full h-1/5 border-b-4 border-black"></div>
            <div className="bg-yellow-400 w-1/2 h-3/5 border-r-4 border-black"></div>
          </div>
        </div>
        <div className="w-full h-1/4 flex">
          <div className="w-1/5 h-full border-r-4 border-black">
            <div className="w-full h-1/6 border-b-4 border-black"></div>
            <div className="bg-blue-500 w-full h-1/6 border-b-4 border-black"></div>
            <div className="bg-red-600 w-full h-2/3">
              <div className="bg-white w-1/5 h-full border-r-4 border-black"></div>
            </div>
          </div>
          <div className="w-full h-4/5">
            <div className="w-full h-full border-b-4 border-black flex">
              <div className="bg-blue-500 w-1/5 h-full border-r-4 border-black">
                <div className="bg-white w-4/5 h-full border-r-4 border-black"></div>
              </div>
              <div className="h-full border-r-4 border-black flex" style={{ width: '55.95%' }}>
                <div className="w-full h-full">
                  <div className="bg-blue-500 w-full border-b-4 border-black flex" style={{ height: '52.5%' }}>
                    <div className="bg-white h-full border-r-4 border-black" style={{ width: '34%' }}></div>
                    <div className="bg-red-600 w-1/3 h-full border-r-4 border-black"></div>
                  </div>
                  <div className="bg-yellow-400 w-1/2 border-r-4 border-black" style={{ height: '47.5%' }}></div>
                </div>
              </div>
              <div className="bg-red-600 w-1/5 h-full border-r-4 border-black"></div>
            </div>
            <div className="bg-yellow-400 w-full h-1/4 flex">
              <div className="bg-white w-1/3 h-full border-r-4 border-black"></div>
              <div className="bg-white w-1/3 h-full border-r-4 border-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content for the 40% width column */}
      <div className="phone w-2/5 border-l-4 border-black">
        <div className="w-full border-b-4 border-black" style={{ height: '4.9%' }}>
          <div className="bg-yellow-400 h-full border-r-4 border-black" style={{ width: '86%' }}>
            <div className="bg-white w-1/2 h-full border-r-4 border-black"></div>
          </div>
        </div>
        <div className="w-full border-b-4 border-black flex" style={{ height: '90.1%' }}>
          <div className="h-full border-r-4 border-black" style={{ width: '14%' }}>
            <div className="w-full h-full">
              <div className="w-full h-1/3 border-b-4 border-black" style={{ height: '22.45%' }}></div>
              <div className="bg-blue-500 w-full border-b-4 border-black" style={{ height: '55.8%' }}></div>
              <div className="bg-black w-full h-1/3" style={{ height: '22%' }}></div>
            </div>
          </div>
          <div className="h-full border-r-4 border-black flex items-center justify-center" style={{ width: '72%' }}>
            <Phone
              phoneZoomIn={phoneZoomIn}
              taglineZoomIn={taglineZoomIn}
              shortcutsZoomIn={shortcutsZoomIn}
              aboutOpen={aboutOpen}
              workOpen={workOpen}
              contactOpen={contactOpen}
              featuresOpen={featuresOpen}
              projectsOpen={projectsOpen}
              educationOpen={educationOpen}
              questsOpen={questsOpen}
              writingOpen={writingOpen}
              emailOpen={emailOpen}
              phoneOpen={phoneOpen}
              setAboutOpen={setAboutOpen}
              setWorkOpen={setWorkOpen}
              setContactOpen={setContactOpen}
              setFeaturesOpen={setFeaturesOpen}
              setProjectsOpen={setProjectsOpen}
              setEducationOpen={setEducationOpen}
              setQuestsOpen={setQuestsOpen}
              setWritingOpen={setWritingOpen}
              setEmailOpen={setEmailOpen}
              setPhoneOpen={setPhoneOpen}
            />
          </div>
          <div className="bg-blue-500 h-full" style={{ width: '14%' }}>
            <div className="bg-black w-full h-1/6 border-b-4 border-black"></div>
            <div className="bg-white w-full h-1/5 border-b-4 border-black"></div>
            <div className="bg-red-600 w-full h-1/3 border-b-4 border-black"></div>
          </div>
        </div>
        <div className="bg-white w-full flex" style={{ height: '5%' }}>
          <div className="h-full border-r-4 border-black" style={{ width: '14%' }}></div>
          <div className="bg-red-600 h-full w-1/2 border-r-4 border-black"></div>
        </div>
      </div>
    </div>
  );
}