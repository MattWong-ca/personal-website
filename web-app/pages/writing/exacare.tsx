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
                        alt="ExaCare logo"
                        width={500}
                        height={0}
                        className="mx-auto"
                    />
                    <p className="italic" style={{ fontSize: '18px' }}>
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
                    <Image
                        style={{ marginTop: '40px', marginBottom: '30px' }}
                        src="/flowchart.png"
                        alt="ExaCare flowchart"
                        width={700}
                        height={0}
                        className="mx-auto"
                    />
                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        General flow:
                    </p>

                    <ol className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        <li>1. Define API endpoint</li>
                        <li>2. Create handler code (eg. findAll)</li>
                        <li>3. Define data models</li>
                        <li>4. Create service class (calls repo class methods)</li>
                        <li>5. Create repo class (methods interact with database)</li>
                    </ol>

                    <br />

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        The BE uses serverless cloud architecture through API Gateway and
                        AWS Lambda. API Gateway is like a centralized control center that
                        receives a request from the FE and directs it to the right service
                        or Lambda function. Lambda is a compute service that executes your
                        code in response to events like HTTP requests (hence eliminating
                        the need to manage servers).
                    </p>
                </div>
            </div>
        </div>

    );
}

export default ExaCare;