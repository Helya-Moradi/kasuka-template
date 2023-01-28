import React from 'react'
import './HeadContainer.css'
import BoxModel from './boxModel/BoxModel'
import { FaFile,FaRegCalendarMinus,FaChartBar,FaPaintRoller,FaDatabase } from "react-icons/fa";

export default function HeadContainer() {
const allTexts=[
    {text:"متن نمایشی"},
    {text:"نمودار کیفی"},
    {text:"نمونه کارها"},
    {text:"عملکرد های پایانی"},
    {text:"اطلاعات ذخیره شده"}
]

  return (
    <div className='headContainerBg'>
        <div className="haedContainer">
            <h1 className="headTitle">راه حل های قدرتمند دیجیتال با
            <span className="kasuka">Kasuka</span></h1>
            <p className="headText">ما تیمی از بازاریابان با استعداد دیجیتال هستیم</p>
            <div className="innerContainer">
               <BoxModel {...allTexts[0]}><FaFile className='boxIcon'/></BoxModel>
               <BoxModel {...allTexts[1]}><FaChartBar className='boxIcon'/></BoxModel>
               <BoxModel {...allTexts[2]}><FaRegCalendarMinus className='boxIcon'/></BoxModel>
               <BoxModel {...allTexts[3]}><FaPaintRoller className='boxIcon'/></BoxModel>
               <BoxModel {...allTexts[4]}><FaDatabase className='boxIcon'/></BoxModel>
            </div>
        </div>
    </div>
  )
}
