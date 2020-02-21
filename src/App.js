import React, { Component } from 'react';
import services from './services/servicesRequest.js';
import './App.css';

export default class App extends Component {
  state = {
    clientSelect: undefined,
    response:'',
    loading: false,
    clients:[{
      id:'2741',
      sheet:'1J5XJotsi4IyLztO9PGTbaHciveIMC1A5umDaUwPVOzE',
      tab:'bancoEstado'
    }, 
    {
      id: '3156',
      sheet: '1arEjfz9xpMb2Si94sq8KDRFcf-zH6JDHDAgPM3sSmFw',
      tab: 'smu'
    },
    {
      id: '3207',
      sheet: '1gNp29qWkQjqLgr9TYiue1KyKgf8yM2gwS7Vwv56xsnA',
      tab: 'transbank'
    },
    {
      id: '3200',
      sheet: '19ou4-GboGDhgZz4rte596ugk5ihQmqjoHn8VmNLGBp',
      tab: 'afp'
    },
    {
      id: '3072',
      sheet: '110xR_RiO9kGM1f0qirjsPGPPS1480564TxDPPvRHOrg',
      tab: 'security'
    }        
    ]
  }

  render() {
    return (
      <section className="container h-100">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <form className="mb-3" onSubmit={this.handleSubmit}>
              <div className="form-group mt-5">
                <label htmlFor="exampleFormControlSelect1">Seleccionar cliente</label>
                <select className="form-control" name="client" id="exampleFormControlSelect1" onChange={this.handleChange} defaultValue={this.state.clientSelect} required>
                  <option value="null">Seleccionar</option>
                  <option value="0">Banco Estado</option>
                  <option value="2">Transbank</option>
                </select>
              </div>
              <button type="submit" disabled={!this.state.clientSelect || isNaN(this.state.clientSelect) } className="btn btn-primary">Generar</button>
            </form>
            {this.state.loading? (
              <div className="load-3">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            ) : null}            
            {this.state.response !== '' ? (
              <div className="alert alert-primary" role="alert">
                {this.state.response}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  handleChange = event => {
    this.setState({ clientSelect: event.target.value });
    this.setState({ response: '' });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    let client = this.state.clients[this.state.clientSelect];
    services.request(client).then(response => {
      setTimeout(() => {
        this.setState({ loading: false, response: response });
      }, 1000);
    })
    .catch(err => {
      console.log("Ocurrió un error", err)
    })
  }


}
