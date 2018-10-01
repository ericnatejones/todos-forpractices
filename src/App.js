import React, { Component } from 'react';
import ToDos from "./Components/Todos"
import Login from "./Components/Login"


class App extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false
    }
    // GlobalState binds each method for you
  }

  login(user) {
    this.setState({ isAuthenticated: true })
  }

  logout() {
    this.setState({ isAuthenticated: false })
  }

  render() {
    return (
      <div>hello
        <Login/>
        <ToDos/>
      </div>
    );
  }
}

export default App;
