import React, { Component } from 'react';

class NuevaCita extends Component {
  state = {}

  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center md-5">
            Rellene el formulario para crear una nueva cita
          </h2>

          <form>

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

export default NuevaCita;
