import React from 'react'
import Card from './Component/Card'
import {dataSwift} from './Data'
const SwiftPortfolio = () => {
  return (
    <div>
        <h2 className=' targetTitle text-center py-10 text-3xl md:text-5xl font-bold'>Swift Projects</h2>
        <Card data={dataSwift}/>

      
    </div>
  )
}

export default SwiftPortfolio
