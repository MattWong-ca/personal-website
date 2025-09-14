import React from 'react';
import '../src/app/globals.css';
import { EB_Garamond, Poppins } from 'next/font/google';
import Image from 'next/image';

const title = Poppins({ subsets: ["latin-ext"], weight: ["600"], style: ["normal"] });
const garamond400 = EB_Garamond({ subsets: ["latin-ext"], weight: ["400"], style: ["normal"] });

const CareerOpportunities = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="w-3/5 h-screen">
                <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '35px' }}>What do I look for in career opportunities?</p>
                    <p className="italic" style={{ fontSize: '16px', marginBottom: '20px', marginTop: '-6px' }}>
                        August 30, 2025
                    </p>
                    <hr style={{ backgroundColor: 'black', height: '2px', border: 'none' }} />
                    <p className="italic" style={{ fontSize: '18px', marginBottom: '10px', marginTop: '10px' }}>
                        After 3 Waterloo co-op terms and 2+ part-time jobs, I&apos;m starting to get a better idea of what career opportunities I value.
                    </p>
                    
                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '24px' }}>Key themes</p>
                    <ul className={`${garamond400.className}`} style={{ fontSize: '20px', marginLeft: '20px' }}>
                        <li>• It should bring me outside my comfort zone – if I&apos;m scared of the opportunity and feel like I&apos;ll get fired, that&apos;s a good sign.</li>
                        <li>• How challenging is the job? The harder, the better – if I need to spend early mornings, late nights, and weekends to get shit done, that&apos;s a plus (but not for the easy monotonous work).</li>
                        <li>• Ideally startups (or small entrepreneurial teams in big companies) rather than typical big tech.</li>
                    </ul>

                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '24px' }}>What I look for</p>
                    
                    <ul className={`${garamond400.className}`} style={{ fontSize: '20px', marginLeft: '20px' }}>
                        <li>• Team: The founders or teammates I work with daily should be cracked. I should feel inspired when I see their LinkedIns.</li>
                        <li>• Business impact: No intern projects. I should have tangible numbers + metrics that describe the impact I&apos;ve made after the internship. After four months, if I hadn&apos;t worked on what I did, would the customers / company have been worse off?</li>
                        <li>• The work: Bleeding edge tech is exciting, I&apos;d rather work on this than another full stack SaaS. The more unknowns and variables, the better.</li>
                        <li>• Location: Huge plus if it&apos;s the Bay Area, New York, or Boston – these places have the highest talent density. If it&apos;s in Canada, the other points above must be very strong.</li>
                    </ul>

                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '24px' }}>Blacklist</p>
                    <ul className={`${garamond400.className}`} style={{ fontSize: '20px', marginLeft: '20px' }}>
                        <li>• Government jobs</li>
                        <li>• Banks (TD, RBC, BMO, CIBC, etc.)</li>
                        <li>• Startups with no technical founders</li>
                    </ul>

                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '24px' }}>My overall goals during these career opportunities</p>
                    <ul className={`${garamond400.className}`} style={{ fontSize: '20px', marginLeft: '20px', paddingBottom: '50px' }}>
                        <li>• 10x shareholder value</li>
                        <li>• The impact + results I have should encourage my manager to hire more Waterloo interns in the future</li>
                    </ul>

                </div>
            </div>
        </div>

    );
}

export default CareerOpportunities;
