import React from 'react'
import classes from './slide.css'

const Slide = (slid) => {

    let path = "../../img/" + `${slid.img}` + ".jpg"
    let active = slid.bool ? "carousel-item active" : "carousel-item"

    return (
        <>
            <div className="card-header pt-5 br-none">
                <h5 className="card-title p-blue bold font-noto">{slid.head}</h5>
            </div>
            <div className="row" >
                <img src={path} className="col-4 w-400 height-400" alt={slid.head} />
                <p className="card-text col-7 pt-2 text-center p-blue">{slid.paragraph}</p>
            </div>
            <div className="card-body">
                <a href="#" className="btn btn-info">задать вопрос врачу</a>
            </div>
        </>
    )

}

export default Slide;