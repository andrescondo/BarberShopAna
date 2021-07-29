import React, { Component } from 'react';
import axios from 'axios';

export default class Client extends Component {
  state = {
    clients: []
  }

    async componentDidMount() {
        this.getClient();
    }

    getClient = async () => {
        const res = await axios.get('http://localhost:4000/api/client');
        this.setState({
            clients: res.data
        });
    }

  render () {
    return(
      <div className="Client">
        <div className="client--box">
          <h1>Lista de clientes registrados</h1>
     
          {
            this.state.clients.map(client => (
                <li className="" key={client._id}>
                    {client.name}
                </li>
            ))
          }
        </div>
      </div>
    )
  }
}