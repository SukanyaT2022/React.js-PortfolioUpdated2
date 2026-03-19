import React from 'react'
import Card from '../Component/Card'
import {dataPortfolio} from '../Data'
import PortfolioCardComp from '../Component/PortfolioCardComp'

function HtmlPortfolio() {
  return (
    <div>
      <h2 className='targetTitle text-center md:py-10 pt-8 text-3xl md:text-3xl font-bold'>Portfolio</h2>
      <div>
        <Card data={dataPortfolio} />
      </div>
    </div>
  )
}

export default HtmlPortfolio
