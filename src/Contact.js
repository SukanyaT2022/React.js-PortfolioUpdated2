import React, { useRef } from "react";
import "./Contact.css";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import emailjs from "emailjs-com";

const serviceID = process.env.REACT_APP_YOUR_SERVICE_ID;
const templateID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      () => {
        alert("Message sent!");
      },
      (error) => {
        alert("Error sending message.");
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <h2 className="targetTitle text-center md:py-10 py-6 text-3xl md:text-3xl font-bold">
        Contact Us
      </h2>

      <div className="mainBox flex md:justify-evenly justify-center flex-col md:flex-row  w-full px-4 md:mb-10">
        {/* https://dashboard.emailjs.com/admin */}

        {/* <form  action="https://formspree.io/f/xayvrwlo" method="post" className="space-y-8 md:w-[40%] w-full pt-5"> */}
        <form ref={form} onSubmit={sendEmail} className="space-y-8 md:w-[40%] w-full pt-5">
          <div>
            {/* <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your First Name</label> */}
            <input
              type="text"
              name="from_name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="First Name"
              required
            />
          </div>
          {/* <div>
              
              <input type="text" name="Lname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" 
              placeholder="Last Name" required/>
          </div> */}
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Email"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <textarea
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className=" bg-gradient-to-r from-[#F1797E]  to-[#FFB697] 
hover:bg-gradient-to-r hover:from-white hover:to-white hover:border-2 hover:border-[#F1797E] hover:text-[#F1797E] text-white px-10 py-3 rounded-3xl my-7 lg:ml-3  block m-auto "
          >
            Submit
          </button>
        </form>

        {/* contact info side */}
        <div className="lg:w-[40%] md:w-[50%] w-full md:h-[360px] h-auto mt-[20px] bg-red-200  text-md xl:pl-14 lg:pl-8  md:pl-6 pt-14 rounded-xl pb-8 mb-10">
          <h2 className="font-bold text-xl md:text-center text-center md:mb-6">
            Contact Information
          </h2>
          {/* <a href='tel:+13474419148' ><h2 className='flex items-center my-3'><span className='mx-4'><MdPhoneIphone/></span></h2></a> */}
          <a href="mailto:SukanyaT2022A@gmail.com" target="_blank">
            <h2 className="flex items-center my-3">
              <span className="mx-4">
                <MdOutlineMailOutline />
              </span>
              SukanyaT2022A@gmail.com
            </h2>
          </a>
          <a
            href="https://github.com/SukanyaT2022?tab=repositories"
            target="_blank"
          >
            <h2 className="flex items-center my-3">
              <span className="mx-4">
                <FaGithub />
              </span>
              https://github.com/SukanyaT2022
            </h2>
          </a>
          <a
            href="https://www.linkedin.com/in/tiparpron-sukanya/"
            target="_blank"
          >
            <h2 className="flex items-center my-3">
              <span className="mx-4">
                <GrLinkedin />
              </span>
              https://www.linkedin.com/in/tiparpron-sukanya/
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
