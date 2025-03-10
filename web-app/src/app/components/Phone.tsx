import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import IconAndText from './IconAndText';
import PopUp from './PopUp';
import { EB_Garamond, Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins600 = Poppins({ subsets: ["latin-ext"], weight: ["600"], style: ["normal"] });
const poppins400 = Poppins({ subsets: ["latin-ext"], weight: ["400"], style: ["normal"] });
const garamond400 = EB_Garamond({ subsets: ["latin-ext"], weight: ["400"], style: ["normal"] });

interface iPhoneProps {
  phoneZoomIn: boolean;
  taglineZoomIn: boolean;
  shortcutsZoomIn: boolean;
  aboutOpen: boolean;
  workOpen: boolean;
  contactOpen: boolean;
  featuresOpen: boolean;
  projectsOpen: boolean;
  educationOpen: boolean;
  questsOpen: boolean;
  writingOpen: boolean;
  emailOpen: boolean;
  phoneOpen: boolean;
  setAboutOpen: (bool: boolean) => void;
  setWorkOpen: (bool: boolean) => void;
  setContactOpen: (bool: boolean) => void;
  setFeaturesOpen: (bool: boolean) => void;
  setProjectsOpen: (bool: boolean) => void;
  setEducationOpen: (bool: boolean) => void;
  setQuestsOpen: (bool: boolean) => void;
  setWritingOpen: (bool: boolean) => void;
  setEmailOpen: (bool: boolean) => void;
  setPhoneOpen: (bool: boolean) => void;
}

const Phone: React.FC<iPhoneProps> = ({
  phoneZoomIn,
  aboutOpen,
  workOpen,
  contactOpen,
  featuresOpen,
  projectsOpen,
  educationOpen,
  questsOpen,
  writingOpen,
  emailOpen,
  phoneOpen,
  setAboutOpen,
  setWorkOpen,
  setContactOpen,
  setFeaturesOpen,
  setProjectsOpen,
  setEducationOpen,
  setQuestsOpen,
  setWritingOpen,
  setEmailOpen,
  setPhoneOpen
}) => {
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

  return (
    <>
      <div className={`phoneHeight rounded-70 bg-cover pt-3 relative ${phoneZoomIn ? 'zoom-in' : 'hidden'}`} style={{ width: '333px', border: '5px solid #d3d3d3', backgroundImage: `url('astronaut.jpg')` }}>
        {/* Status bar */}
        <div className="h-6 flex justify-center">
          <div className="w-70 flex items-center justify-between">
            <p className="apple text-white pt-0.5 pl-2 justify-start" style={{ fontSize: '0.92rem' }}>{currentTime ?? '1:23'}</p>
            <Image src="/statusbar.png" alt="iPhone Wifi and Battery" width={75} height={50} className="filter brightness-0 invert pr-1" />
          </div>
          <div className="bg-black rounded-xl w-20 h-6 mx-auto absolute" style={{ height: '21.5px' }}></div>
        </div>

        <div className="flex justify-center">
          <div className="pt-7 flex flex-wrap justify-center gap-x-5 gap-y-4">
            <IconAndText src={'/about.png'} onClick={() => setAboutOpen(true)} text='About' />
            <IconAndText src={'/briefcase.png'} onClick={() => setWorkOpen(true)} text='Work' />
            <IconAndText src={'/projects.png'} onClick={() => setProjectsOpen(true)} text='Projects' />
            <IconAndText src={'/education.jpeg'} onClick={() => setEducationOpen(true)} text='Education' />
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
                    <p className="mt-2">➔&nbsp;&nbsp; 3rd year engineering student at UWaterloo</p>
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
                <p>➔&nbsp;&nbsp; CS exchange at SUTD (Singapore)</p>
                {/* <p className="mt-2">➔&nbsp;&nbsp; Contributing to IPFS & Filecoin DevEx</p> */}
                <p className="mt-2">➔&nbsp;&nbsp; Devcon Scholar via Ethereum Foundation</p>
                {/* <p className="mt-2">➔&nbsp;&nbsp; Building projects with real users</p> */}
                <p className="mt-2">➔&nbsp;&nbsp; Reading about Canadian startup founders</p>
                <p className="mt-2">➔&nbsp;&nbsp; On a {codingStreak} day coding streak!</p>
              </div>
              <p className={`${poppins600.className} mt-5 pb-2 text-black`} style={{ fontSize: '24px' }}>Previously</p>
              <div className={`${garamond400.className} text-black`} style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                <p>➔&nbsp;&nbsp; Partnerships at Waterloo Blockchain</p>
                <p className="mt-2">➔&nbsp;&nbsp; iOS development at theScore</p>
                <p className="mt-2">➔&nbsp;&nbsp; Full stack development at ExaCare</p>
                <p className="mt-2">➔&nbsp;&nbsp; Ecommerce stores at Shopify</p>
                <p className="mt-2 mb-12">➔&nbsp;&nbsp; Completed Google&apos;s SPS program</p>
              </div>
            </PopUp>

            <PopUp title='Work' open={workOpen} onClose={() => setWorkOpen(false)}>
            <div className="w-full flex mt-5" style={{ height: '150px', border: '2px solid black' }}>
                <div className="h-full border-r-2 border-black" style={{ width: '148px' }}>
                  <Image
                    src="/protocol.jpeg"
                    alt="Protocol Labs logo"
                    width={146}
                    height={0}
                  />
                </div>
                <div style={{ width: 'calc(100% - 148px)', padding: '14px' }}>
                  <div className="flex justify-between">
                    <p className={poppins600.className} style={{ fontSize: '20px' }}>Open Source Engineer</p>
                    <p className={poppins400.className} style={{ fontSize: '20px', fontStyle: 'italic' }}>{`Sept '24 - Jan '25`}</p>
                  </div>
                  <p className={`${garamond400.className} mt-2.5`} style={{ fontSize: '16px' }}>
                  Contributing to IPFS & Filecoin hackathon starter kits for the leader in decentralized storage & compute (90% market share)
                  </p>
                </div>
              </div>

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
                    Building React/TypeScript frontend features and Node/Serverless backend API endpoints
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
                    <p className={poppins400.className} style={{ fontSize: '20px', fontStyle: 'italic' }}>{`Oct '22 - Aug '23`}</p>
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
              <div className={`mt-5 ${garamond400.className}`}>
              <p className={`${poppins600.className}`} style={{ lineHeight: 'normal', fontSize: '25px', marginTop: '0.5rem' }}>2025</p>
                <div style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                  <p className="mb-2.5">➔&nbsp;&nbsp; ETHGlobal Explorer - project showcase with filters (<a href="https://x.com/mattwong_ca/status/1875358547569197460" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                </div>
                <p className={`${poppins600.className}`} style={{ lineHeight: 'normal', fontSize: '25px', marginTop: '0.5rem' }}>2024</p>
                <div style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                  <p className="mb-2.5">➔&nbsp;&nbsp; Omikave - data marketplace for Omi AI data, powered by Akave (<a href="https://github.com/MattWong-ca/omikave" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                  <p className="mb-2.5">➔&nbsp;&nbsp; Endless Scroll - crypto-themed trivia game on Warpcast (<a href="https://github.com/MattWong-ca/endless-scroll" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                  <p className="mb-2.5">➔&nbsp;&nbsp; Lingocaster - learn languages by translating casts on Warpcast (<a href="https://github.com/Lingo-Labs/lingocaster" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                  <p className="mb-2.5">➔&nbsp;&nbsp; BANGER! - bet on casts to go viral with Chiliz Fan Tokens (<a href="https://github.com/MattWong-ca/banger-bets" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                  <p className="mb-2.5">➔&nbsp;&nbsp; Castlingo - Chrome extension for language learning on Warpcast (<a href="https://github.com/MattWong-ca/castlingo" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                  <p className="mb-2.5">➔&nbsp;&nbsp; EMG Controlled Whisk</p>
                  <p className="mb-2.5">➔&nbsp;&nbsp; Translate Bot - language translation for Farcaster (<a href="https://github.com/MattWong-ca/translate-bot" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                  <p className="mb-2.5">➔&nbsp;&nbsp; FrameGPT - free no-code builder for Farcaster frames (<a href="https://ethglobal.com/showcase/framegpt-0gxad" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                  <p className="mb-2.5">➔&nbsp;&nbsp; Personal website redesign (<a href="https://github.com/MattWong-ca/personal-website" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                </div>
                <p className={`${poppins600.className}`} style={{ lineHeight: 'normal', fontSize: '25px', marginTop: '0.5rem' }}>2023</p>
                <div style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                  <p className="mb-2.5">➔&nbsp;&nbsp; Swift Tickets - NFT minting gated by Worldcoin&apos;s World ID (<a href="https://github.com/MattWong-ca/swift-tickets-navh" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                  <p className="mb-2.5">➔&nbsp;&nbsp; Various side projects (<a href="https://medium.com/@mattwong.ca/all-my-projects-14bf922d0a65" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                </div>
              </div>
            </PopUp>

            <PopUp title='Education' open={educationOpen} onClose={() => setEducationOpen(false)}>
              <div className={`mt-2.5 ${garamond400.className}`} style={{ fontSize: '22px' }}>
                <p>
                  <b>University of Waterloo: </b>
                  {`I study biomedical engineering, but spend every bit of my free time coding :)`}
                </p>
                <p className="mt-2.5">
                  <b>St. Robert CHS: </b>
                  my high school, you can read about it <a href="https://www.ycdsb.ca/2021-top-scholars/" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>here</a>.
                </p>
                <p className="mt-2.5">
                  <b>Carleton University: </b>
                  studied here for 1 month during the summer of 10th grade for the SHAD program.
                </p>
              </div>
            </PopUp>

            <PopUp title='Email' open={emailOpen} onClose={() => setEmailOpen(false)}>
              <div className={`mt-2.5 ${garamond400.className}`} style={{ fontSize: '22px' }}>
                <p>
                  {`Try elonmusk@gmail.com or mark.zuckerberg@gmail.com!`}
                </p>
              </div>
            </PopUp>

            <PopUp title='Phone' open={phoneOpen} onClose={() => setPhoneOpen(false)}>
              <div className={`mt-2.5 ${garamond400.className}`} style={{ fontSize: '22px' }}>
                <p>
                  {`My phone is always on silent. Please use Discord, Telegram, or email for fastest response times!`}
                </p>
              </div>
            </PopUp>

            <PopUp title='Writing' open={writingOpen} onClose={() => setWritingOpen(false)}>
              <div className={`mt-5 ${garamond400.className}`} style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                <p>➔&nbsp;&nbsp; Full Stack Dev Notes - ExaCare, W24 (<Link href="/writing/exacare" style={{ textDecoration: 'underline', color: 'blue' }}>link</Link>)</p>
                <p>➔&nbsp;&nbsp; Waterloo Blockchain Founders (<a href="https://www.linkedin.com/posts/kevinolearytv_interesting-perspective-activity-7056440703538577408-tU_K" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                <p>➔&nbsp;&nbsp; Account Abstraction (<a href="https://twitter.com/mattwong_ca/status/1632336009953431553" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
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
                <p className={`${poppins600.className} mt-2`} style={{ lineHeight: 'normal', fontSize: '25px' }}>2021</p>
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
              <div className={`${garamond400.className} mt-5`} style={{ marginLeft: '1.3rem', fontSize: '22px' }}>
                <p className="mb-2.5">➔&nbsp;&nbsp; Winning Solutions from the PYUSD Portal Hackathon on Solana (<a href="https://developer.paypal.com/community/blog/winning-solutions-pyusd-portal-hackathon-solana/" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                <p className="mb-2.5">➔&nbsp;&nbsp; YCDSB announces its 2021 Top Scholars (<a href="https://www.ycdsb.ca/2021-top-scholars" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                <p className="mb-2.5">➔&nbsp;&nbsp; Canadian National Anthology 2021 artwork feature (<a href="https://images.squarespace-cdn.com/content/v1/5395c972e4b0989057d6a862/daccdf6e-c064-4e4b-947d-e285c29813c5/Second+Drop+Cover+with+Barcode.jpg" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                <p className="mb-2.5">➔&nbsp;&nbsp; York Region Kiva 2020 bottle drive (<a href="https://www.yorkregion.com/news/richmond-hill-teen-starts-bottle-drive-to-help-businesses-in-developing-nations-amid-covid-19/article_26c44174-7a69-57a1-8c1a-babaacbd5209.html" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
                <p className="mb-2.5">➔&nbsp;&nbsp; Skills Ontario 2016 cardboard boat race (<a href="https://issuu.com/thornhillliberal/docs/tho_w_jan28" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>link</a>)</p>
              </div>
            </PopUp>

            <PopUp title='Contact' open={contactOpen} onClose={() => setContactOpen(false)}>
              <div className={`${garamond400.className} mt-5`} style={{ fontSize: '22px' }}>
                <p className="mb-2.5">LinkedIn: <a href="https://www.linkedin.com/in/mattwong-ca" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mattwong-ca</a></p>
                <p className="mb-2.5">GitHub: <a href="https://github.com/MattWong-ca" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mattwong-ca</a></p>
                <p className="mb-2.5">Telegram: <a href="https://t.me/mattwong_ca" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mattwong_ca</a></p>
                <p className="mb-2.5">X: <a href="https://x.com/mattwong_ca" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mattwong_ca</a></p>
                <p className="mb-2.5">Discord: mattwong.ca</p>
                <p className="mb-2.5">Farcaster: <a href="https://warpcast.com/mtt" target="_blank" style={{ textDecoration: 'underline', color: 'blue' }}>mtt</a></p>
              </div>
            </PopUp>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phone;