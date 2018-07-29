import React from 'react'
import Header from './components/HeaderComponent'
import Button from './components/ButtonComponent'

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <center>
        <Button name="Play"></Button>
      </center>
    </div>
  );
}

export default App