"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import IconAndText from './components/IconAndText';
import './globals.css';
import { Poppins } from 'next/font/google';
import { Inter } from 'next/font/google';
import { EB_Garamond } from 'next/font/google';
import PopUp from './components/popup';
import StartAnimation from '../../pages/arena';

// Fonts
const inter = Inter({ subsets: ["latin"] });
const poppins400 = Poppins({ subsets: ["latin-ext"], weight: ["400"], style: ["normal"] });
const poppins600 = Poppins({ subsets: ["latin-ext"], weight: ["600"], style: ["normal"] });
const poppins700 = Poppins({ subsets: ["latin-ext"], weight: ["700"], style: ["normal"] });
const garamond400 = EB_Garamond({ subsets: ["latin-ext"], weight: ["400"], style: ["normal"] });

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
  const codingStreak = DateTime.now().diff(DateTime.fromISO('2023-12-25'), 'days').as('days').toFixed(0);

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
            <div className={`nameFontSize flex-1 ${poppins700.className} ${nameZoomIn ? 'zoom-in' : ''} ${nameZoomIn ? '' : 'hidden'}`} style={{ lineHeight: '1' }}>MATTHEW WONG</div>
            <div className={`taglineFontSize mt-2.5 ml-1 ${garamond400.className} ${taglineZoomIn ? 'zoom-in' : 'hidden'}`} style={{ lineHeight: '1' }}>I code + design software products</div>
            <div className={`regularNameBox shortcutsMarginTop flex ${garamond400.className} ${shortcutsZoomIn ? 'zoom-in' : 'hidden'}`}>
              <div className="pl-3">
                <div onClick={() => setAboutOpen(true)} className="clickCursor" style={{ fontSize: '28px', lineHeight: '1' }}>✸ &nbsp;About</div>
                <div onClick={() => setWorkOpen(true)} className="clickCursor" style={{ fontSize: '28px', marginTop: '18px', lineHeight: '1' }}>✸ &nbsp;Experience</div>
                <div onClick={() => setContactOpen(true)} className="mobileShortcuts clickCursor" style={{ fontSize: '28px', marginTop: '18px', lineHeight: '1' }}>✸ &nbsp;Contact</div>
                <div onClick={() => setFeaturesOpen(true)} className="mobileShortcuts clickCursor" style={{ fontSize: '28px', marginTop: '18px', lineHeight: '1' }}>✸ &nbsp;Features</div>
              </div>
              <div className="mobileShortcuts2 pl-14">
                <div onClick={() => setContactOpen(true)} className="clickCursor" style={{ fontSize: '28px', lineHeight: '1' }}>✸ &nbsp;Contact</div>
                <div onClick={() => setFeaturesOpen(true)} className="clickCursor" style={{ fontSize: '28px', marginTop: '18px', lineHeight: '1' }}>✸ &nbsp;Features</div>
              </div>
            </div>
            <div className={`mobileNameBox ${garamond400.className} ${shortcutsZoomIn ? 'zoom-in' : 'hidden'} flex mt-6`} style={{ fontSize: '22px', lineHeight: '1' }}>
              <div className="pl-3">
                <div onClick={() => setAboutOpen(true)}>✸ &nbsp;About</div>
                {/* <div onClick={() => setWorkOpen(true)} className="mt-3.5">✸ &nbsp;Experience</div> */}
                <div onClick={() => setFeaturesOpen(true)} className="mt-3.5">✸ &nbsp;Features</div>
                <div onClick={() => setContactOpen(true)} className="mt-3.5">✸ &nbsp;Contact</div>
              </div>
            </div>
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

      {/* 40% screen, mountain valley background */}
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

            <div className={`phoneHeight rounded-70 bg-cover pt-3 relative ${phoneZoomIn ? 'zoom-in' : 'hidden'}`} style={{ width: '333px', border: '5px solid #d3d3d3', backgroundImage: `url('astronaut.jpg')` }}>

              <div className="h-6 flex justify-center">
                <div className="w-70 flex items-center justify-between">
                  <p className="apple text-white pt-0.5 pl-2 justify-start" style={{ fontSize: '0.92rem' }}>{currentTime ?? '1:23'}</p>
                  <Image src="/statusbar.png" alt="iPhone Wifi and Battery" width={75} height={50} className="filter brightness-0 invert pr-1" />
                </div>
                <div className="bg-black rounded-xl w-20 h-6 mx-auto absolute" style={{ height: '21.5px' }}></div>
              </div>

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

              <div className="flex justify-center absolute bottom-4 w-full">
                <div className="flex items-center justify-center pt-px" style={{ gap: '18px', backgroundColor: 'rgba(240, 240, 240, 0.15)', borderRadius: '26px', width: '290px', height: '75px' }}>
                  <IconAndText src={'/mail.webp'} onClick={() => setEmailOpen(true)} />
                  <IconAndText src={'/camera.webp'} link='' />
                  <IconAndText src={'/safari.webp'} link='https://www.google.com/search?q=matt+wong+waterloo' />
                  <IconAndText src={'/phone.webp'} onClick={() => setPhoneOpen(true)} />

                  <PopUp title='About' open={aboutOpen} onClose={() => setAboutOpen(false)}>
                    <div className="flex mt-2.5">
                      <div >
                        <p className={`${poppins600.className} mt-2 text-black`} style={{ lineHeight: 'normal', fontSize: '25px' }}>TLDR</p>
                        <div className={`${garamond400.className} text-black`} style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                          <p>➔&nbsp;&nbsp; Software developer with 3+ years of experience</p>
                          <p className="mt-2">➔&nbsp;&nbsp; 2nd year engineering student at UWaterloo</p>
                          <p className="mt-2">➔&nbsp;&nbsp; Building in blockchain & exploring in AI</p>
                          <p className="mt-2">➔&nbsp;&nbsp; Enjoys hackathons, travelling, & sports</p>
                        </div>
                      </div>
                      <Image
                        src="/aboutpfp.png"
                        alt="Matt Wong profile picture"
                        width={170}
                        height={0}
                        className="aboutPfp ml-auto mt-3.5 mr-5"
                      />
                    </div>
                    <p className={`${poppins600.className} mt-5 pb-2 text-black`} style={{ fontSize: '24px' }}>Currently</p>
                    <div className={`${garamond400.className} text-black`} style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                      <p>➔&nbsp;&nbsp; Full stack developer at ExaCare, a VC-backed health tech startup</p>
                      <p className="mt-2">➔&nbsp;&nbsp; Coding & designing side projects</p>
                      <p className="mt-2">➔&nbsp;&nbsp; Writing about Canadian startup founders</p>
                      <p className="mt-2">➔&nbsp;&nbsp; On a {codingStreak} day coding streak!</p>
                    </div>
                    <p className={`${poppins600.className} mt-5 pb-2 text-black`} style={{ fontSize: '24px' }}>Previously</p>
                    <div className={`${garamond400.className} text-black`} style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                      <p>➔&nbsp;&nbsp; Led partnerships for Waterloo Blockchain</p>
                      <p className="mt-2">➔&nbsp;&nbsp; Did iOS development at theScore</p>
                      <p className="mt-2">➔&nbsp;&nbsp; Built ecommerce stores at Shopify</p>
                      <p className="mt-2 mb-12">➔&nbsp;&nbsp; Completed Google&apos;s SPS program</p>
                    </div>
                  </PopUp>

                  <PopUp title='Work' open={workOpen} onClose={() => setWorkOpen(false)}>
                    <div className="w-full flex mt-5" style={{ height: '150px', border: '2px solid black' }}>
                      <div className="h-full border-r-2 border-black" style={{ width: '148px' }}>
                        <Image
                          src="/exacare.jpeg"
                          alt="ExaCare logo"
                          width={146}
                          height={0}
                        />
                      </div>
                      <div style={{ width: 'calc(100% - 148px)', padding: '14px' }}>
                        <div className="flex justify-between">
                          <p className={poppins600.className} style={{ fontSize: '20px' }}>Software Engineer - Full Stack</p>
                          <p className={poppins400.className} style={{ fontSize: '20px', fontStyle: 'italic' }}>{`Jan - Apr '24`}</p>
                        </div>
                        <p className={`${garamond400.className} mt-2.5`} style={{ fontSize: '16px' }}>
                          Building React/TypeScript frontend features and Node/Serverless backend APIs/endpoints
                          at ExaCare, a VC-backed health tech startup that recently raised $6.5M.
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex mt-5" style={{ height: '150px', border: '2px solid black' }}>
                      <div className="h-full border-r-2 border-black" style={{ width: '148px' }}>
                        <Image
                          src="/thescore.png"
                          alt="theScore logo"
                          width={146}
                          height={0}
                        />
                      </div>
                      <div style={{ width: 'calc(100% - 148px)', padding: '14px' }}>
                        <div className="flex justify-between">
                          <p className={poppins600.className} style={{ fontSize: '20px' }}>Software Engineer - iOS</p>
                          <p className={poppins400.className} style={{ fontSize: '20px', fontStyle: 'italic' }}>{`May - Aug '22`}</p>
                        </div>
                        <p className={garamond400.className} style={{ marginTop: '10px', fontSize: '16px' }}>
                          {`Collaborated with designers to enhance theScore's 4.8-star sports-betting app.
                        Worked on UI improvements and features in Swift. Volunteered for Jays Care
                        and met Adam Cimber.`}
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex" style={{ marginTop: '20px', height: '150px', border: '2px solid black' }}>
                      <div className="h-full border-r-2 border-black" style={{ width: '148px' }}>
                        <Image
                          src="/shopify.png"
                          alt="Shopify logo"
                          width={146}
                          height={0}
                        />
                      </div>
                      <div style={{ width: 'calc(100% - 148px)', padding: '14px' }}>
                        <div className="flex justify-between">
                          <p className={poppins600.className} style={{ fontSize: '20px' }}>Store Designer</p>
                          <p className={poppins400.className} style={{ fontSize: '20px', fontStyle: 'italic' }}>{`Feb - May '22`}</p>
                        </div>
                        <p className={garamond400.className} style={{ marginTop: '10px', fontSize: '16px' }}>
                          {`Interned at Shopify during my 2nd semester of university. Part of the inaugural 
                        cohort of student store designers that built stores to support merchants from their
                        partnership with Operation Hope.`}
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex" style={{ marginTop: '20px', height: '150px', border: '2px solid black' }}>
                      <div className="h-full border-r-2 border-black" style={{ width: '148px' }}>
                        <Image
                          src="/waterlooblockchain.jpeg"
                          alt="Waterloo Blockchain logo"
                          width={146}
                          height={0}
                        />
                      </div>
                      <div style={{ width: 'calc(100% - 148px)', padding: '14px' }}>
                        <div className="flex justify-between">
                          <p className={poppins600.className} style={{ fontSize: '20px' }}>Director of Partnerships</p>
                          <p className={poppins400.className} style={{ fontSize: '20px', fontStyle: 'italic' }}>{`Oct '23 - Aug '24`}</p>
                        </div>
                        <p className={garamond400.className} style={{ marginTop: '10px', fontSize: '16px' }}>
                          {`Led partnerships for Waterloo Blockchain, Canada's largest blockchain club. Organized the first
                          hackathon resulting in 200+ hackers and 35+ projects, and the first ETHDenver hacker house for 15 
                          builders (during my gap year).`}
                        </p>
                      </div>
                    </div>
                  </PopUp>

                  <PopUp title='Projects' open={projectsOpen} onClose={() => setProjectsOpen(false)}>
                    <div className={`${garamond400.className}`} style={{ marginTop: '20px' }}>
                      <p className={`${poppins600.className}`} style={{ lineHeight: 'normal', color: 'black', fontSize: '25px', marginTop: '0.5rem' }}>2024</p>
                      <div style={{ color: 'black', marginLeft: '1.3rem', fontSize: '22px' }}>
                        <p className="mb-2.5">➔&nbsp;&nbsp; Personal website redesign (<a href="https://github.com/MattWong-ca/personal-website" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                      </div>
                      <p className={`${poppins600.className}`} style={{ lineHeight: 'normal', color: 'black', fontSize: '25px', marginTop: '0.5rem' }}>2023</p>
                      <div style={{ color: 'black', marginLeft: '1.3rem', fontSize: '22px' }}>
                        <p className="mb-2.5">➔&nbsp;&nbsp; Swift Tickets - NFT minting gated by Worldcoin&apos;s World ID (<a href="https://github.com/MattWong-ca/swift-tickets-navh" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                        <p className="mb-2.5">➔&nbsp;&nbsp; Various side projects (<a href="https://medium.com/@mattwong.ca/all-my-projects-14bf922d0a65" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                      </div>
                    </div>
                  </PopUp>

                  <PopUp title='Education' open={educationOpen} onClose={() => setEducationOpen(false)}>
                    <div className={`${garamond400.className}`} style={{ color: 'black', marginTop: '10px', fontSize: '22px' }}>
                      <p>
                        <b>University of Waterloo: </b>
                        {`I study biomedical engineering, but spend every bit of my free time coding :)`}
                      </p>
                      <p style={{ marginTop: '10px' }}>
                        <b>St. Robert CHS: </b>
                        my high school, you can read about it <a href="https://www.ycdsb.ca/2021-top-scholars/" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>here</a>.
                      </p>
                      <p style={{ marginTop: '10px' }}>
                        <b>Carleton University: </b>
                        studied here for 1 month during the summer of 10th grade for the SHAD program.
                      </p>
                    </div>
                  </PopUp>

                  <PopUp title='Email' open={emailOpen} onClose={() => setEmailOpen(false)}>
                    <div className={`${garamond400.className}`} style={{ color: 'black', marginTop: '10px', fontSize: '22px' }}>
                      <p>
                        {`Try elonmusk@gmail.com or mark.zuckerberg@gmail.com!`}
                      </p>
                    </div>
                  </PopUp>

                  <PopUp title='Phone' open={phoneOpen} onClose={() => setPhoneOpen(false)}>
                    <div className={`${garamond400.className}`} style={{ color: 'black', marginTop: '10px', fontSize: '22px' }}>
                      <p>
                        {`My phone is always on silent. Please use Discord, Telegram, or email for fastest response times!`}
                      </p>
                    </div>
                  </PopUp>

                  <PopUp title='Writing' open={writingOpen} onClose={() => setWritingOpen(false)}>
                    <div className={`${garamond400.className}`} style={{ color: 'black', marginLeft: '1.3rem', marginTop: '20px', fontSize: '22px' }}>
                      <p>➔&nbsp;&nbsp; Waterloo Blockchain Founders (<a href="https://www.linkedin.com/posts/kevinolearytv_interesting-perspective-activity-7056440703538577408-tU_K" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                    </div>
                  </PopUp>

                  <PopUp title='Quests' open={questsOpen} onClose={() => setQuestsOpen(false)}>
                    <div className={`${garamond400.className} text-black mt-2.5`} style={{ fontSize: '22px' }}>
                      <p>
                        {`Pursuits I've spent more time on than a typical side project.`}
                      </p>
                      <p className={`${poppins600.className} mt-2`} style={{ lineHeight: 'normal', fontSize: '25px' }}>2023</p>
                      <div style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                        <p className="mb-2.5">➔&nbsp;&nbsp; Web3 Works - opportunities newsletter with 530+ subs (<a href="https://linktr.ee/web3works_" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                      </div>
                      <p className={`${poppins600.className} mt-2`} style={{ lineHeight: 'normal', fontSize: '25px'}}>2021</p>
                      <div style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                        <p className="mb-2.5">➔&nbsp;&nbsp; How&apos;s the Climate - climate podcast with 425+ downloads (<a href="https://open.spotify.com/show/7fwDYUPsbMPLgopMAikDzw" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                      </div>
                      <p className={`${poppins600.className} mt-2`} style={{ lineHeight: 'normal', fontSize: '25px' }}>2020</p>
                      <div style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                        <p className="mb-2.5">➔&nbsp;&nbsp; York Region Kiva - fundraising for underserved entrepreneurs (<a href="https://www.google.com/search?q=york+region+kiva" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                      </div>
                    </div>
                  </PopUp>

                  <PopUp title='Features' open={featuresOpen} onClose={() => setFeaturesOpen(false)}>
                    <div className={`${garamond400.className}`} style={{ color: 'black', marginLeft: '1.3rem', marginTop: '20px', fontSize: '22px' }}>
                      <p className="mb-2.5">➔&nbsp;&nbsp; YCDSB announces its 2021 Top Scholars (<a href="https://www.ycdsb.ca/2021-top-scholars" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                      <p className="mb-2.5">➔&nbsp;&nbsp; Canadian National Anthology 2021 artwork feature (<a href="https://hubs.mozilla.com/szhykoG/room-2-national-anthology-ink-mvmt" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                      <p className="mb-2.5">➔&nbsp;&nbsp; York Region Kiva 2020 bottle drive (<a href="https://www.yorkregion.com/news/richmond-hill-teen-starts-bottle-drive-to-help-businesses-in-developing-nations-amid-covid-19/article_26c44174-7a69-57a1-8c1a-babaacbd5209.html" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                      <p className="mb-2.5">➔&nbsp;&nbsp; Skills Ontario 2016 cardboard boat race (<a href="https://issuu.com/thornhillliberal/docs/tho_w_jan28" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                    </div>
                  </PopUp>

                  <PopUp title='Contact' open={contactOpen} onClose={() => setContactOpen(false)}>
                    <div className={`${garamond400.className}`} style={{ color: 'black', marginTop: '20px', fontSize: '22px' }}>
                      <p className="mb-2.5">LinkedIn: <a href="https://www.linkedin.com/in/mattwong-ca" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mattwong-ca</a></p>
                      <p className="mb-2.5">GitHub: <a href="https://github.com/MattWong-ca" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mattwong-ca</a></p>
                      <p className="mb-2.5">GitLab: <a href="https://gitlab.com/mattwong_ca" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mattwong_ca</a></p>
                      <p className="mb-2.5">Telegram: <a href="https://t.me/mattwong_ca" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mattwong_ca</a></p>
                      <p className="mb-2.5">Instagram: <a href="https://www.instagram.com/mattwong.ca" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mattwong.ca</a></p>
                      <p className="mb-2.5">X: <a href="https://x.com/mattwong_ca" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mattwong_ca</a></p>
                      <p className="mb-2.5">Discord: mattwong.ca</p>
                      <p className="mb-2.5">Farcaster: <a href="https://warpcast.com/mtt" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mtt</a></p>
                    </div>
                  </PopUp>
                </div>
              </div>
            </div>
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