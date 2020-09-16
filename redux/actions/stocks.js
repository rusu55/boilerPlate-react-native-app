import { FETCH_STOCKS } from '../constants'
//import Config from 'react-native-config'
import http, { setHeaderJWT } from '../../services/httpService'
import Moment from 'moment'

export const fetchStocks = () => async dispatch => {
    const API_URL = 'https://flask-my-api.herokuapp.com/'
    console.log('stocks action!')

    let today = Moment()
    const apiEndPoint = API_URL + `getstocks/${today.format("YYYY-MM-DD")}`
    //const apiEndPoint = API_URL + `getstocks/2020-09-03`
    const result = await http.get(apiEndPoint)

    dispatch({
        type: FETCH_STOCKS,
        payload: result.data
    })
}
