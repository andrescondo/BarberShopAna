import React from 'react';
import axios from 'axios'
import {useEffect, useState} from 'react'
// import { useParams } from 'react-router';

const stateAttention = {
  cita: 'No',
  a:''
}

const ClientBoxCard = ({name, date, ci, phone, email, id}) => {
  const [attention, setAttention] = useState(stateAttention);


  const handleChange = (e) => {
    setAttention({ 
      ...attention,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(attention)
    
    const updateClient  = {
      name : name,
      email : email,
      phone : phone,
      ci : ci,
      date : date,
      attented : attention.a
    }

    await axios.put(`http://localhost:4000/api/client/${id}`, updateClient);

  }

  // console.log(attention)

  return(
    <div className="ClientBoxCrad">
      <h2>Edita al cliente</h2>
      <p>Nombres: {name}</p>
      <p>Cedula de identidad{ci}</p>
      <p>Telefono: {phone}</p>
      <p>Email: {email}</p>
      
      <div>
        <p>¿Cita atendida?</p>
        <p>Cita {date}</p>
        <select onChange={handleChange} value={attention.cita} name="cita">
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>

        {
          attention.cita === "Si" ? (
            <form onSubmit={handleSubmit}>
              <label htmlFor="attention">
                <p>Motivo de la cita</p>
                <input 
                  type="text"
                  placeholder="Motivo de la cita"
                  onChange={handleChange}
                  name="a" 
                  value={attention.a}
                />
              </label>
            <input type="submit"/>
          </form>
        ) : ''

        }
      </div>
    </div>
  )
}

export default ClientBoxCard;