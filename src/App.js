import React, { Component } from 'react';
import './App.css';
import ToDos from "./Components/Todos"
import ToKills from "./Components/Tokills"


class App extends Component {
  render() {
    return (
      <div>
        <ToDos/>
        <ToKills/>
      </div>
    );
  }
}

export default App;
