import React from 'react'
import myImg from './Images/sukanyaBGremove.png'

const Home = () => {
  return (
    <div>
  
  <div className='bigHero'>
  <div className='myImage'>
        <img src={myImg} />
      </div>
    <div className='text'>
      <p>As a front-end developer, I'm driven by my passion for creating scalable products that seamlessly blend aesthetics with functionality, ultimately delivering exceptional user experiences.</p>
      <a href ="contact"><button className='bg-[#F17a7e] py-2 px-5 rounded-3xl lg:mt-5 mt-5 '>Contact Me</button></a>
      {/* lg means ipad air- md ipad mini - sm is phone */}
      </div>
  
      </div>
    </div>
  )
}

export default Home

// background image
// https://img.freepik.com/free-vector/blue-background-with-abstract-waves_1393-258.jpg?size=626&ext=jpg&ga=GA1.1.1608506599.1700221497&semt=sph


