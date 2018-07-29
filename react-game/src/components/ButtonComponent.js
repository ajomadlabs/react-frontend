import React, { Component } from 'react'
import '../assets/css/Button.css'

class Button extends Component {
  render () {
    return (
      <div className="rg-btn">{this.props.name}</div>
    )
  }
}

export default Button