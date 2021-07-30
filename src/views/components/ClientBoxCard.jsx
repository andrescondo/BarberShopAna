import React, { Fragment } from 'react';
import axios from 'axios'
import {useEffect, useState} from 'react'
// import { useParams } from 'react-router';

const stateAttention = {
  cita: 'No',
  a:''
}

const ClientBoxCard = ({name, date, ci, phone, email, id, attented}) => {
  const [attention, setAttention] = useState(stateAttention);
  const [more, setMore ] = useState(true);


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

  const handleClick = () =>{
    setMore(!more);
  }

  // console.log(attention)

  return(
    < div className="ClientCard">
      <div className="ClientBoxCrad">
      <div>{attented ? <h2>Estado del cliente</h2> : <h2> Edita al cliente</h2>}</div>
      <p>Nombres: {name}</p>
      <p>Cedula de identidad: {ci}</p>
      <p>Telefono: {phone}</p>
      <p>Email: {email}</p>
      
      <div>
        {
          attented 
            ? (<div>
                <p>Cita ya realizada</p>
                <p>Motivo de atencion: {attented}</p>
              </div> 
              )
            : <Fragment>
              <p>Cita {date}</p>
              <p>¿Cita atendida?</p>
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
            </Fragment>
            

            
          
        } 
      </div>
    
      <div>
        <input type="button" value={more ? "Ver mas" : "Ver menos"} onClick={handleClick}/>
        {
          !more
            ? (       
              <div>
                <h3>Registro de cita y atenciones</h3>
                {
                  <div>
                    <div><p>Cita: {date}</p></div>
                    <div><p>Atencion: {attented}</p></div>
                  </div>
                }
              </div>

              )
            : ""
        }
      
      </div>

    </div>
      
     
    </div>
 )
}

export default ClientBoxCard;