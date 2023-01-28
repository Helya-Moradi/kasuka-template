import React from 'react'
import './ContactInfo.css'

export default function ContactInfo({title,text,children}) {
  return (
    <div className='infoContainer' >
        <div className="infoIconContainer">
            {children}
        </div>
        <div className="infoDescribe">
            <h3 className="infoTitle">{title}:</h3>
            <p className="infoText">{text}</p>
        </div>
    </div>
  )
}
