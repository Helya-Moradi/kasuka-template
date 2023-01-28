import React from 'react'
import './BoxModel.css'

export default function BoxModel({text,children}) {
  return (
    <div className='boxContainer'>
       {children}
       <p className="boxText">{text}</p>
    </div>
  )
}
