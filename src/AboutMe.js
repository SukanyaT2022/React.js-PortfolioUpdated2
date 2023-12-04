import React from 'react'
import myImg2 from './Images/myImage.JPG'

const AboutMe = () => {
  return (
    <div>
      {/* image side */}
      <div className='main-aboutme flex md:flex-row flex-col'>
        {/* above we want phone col img on top text bottom
        md:flex for ipad computer side by side */}
      <div className='img-aboutme w-full md:w-[40%]  p-16'>
      <img src={myImg2} className='w-full md:h-[400px] h-[300px] object-cover md:pl-36 md:mt-10'/>
        </div>

        {/* text side */}
        <div className='text-aboutme w-full md:w-[60%]  md:pr-36 md:pl-10 md:pt-24 md:pb-16 px-10'>
<h2 className='font-bold md:text-2xl text-xl pb-5 text-[#565656]'>Who am I ? & What inspires me</h2>
<p className='text-md text-[#565656]'>
My background is in business analysis and investment, but I have always been curious about learning software development. I took a break from work for six years to raise my two children. Once my children started school, I had more time to pursue my real interest.

One day, I read an article about a 50-year-old truck driver who learned Python and became a software developer. That story inspired me to start learning to code in many software languages and frameworks such as HTML, CSS, Bootstrap, React, Java Script, and SQL.<br/><br/>

I first learned JavaScript from Free Code Camp, Udemy, and YouTube. Specifically, I learned to become a front-end developer and then improve my skills to be a fullstack develper. I had many ideas that I wanted to try out, such as building blogs about agriculture, a website and an app offering services and advice to busy and working mothers, an e-commerce website to sell beach accessories, and many more projects.

After three months of self-teaching, I knew what I would love to do for my future career. I then registered at Norwalk Community College as a Computer Science major and put all my effort into building my expertise through many school and personal projects. I look forward to many opportunities to use my skills in the exciting field of software development.
</p>
<a href ="contact"><button className='bg-[#565656] text-white px-10 py-3 rounded-3xl my-7 md:ml-3 block m-auto hover:bg-[#0088cc]'>Contact Me</button></a>
        </div>

      </div>

      
    </div>
  )
}

export default AboutMe
