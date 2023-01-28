import React from 'react'
import './product.css'
import {AiOutlinePlus,AiFillPushpin} from 'react-icons/ai'

export default function Product({title,text,src}) {
  return (
    <div className='productContainer'>
        <div className="overlay">
            <h3 className="overlayTitle">{title}</h3>
            <p className="overlayText">{text}</p>
            <div className="overlayIcons">
               <AiOutlinePlus className='icon'/>
               <AiFillPushpin className='icon'/>
            </div>
        </div>
        <div className="image">
            <img src={src} alt="product" className='productImg' />
        </div>
    </div>
  )
}
