import React, { Component } from 'react'
import { connect } from "render-this";

class Login extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthenticated ? <button>Logout</button> : <button>Login</button> }
      </div>
    )
  }
}

export default connect(Login);
