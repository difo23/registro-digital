import React, { Component } from 'react';
import logo from './fe-y-alegria-logo-vector.png';
import './App.css';
import RegistroComponent from './components/RegistroComponent';

class App extends Component {
  render() {
      return <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className="App-title">Registro Digital</h1>
          </header>
          <p className="App-intro">


          </p>
            <div>
                <RegistroComponent/>
            </div>

      </div>
  }
}


export default App;
