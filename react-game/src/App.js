import React, { Component } from 'react'
import Header from './components/HeaderComponent'
import './assets/css/Modal.css'
import './assets/css/Button.css'
import './assets/css/Table.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      boardSize: 0,
      matrix: []
    }
    this.openModal = this.openModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.createBoard = this.createBoard.bind(this)
  }

  openModal = () => {
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

  handleChange = (e) => {
    this.setState({
      boardSize: e.target.value
    })
  }

  createBoard = () => {
    let table = []
    let arrayDemo = []

    for (let i = 0; i < this.state.boardSize; i++) {
      arrayDemo.push([])
    }
    for (let i = 0; i < this.state.boardSize; i++) {
      for (let j = 0; j < this.state.boardSize; j++) {
        arrayDemo[i].push('')
      }
    }

    let row = 0
    let col = 0
    let l = 0
    while (l < (this.state.boardSize * this.state.boardSize)) {
      row = Math.floor((Math.random() * (this.state.boardSize - 1)) + 1)
      col = Math.floor((Math.random() * (this.state.boardSize - 1)) + 1)
      if (arrayDemo[row][col] === '') {
        arrayDemo[row][col] = 'hi'
      }
      l = l + 1
    }
    let mid = 0
    if (Math.ceil(this.state.boardSize % 2) === 0) {
      mid = Math.ceil(this.state.boardSize / 2)
    } else {
      mid = Math.ceil(this.state.boardSize / 2) - 1
    }
    for (let i = 0; i < arrayDemo.length; i++) {
      if (arrayDemo[mid][i] !== 'hi') {
        arrayDemo[mid][i] = 'hero'
        break
      }
    }

    for (let i = 0; i < arrayDemo.length; i++) {
      let cols = []
      for (let j = 0; j < arrayDemo.length; j++) {
        cols.push(<td className="rg-table-data" key={j}>{arrayDemo[i][j]}</td>)
      }
      table.push(<tr key={i}>{cols}</tr>)
    }
    this.setState({
      matrix: table
    })
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
              <div onClick={this.createBoard} className="rg-modal-btn">Enter</div>
            </center>
          </div>
        </div>
        <center>
          <table className="rg-table">
            <tbody>
              {this.state.matrix}
            </tbody>
          </table>
        </center>
      </div>
    )
  }
}

export default App