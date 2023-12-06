import React from 'react';
import myLogo from '../Images/logo.png';
import { FaFacebook } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer class="bg-[#eeeeee] rounded-lg shadow dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          {/* this is parent div */}
          <div class="sm:flex sm:items-center sm:justify-between flex-col">
            {/* social media */}

            <ul class="flex flex-wrap items-center text-3xl space-x-5  font-medium sm:mb-6 justify-center mt-3 text-[#F17a7e] ">
              <li>
                <a href="https://github.com/SukanyaT2022" target="_blank" className='controlSocialIcon'>
                  <FaGithub />
                </a>
              </li>
              <li>
              <a href="" target="_blank" className='controlSocialIcon' > <FaTiktok /></a>
              </li>
              <li>
              <a href="" target="_blank" className='controlSocialIcon'> <FaFacebook /></a>
              </li>
              <li>
              <a href="" target="_blank" className='controlSocialIcon'> <FaInstagram /></a>
              </li>
            </ul>

            <ul class="flex flex-wrap items-center mb-0 text-sm font-medium text-grey-700   sm:mb-0 dark:text-gray-400 justify-center mt-3">
              <li>
                <a
                  href="aboutme"
                  class="mr-4 hover:underline md:mr-6 hover:text-[#0088cc] "
                >
                  About
                </a>
                {/* href how to like the page link to about page look app.js at the path=aboutme */}
              </li>
              <li>
                <a
                  href="portfolio"
                  class="mr-4 hover:underline md:mr-6 hover:text-[#0088cc]"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="reactportfolio"
                  class="mr-4 hover:underline md:mr-6 hover:text-[#0088cc] "
                >
                  React Projects
                </a>
              </li>
              <li>
                <a href="contact" class="hover:underline hover:text-[#0088cc]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">
            © 2023{' '}
            <a href="https://sukanyat.com/" class="hover:underline">
              TiparpronSukanya
            </a>
            . All Rights Reserved.
          </span>
        </div>

        
      </footer>
    </div>
  );
};

export default Footer;
