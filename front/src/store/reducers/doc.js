import {FETCH_DOCTORS_START, FETCH_DOCTORS_SUCCESS, FETCH_DOCTORS_ERROR} from '../actions/actionTypes'

const initialState={
    doctors: [],
    loading: false, 
    error: null
}

export default function doctorsReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_DOCTORS_START:
            return {                
                ...state, loading:true
            }
        case FETCH_DOCTORS_SUCCESS:
            return {
                ...state, loading:false, doctors:action.doctors
            }
        case FETCH_DOCTORS_ERROR:
            return {
                ...state, loading:false, error:action.error
            }
        default:
            return state
    }
}

