import React, { Component } from 'react';
import './App.css';
import data from "./contacts.json"

class App extends Component {
  state = {
    contacts: data.splice(0, 5)
  }; 

  addRandomActor = () => {
    const randomNo = ~~(Math.random() * data.length);
    let randomContact = data.splice(randomNo, 1);
    this.setState({
      contacts: [...this.state.contacts, randomContact[0]]
    });


  sortByName = () => {
    let copyOfTheContacts = [...this.state.contacts];
    copyOfTheContacts.sort((s,b) => {
      return a.name > b.name ? 1: -1;
    });
  };

  this.setState({
    contacts: copyOfTheContacts
  });


  deleteContact = i => {
     this.setState((prevState) => {
       contacts: prevState.contacts.filter(el => el.id !== i.id);
     });
  };


  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <input></input>
      <button onClic={this.addRandomActor}>Add Random Contact</
button>
<button onClic={this.sortByName}>Sort by name</
button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contact.map(actor => {
            return(
              <tr key={actor.id}>

            )
          })}
        </tbody>
      </table>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
