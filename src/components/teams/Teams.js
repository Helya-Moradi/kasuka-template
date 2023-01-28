import React from 'react'
import './Teams.css'
import Team from './team/Team'
import TitleTemplate from '../titleTemplate/TitleTemplate'

export default function Teams() {
  return (
    <div className='teamsContainer'>
       <TitleTemplate type="تیم" title="تیم ما را بررسی کنید"/>
       <div className="teams">
          <Team title="والتر وایت" text="مدیر ارشد اجرایی" src="./img/team-1.jpg"/>
          <Team title="سارا جونسون" text="مدیر تولید" src="./img/team-2.jpg"/>
          <Team title="ویلیام اندرسون" text="CTO" src="./img/team-3.jpg"/>
          <Team title="آماندا جپسون" text="حسابدار" src="./img/team-4.jpg"/>
       </div>
    </div>
  )
}
