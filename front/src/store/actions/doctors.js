import { FETCH_DOCTORS_START, FETCH_DOCTORS_SUCCESS, FETCH_DOCTORS_ERROR } from "./actionTypes"

function getDoctors() {
    
    return fetch('/doctors')
        .then(data => data.json())
        .then(proc => proc)
}

export function fetchDoctorsStart() {
    return {
        type: FETCH_DOCTORS_START
    }
}
export function fetchDoctorsSuccess(doctors) {
    return {
        type: FETCH_DOCTORS_SUCCESS,
        doctors: doctors
    }
}
export function fetchDoctorsError(e) {
    return {
        type: FETCH_DOCTORS_ERROR,
        error: e
    }
}

export function fetchDoctors() {
    return async dispatch => {
        dispatch(fetchDoctorsStart())
        try {
            const response = await getDoctors()
            dispatch(fetchDoctorsSuccess(response))
        } catch (e) {
            dispatch(fetchDoctorsError(e))
        }
    }
}

