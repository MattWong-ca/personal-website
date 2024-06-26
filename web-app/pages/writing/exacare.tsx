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
                        Software. Below are the technical notes I took as the first SWE
                        Intern hire from Jan - Apr 2024.
                    </p>
                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '24px' }}>Backend - How to Make an API Endpoint</p>
                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        Tech stack: serverless architecture, AWS Lambda, API Gateway, S3, Node.js, Sequelize, OpenAPI, PostgresSQL, pgAdmin, Docker
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

                    <ol className={`${garamond400.className}`} style={{ fontSize: '20px', marginLeft: '20px' }}>
                        <li>1. Define API endpoint</li>
                        <li style={{ marginLeft: '20px'}}>- In .yml file</li>
                        <li style={{ marginLeft: '20px'}}>- In .yaml file (for OpenAPI schema)</li>
                        <li>2. Create handler code (eg. findAll)</li>
                        <li>3. Define data models</li>
                        <li style={{ marginLeft: '20px'}}>- In /models folder (defines structure + relationships)</li>
                        <li style={{ marginLeft: '20px'}}>- In migration file (creates the database table + columns)</li>
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

                    <br />

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        Here’s the request-response flow:
                    </p>

                    <br />

                    <ol className={`${garamond400.className}`} style={{ fontSize: '20px', marginLeft: '20px' }}>
                        <li>1. API Gateway receives HTTP request from FE client</li>
                        <li>2. API Gateway routes request to appropriate endpoint (eg. /users)</li>
                        <li>3. Lambda function is triggered, executing code associated with the endpoint</li>
                        <li>4. Lambda function processes and sends response back to API Gateway</li>
                        <li>5. API Gateway receives response and sends it back to FE client</li>
                    </ol>

                    <br/>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        What it looks like in code:
                    </p>

                    <br/>

                    <p className={`${title.className}`} style={{ fontSize: '18px' }}>
                        Defining API Endpoints
                    </p>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        In the BE’s root directory, there’s various 
                        serverless.&#123;SERVICE_NAME&#125;.yml files. These represent the
                        different microservices responsible for handling APIs specific to 
                        different parts of the app. Instead of running npm run start and 
                        waiting ~8 minutes for all services, we can run only the services 
                        we need, reducing the wait time for services to boot up.
                    </p>

                    <br/>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        Inside a serverless.&#123;SERVICE_NAME&#125;.yml file, the 
                        ‘functions’ are the most important part:
                    </p>

                    <br/>

                    <ol className={`${garamond400.className}`} style={{ fontSize: '20px', marginLeft: '20px' }}>
                        <li>-&nbsp; handler: path to where the handler’s code is</li>
                        <li>-&nbsp; path: URL of endpoint; uses &#123; &#125; for path parameters</li>
                        <li>-&nbsp; method: type of HTTP request</li>
                        <li>-&nbsp; request → parameters → paths: defines name of path parameter above</li>
                    </ol>

                    <br/>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        Next, before going into the handler code (eg. findAll.ts), the 
                        endpoints also need to be defined in the yaml files under the 
                        api-schemas folder. Once a script is run, OpenAPI will generate the
                        necessary types for the requests/responses, which the FE can then 
                        also use by running a script. This makes it easier for the FE/BE 
                        developers to be in sync and work with the same object types.
                    </p>

                    <br/>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        Overview of a .yaml file:
                    </p>

                    <br/>

                    <ol className={`${garamond400.className}`} style={{ fontSize: '20px', marginLeft: '20px' }}>
                        <li>-&nbsp; paths: the endpoint URL</li>
                        <li>-&nbsp; get/put/post: type of HTTP method</li>
                        <li>-&nbsp; description: what the endpoint does</li>
                        <li>-&nbsp; operationId: important for the handler code later on</li>
                        <li>-&nbsp; parameters: describe the path and query parameters</li>
                        <li>-&nbsp; responses: 400, 200, etc.</li>
                        <li style={{ marginLeft: '20px' }}>-&nbsp; 200 response: need to specify content type, as well as response type (eg. 
                            response is of type User, defined in components section at bottom of same file)
                        </li>
                    </ol>

                    <br/>

                    <p className={`${title.className}`} style={{ fontSize: '18px' }}>
                        Lambda Handler
                    </p>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        In the actual lambda handler code (eg. findAll.ts), a service (eg. 
                        UserService) is instantiated and one of its methods will be called 
                        (eg. userService.findAll()). If the request has a response, it’ll 
                        be sent to API Gateway and then back to the FE. This Lambda handler 
                        file is also where validations are done to ensure the FE sent 
                        adequate/correct data.
                    </p>

                    <br/>

                    <p className={`${title.className}`} style={{ fontSize: '18px' }}>
                        Defining Data Models
                    </p>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        Before creating the service and repo classes, the object types 
                        need to be defined through a model and migration file. This is 
                        done with Sequelize, an Object-Relational Mapping library that
                        lets you define an OOP model representing a database table.
                    </p>
                    <br/>
                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        Both the service and repo class will make use of object types 
                        defined in the /models folder. These files essentially define the 
                        structure of the data models, like the properties they include and 
                        any relationships they have with other types.
                    </p>
                    <br/>
                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        Similarly, a migration file is needed to actually create the 
                        database table and define its columns. These files only run once, 
                        so for adding a new column, you’d have to create a new file.
                    </p>

                    <br/>

                    <p className={`${title.className}`} style={{ fontSize: '18px' }}>
                        Service Class
                    </p>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        The service class serves as an intermediary between the handler 
                        code that receives the HTTP request and the repository code that 
                        actually interacts with the database through Sequelize. Its methods 
                        will vary depending on the HTTP request and the action/response 
                        expected.
                    </p>

                    <br/>

                    <p className={`${title.className}`} style={{ fontSize: '18px' }}>
                        Repo Class
                    </p>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        The repo class contains the repo methods that the service methods 
                        use. This code is where you specify what properties you want from 
                        the database rows (eg. where X property is false, where Y property 
                        equals Z).  
                    </p>

                    <br/>

                    <p className={`${title.className}`} style={{ marginTop: '50px', fontSize: '24px' }}>Frontend</p>
                    <p className={`${garamond400.className}`} style={{ fontSize: '20px' }}>
                        Tech stack: TypeScript, React, MUI, React Hook Form, TanStack, OpenAPI
                    </p>

                    <br/>

                    <p className={`${garamond400.className}`} style={{ fontSize: '20px', paddingBottom: '50px' }}>
                        I built frontend components across Assessments (forms), Billing, and 
                        the Data Center page. I used MUI for table (data grid) features like
                        filters, search bars, and sorting methods. React Hook Form was used
                        for all the form inputs, while TanStack and OpenAPI were used for 
                        API requests/responses.
                    </p>

                </div>
            </div>
        </div>

    );
}

export default ExaCare;