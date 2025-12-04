import React from "react";
// import myImg from './Images/sukanyaBGremove.png'
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiHome5Fill } from "react-icons/ri";
import { BsGlobeAmericas } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Resume = () => {
  return (
    <div>
      <div className="controlWholeLayout">
        {/* part 1 on top */}

        {/* below control both box --parent box*/}
        <div class="flex md:flex-row flex-col">
          {/* top left box --pink box*/}
          <div class="flex-initial md:w-[45%] lg:w-[30%] w-full py-7 bg-[#ffdbdc] lg:p-4 md:p-2 md:pt-5 space-y-2">
            {/* space -y-5 top and botton --- space-y-control all children */}
            <h2 className="text-2xl font-bold mx-4 text-center md:text-left">
              TIPARPRON SUKANYA
            </h2>

            <div className="iconText flex items-center">
              <div className="icon mx-4">
                <MdOutlineEmail />
              </div>
              <a href="mailto:sukanyat2022a@gmail.com">
                sukanyat2022a@gmail.com
              </a>
            </div>

            {/* <div className='iconText flex items-center'>
<div className='icon mx-4'><IoIosPhonePortrait/></div>
<a href=''></a>
   </div> */}

            <div className="iconText flex items-center">
              <div className="icon mx-4">
                <RiHome5Fill />
              </div>
              <a href="">Connecticut</a>
            </div>

            <div className="iconText flex items-center">
              <div className="icon mx-4">
                <BsGlobeAmericas />
              </div>
              <a href="https://sukanyat.com/">https://tsukanya.com/</a>
            </div>

            <div className="iconText flex items-center">
              <div className="icon mx-4">
                <FaGithub />
              </div>
              <a href="https://github.com/SukanyaT2022">
                https://github.com/SukanyaT2022
              </a>
            </div>
          </div>

          {/* top right Box */}
          <div class="flex-initial md:w-[55%] lg:w-[70%] w-full  py-7 md:px-2 lg:p-5 flex items-center justify-center flex-col">
            <h3 className="text-2xl font-bold self-start ml-8">
             React & Next.js Developer | React Native & SwiftUI Mobile Engineer
            </h3>
            <p className="px-8 pt-4">
           React and mobile developer with 3+ years of proven expertise in Next.js, React Native, and SwiftUI. Skilled in delivering high-performance web applications and native iOS experiences. Strong foundation in modern JavaScript, responsive design, and API integration with a focus on code quality and user-centric solutions.
            </p>
          </div>
        </div>

        {/* part 2 */}
        {/* below control both box --parent box*/}
        <div class="flex md:flex-row flex-col md:pb-10">
          {/* below left box */}
          <div class="flex-initial md:w-[45%] lg:w-[30%] w-full bg-[#eeeeee]  px-14 pt-5 space-y-2 pb-7">
            <h3 className="font-bold text-xl text-center md:text-left mb-5">
              SKILLS
            </h3>
            <h4 className="font-bold">Soft Skills</h4>
            <ul className="skills">
              <li>Communication Skills</li>
              <li>Collaboration</li>
              <li>Self-awareness</li>
              <li>Teamwork</li>
              <li>Problem – Solving</li>
            </ul>

            <h4 className="font-bold">Technical Skills</h4>
            <ul className="skills pb-5 ">
              <li>React Native</li>
              <li>SwiftUI</li>
              <li>React</li>
              <li>HTML & CSS, JavaScript</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>SQL</li>
              <li>PHP</li>
              <li>GitHub</li>
              <li>User Interface Design</li>
              <li>Responsive design</li>
              <li>Debugging skills</li>
              <li>Web Optimization</li>
              <li>SEO</li>
            </ul>

            <h2 className="font-bold mt-5">EDUCATION</h2>
            <h3 className="font-bold">Norwalk Community College</h3>
            <p>Norwalk, CT 2023</p>
            <h3>Associate of Science</h3>
            <p>Computer Science | GPA: 3.4</p>

            <h3 className="font-bold pt-5">Long Island University </h3>
            <p>Brooklyn, New York</p>
            <p>MBA: Finance | GPA: 3.3 </p>
          </div>

          {/*bottom right Box */}
          <div class="flex-initial md:w-[55%] lg:w-[70%] w-full pt-5 md:px-7 lg:px-14 flex flex-col md:space-y-2 space-y-6  lg:pb-24 px-8 pb-7 ">
            <h2 className="font-bold text-xl text-center md:text-left mb-5">
              WORK HISTORY
            </h2>
            <h3 className="font-bold">Personal Projects</h3>

             <p className="font-medium">
              <em>Weston, CT • 01/2024 - Current</em>
            </p>
            <ul className="skills space-y-3">
 <li>
                Developing an Apartment Rental Web App with Next.js and Tailwind
                CSS featuring SSR, property search, and SEO optimization
              </li>
              <li>
                Built a Pet Social Media iOS App using SwiftUI with social
                networking, user profiles, and community features for pet owners
              </li>
              <li>
                Developed a Car Rental Mobile App with React Native and Tailwind
                CSS featuring maps, real-time availability, and cross-platform
                support
              </li>
              <li>
                Building a Hotel Booking iOS App with SwiftUI, including search,
                reservations, and payment integration
              </li>


               </ul>

               {/* 2020 until 2024 */}
            <p className="pt-6 font-medium">
              <em>Weston, CT • 01/2020 - 2024</em>
            </p>
                   
            <ul className="skills space-y-3">
              <li>
                Building an e-commerce website for children's fashion using
                JavaScript, React, Bootstrap-React, HTML, and CSS.
              </li>
              <li>
                Creating an e-commerce website for a wine shop using React,
                Bootstrap, JavaScript, HTML, and CSS.
              </li>
              <li>
                Creating a Word Guessing Game using Dynamic HTML, CSS, and
                JavaScript.
              </li>
              <li>
                A Crypto Price Tracker application made with React, JavaScript,
                CSS, and integrated with REST APIs.
              </li>
              <li>
                A simple math quiz app for second-grade students made with
                React, React DOM, HTML, and CSS.
              </li>
              <li>
                A Weather Web App built with React, using the Open Weather API,
                and styled with CSS.
              </li>
              <li>
                A Halloween Emoji Search App made with React, React-DOM, HTML,
                and CSS.
              </li>
              <li>
                Built a Tic Tac Toe game integrating with HTML, CSS, JavaScript,
                and Dynamic HTML.
              </li>
              <li>
                Created a To-Do List project, gallery images project, and
                shopping card project by using React, JavaScript, HTML, CSS, and
                Bootstrap-React.
              </li>
              <li>
                Created an e-commerce site to sell Asian food products. Used
                JavaScript, HTML, CSS, Bootstrap.
              </li>
              <li>
                A password generator built with JavaScript, utilizing inbuilt
                string functions to generate random passwords.
              </li>
              <li>
                A BMI Calculator built with Dynamic HTML, event handling,
                JavaScript, HTML, and CSS.
              </li>
              <li>
                Built a calculator project using JavaScript (Object-oriented
                programming).
              </li>
            </ul>
            {/* section 2 toy company */}

            <h3 className="font-bold lg:pt-6">
              Wildlife Artists, Inc (Toy Company) - Junior Business Analyst{" "}
            </h3>
            <p>
              <em>Bethel, CT • 01/2012 - 12/2015</em>
            </p>
            <ul className="skills space-y-3">
              <li>
                Communicated with an operation team and a financial team to
                create a business model and logical data models for efficient
                budget management strategies such as improving cash flow.
              </li>
              <li>
                Assisted in analyzing root causes of missteps in the business by
                evaluating areas of concern; made suggestions for improvements
                in quality of operations and managing cost.
              </li>
              <li>
                Worked with clients to meet their requirements to identify
                business plans and goals.
              </li>
            </ul>

            {/* section 3 farm financail operation */}
            <h3 className="font-bold lg:pt-6">
              Koon-Mow Farm - Farm Financial Operator
            </h3>
            <p>
              <em>Chiangmai, Thailand • 01/2010 - 11/2012 </em>
            </p>
            <ul className="skills space-y-3">
              <li>
                Perform accounting duties to appraise operating results in terms
                of cost, budgets, trends, and increased profit possibilities.
              </li>
              <li>
                Worked with clients to meet their requirements to identify
                business plans and goals.
              </li>
            </ul>

            {/* section 4 axa */}
            <h3 className="font-bold lg:pt-6">
              AXA Advisor, LLC - Financial Advisor Internship{" "}
            </h3>
            <p>
              <em>New York, NY • 06/2009 - 12/2009 </em>
            </p>
            <ul className="skills space-y-3">
              <li>
                Conducted market research to determine the match between
                clients' investments and their goals.
              </li>
              <li>
                Collaborated with the wealth management team to gain new
                potential clients via a marketing campaign.
              </li>
              <li>
                Assisted in organizing a financial education seminar for clients
                and potential clients.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
