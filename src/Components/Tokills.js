import React, { Component } from 'react'
import Tokill from './Tokill';

export default class ToKills extends Component {
  render() {
    const tokills = this.state.tokills((tokill, i) => {
      return <Tokill tokill={tokill} key={tokill+i}/>
    })

    return (
      <div>
        {tokills}
      </div>
    )
  }
}
