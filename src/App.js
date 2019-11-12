import React, { Component } from 'react';
import Header from './components/Header/index';
import NuevaCita from './components/NuevaCita/index';
import './bootstrap.min.css';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="container">
        <Header
          title='Administrador Pacientes Veterinaria'
        />
        <div className="col-md-10 mx-auto">
          <NuevaCita />
        </div>
      </div>
    );
  }
}

export default App;
