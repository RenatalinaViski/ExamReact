import React from 'react'

export default (person)=>{
    console.log(person)  
    let user=""
    if(person.user != "" && person.user != undefined){
        user=person.user
    }else {
        user={Firstname:localStorage.getItem("name"), Name:null, Lastname:null, Birthdate: null, City:null, Street:null, Build: null, Appartment: null, Phone: null, Photo:"incognito.jpg"}
    }
    
       console.log(user)
   let path='../../../img/patients/'+user.Photo   
    return (
        <div className="row col-sm-7 no-gutters shadow p-1 mb-5 bg-white rounded mt-1">
        <div className="col-md-5 ">
            <img src={path} className="card-img" alt="Your's doctor" />
        </div>
        <div className="col-sm-5">
            <div className="card-body">
                <h5 className="card-title bold">{user.Firstname} {user.Name} {user.Lastname}</h5>
                <p className="card-text">Дата рождения: {user.Birthdate}</p>
                <p className="card-text pb-0 mb-0">Адрес: </p>
                <p className="card-text"> {user.City}, улица {user.Street} дом {user.Build} кв. {user.Appartment}</p>
                <p className="card-text">Телефон: {user.Phone}</p>
                <p className="card-text"><small className="text-muted"><a href="/reseptions" onClick={()=>user.ID}>Просмотреть историю болезней</a></small></p>
            </div>
        </div>
    </div>
    )
}

