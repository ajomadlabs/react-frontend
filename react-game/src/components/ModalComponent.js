import React, { Component } from 'react'
import Button from './ButtonComponent'
import Header from './HeaderComponent'
import '../assets/css/Modal.css'

class Modal extends Component {
  render () {
    return (
      <div id="rg-modal-id" className="rg-modal">
        <div className="rg-modal-content">
          <span className="rg-modal-close">&times;</span>
          <Header title={this.props.modalTitle}></Header>
          <center>
            <Button name="Enter"></Button>
          </center>
        </div>
      </div>
    )
  }
}

export default Modal