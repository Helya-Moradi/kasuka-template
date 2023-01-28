import React from 'react'
import './Service.css'

export default function Service({title,text,children}) {
  return (
    <div className='serviceContainer'>
      <div className="serviceIconContainer">
        {children}
      </div>
      <h2 className="serviceTitle">{title}</h2>
      <p className="serviceText">{text}</p>
    </div>
  )
}
