import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export default function Button(props) {
  return (
    <a href={props.link}>
    <button className={`btn ${props.type}`}>
      <p className="btnText">
        {props.text}
      </p>
    </button>
    </a>
  )
}

Button.propTypes={
  type:PropTypes.string,
  type:PropTypes.oneOf(['navBtn','whiteBtn','yellowBtn','yellowBtn noRadius'])
}
