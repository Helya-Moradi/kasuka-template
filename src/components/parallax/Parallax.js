import React from 'react'
import './Parallax.css'
import Button from '../button/Button'

export default function Parallax() {
  return (
    <div className='parallaxContainer'>
        <div className="container">
        <h1 className="parallaxTitle">فراخوانی برای اقدام</h1>
        <p className="parallaxText">اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.</p>
        <Button type="whiteBtn" text="فراخوانی برای اقدام"/>
        </div>
    </div>
  )
}
