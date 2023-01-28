import React from 'react'
import './Brand.css'

export default function Brand({src}) {
  return (
    <div>
        <img src={src} alt="" className='brandImage'/>
    </div>
  )
}
