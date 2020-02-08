import { FETCH_PERSON_START, FETCH_PERSON_SUCCESS, FETCH_PERSON_ERROR } from '../actions/actionTypes'

const initialState = {
    person:"",
    loading: false,
    error: null
}

export default function personReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_PERSON_START:
            return { ...state, loading: true }
        case FETCH_PERSON_SUCCESS:
            return { ...state, person: action.person, loading: false }
        case FETCH_PERSON_ERROR:
            return { ...state, error: action.error, loading: false }
        default:
            return state
    }

}