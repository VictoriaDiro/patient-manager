import React, { Component } from 'react';
import Header from './components/Header/index';
import NuevaCita from './components/NuevaCita/index';
import ListaCitas from './components/ListaCitas/index';
import './bootstrap.min.css';

class App extends Component {
  state = {
    citas: []
  }

  // cuando la aplicación carga
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if(citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  // cuando eliminamos o agregamos una nueva cita
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    // copiar el state actual
    const citas = [...this.state.citas, datos]

    // agregar el nuevo state
    this.setState({
      citas
    })
  }

  // Eliminar cita
  eliminarCita = id => {
    // coger una copia del state (nunca se deben hacer cambios directamente en el state, siempre a través de copias)
    const citasActuales = [...this.state.citas]

    // utilizar filtes para sacar el elemento id del array
    const citas = citasActuales.filter(cita => cita.id !== id)

    // actializar state
    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header
          title='Administrador Pacientes Veterinaria'
        />
        <div className="col-md-10 mx-auto">
          <NuevaCita
            crearNuevaCita={this.crearNuevaCita}
          />
        </div>

        <div className="mt-5 col-md-10 mx-auto">
          <ListaCitas
            citas={this.state.citas}
            eliminarCita={this.eliminarCita}
          />
        </div>
      </div>
    );
  }
}

export default App;
