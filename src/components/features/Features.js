import React from 'react'
import Feature from './feature/Feature'
import './Features.css'
import { FaRegStickyNote,FaRegBell,FaUnlock,FaScroll } from "react-icons/fa";

export default function Features() {
  return (
    <div className='featuresContainer'>
       <img src="./img/features.jpg" alt="" className="featuresImage" />
       <div className="featuresDescribe">
          <Feature title="تبلیغ سختی است" text="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"><FaRegStickyNote className="featureIcon"/></Feature>
          <Feature title="کدام یک از اینهاست" text="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"><FaRegBell className="featureIcon"/></Feature>
          <Feature title="یا کور شده است" text="یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"><FaScroll className="featureIcon"/></Feature>
          <Feature title="حقیقت مبارک" text="آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"><FaUnlock className="featureIcon"/></Feature>
       </div>
    </div>
  )
}
