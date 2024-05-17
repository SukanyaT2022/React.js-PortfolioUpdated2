import React, { useState } from 'react';
import people from '../Data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const ReviewHome = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const checkNumber = (number) => {
    if(number > people.length - 1){
      return 0;
    }
    else if(number < 0){
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }) 
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    }) 
  }

  const randomPerson = () => {
    let randomNumber = Math.floor (Math.random() * people.length);
    if(randomNumber === index ){
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }

  return<article className="review lg:my-14 rounded-3xl w-[90%] ">
    <h2 className='targetHeaderReview'>What people are saying about us</h2>
    <div className='wrapImgInfo '>
    <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info text-left ">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>  
      </div>
      {/* <button className="random-btn" onClick={randomPerson}>
          Suprise Me!
        </button> */}
        </div>
  </article>;
};

export default ReviewHome;