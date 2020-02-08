import React from 'react'
import './doctor.css'


export default ({ doctor }) => {
    let path='../img/'+doctor.Photo
    return (
        <>
            <div className="row col-sm-5 no-gutters shadow p-1 mb-5 bg-white rounded">
                <div className="col-md-5 ">
                    <img src={path} className="card-img" alt="Your's doctor" />
                </div>
                <div className="col-sm-5">
                    <div className="card-body">
                        <h5 className="card-title bold">{doctor.Lastname} {doctor.Name} {doctor.Fathername}</h5>
                        <p className="card-text">{doctor.Profession}</p>
                        <p className="card-text"><small className="text-muted"><a href="/prescription" onClick={()=>doctor.ID}>Просмотреть график работы доктора...</a></small></p>
                    </div>
                </div>
            </div>
        </>

        //здесь где доктор ай ди, строка 17 мне нужно будет показать график работы доктора, и сводное время по нему, как то надо будет сделать диспат и редьюсер, редакс вобщем сделать
    )
}
