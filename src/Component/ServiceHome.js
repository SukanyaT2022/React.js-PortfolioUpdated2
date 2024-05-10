import React from 'react';
import responsiveWebImg from '../Images/responsiveWebImg.svg';
import reactIMG from '../Images/reactIMG.svg';
import mobileImg from '../Images/mobileImg.svg';
import JSimage from '../Images/JSimage.svg';
import phone from '../Images/phone.svg';
import { FaArrowRightLong } from 'react-icons/fa6';

// https://www.toptal.com/services/front-end-development

const ServiceHome = () => {
  return (
    // services
    <div className="wrapper-service w-[90%] mx-auto my-5">
      <h1 className="md:text-4xl text-[22px] md:my-20 my-10 md:font-normal font-semibold text-center">
        Front-End Development Services
      </h1>
      {/* mainbox */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-5 gap-5">
        {/* smallbox */}
        <div className=" bg-white border border-gray-200 rounded-lg shadow lg:pt-5 md:pt-10 pt-10 text-black  hover:bg-[#4AA6E9]">
          <div className=" md:h-[20%] h-auto flex items-center py-5">
            <img
              src={responsiveWebImg}
              className="lg:w-[50%] md:w-[40%] w-[35%] object-cover mx-auto"
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h3 className="mb-2 text-xl font-semibold tracking-tight">
                HTML & CSS Responsive Web Design
              </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
              Enterprise-class websites require consistent colors, fonts, and
              design elements to adhere to the organization's branding
              guidelines. As an expert in designing responsive websites, I
              specialize in utilizing CSS at the core of front-end development,
              complemented by JavaScript and HTML.
            </p>
          </div>
        </div>

        {/* box 2 middle  */}
        <div className=" bg-white border border-gray-200 rounded-lg shadow lg:pt-5 md:pt-10 pt-10  text-black  hover:bg-[#4AA6E9]">
          <div className=" md:h-[20%] h-auto py-2">
            <img src={JSimage} className="w-[50%] h-full mx-auto" />
          </div>
          <div className="p-5">
            <a href="#">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Javascript Development
              </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              JavaScript frameworks form the foundation of contemporary
              websites. With expertise in enhancing core JavaScript development
              and leveraging the latest frameworks and libraries, I specialize
              in constructing dynamic and responsive websites.
            </p>
          </div>
        </div>
        {/* box 3 right */}
        <div className=" bg-white border border-gray-200 rounded-lg shadow lg:pt-5 md:pt-10 pt-10  text-black  hover:bg-[#4AA6E9]">
          <div className=" md:h-[20%] h-auto py-2">
            <img
              src={reactIMG}
              className="w-[50%] h-full mx-auto object-contain"
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                React JS Development
              </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              As a freelancer specializing in ReactJS development, I recognize
              its reputation for extensibility, adaptability, and convenience.
              Leveraging these strengths, I craft sophisticated software
              solutions tailored to your business needs, ranging from web
              browser interfaces to mobile application user interfaces.
            </p>
          </div>
        </div>

        {/* box 4 right */}
        <div className=" bg-white border border-gray-200 rounded-lg shadow lg:pt-5 md:pt-10 pt-10  text-black hover:bg-[#4AA6E9]">
          <div className=" h-[20%] py-2">
            <img
              src={mobileImg}
              className="w-[50%] h-full object-contain mx-auto"
            />
          </div>
          <div className="p-5">
            <a href="#">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Swift iOS Mobile Development
              </h3>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              I offer specialized services to create robust and user-friendly
              iOS applications tailored precisely to your requirements. I
              collaborate closely with clients to design intuitive and visually
              appealing user interfaces for their iOS apps.
            </p>
          </div>
        </div>
      </div>

      {/* end service start process */}

      {/* process  start */}
      {/* wrapper belowmainprocess in css for shadow custom */}
      <div className="mainProcess bg-white py-10 md:mt-14  mt-10 rounded-lg">
        <h2 className="text-4xl font-normal text-center lg:mb-10 md:mb-5 mb-5">
          Our Process
        </h2>

        {/* mainbox */}
        <div className="mainBoxProcess grid lg:grid-cols-4 md:grid-cols-2 gap-2">
          {/*small  box 1 */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6">
            {/* box for number and arrow below */}
            <div className="flex items-center space-x-2 md:mb-10 mb-5">
              <div className="w-[60px] h-[60px] bg-[#4AA6E9] text-white rounded-full flex items-center justify-center text-xl">
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
              <div className="w-[60px] h-[60px] bg-[#4AA6E9] text-white rounded-full flex items-center justify-center text-xl">
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
              <div className="w-[60px] h-[60px] bg-[#4AA6E9] text-white rounded-full flex items-center justify-center text-xl">
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
              <div className="w-[60px] h-[60px] bg-[#4AA6E9] text-white rounded-full flex items-center justify-center text-xl">
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
        <a href ="contact"><button className='bg-[#4AA6E9] text-white font-semibold py-3 px-10 rounded-3xl block mx-auto my-10 hover:bg-white hover:border-2 hover:border-[#4AA6E9] hover:text-[#4AA6E9]'>Discuss your project</button></a>
      </div>
      {/* end process */}


      {/* start service  get quote */}
      {/* wrapper belowmainprocess in css for shadow custom */}
      <div className="mainProcess bg-white py-10 md:mt-14  mt-10 rounded-lg">
        <h2 className="text-4xl font-normal text-center lg:mb-10 md:mb-5 mb-5">
        Get Started Today
        </h2>

        {/* mainbox */}
        <div className="mainBoxProcess grid lg:grid-cols-4 md:grid-cols-2 gap-2">
          {/*small  box 1 */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6">
            {/* box for number and arrow below */}
            <div className="flex items-center space-x-2 md:mb-10 mb-5">
             
<img src={phone} className='h-[100px] object-cover'/>

              <FaArrowRightLong className="text-3xl" />
            </div>
            {/* smallbox for text */}
            <h3 className="font-semibold text-lg my-2">Contact Us</h3>
            <p>
            Fill out the contact form, book a calendar, and schedule a Zoom Meeting with our experts.
            </p>
          </div>

          {/*small  box2 */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6">
            <div className="flex items-center space-x-2 md:mb-10 mb-5">
              {' '}
              <div className="w-[60px] h-[60px] bg-[#4AA6E9] text-white rounded-full flex items-center justify-center text-xl">
                2
              </div>
              <FaArrowRightLong className="text-3xl" />
            </div>
            <h3 className="font-semibold text-lg my-2">Get a Consultation</h3>
            <p>
            Call our team to discuss the viability of your project idea.
            </p>
          </div>

          {/*small  box 3 */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6">
            <div className="flex items-center space-x-2 md:mb-10 mb-5">
              {' '}
              <div className="w-[60px] h-[60px] bg-[#4AA6E9] text-white rounded-full flex items-center justify-center text-xl">
                3
              </div>
              <FaArrowRightLong className="text-3xl" />
            </div>
            <h3 className="font-semibold text-lg my-2">Get a Cost Estimate</h3>
            <p>
            We share a project proposal with budget and timeline estimates based on the project requirements.
            </p>
          </div>

          {/*small  box 4 */}
          <div className="smallBoxProcess lg:p-5 md:p-10 px-10 py-6">
            <div className="flex items-center space-x-2 md:mb-10 mb-5">
              {' '}
              <div className="w-[60px] h-[60px] bg-[#4AA6E9] text-white rounded-full flex items-center justify-center text-xl">
                4
              </div>
              <FaArrowRightLong className="text-3xl" />
            </div>
            <h3 className="font-semibold text-lg my-2">Project Launch</h3>
            <p>
            Once the project is signed, we put together a team of experts from various disciplines to get your project started.
            </p>
          </div>
        </div>
        <a href ="contact"><button className='bg-[#F1797E] text-white font-semibold py-3 px-10 rounded-3xl block mx-auto my-10 hover:bg-white hover:border-2 hover:border-[#4AA6E9] hover:text-[#4AA6E9]'>Schedule a Call</button></a>
      </div>
      {/* end service get quote */}


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
