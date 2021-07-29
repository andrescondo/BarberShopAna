import React from 'react';

const ClientBox = ({data}) => {
  return(
    <div>
      <p>Nombre: {data.name}</p>
      <p>Telefono: {data.phone}</p>
      <br />
    </div>
  )
}

export default ClientBox;