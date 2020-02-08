import React from 'react'
import { connect } from 'react-redux'
import {fetchPerson} from '../../../store/actions/persona'
import UserPatient from './userPatient'
import { element } from 'prop-types'

class Person extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchPerson()
    }

    renderPatient(person){
        return(
            <>
           <UserPatient user={person} key="patient"/>
            </>
        )
    }

    render(){  
        return(
            <>
            { 
            this.renderPatient(this.props.person.person)  
            }               
            </>
        )
    }

}


function mapStateToProps(state){
 return{
     person: state.person,
     loading: state.loading
 }
}
function mapDispatchToProps(dispatch){
    return{
        fetchPerson: ()=>dispatch(fetchPerson())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Person)