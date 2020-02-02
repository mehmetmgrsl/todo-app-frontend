import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import AuthenticatedRouteComponent from './AuthenticatedRouteComponent'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import ListTodosComponent from './ListTodosComponent'
import FooterComponent from './FooterComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import TodoComponent from './TodoComponent'

class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <AuthenticatedRouteComponent path="/welcome/:name" component={WelcomeComponent} />
                        <AuthenticatedRouteComponent path="/todos/:id" component={TodoComponent} />
                        <AuthenticatedRouteComponent path="/todos" component={ListTodosComponent} />
                        <AuthenticatedRouteComponent path="/logout" component={LogoutComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}
export default TodoApp;