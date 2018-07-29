import React from 'react'
import Header from './components/HeaderComponent'
import Button from './components/ButtonComponent'
import Modal from './components/ModalComponent'

const App = () => {
  return (
    <div className="App">
      <Header title="React Maze Game"></Header>
      <center>
        <Button name="Play"></Button>
      </center>
      <Modal modalTitle="Board Size Input"></Modal>
    </div>
  );
}

export default App