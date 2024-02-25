import React from 'react';
import myImg2 from './Images/myImage.JPG';

const AboutMe = () => {
  return (
    <div>
      {/* image side */}
      <div className="main-aboutme flex md:flex-row flex-col">
        {/* above we want phone col img on top text bottom
        md:flex for ipad computer side by side */}
        <div className="img-aboutme w-3/4 m-auto  lg:w-[40%] md:w-[40%] lg:p-16 md:p-12 lg:pt-24 md:pt-24 pt-14 pb-14">
          <img
            src={myImg2}
            className="w-full lg:h-[400px] h-[300px] object-cover lg:pl-36 md:mt-10"
          />
        </div>

        {/* text side */}
        <div className="text-aboutme w-full lg:w-[60%] md:w-[60%]  lg:pr-36 md:pr-14 lg:pl-10 lg:pt-24 md:pt-20 md:pb-16 lg:px-10 px-10">
          <h2 className="font-bold md:text-2xl text-xl pb-5 text-[#565656]">
            Hey there!
          </h2>
          <p className="text-md text-[#565656]">
            Let me share with you the exciting adventure I'm on! Transitioning
            from number-crunching in the business world to immersing myself in
            the realm of software development wasn't a walk in the park, but let
            me tell you, it's been worth it! Imagine this: after dedicating six
            incredible years to raising my kiddos, I found myself yearning for
            something more. That's when I stumbled upon this incredibly
            inspiring story about a truck driver who became a coding whiz at 50!
            Talk about a lightbulb moment! I just knew I had to give it a try.
            <br />
            <br />
            Armed with determination and fueled by curiosity, I dove headfirst
            into learning all about HTML, CSS, Bootstrap, React, JavaScript,
            SQL, and Swift. Thanks to amazing resources like Free Code Camp,
            Udemy, and YouTube, I went from being a coding newbie to becoming a
            front-end developer. In just six months of intense self-teaching,<br/> I
            felt like I could conquer the world! But why stop there? I decided
            to take the leap into formal education, enrolling in computer
            science classes at Norwalk Community College.
            <br />
            <br />
            I'm an adaptable and driven professional with a passion for software
            development. I have experience building responsive commercial
            websites and iOS apps. Additionally, I'm proficient with frameworks
            like Bootstrap and React, enabling me to create dynamic and
            user-friendly interfaces. I've honed my skills across the entire
            development process, from gathering requirements and designing
            pseudocode to coding, optimizing webpages, and debugging.
            <br />
            <br />
            I'm actively seeking opportunities to leverage my diverse skill set
            and continue to grow within the field of software development. Let's
            connect and explore the possibilities together!
          </p>
          <a href="contact">
            <button className="bg-[#565656] text-white px-10 py-3 rounded-3xl my-7 md:ml-3 block m-auto hover:bg-[#0088cc]">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
