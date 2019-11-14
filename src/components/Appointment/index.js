import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteAppointment}) => {
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3>{appointment.mascota}</h3>
        <p className="card-text"><span>Nombre dueño: </span>{appointment.propietario}</p>
        <p className="card-text"><span>Fecha: </span>{appointment.fecha}</p>
        <p className="card-text"><span>Hora: </span>{appointment.hora}</p>
        <p className="card-text"><span>Síntomas: </span></p>
        <p className="card-text">{appointment.sintomas}</p>

        <button
          className="btn btn-danger"
          // Al crear pasar la función 'deleteAppoiment' a través de un arrow fucntion, esta espera a que se desencadene el 'onClick' para llamar al id, si solo llamamos a la función 'deleteAppoiment' pasando los parámetros 'cita.id' al recargar la página directamente llamaría al id
          onClick={() => deleteAppointment(appointment.id)}
        >
          Borrar &times;
        </button>
      </div>
    </div>
  )
}

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired
}

export default Appointment;
