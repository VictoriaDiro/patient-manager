import React from 'react';
import PropTypes from 'prop-types';
import Cita from '../Cita/index';

const ListaCitas = ({citas, eliminarCita}) => {

  // imprimir mensaje en base a si hay citas o no, object.keys es un método para revisas que el array contenga algo
  const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra las citas aquí';

  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">
          {mensaje}
        </h2>
  
        <div className="lista-citas">
          {citas.map(cita => (
            <Cita
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired
}

export default ListaCitas
