import React from 'react'
import './Teams.css'
import Team from './team/Team'
import TitleTemplate from '../titleTemplate/TitleTemplate'
import team1 from '../../assets/img/team-1.jpg'
import team2 from '../../assets/img/team-2.jpg'
import team3 from '../../assets/img/team-3.jpg'
import team4 from '../../assets/img/team-4.jpg'

export default function Teams() {
  return (
    <div className='teamsContainer'>
       <TitleTemplate type="تیم" title="تیم ما را بررسی کنید"/>
       <div className="teams">
          <Team title="والتر وایت" text="مدیر ارشد اجرایی" src={team1}/>
          <Team title="سارا جونسون" text="مدیر تولید" src={team2}/>
          <Team title="ویلیام اندرسون" text="CTO" src={team3}/>
          <Team title="آماندا جپسون" text="حسابدار" src={team4}/>
       </div>
    </div>
  )
}
