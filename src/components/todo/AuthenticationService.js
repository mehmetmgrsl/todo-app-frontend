class AuthenticationService {
    registerSuccessfullLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
        console.log('register successfully login')
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

}

export default new AuthenticationService()