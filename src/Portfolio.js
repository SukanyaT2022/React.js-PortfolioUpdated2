import React from 'react'
import './Portfolio.css'
import Card from './Component/Card'
import {dataPortfolio} from './Data'

const Portfolio = () => {
  return (
    <div>
      <h2 className=' targetTitle text-center py-10 text-3xl md:text-5xl font-bold'>Portfolio</h2>
      <div >
      <Card data={dataPortfolio}/>
      </div>
    </div>
  )
}

export default Portfolio
