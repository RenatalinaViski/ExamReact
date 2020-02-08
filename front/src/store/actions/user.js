import { FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_USER_ERROR, FETCH_PERSON_START,FETCH_PERSON_SUCCESS, FETCH_PERSON_ERROR } from "./actionTypes"

function getUser() {
  let tokenUser= localStorage.getItem("authToken") 
  return tokenUser !=null ?  localStorage.getItem("name") : "Login"
}

export function fetchUserStart() {
    return {
        type: FETCH_USER_START
    }
}
export function fetchUserSuccess(user) {
    //сюда мне нужно будет записать себя в локал стораж
    return {
        type: FETCH_USER_SUCCESS,
        user: user
    }
}
export function fetchUserError(e) {
    return {
        type: FETCH_USER_ERROR,
        error: e
    }
}


export function fetchUser() {

    return async dispatch => {        
        dispatch(fetchUserStart())
        try {
            const response = await getUser()
            dispatch(fetchUserSuccess(response))            
        } catch (e) {
            dispatch(fetchUserError(e))
        }
    }
}






