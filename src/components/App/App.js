import React, { Component } from 'react';
import Header from '../Header/index';
import NewAppointment from '../NewAppointment/index';
import AppointmentsList from '../AppointmentsList/index';
import './../../bootstrap.min.css';

class App extends Component {
  state = {
    appointments: []
  }

  // Se invoca inmediatamente después de que un componente se monte 
  componentDidMount() {
    const appointmentsLS = localStorage.getItem('appointments');
    if(appointmentsLS) {
      this.setState({
        appointments: JSON.parse(appointmentsLS)
      })
    }
  }

  // Se invoca al eliminar o agregar una cita
  componentDidUpdate() {
    localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
  }

  addNewAppointment = data => {
    // Copiar el 'state' actual (nunca se deben hacer cambios directamente en el state)
    const appointments = [...this.state.appointments, data];

    // Agregar el nuevo 'state'
    this.setState({
      appointments
    })
  }

  deleteAppointment = id => {
    // Copiar el 'state' actual
    const currentAppointments = [...this.state.appointments]

    // Utilizar 'filters' para sacar el elemento id del array
    const appointments = currentAppointments.filter(appointment => appointment.id !== id)

    // Actualizar 'state'
    this.setState({
      appointments
    })
  }

  render() {
    return (
      <div className="container">
        <Header
          title='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewAppointment
              addNewAppointment={this.addNewAppointment}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <AppointmentsList
              appointments={this.state.appointments}
              deleteAppointment={this.deleteAppointment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
