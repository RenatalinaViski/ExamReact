import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, NavLink, Redirect  } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import ProcedureList from './container/procedursList/procedureList'
import DoctorsList from './container/doctors/doctorsList'
import Navbar from './container/navbar/navbar'
import User from './container/formsUser/user'
import Registration from './container/formsUser/formsRegistration/registration'
import Main from './container/main/main'
import ListOffers from './container/listOffers/listOffers';
import Footer from './container/footer/footer';
import News from './container/news/news'
import Timetable from './container/timetable/timetable'


const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))




export default () => {
  return (
    <>
       <Provider store={store}>
        <BrowserRouter>

          <Navbar  key="1" />
          <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/doctors" component={DoctorsList} />
          <Route path="/procedures" component={ProcedureList}  />
          <Route path="/login" component={User} />
          <Route path="/registration" component={Registration} /> 
          <Route path="/offers" component={ListOffers} /> 
          <Route path="/news" component={News} /> 
          <Route path="/prescription" component={Timetable} />                 
          <Redirect to={'/'} />
          </Switch>
          <Footer key="footer" />

        </BrowserRouter>
      </Provider> 
    </>
  )

}
