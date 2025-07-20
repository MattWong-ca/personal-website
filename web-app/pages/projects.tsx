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
    project: "CallBlock.AI",
    hackathon: "Protocol Labs",
    date: "2025",
    description: "AI proxy phone numbers to prevent spam + scams",
    winnings: "-",
    links: [
      { url: "https://github.com/MattWong-ca/callblock-ai", label: "GitHub" }
    ]
  },
  {
    project: "VoiceCam",
    hackathon: "Replicate x BFL",
    date: "2025",
    description: "Take + edit photos with just your voice",
    winnings: "$150",
    links: [
      { url: "https://github.com/MattWong-ca/voice-cam", label: "GitHub" },
      { url: "https://www.youtube.com/watch?v=81QMIXHEYfo", label: "YouTube" },
      { url: "https://x.com/replicate/status/1938316589830652192", label: "X" }
    ]
  },
  {
    project: "Translate to English",
    hackathon: "-",
    date: "2025",
    description: "Farcaster language extension for translation",
    winnings: "-",
    links: [
      { url: "https://farcaster.xyz/mtt/0x269fc24c", label: "Frame" },
      { url: "https://x.com/mattwong_ca/status/1933950749647737312", label: "Tweet" }
    ]
  },
  {
    project: "Bubble Wrap Popper",
    hackathon: "-",
    date: "2025",
    description: "Farcaster mini app with haptic feedback",
    winnings: "-",
    links: [
      { url: "https://farcaster.xyz/mtt/0x2a887f18", label: "Link" }
    ]
  },
  {
    project: "Farlo",
    hackathon: "Base x Vercel",
    date: "2025",
    description: "Farcaster onboarding buddy",
    winnings: "-",
    links: [
      { url: "https://github.com/MattWong-ca/farlo", label: "GitHub" }
    ]
  },
  {
    project: "⭐ FindMyPhotos.app",
    hackathon: "ETHGlobal Taipei",
    date: "2025",
    description: "Find photos in untagged Flickr albums using facial recognition",
    winnings: "$7500",
    links: [
      { url: "https://github.com/MattWong-ca/find-my-photos", label: "GitHub" },
      { url: "https://www.linkedin.com/posts/sutd_sutd-sutdlife-uwaterloo-ugcPost-7323605607712722945-J7IM", label: "LinkedIn" },
      { url: "https://uwaterloo.ca/biomedical-engineering/news/facial-recognition-app-nets-bme-student-hackathon-win", label: "Article" }
    ]
  },
  {
    project: "⭐ ETHGlobal Explorer",
    hackathon: "-",
    date: "2025",
    description: "Project showcase with filters for ETHGlobal events",
    winnings: "920+ users",
    links: [
      { url: "https://github.com/MattWong-ca/ethglobal-explorer", label: "GitHub" },
      { url: "https://x.com/mattwong_ca/status/1875358547569197460", label: "X" }
    ]
  },
  {
    project: "Omikave",
    hackathon: "ETHGlobal Bangkok",
    date: "2024",
    description: "Data marketplace for Omi AI data, powered by Akave",
    winnings: "$1750",
    links: [
      { url: "https://github.com/MattWong-ca/omikave", label: "GitHub" }
    ]
  },
  {
    project: "Neurosaurs",
    hackathon: "ETHGlobal SF",
    date: "2024",
    description: "Concentration game powered by Neurosity Crown",
    winnings: "$300",
    links: [
      { url: "https://github.com/MattWong-ca/neurosaurs", label: "GitHub" }
    ]
  },
  {
    project: "Endless Scroll",
    hackathon: "Scroll x Alchemy",
    date: "2024",
    description: "Crypto-themed trivia game on Farcaster",
    links: [
      { url: "https://github.com/MattWong-ca/endless-scroll", label: "GitHub" }
    ]
  },
  {
    project: "⭐ Lingocaster",
    hackathon: "PYUSD x Portal",
    date: "2024",
    description: "Learn languages by translating casts on Farcaster",
    winnings: "$14000",
    links: [
      { url: "https://github.com/Lingo-Labs/lingocaster", label: "GitHub" }
    ]
  },
  {
    project: "BANGER!",
    hackathon: "ETHOnline",
    date: "2024",
    description: "Bet on casts to go viral with Chiliz Fan Tokens",
    links: [
      { url: "https://github.com/MattWong-ca/banger-bets", label: "GitHub" }
    ]
  },
  {
    project: "Castlingo",
    hackathon: "ETHToronto",
    date: "2024",
    description: "Chrome extension for language learning on Warpcast",
    winnings: "$500",
    links: [
      { url: "https://github.com/MattWong-ca/castlingo", label: "GitHub" }
    ]
  },
  {
    project: "EMG Controlled Whisk",
    hackathon: "-",
    date: "2024",
    description: "EMG controlled whisk project",
    links: []
  },
  {
    project: "⭐ Translate Bot",
    hackathon: "LearnWeb3",
    date: "2024",
    description: "Language translation bot for Farcaster",
    winnings: "$3000",
    links: [
      { url: "https://github.com/MattWong-ca/translate-bot", label: "GitHub" }
    ]
  },
  {
    project: "FrameGPT",
    hackathon: "ETHGlobal Frameworks",
    date: "2024",
    description: "Free no-code builder for Farcaster frames",
    winnings: "-",
    links: [
      { url: "https://github.com/MattWong-ca/frame-gpt", label: "GitHub" },
      { url: "https://youtu.be/sGiKRlEshwU", label: "YouTube" }
    ]
  },

  {
    project: "Swift Tickets",
    hackathon: "Consensys NAVH",
    date: "2023",
    description: "NFT minting gated by World ID",
    winnings: "$1091",
    links: [
      { url: "https://github.com/MattWong-ca/swift-tickets-navh", label: "GitHub" },
      { url: "https://youtu.be/RAUQhd-ZXpw?t=1580", label: "YouTube" }
    ]
  }
];

const HackathonsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="" style={{ paddingLeft: '5rem', paddingRight: '5rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="text-center mb-8" style={{ marginBottom: '1rem' }}>
          <h1 className={`${poppins600.className} font-extrabold text-gray-800 mb-4`} style={{ fontSize: '35px' }}>
            All My Projects!
          </h1>
          <p className={`${garamond400.className} text-gray-600 max-w-3xl mx-auto`} style={{ fontSize: '20px' }}>
            All my solo projects since 2023.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: '2px solid #d1d5db', backgroundColor: '#f9fafb' }}>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200" style={{ minWidth: '120px' }}>
                    Project
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200" style={{ minWidth: '200px' }}>
                    Description
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200" style={{ minWidth: '150px' }}>
                    Hackathon
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200" style={{ minWidth: '80px' }}>
                    Stats
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200" style={{ minWidth: '80px' }}>
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider" style={{ minWidth: '70px' }}>
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
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900 border-r border-gray-200" style={{ paddingLeft: '10px' }}>
                      {project.project}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                      {project.description}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                      {project.hackathon}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">
                      {project.winnings ? (
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                          project.winnings.includes('1st') ? 'bg-green-100 text-green-800' :
                          project.winnings.includes('Bounty') ? 'bg-blue-100 text-blue-800' :
                          project.winnings.includes('users') || project.winnings.includes('Featured') ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.winnings.includes('1st') || project.winnings.includes('Bounty') ? (
                            <img
                              src="https://via.placeholder.com/24x24?text=%F0%9F%8F%86"
                              alt="Trophy"
                              style={{ width: '18px', height: '18px', display: 'inline-block', verticalAlign: 'middle' }}
                            />
                          ) : null}
                          <span className="ml-1">{project.winnings}</span>
                        </span>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700" style={{ textAlign: 'center' }}>
                      {project.date}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      <div className="flex flex-wrap" style={{ gap: '4px' }}>
                        {project.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                          >
                            {link.label === 'GitHub' ? (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            ) : link.label === 'X' ? (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                              </svg>
                            ) : link.label === 'YouTube' ? (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-red-600">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
                            ) : (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <path d="M15 3h6v6"/>
                                <path d="M10 14L21 3"/>
                              </svg>
                            )}
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Winnings Summary */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6" style={{ marginTop: '2rem' }}>
          <div className="flex items-center gap-4 mb-4">
            <h2 className={`${poppins600.className} text-xl font-semibold text-gray-800`} style={{ marginRight: '0.5rem' }}>
            💰 Total Winnings:
            </h2>
            <span className={`${poppins600.className} text-xl font-bold text-green-600`}>
              ${(() => {
                const total = hackathonData.reduce((sum, project) => {
                  const winnings = project.winnings;
                  if (winnings && winnings.startsWith('$')) {
                    const amount = parseInt(winnings.replace(/[$,]/g, ''));
                    if (!isNaN(amount)) {
                      return sum + amount;
                    }
                  }
                  return sum;
                }, 0);
                return total.toLocaleString();
              })()}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            {(() => {
              const yearlyWinnings = hackathonData.reduce((acc: { [key: string]: number }, project) => {
                const year = project.date;
                const winnings = project.winnings;
                
                if (winnings && winnings.startsWith('$')) {
                  const amount = parseInt(winnings.replace(/[$,]/g, ''));
                  if (!isNaN(amount)) {
                    acc[year] = (acc[year] || 0) + amount;
                  }
                }
                return acc;
              }, {});

              return Object.entries(yearlyWinnings)
                .sort(([a], [b]) => b.localeCompare(a)) // Sort by year descending
                .map(([year, total]) => (
                  <span key={year} className={`${garamond400.className} text-gray-700`} style={{ marginRight: '1rem' }}>
                    {year}: <span className={`${poppins600.className} font-bold text-green-600`}>${(total as number).toLocaleString()}</span>
                  </span>
                ));
            })()}
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '2rem' }}>
          <a
            href="/"
            className={`${poppins400.className} inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors`}
            style={{ marginTop: '2rem' }}
          >
            ← Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default HackathonsPage; 