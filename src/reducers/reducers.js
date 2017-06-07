/**
 * Created by Михаил on 01.06.2017.
 */
import * as types from '../actions/actionTypes'
const initialState = {
    forecastData:{}
};
export default function forecastReducer(state=initialState,action=null) {
switch (action.type) {
    case types.RECV_DATA:
        return {...state,forecastData:action.data};
    case types.RECV_ERROR:
        return {...state,forecastData:action.data};
    default:
        return state;
}
}
