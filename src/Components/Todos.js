import React, { Component } from 'react'
import Todo from "Todo.js"

export default class Todos extends Component {
  render() {
    const todos = this.state.todos((todo, i) => {
        return <Todo todo={todo} key={todo+i}/>
    })

    return (
      <div>
        {todos}
      </div>
    )
  }
}
