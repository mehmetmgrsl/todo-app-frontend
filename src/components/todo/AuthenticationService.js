class AuthenticationService {
    registerSuccessfullLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
        console.log('register successfully login')
    }

}

export default new AuthenticationService()