import React from 'react';
import { Header } from './components/Header.js'
import nikiri from './images/nikiri.jpg'

class App extends React.Component {

  render() {
    return (
      <div className="App" style={{ backgroundColor: "#8D918D", textAlign: "left", color: "white"}}>
        <h3 style={{padding: "10px"}}>Hi, Primary User.</h3>
        <img src={nikiri} alt="aknife" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}/>
        <Header />
        
      </div>
    );
  }
}


export default App
