import React from 'react'
import Card from './Component/Card'
import {dataReact} from './Data'

const ReactPortfolio = () => {
  return (
    <div>
      <h2 className=' targetTitle text-center  pt-10 text-3xl md:text-3xl font-bold'>React.js |  Next.js Projects</h2>
      <Card data={dataReact}/>
    </div>
  )
}

export default ReactPortfolio
