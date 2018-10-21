import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from "./components/PhoneForm";

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: "김민준",
        phone: "010-0000-0000"
      },
      {
        id: 1,
        name: "홍길동",
        phone: "010-0000-0001"
      }
    ]
  }

  handleCreate = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate}/>
      </div>
    );
  }
}

export default App;
