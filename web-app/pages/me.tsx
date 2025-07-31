import React from 'react';
import '../src/app/globals.css';
import { EB_Garamond, Poppins } from 'next/font/google';
import Image from 'next/image';

const title = Poppins({ subsets: ["latin-ext"], weight: ["600"], style: ["normal"] });
const garamond400 = EB_Garamond({ subsets: ["latin-ext"], weight: ["400"], style: ["normal"] });

const Me = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="h-screen">
                <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '35px' }}>Matt&apos;s User Manual</p>
                    <p className="italic" style={{ fontSize: '18px', marginBottom: '10px', marginTop: '-6px' }}>
                        Version 1.0 – For collaborators, cofounders, and future teammates.
                    </p>
                    <hr style={{ backgroundColor: 'black', height: '2px', border: 'none' }} />
                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '24px' }}>Table of Contents</p>

                    <ol className={`${garamond400.className}`} style={{ fontSize: '20px', marginLeft: '20px' }}>
                        <li>1. My North Star</li>
                        <li>2. Values I live by (or need to keep reminding myself of)</li>
                        <li>3. My Work Style</li>
                        <li>4. My Communication Style</li>
                        <li>5. My Goals</li>
                        <li>6. My Strengths</li>
                        <li>7. My Weaknesses</li>
                    </ol>

                    <br/>

                    <p className={`${title.className}`} style={{ fontSize: '24px' }}>
                        My North Star
                    </p>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        Everything I do comes back to answering the question: How can I accelerate human progress in my lifetime?
                    </p>

                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '24px' }}>Values</p>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px', paddingBottom: '50px' }}>
                        TBD
                    </p>

                </div>
            </div>
        </div>

    );
}

export default Me;