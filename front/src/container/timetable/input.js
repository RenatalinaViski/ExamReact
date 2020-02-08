import React, { useState } from 'react'
import Time from './time'
import { Redirect } from "react-router-dom"

const Input = ({ blanck, choose }) => {
    let a = 0
    const [doctorID, setDoctorID] = useState("2")
    return (
        <>
            <div className="input-group mb-3">
                <select className="custom-select" id="inputGroupSelect02" onChange={e => setDoctorID(e.target.value)} >
                    {
                        blanck[0].map(data => <option value={data.ID} id={data.ID}>{data.Profession} {data.Lastname} {data.Name} {data.Fathername} {data.ID}</option>)
                    }

                </select>
                <div className="input-group-append">
                    <label className="input-group-text" htmlFor="inputGroupSelect02">{choose}</label>
                </div>
            </div>
            <Time id={doctorID} key="date" />
        </>

    )
}


export default Input;