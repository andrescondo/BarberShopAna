import React from 'react';

const ClientBox = ({data}) => {
  return(
    <div>
      <p>Nombre: {data.name}</p>
      <p>Telefono: {data.phone}</p>
      {data.date ? (<p>Fecha de la cita: {data.date}</p>) : " " }
      <br />
    </div>
  )
}

export default ClientBox;