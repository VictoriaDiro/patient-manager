import React from 'react';
import PropTypes from 'prop-types';
import Appointment from '../Appointment/index';

const AppointmentsList = ({appointments, deleteAppointment}) => {

  // Ternario para imprimir mensaje en base a si hay citas o no
  // 'Object.keys' es un método para revisar si el array contiene valores
  const message = Object.keys(appointments).length === 0 ? 'No hay citas' : 'Administra las citas aquí';

  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">
          {message}
        </h2>

        <div className="lista-citas">
          {appointments.map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

AppointmentsList.propTypes = {
  appointments: PropTypes.array.isRequired,
  deleteAppointment: PropTypes.func.isRequired
}

export default AppointmentsList
