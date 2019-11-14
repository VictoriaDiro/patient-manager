import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const inicialState = {
  appointment: {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  }, 
  error: false
}

class NewAppointment extends Component {
  state = { ...inicialState }

  // Cambio de valor en en 'input'
  handleChange = e => {
    // Pasar el valor que el usuario redacta al 'state'
    this.setState({
      appointment: {
        ...this.state.appointment,
        [e.target.name]: e.target.value
      }
    })
  }

  // Envío del formulario
  handleSubmit = e => {
    e.preventDefault();

    // Extraer los valores del state
    const { mascota, propietario, fecha, hora, sintomas } = this.state.appointment;

    // Validar que todos los campos estén llenos
    if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
      this.setState({
        error: true
      });

      // Detener la ejecución
      return;
    }

    // Generar un objeto con los datos
    const newAppointment = {...this.state.appointment};
    newAppointment.id = uuid();

    // Agregar la cita al 'state' de App
    this.props.addNewAppointment(newAppointment)

    // Colocar el 'state' en el 'inicialState'
    this.setState({
      ...inicialState
    })
  }

  render() {

    // Extraer el valor del state
    const { error } = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center md-5">
            Rellene el formulario para crear una nueva cita
          </h2>

          { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null }

          <form
            onSubmit={this.handleSubmit}
          >

            <div className="form-group row">
              <label className="col-sm-4 col-lg-3 col-form-label">
                Nombre de la Mascota
              </label>
              <div className="col-sm-8 col-lg-9">
                <input
                  type="text"
                  className="form-contol"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.mascota}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-3 col-form-label">
                Nombre del Dueño
              </label>
              <div className="col-sm-8 col-lg-9">
                <input
                  type="text"
                  className="form-contol"
                  placeholder="Nombre Dueño Mascota"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.propietario}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-3 col-form-label">
                Fecha:
              </label>
              <div className="col-sm-8 col-lg-3">
                <input
                  type="date"
                  className="form-contol"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.fecha}
                />
              </div>

              <label className="col-sm-4 col-lg-3 col-form-label">
                Hora:
              </label>
              <div className="col-sm-8 col-lg-3">
                <input
                  type="time"
                  className="form-contol"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.hora}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-3 col-form-label">
                Síntomas
              </label>
              <div className="col-sm-8 col-lg-9">
                <textarea
                  className="form-contol"
                  placeholder="Describe los síntomas"
                  name="sintomas"
                  onChange={this.handleChange}
                  value={this.state.sintomas}
                />
              </div>
            </div>

            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Añadir nueva cita" />

          </form>
        </div>
      </div>
    )
  }
}

NewAppointment.propTypes = {
  addNewAppointment: PropTypes.func.isRequired
}


export default NewAppointment;