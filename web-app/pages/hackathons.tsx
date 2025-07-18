import React from 'react';
import '../src/app/globals.css';
import { EB_Garamond, Poppins } from 'next/font/google';

const poppins600 = Poppins({ subsets: ["latin-ext"], weight: ["600"], style: ["normal"] });
const poppins400 = Poppins({ subsets: ["latin-ext"], weight: ["400"], style: ["normal"] });
const garamond400 = EB_Garamond({ subsets: ["latin-ext"], weight: ["400"], style: ["normal"] });

const LinkIcon = () => (
  <svg
    className="inline-block"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginTop: '-5px' }}
  >
    <path
      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 3h6v6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14L21 3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const hackathonData = [
  {
    project: "VoiceCam",
    hackathon: "ETHGlobal Taipei 2025",
    date: "Jan 2025",
    description: "Fully voice-controlled camera using AI",
    winnings: "1st Place - Zircuit Bounty",
    links: [
      { url: "https://www.youtube.com/watch?v=81QMIXHEYfo", label: "Demo" },
      { url: "https://x.com/replicate/status/1938316589830652192", label: "Tweet" }
    ]
  },
  {
    project: "Translate to English",
    hackathon: "Farcaster Frames",
    date: "Dec 2024",
    description: "Farcaster language extension for translation",
    winnings: "Featured",
    links: [
      { url: "https://farcaster.xyz/mtt/0x269fc24c", label: "Frame" },
      { url: "https://x.com/mattwong_ca/status/1933950749647737312", label: "Tweet" }
    ]
  },
  {
    project: "Bubble Wrap Popper",
    hackathon: "Farcaster Frames",
    date: "Dec 2024",
    description: "Farcaster mini app with haptic feedback",
    winnings: "Featured",
    links: [
      { url: "https://farcaster.xyz/mtt/0x2a887f18", label: "Frame" }
    ]
  },
  {
    project: "FindMyPhotos.app",
    hackathon: "SUTD Hackathon",
    date: "Jan 2025",
    description: "Find photos in untagged albums using facial recognition",
    winnings: "1st Place",
    links: [
      { url: "https://github.com/MattWong-ca/find-my-photos", label: "GitHub" },
      { url: "https://www.linkedin.com/posts/sutd_sutd-sutdlife-uwaterloo-ugcPost-7323605607712722945-J7IM", label: "LinkedIn" },
      { url: "https://uwaterloo.ca/biomedical-engineering/news/facial-recognition-app-nets-bme-student-hackathon-win", label: "Article" }
    ]
  },
  {
    project: "ETHGlobal Explorer",
    hackathon: "ETHGlobal",
    date: "2024",
    description: "Project showcase with filters for ETHGlobal events",
    winnings: "Featured",
    links: [
      { url: "https://x.com/mattwong_ca/status/1875358547569197460", label: "Tweet" }
    ]
  },
  {
    project: "Omikave",
    hackathon: "ETHGlobal",
    date: "2024",
    description: "Data marketplace for Omi AI data, powered by Akave",
    winnings: "Bounty Winner",
    links: [
      { url: "https://github.com/MattWong-ca/omikave", label: "GitHub" }
    ]
  },
  {
    project: "Neurosaurs",
    hackathon: "ETHGlobal",
    date: "2024",
    description: "Concentration game powered by Neurosity",
    winnings: "Bounty Winner",
    links: [
      { url: "https://github.com/MattWong-ca/neurosaurs", label: "GitHub" }
    ]
  },
  {
    project: "Endless Scroll",
    hackathon: "Farcaster",
    date: "2024",
    description: "Crypto-themed trivia game on Warpcast",
    winnings: "Featured",
    links: [
      { url: "https://github.com/MattWong-ca/endless-scroll", label: "GitHub" }
    ]
  },
  {
    project: "Lingocaster",
    hackathon: "ETHGlobal",
    date: "2024",
    description: "Learn languages by translating casts on Warpcast",
    winnings: "Bounty Winner",
    links: [
      { url: "https://github.com/Lingo-Labs/lingocaster", label: "GitHub" }
    ]
  },
  {
    project: "BANGER!",
    hackathon: "ETHGlobal",
    date: "2024",
    description: "Bet on casts to go viral with Chiliz Fan Tokens",
    winnings: "Bounty Winner",
    links: [
      { url: "https://github.com/MattWong-ca/banger-bets", label: "GitHub" }
    ]
  },
  {
    project: "Castlingo",
    hackathon: "Farcaster",
    date: "2024",
    description: "Chrome extension for language learning on Warpcast",
    winnings: "Featured",
    links: [
      { url: "https://github.com/MattWong-ca/castlingo", label: "GitHub" }
    ]
  },
  {
    project: "Translate Bot",
    hackathon: "Farcaster",
    date: "2024",
    description: "Language translation bot for Farcaster",
    winnings: "Featured",
    links: [
      { url: "https://github.com/MattWong-ca/translate-bot", label: "GitHub" }
    ]
  },
  {
    project: "FrameGPT",
    hackathon: "ETHGlobal",
    date: "2024",
    description: "Free no-code builder for Farcaster frames",
    winnings: "Bounty Winner",
    links: [
      { url: "https://ethglobal.com/showcase/framegpt-0gxad", label: "Showcase" }
    ]
  },
  {
    project: "Swift Tickets",
    hackathon: "ETHGlobal",
    date: "2023",
    description: "NFT minting gated by World ID",
    winnings: "Bounty Winner",
    links: [
      { url: "https://github.com/MattWong-ca/swift-tickets-navh", label: "GitHub" }
    ]
  }
];

const HackathonsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="" style={{ paddingLeft: '5rem', paddingRight: '5rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="text-center mb-8" style={{ marginBottom: '1rem' }}>
          <h1 className={`${poppins600.className} font-extrabold text-gray-800 mb-4`} style={{ fontSize: '35px' }}>
            All My Hackathon Projects!
          </h1>
          <p className={`${garamond400.className} text-gray-600 max-w-3xl mx-auto`} style={{ fontSize: '20px' }}>
            All my solo hackathon projects since 2023.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200" style={{ borderBottom: '2px solid #d1d5db' }}>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200" style={{ minWidth: '120px' }}>
                    Project
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200" style={{ minWidth: '200px' }}>
                    Description
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200" style={{ minWidth: '150px' }}>
                    Hackathon
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200" style={{ minWidth: '120px' }}>
                    Winnings
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200" style={{ minWidth: '80px' }}>
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider" style={{ minWidth: '100px' }}>
                    Links
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {hackathonData.map((project, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                    style={index !== hackathonData.length - 1 ? { borderBottom: '1px solid #e5e7eb' } : {}}
                  >
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 border-r border-gray-200">
                      {project.project}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                      {project.description}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                      {project.hackathon}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                        project.winnings.includes('1st') ? 'bg-green-100 text-green-800 border border-green-200' :
                        project.winnings.includes('Bounty') ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                        'bg-gray-100 text-gray-800 border border-gray-200'
                      }`}>
                        <img
                          src="https://via.placeholder.com/24x24?text=%F0%9F%8F%86"
                          alt="Trophy"
                          style={{ width: '18px', height: '18px', display: 'inline-block', verticalAlign: 'middle' }}
                        />
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                      {project.date}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link, linkIndex) => (
                          <img
                            key={linkIndex}
                            src="https://via.placeholder.com/24x24?text=%F0%9F%94%97"
                            alt="Link placeholder"
                            style={{ width: '20px', height: '20px', display: 'inline-block', borderRadius: '4px' }}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className={`${poppins400.className} inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors`}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default HackathonsPage; 