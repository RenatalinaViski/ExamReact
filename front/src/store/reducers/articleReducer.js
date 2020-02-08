import { FETCH_ARTICLE_START, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_ERROR } from '../actions/actionTypes'

const initialState = {
    articles: [],
    loading: false,
    error: null
}

export default function articleReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTICLE_START:
            return {
                ...state, loading: true
            }
        case FETCH_ARTICLE_SUCCESS:
            return {
                ...state, loading: false, articles: action.articles
            }
        case FETCH_ARTICLE_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        default:
            return state
    }
}