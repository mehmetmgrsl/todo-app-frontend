import axios from 'axios';

class AuthenticationService {
    executeBasicAuthenticationService(username, password) {
        console.log(username)
        console.log(password)
        return axios.get("http://localhost:8080/basicauth",
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    executeJwtAuthenticationService(username, password) {
        console.log(username)
        console.log(password)
        return axios.post("http://localhost:8080/authenticate",
            { username, password })
    }

    registerSuccessfullLoginForJwt(username, token) {
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    registerSuccessfullLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser")
        if (user === null)
            return false
        return true
    }

    getLoggedInUsername() {
        let user = sessionStorage.getItem("authenticatedUser")
        if (user === null)
            return ''
        return user
    }

    setupAxiosInterceptors(token) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()