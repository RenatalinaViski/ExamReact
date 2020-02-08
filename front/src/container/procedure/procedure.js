import React from 'react'
import classes from './procedure.css'
    
export default ({procedure})=>{
    //  console.log(procedure.ID+ "This is from COMPONENT")
    return (
        <>
        <li className="li flex-1 d-flex row align-item-start" >
            {/* <img src={procedure.ID} alt="" /> */}
            <div className="text-list">
                <h4 className="h6 fw-b mt-0">{procedure.Name}</h4>
                {/* <p className="p">{procedure.ID}</p> */}
            </div>
        </li>
        </>
    )

}

