import { FETCH_PROCEDURES_START, FETCH_PROCEDURES_SUCCESS, FETCH_PROCEDURES_ERROR } from "./actionTypes"

function getProcedures() {
    const arrayProcedures = []
    return fetch('/procedures')
        .then(data => data.json())
        .then(proc => proc)
}

export function fetchProceduresStart() {
    return {
        type: FETCH_PROCEDURES_START
    }
}
export function fetchProceduresSuccess(procedures) {
    return {
        type: FETCH_PROCEDURES_SUCCESS,
        procedures: procedures
    }
}
export function fetchProceduresError(e) {
    return {
        type: FETCH_PROCEDURES_ERROR,
        error: e
    }
}

export function fetchProcedures() {
    return async dispatch => {
        dispatch(fetchProceduresStart())
        try {
            const response = await getProcedures()
            dispatch(fetchProceduresSuccess(response))
        } catch (e) {
            dispatch(fetchProceduresError(e))
        }
    }
}

