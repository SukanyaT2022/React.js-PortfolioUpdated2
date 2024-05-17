import React from 'react'
import myImg from './Images/sukanyaBGremove.png'
import ServiceHome from './Component/ServiceHome'
import ReviewHome from './Component/ReviewHome'
import FaqsHome from './Component/FaqsHome'
const Home = () => {
  return (
    <div>
  
  <div className='bigHero'>
  <div className='myImage'>
        <img src={myImg} />
      </div>
    <div className='text text-[#1D1D1F]'>
      <p>
      Looking for web developer services. You're in the right place!  As a freelancer, I'm here to bring your online dreams to life. With years of experience and a passion for coding, I'll create a website that stands out from the crowd. Whether you're a small business or a budding entrepreneur, I've got you covered. Let's work together to build something amazing! Reach out today to get started on your digital journey.
      </p>
      {/* <p>As a front-end developer and iOS mobile developer, I specialize in collaborating with businesses to enhance mobile app development, web development, UI/UX design, and various software development projects aimed at improving usability and user experience.</p> */}
      <a href ="contact"><button className='bg-[#F17a7e] hover:bg-[#00ACBB] py-2 px-5 rounded-3xl lg:mt-5 mt-5 text-white'>Contact Me</button></a>
      {/* lg means ipad air- md ipad mini - sm is phone */}
      </div>
  
      </div>

{/* service section */}
      <ServiceHome/>
      <ReviewHome/>
      <FaqsHome/>
    </div>
  )
}

export default Home

// background image
// https://img.freepik.com/free-vector/blue-background-with-abstract-waves_1393-258.jpg?size=626&ext=jpg&ga=GA1.1.1608506599.1700221497&semt=sph


