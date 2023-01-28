import React from 'react'
import './Footer.css'
import Social from '../teams/team/social/Social'
import {AiOutlineInstagram,AiFillLinkedin,AiFillFacebook,AiOutlineTwitter,AiOutlineSkype} from 'react-icons/ai'
import FooterItem from './footerItem/footerItem'
import Button from '../button/Button'

export default function Footer() {
  return (
    <div className='footerBg'>
     <div className="footerContainer">
       <div className="footerInfo">
        <div className="footerInfoLogo">
          <img src="./img/logo.png" alt="logo" className="footerInfoImage" />
          <h1 className="footerInfoTitle">Kasuka</h1>
        </div>
        <p className="footerInfoText">تهران خیابان آزادی</p>
        <p className="footerInfoText">تلفن:۰۱۲۳۴۵۶۷۸۹۵۴۳</p>
        <p className="footerInfoText">ایمیل:info@example.com</p>
        <div className="footerInfoSocials">
            <Social type="darkBg">
              <AiOutlineInstagram className='socialIcon'/>
            </Social>
            <Social type="darkBg">
              <AiFillLinkedin className='socialIcon'/>
            </Social>
            <Social type="darkBg">
              <AiFillFacebook className='socialIcon'/>
            </Social>
            <Social type="darkBg">
              <AiOutlineTwitter className='socialIcon'/>
            </Social>
            <Social type="darkBg">
              <AiOutlineSkype className='socialIcon'/>
            </Social>
        </div>
      </div>

      <div className="footerList">
        <h5 className="listTitle">لینک های مفید</h5>
        <ul className="list">
           <FooterItem text="خانه"/>
           <FooterItem text="درباره ما"/>
           <FooterItem text="خدمات"/>
           <FooterItem text="شرایط استفاده از خدمات"/>
           <FooterItem text="سیاست حفظ حریم"/>
        </ul>
      </div>
      
      <div className="footerList">
        <h5 className="listTitle">خدمات ما</h5>
        <ul className="list">
           <FooterItem text="طراحی وب سایت"/>
           <FooterItem text="توسعه وب"/>
           <FooterItem text="مدیریت تولید"/>
           <FooterItem text="بازاریابی"/>
           <FooterItem text="طراحی گرافیک"/>
        </ul>
      </div>

      <div className="footerNews">
        <h5 className="listTitle">خبرنامه ما</h5>
        <p className="newsText">با این حال هیچ یک از اینها تقصیر ما نخواهد شد.</p>
        <div className="inputContainer">
            <input type="text" className='newsInput'/>
            <Button type="yellowBtn noRadius" text="دنبال کردن"/>
        </div>
      </div>
     </div> 
    </div>
  )
}
