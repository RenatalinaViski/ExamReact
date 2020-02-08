import { FETCH_PROCEDURES_START, FETCH_PROCEDURES_SUCCESS, FETCH_PROCEDURES_ERROR } from "../actions/actionTypes"

const initialState = {
    procedures: [],
    loading: false,
    error: null    
}

export default function proceduresReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROCEDURES_START:
            return {                
                ...state, loading:true
            }
        case FETCH_PROCEDURES_SUCCESS:
            return {
                ...state, loading:false, procedures:action.procedures
            }
        case FETCH_PROCEDURES_ERROR:
            return {
                ...state, loading:false, error:action.error
            }
        default:
            return state
    }
}