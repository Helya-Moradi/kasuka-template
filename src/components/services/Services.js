import React from 'react'
import './Services.css'
import Service from './service/Service'
import TitleTemplate from '../titleTemplate/TitleTemplate';
import { FaBasketballBall,FaPager } from "react-icons/fa";
import { BsSpeedometer2,BsPlayFill,BsDoorOpenFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

export default function Services() {
  return (
    <div className='servicesContainer'>
       <TitleTemplate type="خدمات" title="خدمات ما را بررسی کنید"/>
       <div className="services">
         <Service title="لورم اپیسوم" text="برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد"><FaBasketballBall className='serviceIcon'/></Service>
         <Service title="اما همانطور که مشاهده می کنید" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"><FaPager className='serviceIcon'/></Service>
         <Service title="دردهای بزرگ" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"><BsSpeedometer2 className='serviceIcon'/></Service>
         <Service title="هیچکس دیگر" text="اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم"><BiWorld className='serviceIcon'/></Service>
         <Service title="لولا را پاک کنید" text="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"><BsPlayFill className='serviceIcon'/></Service>
         <Service title="دیوا دان" text="روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد"><BsDoorOpenFill className='serviceIcon'/></Service>
       </div>
    </div>
  )
}
