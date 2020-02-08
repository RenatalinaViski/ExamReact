import React from 'react'
import Procedure from '../procedure/procedure'
import { connect } from 'react-redux'
import { fetchProcedures } from '../../store/actions/procedures'


class ProcedureList extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchProcedures()
    }

    renderComponent(procedure) {
        // console.log(procedure)
        return (
            <>
                <Procedure procedure={procedure} key={procedure.ID} />
            </>
        )
    }

    render() {
        return (
            <ul className="ul d-flex col " >
                {/* {console.log(this.props)} */}
                {this.props.procedures.procedures.length !== 0 ?
                    this.props.procedures.procedures.map(procedure => this.renderComponent(procedure))
                    :
                    ""}
            </ul>
        )
    }
}
function mapStateToProps(state) {
    return {
        procedures: state.procedures,
        loading: state.loading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchProcedures: () => dispatch(fetchProcedures())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcedureList)