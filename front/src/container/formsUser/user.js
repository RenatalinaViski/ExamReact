import React from 'react'
import FormLogin from './formLogin/formLogin'
import { connect } from 'react-redux'
import { fetchUser } from '../../store/actions/user'
import classes from './user.css'
import Person from './persona/person'


class User extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchUser()
    }


    renderLogin() {
        return (
            <>
                <FormLogin onSend={(log, pas) => {
                    fetch('/login', {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer`
                        },
                        method: "POST",
                        body: JSON.stringify({ Login: log, Password: pas })
                    })
                        .then(res => res.json())
                        .then(token => {
                            if (token.Login != undefined) {
                                localStorage.authToken = token.token;
                                localStorage.name = token.Login;
                                localStorage.ID = token.ID;
                                this.props.fetchUser()
                            }else{
                                //написать сюда алерт, что бы ввел правильно данные
                            }
                        })
                }} key="login" />
            </>
        )
    }

    renderUser() {
        return (
            <>
                <Person key="Patient" />
            </>
        )
    }

    render() {
        if(localStorage.newReception){
            localStorage.removeItem("newReception")
        }
        return (
            <ul className="ul d-flex col" >
                {!localStorage.getItem("authToken") ?
                    this.renderLogin() : this.renderUser()}

            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(User)


