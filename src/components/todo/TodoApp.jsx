import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>Error. The URL is not correct!</div>
}


class WelcomeComponent extends Component {
    render() {
        return <div> Welcome {this.props.match.params.name} </div>
    }
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: 'Learn React' },
                    { id: 2, description: 'Learn Spring' },
                    { id: 3, description: 'Learn AWS' }
                ]
        }

    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table border='1' align='center'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'User',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange(event) {
        console.log(this.state)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {

        if (this.state.username === 'aaa' && this.state.password === 'bbb') {
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            console.log('Failed')
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }


    }

    render() {
        return (
            <div>
                {/*<ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed} /> */}
                {this.state.hasLoginFailed && <div> Invalid Credentials </div>}

                {/*<ShowLoginSuccessful showSuccessMessage={this.state.showSuccessMessage} /> */}
                {this.state.showSuccessMessage && <div> Login Successfull </div>}
                User Name: <input type="text" name="username" ref={this.state.username} onChange={this.handleChange} defaultValue=""></input>
                Password: <input type="password" name="password" ref={this.state.password} onChange={this.handleChange} defaultValue=""></input>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

export default TodoApp;