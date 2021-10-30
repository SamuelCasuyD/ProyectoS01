import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Docker-Meetup</h1>
        </header>
                  <footer>
          <div class="contenedor-footer">
              <div class="content-foo">
                  <h4><i class="fa fa-phone"></i>&nbsp; Teléfono</h4>
                  <p>2332340</p>
              </div>


              <div class="content-foo">
                  <h4><i class="fa fa-at"></i>&nbsp;Email</h4>
                  <p>proyecto_final@correo.com</p>
              </div>


              <div class="content-foo">
                  <h4><i class="fa fa-map-marker"></i>&nbsp; Ubicaciones</h4>
                  <p></p>
              </div>
          </div>

          <h2 class="titulo-final">&copy; Grupo 2 | Sistemas Operativos</h2>
      </footer>
      </div>
    );
  }
}

export default App;
