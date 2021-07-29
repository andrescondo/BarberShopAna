import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Client = () => {
  const [clients, setClients] = useState([]);

  //llamado a la API por useEffect para asignarlo al hook de estado
  useEffect( async () => {
    const client = await axios.get('http://localhost:4000/api/client')
    setClients({
      ...clients,
      client
    });
  }, []);

  console.log(clients.client.data)
  
  return(
    <div className="Client">
      <div className="client--box">
        <h1>Lista de clientes registrados</h1>

        {

        }
      </div>
    </div>
  )
}

export default Client;