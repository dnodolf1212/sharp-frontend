import React from 'react';
import { Header } from './components/Header.js'


class App extends React.Component {

  render() {
    return (
      <div className="App" style={{ backgroundColor: "#8D918D", width: "100%", height: "100%", textAlign: "left", color: "white"}}>
        <h3>Hi, Primary User.</h3>
        <Header />
      </div>
    );
  }
}


export default App
