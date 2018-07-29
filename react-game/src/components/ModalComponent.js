import React, { Component } from 'react'
import '../assets/css/Modal.css'

class Modal extends Component {
  render () {
    return (
      <div className="rg-modal">
        <div className="rg-modal-content">
          <div className="rg-modal-header">{this.props.modalTitle}</div>
          <center>
            <input type="text" className="rg-modal-input" placeholder="Enter Board Size"/>
          </center>
          <center>
            <div className="rg-modal-btn">{this.props.modalButton}</div>
          </center>
        </div>
      </div>
    )
  }
}

export default Modal