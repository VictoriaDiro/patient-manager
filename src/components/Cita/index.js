import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3>{cita.mascota}</h3>
        <p className="card-text"><span>Nombre dueño: </span>{cita.propietario}</p>
        <p className="card-text"><span>Fecha: </span>{cita.fecha}</p>
        <p className="card-text"><span>Hora: </span>{cita.hora}</p>
        <p className="card-text"><span>Síntomas: </span></p>
        <p className="card-text">{cita.sintomas}</p>

        <button
          className="btn btn-danger"
          onClick={() => eliminarCita(cita.id)}
          // Al crear un arrow fucntion espera a que se desencadene el onClick para llamar al id, si solo llamamos a la función eliminar cita pasando los parámetros cita.id al recargar la paágina directamente llama al id
        >
          Borrar &times;
        </button>
      </div>
    </div>
  )
}

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}

export default Cita;
