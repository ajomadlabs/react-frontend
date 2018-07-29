import React, { Component } from 'react'
import '../assets/css/Header.css'

class Header extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="rg-title">{this.props.title}</div>
        </div>
      </div>
    )
  }
}

export default Header