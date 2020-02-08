import {combineReducers} from 'redux'
import proceduresReducers from './proc'
import doctorsReducers from './doc'
import userReducers from './userReducer'
import articleReducers from './articleReducer'
import personReducers from './personReducer'
import timeReducers from './timeReducer'


export default combineReducers({
    procedures : proceduresReducers,
    doctors: doctorsReducers,
    user: userReducers,
    articles: articleReducers,
    person: personReducers,
    time: timeReducers
})

