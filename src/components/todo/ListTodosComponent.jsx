import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodosComponent extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            todos: [],
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos()
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    this.setState({
                        todos: response.data
                    })
                }
            )
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUsername()
        console.log(id + " - " + username)
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({
                        message: `Delete of todo ${id} successful`
                    })

                    this.refreshTodos()
                }
            )
    }

    updateTodoClicked(id) {
        this.props.history.push(`/todos/${id}`)
    }


    render() {
        console.log('render')
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Done</th>
                                <th>Target Date</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{moment(todo.targetDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
                                            <td><button onClick={() => this.updateTodoClicked(todo.id)} className="btn btn-warning">Update</button></td>
                                            <td><button onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-warning">Delete</button></td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListTodosComponent;