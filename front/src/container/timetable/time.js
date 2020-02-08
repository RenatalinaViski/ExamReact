import React, { useState, useMemo } from "react"
import Day from './dateVisit'
import { connect } from 'react-redux'
import { fetchTime } from '../../store/actions/time'
import { Redirect } from "react-router-dom"




class Time extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchTime()
    }




    onChooseDate(id) {
        //заполняем табель учета выходов && табель учета рабочего времени
        let arrYear = []
        for (let i = 1; i < 13; i++) {
            arrYear[i] = new Array();
            for (let j = 1; j < 32; j++) {
                arrYear[i][0] = new Array();
                for (let t = 0; t < 31; t++) {
                    arrYear[i][0][t] = t + 1;
                }
                arrYear[i][j] = new Array()

                let h = 7
                for (let d = 0; d < 22; d += 2) {
                    if (h < 10) {
                        arrYear[i][j][d] = '0' + h + ':00:00'
                        arrYear[i][j][1 + d] = '0' + h + ':30:00'
                    }
                    else {
                        arrYear[i][j][d] = h + ':00:00'
                        arrYear[i][j][1 + d] = h + ':30:00'
                    }
                    h++
                }
            }
        }
        arrYear[32] = new Array();
        for (let i = 1; i < 13; i++) {
            arrYear[32][i - 1] = i
        }


        let arrDate = []
        //здесь будем удалять записи которые есть на это время
        let newCalendar = this.props.time.time.map(data => {

            if (data.ID_D == id) {
                let time = '';
                if (data.Time != null) {
                    //удаляем определенное время из массива, которое совпало, с пришедшим из БД
                    time = data.Time.slice(data.Time.indexOf('T') + 1, data.Time.indexOf('T') + 9);
                    let index = arrYear[+data.Date.slice(5, 7)][+data.Date.slice(8)].indexOf(time)
                    arrYear[+data.Date.slice(5, 7)][+data.Date.slice(8)].splice(index, 1)
                }
                //удаляем дату из массива, если в БД стоит data.Output=1   это значит выходной
                if (data.ID_D == id && data.Output == 1) {
                    arrYear[+data.Date.slice(5, 7)][0][+data.Date.slice(8) - 1] = null
                }
            }
        })

        return arrYear
    }
    onRedirect() {
        return (
            <>
            <Redirect to={'/doctors'} key="main" />            
            </>
        )
    }

    componentWillUpdate (){
       if(localStorage.getItem("reception") != null)
         this.onRedirect() 
    } 

    render() {
        let arrYear = this.onChooseDate(this.props.id)
        return (
            <>
                <Day arrYear={arrYear} onSend={(valueDay, valueMonth, valueTime) => {
                    fetch('/addprescription', {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.authToken}`
                        },
                        method: "POST",
                        body: JSON.stringify({ Day: valueDay, Month: valueMonth, Time: valueTime, ID_D: this.props.id, ID_P: localStorage.ID })

                    })
                        .then(res => res.json())
                        .then(data => {
                            localStorage.reception = data.ID_D;
                             this.onRedirect()
                        })                                      
                }                
                }
                    key="dataDay" />           

            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        time: state.time,
        loading: state.loading
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchTime: () => dispatch(fetchTime())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time);
