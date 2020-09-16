import { FETCH_STOCKS } from '../constants'
import { setHeaderJWT } from '../../services/httpService'

const initialState = {
    stocks: null
}

export default (state = initialState, action) => {
    const { type, payload } = action


    switch (type) {
        case FETCH_STOCKS:
            console.log('Stocks reducers')
            return {
                ...state,
                // stoks: 'ASPPL'
            }
        default: return state
    }


}