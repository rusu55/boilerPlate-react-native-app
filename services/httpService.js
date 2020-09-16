import axios from 'axios'

export function setHeaderJWT(jwt) {
    if (jwt) {
        return axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
    }
    else {
        return null
    }
}

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 & error.response.status <= 500

    if (expectedError) {
        return Promise.reject(error.response.data)
    }
    else {
        return Promise.reject('Server Error!')
    }
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setHeaderJWT
}