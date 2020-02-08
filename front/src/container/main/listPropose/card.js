import React from 'react'
import classes from './card.css'

const Card = (card) => {
    return (
        <>
            <div className="card bg-none br-none width card-propose"  >
               <a href={card.onClick} ><img src={card.path} className="card-img-top img-width mb-2 m-1" alt={card.path} /> </a>
                <div className="card-body p-0 text-center">
                    <p className="card-text p-0">{card.inner}</p>
                </div>
            </div>
        </>
    )
}
export default Card;