import React from 'react';

const ClientBox = ({data}) => {
  return(
    <div>
      <p>Nombre: {data.name}</p>
      <p>Telefono: {data.phone}</p>
    </div>
  )
}

export default ClientBox;