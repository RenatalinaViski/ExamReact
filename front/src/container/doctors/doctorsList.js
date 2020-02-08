import React from 'react'
import Doctor from './doctor/doctor'
import { connect } from 'react-redux'
import { fetchDoctors } from '../../store/actions/doctors'
import classes from './doctorsList.css'


class DoctorsList extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchDoctors()
    }

    renderComponent(doctor) {
        return (
            <>
                <Doctor doctor={doctor} key={doctor.Lastname} />
            </>
        )
    }

    render() {
        if(localStorage.reception){
            localStorage.removeItem("reception")
        }
        return (
            <ul className="ul d-flex col ml-5 mt-4" >
                {console.log(this.props.doctors.doctors)}
                {this.props.doctors.doctors.length !== 0 ? 
                    this.props.doctors.doctors[0].map(doctor => this.renderComponent(doctor))
                   :
                   ""
                }
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorsList)