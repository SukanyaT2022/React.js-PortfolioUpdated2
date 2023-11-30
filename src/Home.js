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
      <p>lIf you need to use a one-off background-image value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any</p>
      <a href ="contact"><button className='bg-[#F17a7e] py-2 px-5 rounded-3xl lg:mt-2 mt-5'>Contact Me</button></a>
      {/* lg means ipad air- md ipad mini - sm is phone */}
      </div>
  
      </div>
    </div>
  )
}

export default Home

// background image
// https://img.freepik.com/free-vector/blue-background-with-abstract-waves_1393-258.jpg?size=626&ext=jpg&ga=GA1.1.1608506599.1700221497&semt=sph


// https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJhY2tncm91bmQlMjBibHVlfGVufDB8MHwwfHx8MA%3D%3D