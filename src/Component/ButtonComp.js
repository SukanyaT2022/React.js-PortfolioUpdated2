import React from 'react'

function ButtonComp({textProp, onpressProp}) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center px-3 py-2 text-[10px] font-medium text-center
                  text-white bg-[#4A6163] rounded-lg hover:bg-gradient-to-r from-[#F1797E] to-[#FFB697]
                  focus:outline-none focus:ring-0 w-32
                 "
      onClick={(e) => onpressProp?.(e)}
    >
      <span>{textProp}</span>
    </button>
  )
}

export default ButtonComp