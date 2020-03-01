import axios from 'axios';
import { API_URL } from '../../../src/Constants'

export const USER_NAME_SESSION_ATTRIBUTE = 'authenticatedUser';

class AuthenticationService {
    executeBasicAuthenticationService(username, password) {
        console.log(username)
        console.log(password)
        return axios.get(`${API_URL}/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

    executeJwtAuthenticationService(username, password) {
        console.log(username)
        console.log(password)
        return axios.post(`${API_URL}/authenticate`,
            { username, password })
    }

    registerSuccessfullLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    registerSuccessfullLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE)
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