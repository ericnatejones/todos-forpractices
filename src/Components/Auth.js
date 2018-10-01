import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false
    }
    // GlobalState binds each method for you
  }

  login() {
    this.setState({ isAuthenticated: true })
  }

  logout() {
    this.setState({ isAuthenticated: false })
  }

  render() {
    return this.props.render(this)
  }
}

export default App;