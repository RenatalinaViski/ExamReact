import {FETCH_TIME_START,   FETCH_TIME_SUCCESS,    FETCH_TIME_ERROR} from '../actions/actionTypes'


const initialState={
    time: [],
    loading: false, 
    error: null
}

export default function timeReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_TIME_START:
            return {                
                ...state, loading:true
            }
        case FETCH_TIME_SUCCESS:
            return {
                ...state, loading:false, time:action.time
            }
        case FETCH_TIME_ERROR:
            return {
                ...state, loading:false, error:action.error
            }
        default:
            return state
    }
}
