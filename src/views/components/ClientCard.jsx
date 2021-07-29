import React , {Component} from 'react';
import ClientBoxCard from './ClientBoxCard';

export default class ClientCard extends Component{
  constructor() {
    super();
    this.state = {
      res: [],
      name: '',
      phone:'',
      ci: '',
      email:'',
      date: ''
    };
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/client/' + this.props.match.params.id);
    this.setState({
      // res : res.data,
      name : res.data.name,
      ci: res.data.ci,
      email: res.data.email,
      phone: res.data.phone,
      date: res.data.date
    })
    console.log(this.state.res);

  }
  render() {
    return(
      <ClientBoxCard
        name={this.state.name}
        phone={this.state.phone}
        ci={this.state.ci}
        email={this.state.email}
        date={this.state.date}
      />
    )
  }
}