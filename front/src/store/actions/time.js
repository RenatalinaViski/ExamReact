import {FETCH_TIME_START,   FETCH_TIME_SUCCESS,    FETCH_TIME_ERROR} from './actionTypes'

function getTime(doctor) {
    
    return fetch('/time', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.authToken}`
        },        
        method: "POST",
        body: JSON.stringify({ID:localStorage.getItem("ID"), doctroID:doctor})
    })
        .then(res => res.json())
        .then(token => token)
}

export function fetchTimeStart() {
    return {
        type: FETCH_TIME_START
    }
}
export function fetchTimeSuccess(time) {
    return {
        type: FETCH_TIME_SUCCESS,
        time: time
    }
}
export function fetchTimeError(e) {
    return {
        type: FETCH_TIME_ERROR,
        error: e
    }
}

export function fetchTime(ID) {
    return async dispatch => {
        dispatch(fetchTimeStart())
        try {
            const response = await getTime(ID)
            dispatch(fetchTimeSuccess(response))
        } catch (e) {
            dispatch(fetchTimeError(e))
        }
    }
}

