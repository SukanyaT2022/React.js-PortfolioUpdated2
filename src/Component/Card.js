import React from 'react';
import './Card.css';

const Card = ({ data }) => {
  return (
    <div className='px-2'>
      {data.map((val) => {
        return (
          <div key={val.id}>
            {/* {val.title}
  {val.detail}
   {val.myLink}
  {val.image}
    {val.alt} */}

            <a
              href={val.myLink}
              class="flex flex-col items-center  bg-red-200 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 m-auto md:my-8 my-14"
            >
              {/* above my add margin top botttom on each individulae box */}
              <img
                class="object-cover w-full rounded-t-lg h-56  md:h-48 md:w-48 md:rounded-none md:rounded-s-lg"
                src={val.image}
                alt={val.alt}
              />
              {/*change size destop change md number if custum put []*/}

              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {' '}
                  {val.title}
                </h5>

                <p class="mb-3 font-normal text-gray-700">
                  {' '}
                  {val.detail}
                </p>

                {/* <button onClick={()=>val.myLink} >Link</button> */}
                <a
                  href={val.myLink}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                   text-white bg-[#4A6163] rounded-lg hover:bg-gradient-to-r from-[#F1797E]  to-[#FFB697]  focus:ring-4 
                   focus:outline-none focus:ring-blue-300 w-40"
                >
                  View
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
