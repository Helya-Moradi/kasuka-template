import React from 'react'
import './Scores.css'
import Score from './score/score'
import { FaArrowAltCircleUp,FaGrin,FaHighlighter,FaHeadset } from "react-icons/fa";

export default function Scores() {
  return (
    <div className='scoresContainer'>
        <img src="./img/counts-img.jpg" alt="" className="scoresImg" />
        <div className="scoresDescription">
            <h1 className="describeTitle">شایسته ترین لذت را به هر حال ارائه می دهد</h1>
            <p className="describeText">خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است</p>
             <div className="scores">
             <Score text="مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.">
                  <FaArrowAltCircleUp className='scoreIco'/>
                  <h1 className="scoreNum">۶۵</h1>
             </Score>
             <Score text="پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد">
                  <FaGrin className='scoreIco'/>
                  <h1 className="scoreNum">۸۵</h1>
             </Score>
             <Score text="سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد">
                  <FaHighlighter className='scoreIco'/>
                  <h1 className="scoreNum">۳۵</h1>
             </Score>
             <Score text="جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند">
                  <FaHeadset className='scoreIco'/>
                  <h1 className="scoreNum">۲۰</h1>
             </Score>
            
             </div>
        </div>
    </div>
  )
}
