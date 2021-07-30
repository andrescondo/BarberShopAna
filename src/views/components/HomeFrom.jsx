import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const InitialState = {
  name: '',
  email: '',
  phone: '',
  ci: '',
  date: '2021-07-29',
};

const HomeFrom = () => {
  const [form, setForm] = useState(InitialState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await axios
      .post('http://localhost:4000/api/client', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        ci: form.ci,
        date: form.date,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
      });

    console.log(res);
  };

  return (
    <div className="HomeFrom">
      <Link to="/clients">Lista de Clientes</Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>Ingrese los nombres del cliente</p>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Nombre"
            onChange={handleChange}
            maxLength="100" //limite de caracteres aceptados
            required
            autoComplete="off"
          />
        </label>
        <label htmlFor="ci">
          <p>Ingrese el numero de cedula</p>
          <input
            type="text"
            name="ci"
            value={form.ci}
            placeholder="Cedula de identidad"
            onChange={handleChange}
            maxLength="10"
            required
            autoComplete="off"
          />
        </label>
        <label htmlFor="phone">
          <p>Ingrese el numero de telefono</p>
          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="Numero de telefono"
            onChange={handleChange}
            maxLength="10"
            required
            autoComplete="off"
          />
        </label>
        <label htmlFor="email">
          <p>Ingrese el correo electronico</p>
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Correo electronico"
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
        <label htmlFor="date">
          <p>Ingrese La fecha de la cita</p>
          <input
            type="date"
            name="date"
            value={form.date}
            min="2021-7-28"
            // max="2021-12-31"
            onChange={handleChange}
            required
            // pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          />
        </label>
        <div className="Form-button">
          <input type="submit" value="Guardar" />
        </div>
      </form>
    </div>
  );
};

export default HomeFrom;
