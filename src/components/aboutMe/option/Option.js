import React from 'react'
import './Option.css'
import {RiCheckDoubleFill} from 'react-icons/ri'

export default function Option({text}) {
  return (
    <div className='option'>
      <p className="optionText"> <RiCheckDoubleFill className='optionIcon'/> {text}</p>
    </div>
  )
}
