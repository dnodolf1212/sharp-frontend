import React from 'react';
import { Header } from './components/Header.js'


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <h3>Hi, Primary User. I have the header in me</h3>
        <Header />
        
      </div>
    );
  }
}


export default App
