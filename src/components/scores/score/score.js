import React from 'react'
import './score.css'

export default function Score({text,children}) {
  return (
    <div className='scoreContainer'>
        <div className="scoreTitle">
           {children}
        </div>
        <p className="scoreDescribe">{text}</p>
    </div>
  )
}
