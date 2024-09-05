import { createBrowserHistory } from 'history'
import _ from 'lodash'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

/* called when needed to redirect user to login screen*/
export const loginRedirect = () => {
    localStorage.clear()
    history.push('/')
}

/* called when there is need to display success messages */
export const displaySuccessMessage = (message) => {
    toastr.success(message, { showMethod: 'slideDown', hideMethod: 'slideUp', timeOut: 3000, closeButton: false })
}

/* called when there is need to display error messages */
export const displayErrorMessage = (message) => {
    toastr.error(message, { showMethod: 'slideDown', hideMethod: 'slideUp', timeOut: 3000, closeButton: false })
}

/* returns logged in user info */
export const getLoggedInUserData = () => {
    let user = {}
    let obj = JSON.parse(localStorage.getItem('data'))
    if (!_.isEmpty(obj)) {
        user = obj
    }

    return user
}

/* returns header for axios request */
export const requestTokenHeader = () => {
    let accessToken = JSON.parse(localStorage.getItem('accessToken'))
    if (accessToken) {
        return { Authorization: 'Bearer ' + accessToken }
    }

    return {}
}

/* returns object to navigate pages/routes */
export const history = createBrowserHistory({ window })
