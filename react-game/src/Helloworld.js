import React from 'react'
import './Helloworld.css'

const HelloWorld = props => {
  return (
    <div className="HelloWorld">Hello, {props.name}</div>
  )
}

export default HelloWorld