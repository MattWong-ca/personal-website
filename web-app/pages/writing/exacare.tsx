import React from 'react';
import '../../src/app/globals.css';
import { EB_Garamond, Poppins } from 'next/font/google';
import Image from 'next/image';

const title = Poppins({ subsets: ["latin-ext"], weight: ["600"], style: ["normal"] });
const garamond400 = EB_Garamond({ subsets: ["latin-ext"], weight: ["400"], style: ["normal"] });

const ExaCare = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="w-3/5 h-screen">
                <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '35px' }}>Full Stack Dev Notes - ExaCare, W24</p>
                    <hr style={{ backgroundColor: 'black', height: '2px', border: 'none' }} />
                    <Image
                        style={{ marginTop: '75px', marginBottom: '75px' }}
                        src="/exacare.png"
                        alt="Matt Wong profile picture"
                        width={500}
                        height={0}
                        className="mx-auto"
                    />
                    <p className="italic" style={{ fontSize: '18px'}}>
                        Founded in early 2022, ExaCare is a health tech startup building
                        an all-in-one EHR and CRM platform for senior care homes. They
                        raised $6.5M from Foundation Capital, 1984 Ventures, and Fractal
                        Software. Below are the technical notes I took as a Full Stack
                        Developer Intern from Jan - Apr 2024.
                    </p>
                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '24px' }}>Backend - How to Make an API Endpoint</p>
                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        Tech stack: serverless architecture, AWS Lambda, API Gateway, S3, Node.js, Sequelize, PostgresSQL, pgAdmin, Docker
                    </p>
                </div>
            </div>
        </div>

    );
}

export default ExaCare;