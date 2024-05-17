import React from 'react';
import myImg2 from './Images/myImage.JPG';

const AboutMe = () => {
  return (
    <div>
      {/* image side */}
      <div className="main-aboutme flex md:flex-row flex-col">
        {/* above we want phone col img on top text bottom
        md:flex for ipad computer side by side */}
        <div className="img-aboutme w-3/4 m-auto  lg:w-[40%] md:w-[40%] lg:p-16 md:p-12 lg:pt-0 md:pt-24 pt-14 pb-14 lg:pl-36">
          <img
            src={myImg2}
            className="lg:w-[350px] md:w-[300px] w-[200px] lg:h-[350px]  md:h-[300px] h-[200px]  object-cover  md:mt-0 rounded-full"
          />
        </div>

        {/* text side */}
        <div className="text-aboutme w-full lg:w-[60%] md:w-[60%]  lg:pr-36 md:pr-14 lg:pl-10 lg:pt-24 md:pt-20 pt-0 md:pb-16 lg:px-10 px-10">
          <h2 className="font-bold md:text-2xl text-xl pb-5 text-[#565656]">
         Nice to meet you!
          </h2>
          <p className="text-md text-[#565656]">
          Welcome to my journey! I switched from the business world to web development, and it's been amazing. After six years of raising my kids, I wanted a new challenge. Inspired by a story about a truck driver who learned to code at 50, I decided to dive into software development.


            <br />
            <br />
            I taught myself HTML, CSS, Bootstrap, React, JavaScript, SQL, and Swift using resources like Free Code Camp, Udemy, and YouTube. Within one year, I became a front-end developer. To deepen my knowledge, I took computer science classes at Norwalk Community College.
            <br />
            <br />
            Now, with three years of web development experience, I help small businesses create effective, responsive websites and iOS apps. I specialize in using Bootstrap, TailwindCSS, React.js, and Next.js to build dynamic, user-friendly interfaces. From planning and coding to optimizing and debugging, I handle the entire development process.
            <br />
            <br />
            Additionally, I have knowledge in SEO (Search Engine Optimization) to help drive more traffic to small business websites. I understand how to implement SEO strategies to improve search engine rankings and increase online visibility.
            <br />
            <br />
            As a freelance web developer, I'm always looking for new opportunities to grow and help businesses succeed online. Let's connect and see how we can work together!
          </p>
          <a href="contact">
            <button className=" bg-gradient-to-r from-[#F1797E]  to-[#FFB697] 
hover:bg-gradient-to-r hover:from-white hover:to-white hover:border-2 hover:border-[#F1797E] hover:text-[#F1797E] text-white px-10 py-3 rounded-3xl my-7 md:ml-3 block m-auto ">
  {/* hover:bg-[#0088cc] */}
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
