import React from 'react'
import './Brands.css'
import Brand from './brand/Brand'
import { BsFillCircleFill } from "react-icons/bs";

export default function Brands() {
  return (
    <div className='brandsContainer'>
        <div className="brands">
           <Brand src="./img/client-1.png"/>
           <Brand src="./img/client-2.png"/>
           <Brand src="./img/client-3.png"/>
           <Brand src="./img/client-4.png"/>
           <Brand src="./img/client-5.png"/>
           <Brand src="./img/client-6.png"/>
        </div>
        <div className="brandsCircle">
            <BsFillCircleFill className='circle active'/>
            <BsFillCircleFill className='circle'/>
            <BsFillCircleFill className='circle'/>
            <BsFillCircleFill className='circle'/>
            <BsFillCircleFill className='circle'/>
            <BsFillCircleFill className='circle'/>
            <BsFillCircleFill className='circle'/>
            <BsFillCircleFill className='circle'/>
        </div>
    </div>
  )
}
