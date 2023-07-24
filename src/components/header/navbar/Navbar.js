import React from 'react'
import './Navbar.css'
import Button from '../../button/Button'
import { HiMenu } from "react-icons/hi";
import logo from '../../../assets/img/logo.png'

export default function Navbar() {
  return (
    <div className='navContainer'>
        <div className="logo"><span><img src={logo} alt="logo" className='logoImg'/></span>kasuka</div>
        <nav className="navbar">
            <ul className="navList"> 
                <li className="navItem active">خانه</li>
                <li className="navItem">درباره ما</li>
                <li className="navItem">خدمات</li>
                <li className="navItem">نمونه کارها</li>
                <li className="navItem">تیم</li>
                <li className="navItem">لیست </li>
                <li className="navItem">تماس با ما</li>
            </ul>
        </nav>
        <Button type="navBtn" text="شروع"/>
        <HiMenu className='hamMenu'/>
    </div>
  )
}
