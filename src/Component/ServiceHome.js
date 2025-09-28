import React from 'react';
import responsiveWebImg from '../Images/responsiveWebImg.svg';
import reactIMG from '../Images/reactIMG.svg';
import mobileImg from '../Images/mobileImg.svg';
import JSimage from '../Images/JSimage.svg';
import consultPinkImg from '../Images/consultPinkImg.svg';
import phone from '../Images/phone.svg';
import costEstimateIMG from '../Images/costIMG.svg';
import lunchProjectIMG from '../Images/lunchProjectIMG.svg';

import { FaArrowRightLong } from 'react-icons/fa6';
import { FaCheck } from "react-icons/fa";
import { GrDirections } from "react-icons/gr";
import { PiCubeTransparent } from "react-icons/pi";
import { BiSolidMedal } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaCommentsDollar } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";

// https://www.toptal.com/services/front-end-development

const ServiceHome = () => {
  return (
    // services
    <div className="wrapper-service w-[90%] mx-auto my-5">
      <h1 className="md:text-2xl  text-[16px] md:my-20 my-10 md:font-semibold font-bold text-center text-[#1D1D1F]">
      Web & App Development Services | React Native • SwiftUI • AI
      </h1>
      {/* mainbox */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-7 gap-5">
        {/* smallbox */}
        <div className=" customFendServices bg-white border border-gray-200 rounded-3xl shadow xl:pt-5 lg:pt-20 
        xl:h-[500px] lg:h-[450px] md:pt-10 pt-10 text-black  hover:border-[#4AA6E9]">
          <div className=" md:h-[20%] h-auto flex items-center py-5">
            <img
              src={responsiveWebImg}
              className="lg:w-[50%] md:w-[40%] w-[35%] object-cover mx-auto"
              alt='women computer ipad phone responsive website'
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h3 className=" text-lg font-semibold tracking-tight">
               
              </h3>
              <h3 className="mb-2 text-lg font-semibold tracking-tight">
            Responsive Web Design
              </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            My expertise includes building custom websites and WordPress-powered e-commerce solutions tailored to your business needs. Whether you're starting from scratch or scaling an existing platform, I can create a professional and responsive website that reflects your brand.
            </p>
          </div>
        </div>

        {/* box 2 middle  */}
        <div className="customFendServices bg-white border border-gray-200 rounded-3xl shadow xl:pt-5 lg:pt-20  md:pt-10 pt-10  text-black  hover:border-[#4AA6E9] xl:h-[500px] lg:h-[450px]">
          <div className=" md:h-[20%] h-auto py-2">
            <img src={JSimage} className="w-[50%] h-full mx-auto" alt='js html css'/>
          </div>
          <div className="p-5">
            <a href="#">
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#1D1D1F] dark:text-white">
              React JS Development Services
              </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            As a freelance React JS developer, I build high-performance, scalable, and user-friendly web applications using the power of React.js. Known for its flexibility and speed, React allows me to create dynamic interfaces for everything from web platforms to mobile app front-ends.
            </p>
          </div>
        </div>
        {/* box 3 right */}
        <div className=" customFendServices bg-white border border-gray-200 rounded-3xl shadow xl:pt-5 lg:pt-20  md:pt-10 pt-10  text-black   hover:border-[#4AA6E9] xl:h-[500px] lg:h-[450px]">
          <div className=" md:h-[20%] h-auto py-2">
            <img
              src={reactIMG}
              className="w-[50%] h-full mx-auto object-contain"
              alt='react js logo'
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#1D1D1F] dark:text-white">
              React Native Mobile App 
              </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Helping clients build powerful mobile apps with end-to-end React Native development services for iOS, Android, and cross-platform solutions
            </p>
          </div>
        </div>

        {/* box 4 right */}
        <div className=" customFendServices bg-white border border-gray-200 rounded-3xl shadow xl:pt-5 lg:pt-20  md:pt-10 pt-10  text-black  hover:border-[#4AA6E9] xl:h-[500px] lg:h-[450px]">
          <div className=" h-[20%] py-2">
            <img
              src={mobileImg}
              className="w-[50%] h-full object-contain mx-auto"
              alt='man phone'
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#1D1D1F] dark:text-white">
                SwiftUI iOS Mobile Development
              </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              I offer specialized services to create robust and user-friendly
              iOS applications tailored precisely to your requirements. <br className='block md:hidden'/>
               I collaborate closely with clients to design intuitive and visually
              appealing user interfaces for their iOS apps.
            </p>
          </div>
        </div>
      </div>

      {/* end service start process */}

{/* start section 2--benefit section 2 flex box  */}

<div className="mainProcess bg-white py-16 md:mt-14  mt-10 rounded-3xl grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
{/* image  div*/}
<div className='flex items-center justify-center md:mb-0 mb-5'>
  <img src={JSimage} className='w-[50%]' alt='js css html'/>
</div>
{/* text  div*/}
<div className='md:pr-16 px-5'>
<h2 className="md:text-xl  text-xl md:text-left text-center font-semibold  lg:mb-2 md:mb-5 mb-5">Get Help For Strong Digital Presence of Your Business</h2>
  {/* <p className='leading-7'>
  We prioritize our clients' needs and work closely with them throughout the development process. Our goal is to deliver a website that not only meets but exceeds your expectations. From planning to launch and beyond, we manage every aspect of web development, allowing you to focus on your core business. Our transparent and efficient process ensures a hassle-free experience.</p>
   */}
  <p className='leading-7 mt-3'> Our commitment to your success doesn’t end with the launch of your website. We provide ongoing support and maintenance to ensure your site remains up-to-date, secure, and effective. By choosing our web development services, you can rest assured that your website is in good hands. We handle the technical details, so you can focus on what you do best—running your business.
  </p>

  <a href ="contact"><button className=' text-white font-semibold py-3 px-10 rounded-3xl block mx-auto mt-10 
bg-gradient-to-r from-[#F1797E]  to-[#FFB697] 
hover:bg-gradient-to-r hover:from-white hover:to-white hover:border-2 hover:border-[#F1797E] hover:text-[#F1797E]
md:w-[300px] w-[250px]
        '>Consult Our Team</button></a> 

  </div> 

</div>

{/* end section 2 */}

      {/* process  start */}
      {/* wrapper belowmainprocess in css for shadow custom */}
      <div className="mainProcess bg-white py-10 md:mt-14  mt-10 rounded-3xl">
        <h2 className="text-3xl font-semibold text-center lg:mb-10 md:mb-5 mb-5">
          Our Process
        </h2>

        {/* mainbox control 4 small boxes */}
        <div className="mainBoxProcess grid lg:grid-cols-4 md:grid-cols-2 gap-2 md:px-10">

          {/*small  box 1 */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6">
            {/* box for number and arrow below */}
            <div className="flex items-center space-x-2 md:mb-10 mb-5">
              <div className="w-[60px] h-[60px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl">
                1
              </div>
              <FaArrowRightLong className="text-3xl" />
            </div>
            {/* smallbox for text */}
            <h3 className="font-semibold text-lg my-2">Define</h3>
            <p>
              Kick off development by defining all system requirements, making
              initial technology decisions, and capturing user roles and
              personas.
            </p>
          </div>

          {/*small  box2 */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6">
            <div className="flex items-center space-x-2 md:mb-10 mb-5">
              {' '}
              <div className="w-[60px] h-[60px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl">
                2
              </div>
              <FaArrowRightLong className="text-3xl" />
            </div>
            <h3 className="font-semibold text-lg my-2">Design</h3>
            <p>
              Determine your product's initial look and feel, model the user
              experience and user journey, prioritize features, and plan for the
              release.
            </p>
          </div>

          {/*small  box 3 */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6">
            <div className="flex items-center space-x-2 md:mb-10 mb-5">
              {' '}
              <div className="w-[60px] h-[60px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl">
                3
              </div>
              <FaArrowRightLong className="text-3xl" />
            </div>
            <h3 className="font-semibold text-lg my-2">Deliver</h3>
            <p>
              Move forward with detailed, development-ready specs, time and cost
              estimates, a launch plan, and execute your plan.
            </p>
          </div>

          {/*small  box 4 */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6">
            <div className="flex items-center space-x-2 md:mb-10 mb-5">
              {' '}
              <div className="w-[60px] h-[60px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl">
                4
              </div>
              <FaArrowRightLong className="text-3xl" />
            </div>
            <h3 className="font-semibold text-lg my-2">Develop</h3>
            <p>
              Throughout the product development phase, track quality assurance,
              and deployment updates using the project management tool you
              prefer.
            </p>
          </div>
        </div>
        <a href ="contact"><button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-10 rounded-3xl block mx-auto mt-10 my-3 hover:bg-gradient-to-r hover:from-white hover:to-white hover:border-2 hover:border-[#4AA6E9] hover:text-[#4AA6E9] md:w-[300px] w-[250px]'>Discuss your project</button></a>
      </div>
      {/* end process */}


      {/* Det start today - start service  get quote */}
      {/* wrapper belowmainprocess in css for shadow custom */}
      <div className="mainProcess bg-white py-10 md:mt-14  mt-10 rounded-3xl">
        <h2 className="text-3xl font-semibold text-center lg:mb-10 md:mb-5 mb-5">
        Get Started Today
        </h2>

        {/* mainbox control all 4 box */}
        <div className="mainBoxProcess grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 gap-2 px-10">

          {/*small  box 1 for contact section */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6 lg:h-[350px]">

            {/* image section div- box for number and arrow below */}
            <div className="flex items-center space-x-2 md:mb-10 mb-5 lg:h-[50%]">         
<img src={phone} className='h-[100px] object-cover' alt='phone chat'/>
              <FaArrowRightLong className="text-3xl" />
            </div>
            
            {/* text section div */}
            <div className='lg:h-[30%]'>
            {/* smallbox for text */}
            <h3 className="font-semibold text-lg my-2">Contact Us</h3>
            <p>
            Fill out the contact form, book a calendar, and schedule a Zoom Meeting.
            </p>
            </div>
          </div>


          {/*small  box2 consult box */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6 lg:h-[350px]">

                       {/* box for number and arrow below */}
                       <div className="flex items-center space-x-2 md:mb-10 mb-5 lg:h-[50%]">           
<img src={consultPinkImg} className='h-[100px] object-cover' alt='a team talks'/>
              <FaArrowRightLong className="text-3xl" />
            </div>
            <div className='lg:h-[30%]'>
            <h3 className="font-semibold text-lg my-2">Get a Consultation</h3>
            <p>
           Discuss the viability of your project ideas.
            </p>
            </div>
          </div>


{/* small box 3 cost estimate box */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6 lg:h-[350px]">
             {/* box for number and arrow below */}
             <div className="flex items-center space-x-2 md:mb-10 mb-5 lg:h-[50%]">       
<img src={ costEstimateIMG} className='h-[120px] object-cover' alt='dollar sign'/>
              <FaArrowRightLong className="text-3xl" />
            </div>

            <div className='lg:h-[30%]'>
            <h3 className="font-semibold text-lg my-2">Get a Cost Estimate</h3>
            <p>
            We share a project proposal with budget and timeline estimates based on the project requirements.
            </p>
            </div>
          </div>

          {/*small  box 4 project lunch box */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6 lg:h-[350px]">
              {/* box for number and arrow below */}
              <div className="flex items-center space-x-2 md:mb-10 mb-5 lg:h-[50%]">        
<img src={ lunchProjectIMG} className='h-[100px] object-cover' alt='rocket'/>
              <FaArrowRightLong className="text-3xl" />
            </div>
            <div className='lg:h-[30%]'>
            <h3 className="font-semibold text-lg my-2">Project Launch</h3>
            <p>
            Once the project is signed, we get your project started.
            </p>
            </div>
          </div>
        </div>
        <a href ="contact"><button className=' text-white font-semibold py-3 px-10 rounded-3xl block mx-auto my-10 
bg-gradient-to-r from-[#F1797E]  to-[#FFB697]  
hover:bg-gradient-to-r hover:from-white hover:to-white hover:border-2 hover:border-[#F1797E] hover:text-[#F1797E]
md:w-[300px] w-[250px]
        '>Schedule a Call</button></a>
      </div>
      {/* end service get quote bg-[#F1797E]  hover:bg-white hover:border-2 hover:border-[#4AA6E9] hover:text-[#4AA6E9] */}



{/* start last section here why choose company services */}


<div className="mainProcess bg-white py-16 md:mt-14  mt-10 rounded-3xl ">
<h2 className="text-3xl font-semibold  lg:mb-7 md:mb-5 mb-5 text-center">Why us?</h2>
  <p className=' md:text-center  text-left  md:px-10  px-5 mb-10 md:text-xl text-lg '>
  We prioritize our clients' needs and work closely throughout the development process. 
</p>

{/* main - wrap all circle and text */}
<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 space-y-5 md:pl-24 pl-16' >

  {/* wrap individuale circle and text */}
<div className='flex items-center '>
  <div className='  text-white text-4xl w-[70px] h-[70px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center' >
  <FaCheck />
  </div>
<p className='ml-5'>Result-oriented</p>
</div>


  {/* wrap individuale circle and text */}
  <div className='flex items-center'>
  <div className=' text-white text-4xl  w-[70px] h-[70px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center' >
  <GrDirections />
  </div>
<p className='ml-5 '>Flexible</p>
</div>


  {/* wrap individuale circle and text */}
  <div className='flex items-center '>
  <div className='  text-white text-4xl w-[70px] h-[70px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center' >
  <PiCubeTransparent />
  </div>
<p className='ml-5'>Transparent</p>
</div>


  {/* wrap individuale circle and text */}
  <div className='flex items-center'>
  <div className='  text-white text-4xl w-[70px] h-[70px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center' >
  <BiSolidMedal />
  </div>
<p className='ml-5'>Experienced</p>
</div>


  {/* wrap individuale circle and text */}
  <div className='flex items-center'>
  <div className=' text-white text-4xl  w-[70px] h-[70px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center' >
  <GiReceiveMoney />
  </div>
<p className='ml-5'>Cost-effective solutions</p>
</div>


  {/* wrap individuale circle and text */}
  <div className='flex items-center '>
  <div className=' text-white text-4xl w-[70px] h-[70px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center' >
  <FaCommentsDollar />
  </div>
<p className='ml-5'>Reasonable Rates</p>
</div>


</div>

</div>




{/* end  last section here why choose company services */}
      {/* review */}
      <div>
        <div className="mainBoxProcess grid lg:grid-cols-4 gap-2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* wrapper end below div */}
    </div>
  );
};

export default ServiceHome;
