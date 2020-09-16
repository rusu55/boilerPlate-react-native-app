import { LOGIN } from '../constants'
import { setHeaderJWT } from '../../services/httpService'

const initialState = {
    token: null,
    user: null,
    isAuthenticated: null
}

export default () => {
    const { type, payload } = action

    switch (type) {
        case LOGIN:
            setHeaderJWT(payload.access_token)
            return {
                ...state,
                token: payload.access_token,
                user: payload.user,
                isAuthenticated = true
            }
        default:
            return state
    }
}