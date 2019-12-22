class AuthenticationService {
    registerSuccessfullLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
        console.log('register successfully login')
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

}

export default new AuthenticationService()