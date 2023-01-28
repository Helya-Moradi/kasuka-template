import React from 'react'
import './Team.css'
import Social from './social/Social'
import {AiOutlineInstagram,AiFillLinkedin,AiFillFacebook,AiOutlineTwitter} from 'react-icons/ai'

export default function Team({title,text,src}) {
  return (
    <div className='teamContainer'>
        <div className="teamImageContainer">
            <img src={src} alt="team" className="teamImage" />
            <div className="overlaySocials">
                <Social type="whiteBg">
                   <AiOutlineInstagram className='socialIcon'/>
                </Social>
                <Social type="whiteBg">
                   <AiFillLinkedin className='socialIcon'/>
                </Social>
                <Social type="whiteBg">
                   <AiFillFacebook className='socialIcon'/>
                </Social>
                <Social type="whiteBg">
                   <AiOutlineTwitter className='socialIcon'/>
                </Social>
            </div>
        </div>
        <div className='team'>
          <h2 className="teamTitle">{title}</h2>
           <p className="temaText">{text}</p>
        </div>

    </div>
  )
}
