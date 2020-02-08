import React from 'react'
import FormRegistration from './formRegistration'
import { connect } from 'react-redux'
import { fetchUser } from '../../../store/actions/user'
import { Redirect } from 'react-router-dom'

class Registration extends React.Component {
    constructor(props) {
        super(props)
    }

    onRedirect(){
        return(
            <>
            <Redirect to="/login" key="new_user"/>
            </>
        )
    }
    

    onRegistration() {
        return (
            <>
                <FormRegistration onSend={(log, pas, email) => {
                    fetch('/regirstration', {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer`
                        }, 
                        method: "POST",
                        body: JSON.stringify({ Login: log, Password: pas, Email: email })
                    })
                        .then(res => res.json())
                        .then(token => {         
                            localStorage.authToken=token.token; 
                            localStorage.name=token.Login;
                            localStorage.ID=token.ID;
                            localStorage.newUser=true;
                            this.props.fetchUser()   
                            this.onRedirect()                        
                           })
                }} key="registration" />

            </>
        )
    }

    onLogout() {
        console.log(this.props.user.user)
        console.log(localStorage.getItem("authToken"))
        if(!localStorage.newUser){
        localStorage.removeItem("authToken")
        localStorage.removeItem("name")
        localStorage.removeItem("ID")
        this.props.fetchUser()
        }
        return (
            <>
            <Redirect to={'/'} />            
            </>
        )
    }

    render() {
        console.log(this.props)
        return (
            <>
                { 
                this.props.user.user.length == 0 && +this.props.user.user == +[] ||  this.props.user.user == "Login"  ?                
                this.onRegistration(): this.onLogout() }
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

export default connect(mapStateToProps, mapDispatchToProps)(Registration)

