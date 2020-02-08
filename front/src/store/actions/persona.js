import {FETCH_PERSON_START,FETCH_PERSON_SUCCESS, FETCH_PERSON_ERROR} from './actionTypes'

function getPerson() {
    return fetch('/person', {
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

export function fetchPersonStart(){
    return {
        type: FETCH_PERSON_START
    }
}

export function fetchPersonSuccess(person){
    return{
        type: FETCH_PERSON_SUCCESS,
        person: person[0]
    }
}

export function fetchPersonError(e){
    return {
        type: FETCH_PERSON_ERROR,
        error: e
    }
}

export function fetchPerson(){
    return async dispatch =>{
        dispatch(fetchPersonStart())
        try{
        const person= await getPerson()
        dispatch(fetchPersonSuccess(person))
        }catch (e){
            dispatch(fetchPersonError(e))
        }
    }
}