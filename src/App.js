import React, { Component } from 'react';
import logo from './feyalegrialogovector.png';
import './App.css';
import RegistroDigital from './components/RegistroDigital';
//import { Grid, Row, Col } from 'react-bootstrap';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

class App extends Component {
  render() {
      return <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 className="App-title">CEMAS Registro Digital</h1>
          </header>
          <p className="App-intro">

          </p>
            <div>

                            <RegistroDigital/>

            </div>

      </div>
  }
}


export default App;
