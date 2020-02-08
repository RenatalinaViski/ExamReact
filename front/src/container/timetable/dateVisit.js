import React, { useState } from "react"
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux';
import { Redirect } from "react-router-dom"


let storeReg = createStore((state, action) => { //единственный редьюсер данного хранилища
    if (state === undefined) { //redux запускает редьюсер хотя бы раз, что бы инициализировать хранилище
        return { valueDay: 1, valueMonth: 1, valueHour: '07', valueMinute: '30' };  //обязательно вернуть новый объект, а не изменить текущий state
    }
    if (action.type === 'TYPE_DAY') {
        return { ...state, valueDay: action.numDay, valueMonth: state.valueMonth, valueTime: state.valueTime }
    }
    if (action.type === 'TYPE_MONTH') {
        return { ...state, valueDay: state.valueDay, valueMonth: action.numMonth, valueTime: state.valueTime }
    }
    if (action.type === 'TYPE_TIME') {
        return { ...state, valueDay: state.valueDay, valueMonth: state.valueMonth, valueTime: action.numTime }
    }

    return state; //редьюсеров может быть несколько, в таком случае вызываются все редьюсеры, но далеко не всегда action.type будет относится к этому редьюсеру. Тогда редьюсер должен вернуть state как есть. 
})


const actionDay = (numDay) => ({ type: 'TYPE_DAY', numDay })
const actionMonth = (numMonth) => ({ type: 'TYPE_MONTH', numMonth })
const actionTime = (numTime) => ({ type: 'TYPE_TIME', numTime })



const connectorRegistr = connect(state => ({ valueDay: state.valueDay, valueMonth: state.valueMonth, valueTime: state.valueTime }),
    {
        valueDay: actionDay,
        valueMonth: actionMonth,
        valueTime: actionTime

    })

/////////////////////
const Day = ({ arrYear, valueDay, valueMonth }) => {
    return (
        <>
            <select className="custom-select" id="inputGroupSelect02" onChange={e => storeReg.dispatch(actionDay(e.target.value))}>
                <option value="1" defaultValue>день</option>
                {
                    arrYear[valueMonth][0].map(data =>
                        data != null ? <option value={data}>{data}</option> : false)
                }
            </select>

            <select className="custom-select" id="inputGroupSelect03" onChange={e => storeReg.dispatch(actionMonth(e.target.value))}>
                <option value="1" defaultValue>месяц</option>
                {arrYear[32].map(data =>
                    <option value={data}>{data}</option>
                )}
            </select>
        </>
    )
}
const ConnectedDay = connectorRegistr(Day)

////////////////////////////////////////////////////////////////////
const Hour = ({ arrYear, valueDay, valueMonth, valueTime }) => {
    return (
        <>
            <div className="input-group mb-3">
                <select className="custom-select" id="inputGroupSelect02" onChange={e => storeReg.dispatch(actionTime(e.target.value))}>
                    <option value="1" defaultValue>часы</option>
                    {                        
                         arrYear[valueMonth][valueDay].map(data =>
                             data != null ? <option value={data}>{data}</option> : false)
                    }
                </select>
                <div className="input-group-append">
                    <label className="input-group-text" htmlFor="inputGroupSelect05">Время</label>
                </div>
            </div>

        </>
    )
}
const ConnectedHour = connectorRegistr(Hour)

export default ({ arrYear, onSend }) => {
    const [reduxReg, setReduxRegi] = useState(storeReg.getState())
    storeReg.subscribe(() => setReduxRegi(storeReg.getState()))
    const { valueDay, valueMonth, valueTime } = storeReg.getState()
    return (
        <>
       {
           localStorage.reception > 0?
           <Redirect to={'/doctors'} key="main" /> :        
            <Provider store={storeReg}>
                <div className="input-group mb-3">
                    <Day arrYear={arrYear} valueDay={valueDay} valueMonth={valueMonth} key="dayVisit"/>
                    <select className="custom-select" id="inputGroupSelect04" onChange={e => e.target.value}>
                        <option value="year" defaultValue>2020</option>
                    </select>
                    <div className="input-group-append">
                        <label className="input-group-text" htmlFor="inputGroupSelect04"> Дата </label>
                    </div>
                </div>
                <Hour arrYear={arrYear} valueDay={valueDay} valueMonth={valueMonth} valueTime={valueTime} key="hourVisit" />
                <p className="text-muted">просим заполнить все поля, для улучшения качества обслуживания</p>          
                        <button className="btn btn-primary" onClick={()=>onSend(valueDay, valueMonth, valueTime)}>отправить заявку</button>
            </Provider>
}
        </>
    )
}
