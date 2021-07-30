import React from 'react';
import {Link} from 'react-router-dom'

const ClientBox = ({data}) => {
  return(
    <div className="card">
      <p>Nombre: {data.name}</p>
      <p>Telefono: {data.phone}</p>
      {
        data.attented 
        ? (<p>Atencion: {data.attented}</p>) 
        : ""
      }
      {
        data.date 
        ? (<p>Fecha de la cita: {data.date}</p>) 
        : " " 
      }

      <Link to={"/clients/edit/" + data._id}>Editar</Link>
      <br />
    </div>
  )
}

export default ClientBox;