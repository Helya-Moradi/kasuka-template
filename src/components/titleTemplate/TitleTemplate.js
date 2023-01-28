import React from 'react'
import './TitleTemplate.css'

export default function TitleTemplate({type,title}) {
  return (
    <div className='titleContainer'>
       <h3 className="sevicesSeparator">{type}</h3>
       <h1 className="servicesTitle">{title}</h1>
    </div>
  )
}
