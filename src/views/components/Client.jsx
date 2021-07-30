import React, { Component } from 'react';
import axios from 'axios';

import ClientBox from './ClientBox';

export default class Client extends React.Component {
  constructor() {
    super();
    this.state = {
      res: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/client');
    this.setState({res : res.data})
    console.log(this.state.res);

  }

  render () {
    return(
      <div className="Client">
        <div className="client--box">
          <h1>Lista de clientes registrados</h1>
     
         <div className="ClientBox">
          {
            this.state.res.map( (data) => (
              <ClientBox key={data._id} data={data} />
            ) ) 
          }
         </div>
         
        </div>
      </div>
    )
  }
}