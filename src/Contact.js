import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>

      <h2>Contact</h2>
      <div className='wrapper'>
      <div className='contactForm'>


<section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
     
      <form  action="https://formspree.io/f/xayvrwlo" method="post" class="space-y-8">
      <div>
              <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your First Name</label>
              <input type="text" name="Fname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="First Name" required/>
          </div>
          <div>
              <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Last Name</label>
              <input type="text" name="Lname" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="Last Name" required/>
          </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
        
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea name="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          {/* <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button> */}
          <button type="submit" class="py-3 px-5 bg-red-300">Test button</button>
      </form>
{/* og */}

  {/* <div class="parent">
    <div class="row">
      <div class="col-lg-5 leftSide">
  

        <div class="contact2">
          <img src="contact2-removebg-preview (1).png">
        </div>

        <form action="https://formspree.io/f/xayvrwlo" method="post">

          <label for="Name">First Name</label>
          <label for="Name" class="lastName">Last Name</label><br>

          <!--<label for="Name" class="lastName">Last Name</label><br>-->
          <!--to move lastname lable we add class lastName to target-->
          <!--br tag help firstname on top of the box-->
          <input type="text" name="Fname" required>

          <input type="text" name="Lname" required><br>
          <!--email-->
          <label for="email">Email</label><br>
          <input type="email" name="email" required>

          <!--message-->
          <br>
          <label for="text">Message</label><br>
          <textarea name="Message" id="" cols="35" rows="8"></textarea><br>
          <!--we can make box bigger or smaller by changing number cols (width)and row(height)-->
          <!--submit-->
          <input type="submit" value="Send Message">
        </form>
  */}



{/* og */}
  </div>
</section>
      </div>
      <div className='info'>
<p>info</p>
      </div>
      </div>
    </div>
  )
}

export default Contact
