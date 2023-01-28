import React from 'react'
import './Feature.css'

export default function Feature({title,text,children}) {
  return (
    <div className='featureContainer'>
        {children}
        <div className="featureDescribe">
            <h2 className="featureTitle">{title}</h2>
            <p className="featureText">
                {text}
            </p>
        </div>
    </div>
  )
}
