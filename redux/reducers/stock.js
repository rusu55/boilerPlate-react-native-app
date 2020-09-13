import { FETCH_STOCKS } from '../constants'

const initialState = {
    stocks: null
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_STOCKS:
            return {
                ...state,
                stoks: 'ASPPL'
            }
        default: return state
    }


}