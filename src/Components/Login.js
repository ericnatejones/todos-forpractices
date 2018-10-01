import React, { Component } from 'react'
import { connect } from "render-this";

class Login extends Component {
  render() {
    return (
      <div>
        <button>Login</button>
        <button>Logout</button>
      </div>
    )
  }
}

export default connect(Login);
