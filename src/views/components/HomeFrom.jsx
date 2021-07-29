import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

const InitialState = {
  name : "",
  email:"",
  phone:"",
  ci:""
}

const HomeFrom = () => {
  const [form, setForm] = useState(InitialState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await axios.post('http://localhost:4000/api/client', {
      name : form.name,
      email : form.email,
      phone : form.phone,
      ci : form.ci
    }).then(res => {
      console.log(res);
      console.log(res.data);
    })

    // console.log(res)
  }

  return(
    <div className="HomeFrom">
      <Link to="/clients">Ver Clientes</Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>Ingrese los nombres del cliente</p>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            // value={form.name}
            maxLength="100" //limite de caracteres aceptados
            required
          />
        </label>
        <label htmlFor="ci">
        <p>Ingrese el numero de cedula</p>
          <input
            type="text"
            name="ci"
            placeholder="Cedula de identidad"
            onChange={handleChange}
            maxLength="10"
            required
          />
        </label>
        <label htmlFor="phone">
        <p>Ingrese el numero de telefono</p>
          <input
            type="phone"
            name="phone"
            placeholder="Cedula de identidad"
            onChange={handleChange}
            maxLength="10"
            required
          />
        </label>
        <label htmlFor="email">
          <p>Ingrese el correo electronico</p>
          <input
            type="email"
            name="email"
            placeholder="Correo electronico"
            onChange={handleChange}
            required
          />
        </label>
        {/* <label htmlFor="date">
          <p>Ingrese La fecha de la cita</p>
          <input
            type="date"
            name="date"
            min="2021-7-28"
            max="2021-12-31"
            // placeholder="Correo electronico"
            onChange={handleChange}
            required
          />
        </label> */}
        <div className="Form-button">
          <input type="submit" value="Guardar" />
        </div>
      </form>

    </div>
  )
}

export default HomeFrom;