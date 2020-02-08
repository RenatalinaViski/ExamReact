import React from "react"
import Input from './input'
import { connect } from 'react-redux'
import { fetchDoctors } from '../../store/actions/doctors'
import classes from './timetable.css'
import { Redirect } from 'react-router-dom'


class Timetable extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchDoctors()
    }

    onRedirect(){
        return(
            <>
            <Redirect to={"/"} key="new_user"/>
            </>
        )
    }

   
    render() {
        let arr = 0
        let doctorID=''       
       
        return (          

            <>            
            { 
                 localStorage.authToken!=null ? 
            
                <div className="card col-8 m-3">
                    <div className="card-header"> Оформление визита к врачу  </div>
                    <div className="card-body">                                                                 
                                {this.props.doctors.doctors.length !== 0 ?
                                   <Input blanck={this.props.doctors.doctors} choose="Выбирите доктора" doctorID="" key="chooseDoctor"/>: false                                   
                                }                          
                    </div>
                </div>
                :
                <Redirect to='/login'  key="login"/>  
            }

            </>
        
        )
    }
}

function mapStateToProps(state) {
    return {
        doctors: state.doctors,
        loading: state.loading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchDoctors: () => dispatch(fetchDoctors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timetable);
