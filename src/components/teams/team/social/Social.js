import React from 'react'
import './Social.css'

export default function Social({type,children}) {
  return (
    <div className={`soacialContainer ${type}`}>
        {children}
    </div>
  )
}
