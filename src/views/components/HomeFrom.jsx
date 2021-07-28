import React, {useState} from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return(
    <div className="HomeFrom">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>Ingrese los nombres del cliente</p>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            // value={form.name}
            maxLength="10" //limite de caracteres aceptados
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
          />
        </label>
        <label htmlFor="email">
        <p>Ingrese el numero de cedula</p>
          <input
            type="email"
            name="email"
            placeholder="Cedula de identidad"
            onChange={handleChange}
          />
        </label>
        <div className="Form-button">
          <input type="submit" value="Guardar" />
        </div>
      </form>

    </div>
  )
}

export default HomeFrom;