import React from 'react';
import axios from 'axios'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router';

const ClientBoxCard = () => {
  const [data, setData] = useState([]);

  // console.log(useParams())
  const {id} = useParams()
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    let api = await axios.get(`http://localhost:4000/api/client/${id}`)
    // console.log(api.data)
    api = await api.data;
    setData({
      ...data,
      api
    })
  }

  console.log(data)

  return(
    <div className="ClientBoxCrad">
      <h2>Edita al cliente</h2>
    </div>
  )
}

export default ClientBoxCard;