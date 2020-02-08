import {FETCH_DATE_START, FETCH_DATE_SUCCESS,  FETCH_DATE_ERROR} from '../actions/actionTypes'
function getDate() {
    
    return fetch('/time', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.authToken}`
        },        
        method: "POST",
        body: JSON.stringify({ID:localStorage.getItem("ID")})
    })
        .then(res => res.json())
        .then(token => token[0])
}

export function fetchDateStart() {
    return {
        type: FETCH_DATE_START
    }
}
export function fetchDateSuccess(time) {
    return {
        type: FETCH_DATE_SUCCESS,
        date: date
    }
}
export function fetchDateError(e) {
    return {
        type: FETCH_DATE_ERROR,
        error: e
    }
}

export function fetchDate(ID) {
    return async dispatch => {
        dispatch(fetchDateStart())
        try {
            const response = await getDate(ID)
            dispatch(fetchDateSuccess(response))
        } catch (e) {
            dispatch(fetchDateError(e))
        }
    }
}