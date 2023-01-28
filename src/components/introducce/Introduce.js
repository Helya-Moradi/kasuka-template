import React from 'react'
import './Introduce.css'
import{ImQuotesLeft,ImQuotesRight} from 'react-icons/im'

export default function Introduce() {
  return (
    <div className='ntroduceBg'>
        <div className="introducContainer">
            <img src="./img/testimonials-5.jpg" alt="person" className="personImg" />
            <h2 className="personName">جان لارسون</h2>
            <p className="personJob">برنامه نویس</p>
            <p className="personDescribe"><ImQuotesLeft className='quoteIco'/>سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد.پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد<ImQuotesRight className='quoteIco'/></p>
        </div>
    </div>
  )
}
