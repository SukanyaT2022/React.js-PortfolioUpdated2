import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>

      <h2 className="targetTitle text-center py-10 text-3xl md:text-5xl font-bold">Contact Us</h2>

    <div className='mainBox flex md:justify-evenly justify-center flex-col md:flex-row  w-full px-4 md:mb-10'>

      <form  action="https://formspree.io/f/xayvrwlo" method="post" className="space-y-8 md:w-[40%] w-full pt-5">
      <div>
              {/* <label for="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your First Name</label> */}
              <input type="text" name="Fname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="First Name" required/>
          </div>
          <div>
              
              <input type="text" name="Lname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="Last Name" required/>
          </div>
          <div>
              
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
        
          <div className="sm:col-span-2">
             
              <textarea name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave your message..."></textarea>
          </div>
          {/* <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button> */}
          <button type="submit" className='bg-[#565656] text-white px-10 py-3 rounded-3xl my-7 md:ml-3 block m-auto hover:bg-[#0088cc]'>Submit</button>
      </form>

 {/* contact info side */}
 <div className='md:w-[40%] w-full bg-purple-300'>
  <h2>info</h2>
</div>

  </div>
 
      </div>

 
  )
}

export default Contact
