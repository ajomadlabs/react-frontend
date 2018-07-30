import React, { Component } from 'react'
import Header from './components/HeaderComponent'
import './assets/css/Modal.css'
import './assets/css/Button.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      boardSize: ''
    }
    this.openModal = this.openModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  openModal () {
    let modal = document.getElementsByClassName('rg-modal')[0]
    modal.style.display = 'block'
    let btn = document.getElementsByClassName('rg-modal-btn')[0]
    btn.onclick = () => {
      modal.style.display = 'none'
    }
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none'
      }
    }
  }

  handleChange (e) {
    this.setState({
      boardSize: e.target.value
    })
  }

  handleClick () {
    console.log(this.state.boardSize)
  }

  render () {
    return (
      <div className="App">
        <Header title="React Maze Game"></Header>
        <center>
          <div onClick={this.openModal} className="rg-btn">Play</div>
        </center>
        <div className="rg-modal">
          <div className="rg-modal-content">
            <div className="rg-modal-header">Board Size Input</div>
            <center>
              <input type="text" value={this.state.boardSize} onChange={e => this.handleChange(e)} className="rg-modal-input" placeholder="Enter Board Size"/>
            </center>
            <center>
              <div onClick={this.handleClick} className="rg-modal-btn">Enter</div>
            </center>
          </div>
        </div>
      </div>
    )
  }
}

export default App