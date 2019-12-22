import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
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
        return <div> Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos"> here </Link> </div>
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav">
                        <li><Link to="/welcome/aaa" className="nav-link">Home</Link></li>
                        <li><Link to="/todos" className="nav-link">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link to="/login" className="nav-link">Login</Link></li>
                        <li><Link to="/logout" className="nav-link">Logout</Link></li>
                    </ul>
                </nav >
            </header >
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div> <hr /> Footer</div>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: 'Learn React', done: false, targetDate: new Date() },
                    { id: 2, description: 'Learn Spring', done: false, targetDate: new Date() },
                    { id: 3, description: 'Learn AWS', done: false, targetDate: new Date() }
                ]
        }

    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
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