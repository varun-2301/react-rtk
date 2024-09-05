import axios from 'axios'
import { displayErrorMessage, loginRedirect } from '../utils'

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
}

const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
    responseType: 'json',
    headers: DEFAULT_HEADERS,
})

api.interceptors.request.use((request) => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'))
    if (accessToken) 
        request.headers.Authorization = `Bearer ${accessToken}`

    return request
})

api.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        let message = 'Something went wrong'
        if (error.response) {
            const status = error.response?.status
            switch (status) {
                // authentication (token related issues)
                case 401:
                    message = error.response?.statusText || 'Token Expired'
                    loginRedirect()
                    break

                // forbidden (permission related issues)
                case 403:
                    message = error.response?.statusText || 'Permission Denied'
                    break

                // not found (invalid credentials)
                case 404:
                    message = error.response?.data?.data || error.response?.statusText || 'Not Found'
                    break

                // method not allowed
                case 405:
                    message = error.response?.statusText || 'Invalid Type Request'
                    break

                // unprocessable
                case 422:
                    message = error.response?.statusText || 'Validation Error'
                    break

                // generic api error (server related) unexpected
                case 500:
                    message = error.response?.statusText || 'Server Error'
                    break
            }
        } else if (error.request && error.request.statusText) {
            message = error.request.statusText
        } else {
            message = error.message
        }

        displayErrorMessage(message)
    }
)

export default api