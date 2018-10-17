import React, { Component } from 'react';
import ToDos from "./Components/Todos/Todos"
import Login from "./Components/auth/Login"

// Consider removing console.logs
console.log("inside file")

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
      <div>Test
        <Login/>
        <ToDos/>
      </div>
    );
  }
}

export default App;
