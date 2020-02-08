import React from 'react'
import Card from './card'
import classes from './propose.css'


const Propose = () => {
    return (
        <>
            <div className="center mt-4">
                <div className="">
                    <p></p>
                    <h2 className="text-shadow">УСЛУГИ ДОСТУПНЫЕ КАЖДОМУ</h2>
                </div>
                <div className="flex-col">
                    <div className="flex-row">
                        <Card path="https://img.icons8.com/pastel-glyph/64/000000/microscope.png" inner="Наши возможности" onClick="/offers" key="we can" />
                        <Card path="https://img.icons8.com/cotton/64/000000/calendar-1--v2.png" inner="оформить визит" onClick="/prescription" key="visit" />
                        <Card path="https://img.icons8.com/cotton/64/000000/doctor-skin-type-1.png" inner="доктора" onClick="/doctors" key="doctors" />
                    </div>
                    <div className="flex-row">
                        <Card path="https://img.icons8.com/carbon-copy/100/000000/doctors-bag.png" inner="онлайн косультация" onClick="/" key="consultation" />
                        <Card path="https://img.icons8.com/wired/64/000000/pharmacist.png" inner="отзывы наших пациентов" onClick="/" key="reviews" />
                        <Card path="https://img.icons8.com/ios/50/000000/health-graph.png" inner="новости в мире медицины" onClick="/news" key="news" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Propose