import React from 'react';
import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router';

const stateAttention = {
  attention: ''
}

const ClientBoxCard = ({name, date, ci, phone, email}) => {
  const [attention, setAttention] = useState();



  // // console.log(useParams())
  // const {id} = useParams()
  // useEffect(() => {
  //   fetchData()
  // }, [])

  // const fetchData = async () => {
  //   let api = await axios.get(`http://localhost:4000/api/client/${id}`)
  //   // console.log(api.data)
  //   api = await api.data;
  //   setData({
  //     ...data,
  //     api
  //   })
  // }


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
        <select>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>
    </div>
  )
}

export default ClientBoxCard;