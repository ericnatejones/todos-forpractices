import React, { Component } from 'react'
import Todo from "./Todo.js"

export default class Todos extends Component {
    constructor(){
        super()
        this.state = {
            todos: [],
            input: ""
        }
    }

    addTodo = () => {
        this.setState(prevState => {
            return {
                todos: [...this.prevState.todos, this.prevState.input],
                input: ""
            }
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const todos = this.state.todos.map((todo, i) => {
            return <Todo todo={todo} key={todo+i}/>
        })

        return (
        <div>
            <form>
                <input name="input" onChange={this.handleChange}/>
                <button onClick={this.addTodo}>Add Todo</button>
            </form>
            {todos}
        </div>
        )
    }
}
