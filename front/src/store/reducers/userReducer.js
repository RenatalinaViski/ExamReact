import { FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../actions/actionTypes'

const initialState = {
    user: [],
    loading: false,
    error: null
}

export default function userReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_START:
            return {
                ...state, loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state, loading: false, user: action.user
            }
        case FETCH_USER_ERROR:
            return {
                ...state, loading: false, error: action.error
            }        
        default:
            return state
    }
}