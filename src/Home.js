import React from "react";
import myImg from "./Images/sukanyaT.webp";
import ServiceHome from "./Component/ServiceHome";
import ReviewHome from "./Component/ReviewHome";
import FaqsHome from "./Component/FaqsHome";
const Home = () => {
  return (
    <div>
      <div className="bigHero">
        <div className="myImage">
          <img src={myImg} />
        </div>
        <div className="text text-[#1D1D1F]">
          <p>
            Looking for a freelance web and mobile app developer? With 3 years
            of experience, I build responsive websites, iOS apps with SwiftUI,
            and cross-platform apps using React Native. I also use AI
            optimization to make apps run smarter. Perfect for startups, small
            businesses, and entrepreneurs. Let’s bring your idea to life.
            Contact me today!
          </p>

          {/* css button is on navigation.css */}
          {/* <p>As a front-end developer and iOS mobile developer, I specialize in collaborating with businesses to enhance mobile app development, web development, UI/UX design, and various software development projects aimed at improving usability and user experience.</p> */}
          {/* <a href="contact">
            <button className="bg-[#F17a7e] hover:bg-[#00ACBB] py-2 px-5 rounded-3xl lg:mt-5 mt-5 text-white">
              Contact Me
            </button>
          </a> */}
          <a href="contact">
            <button class="rainbow-btn py-2 px-5 rounded-3xl lg:mt-5 mt-5">
              Contact Me!
            </button>
          </a>
        </div>
      </div>

      {/* service section */}
      <ServiceHome />
      <ReviewHome />
      <FaqsHome />
    </div>
  );
};

export default Home;

// background image
// https://img.freepik.com/free-vector/blue-background-with-abstract-waves_1393-258.jpg?size=626&ext=jpg&ga=GA1.1.1608506599.1700221497&semt=sph
