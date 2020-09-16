import { LOGIN } from '../constants'
import http from '../../services/httpService'

export const login = (username, password) => async dispatch => {
    console.log('Login acction trigered')
    let errorMessage = ''
    const API_URL = 'https://flask-my-api.herokuapp.com/'

    const response = await http.post(API_URL + 'login', { username, password })

    dispatch({
        type: LOGIN,
        payload: response.data
    })
}