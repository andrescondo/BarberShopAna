import React from 'react';
import { Link } from 'react-router-dom';

const ClientBox = ({ data }) => {
  return (
    <div className="card">
      <p>Nombre: {data.name}</p>
      <p>Telefono: {data.phone}</p>
      {data.attented ? (
        <div>
          <p>Atención realizada!</p>
          <p>Atención: {data.attented}</p>
        </div>
      ) : data.date ? (
        <p>Fecha de la cita: {data.date}</p>
      ) : (
        ' '
      )}

      <Link to={'/clients/edit/' + data._id}>Ver</Link>
      <br />
    </div>
  );
};

export default ClientBox;
