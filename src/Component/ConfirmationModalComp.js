import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { IoClose } from "react-icons/io5";
const ConfirmationModalComp = ({ onModalClose }) => {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white border border-gray-300 rounded-lg shadow-sm p-4 md:p-6">
            <button
              type="button"
              onClick={onModalClose}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-9 h-9 inline-flex justify-center items-center"
            >
              {/* below close cross icon */}

              <IoClose className="text-xl " color="#F17A7E" />
              <span className="sr-only">Close</span>
            </button>

            <div className="p-4 md:p-5 text-center">
              {/* paper plane icon */}
              <FontAwesomeIcon
                icon={faPaperPlane}
                beatFade
                size="2x"
                color="#F17A7E"
              />

              <h3 className="mb-6 mt-5 text-lg">
                Successfully Submitted! Thank you for reaching out!
              </h3>
              <div className="flex items-center space-x-4 justify-center">
                <button
                  onClick={onModalClose}
                  type="button"
                  // className="text-gray-500 bg-white border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-200 shadow font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"

                  className=" bg-gradient-to-r from-[#F1797E]  to-[#FFB697] 
hover:bg-gradient-to-r hover:from-white hover:to-white hover:border-2 hover:border-[#F1797E] hover:text-[#F1797E] text-white px-10 py-2 rounded-3xl mx-auto  block"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModalComp;
