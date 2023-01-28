import React from 'react'
import './Contact.css'
import TitleTemplate from '../titleTemplate/TitleTemplate'
import ContactInfo from './contactInfo/ContactInfo'
import Button from '../button/Button'
import {FaPhone,FaGetPocket,FaLocationArrow} from "react-icons/fa";

export default function Contact() {
  return (
    <div className='contactContainer'>
      <TitleTemplate type="تماس با ما" title="با ما تماس بگیرید"/>
      <div className="contactInfos">
        <div className="innerInfo">
          <ContactInfo title="مکان" text="تهران خیابان آزادی">
           <FaLocationArrow className='infoIcon'/>
          </ContactInfo>

          <ContactInfo title="ایمیل" text="info@example.com">
           <FaGetPocket className='infoIcon'/>
          </ContactInfo>

          <ContactInfo title="شماره تماس" text="۰۱۲۳۴۵۶۷۸۹">
           <FaPhone className='infoIcon'/>
          </ContactInfo>
          
        </div>
        <div className="formInfo">
          <form>
            <div className="groupInputs">
              <input type="text" className=' infoInput' placeholder='نام' required/>
              <input type="email" className=' infoInput' placeholder='ایمیل' required/>
            </div>
            <input type="text" className='infoInput' placeholder='عنوان' required/>
            <textarea className='textAreaInput infoInput' placeholder='پیام' required></textarea>
            <Button type="yellowBtn" text="ارسال پیام"/>
          </form>
        </div>
      </div>
    </div>
  )
}
