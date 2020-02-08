import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../store/actions/user'

import { Switch, Link, Route } from 'react-router-dom'
import classes from './navbar.css'
import DoctorsList from '../doctors/doctorsList'

class Navbar extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.props.fetchUser()
    }


    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <a className="navbar-brand col-3" href="#"><img src="https://img.icons8.com/color/50/000000/caduceus.png" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Главная <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/offers">Наши услуги</a>
                            </li>
                            {/* <li className="nav-item">
                        <a className="nav-link" href="/procedures">Процедуры</a>
                    </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="/prescription">Записаться на прием</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/news">Новости</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/procedures" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            Dropdown </a> */}
                            {/* Сюда мне нужно подключить список моих процедур */}
                            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div> 
                    </li>  */}
                            <li className="nav-item">
                                <a className="nav-link" href="/doctors">Доктора</a>

                            </li>
                            {/*  */}
                            <li className="nav-item">
                                <a className="nav-link" href="/login" onClick={() => this.props.fetchUser()}>{this.props.user.user}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/registration" onClick={() => this.props.fetchUser()}>{this.props.user.user == "Login" ? "Registration" : "Logout"}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        loading: state.loading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)


