import React from 'react'
import './footerItem.css'
import {FaAngleLeft} from 'react-icons/fa'

export default function FooterItem({text}) {
  return (
    <div className='footerItemContainer'>
       <FaAngleLeft className='itemIcon'/>
       <p className="itemText">{text}</p>
    </div>
  )
}
