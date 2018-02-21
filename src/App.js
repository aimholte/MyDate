import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk&libraries=places">
          </script>
      </div>
    );
  }
}







export default App;
