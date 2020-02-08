import React from 'react'
import classes from './footer.css'

const Footer = () => {
    return (
        <>
            <div className="card-deck bg-none br-none ">
                <div className="card bg-none br-none flex-row">          
                   
                        <img src="https://img.icons8.com/color/50/000000/caduceus.png" className="w-5"/>
                        <h5 className="card-title">Hospital Sisters of Mercy </h5>
                         
                </div>
                <div className="card bg-none br-none m-0">                    
                    <div className="card-body">                        
                        <h5 className="card-title">Место расположения</h5>
                        <p className="card-text">Харьков, ул. Сумская 124</p>
                        <p className="card-text">тел. 057-465-65-65</p>
                        <p className="card-text">тел. 099-099-03-03</p>
                        <p className="card-text">email sisters_mercy@gmail.com</p>
                        <p className="card-text"><small className="text-muted">Мы работаем с 07:00-22:00</small></p>
                    </div>
                </div>
                <div className="card bg-none br-none m-0">
                    <div className="card-body">
                        <h5 className="card-title">Лицензии и разрешения</h5>
                        <p className="card-text">№4654FG от 12.12.2008г. выданная МЗО </p>
                        <p className="card-text"><small className="text-muted"></small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;