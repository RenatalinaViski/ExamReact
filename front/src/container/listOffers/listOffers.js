import React from 'react'
import classes from './listOffers.css'

const ListOffers = () => {
    return (
        <>
            <div className="card-columns mt-2">
                <div className="card">
                    <img src="../../img/uzi.jpg" className="card-img-top" alt="uzi" />
                    <div className="card-body">
                        <h5 className="card-title">Узи, рентген кабент и томография</h5>
                        <p className="card-text">Наши специалисты - диагносты проходили практику в лучших больницах Соединенных Штатов, имеют сертификаты международного образца.</p>
                    </div>
                </div>               
                <div className="card">
                <img src="../../img/heart.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Отделение неотложной помощи</h5>
                        <p className="card-text">Быстрая и компитентная помощь, в кратчайшие сроки, это то, что мы делаем успешно, на протяжении 15 лет.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                <img src="../../img/oftalmolog.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Офтальмология для взрослых и детей</h5>
                        <p className="card-text">Лучшее оборудование и прекрасные специалисты, помогут вам увидеть как прекрасен этот мир</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                <img src="../../img/laboratoria.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Собственная лаборатория</h5>
                        <p className="card-text">Использую только высококачественные химические препараты, мы даем гарантию 99,99%  точности  ваших анализов</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="../../img/surgeon.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>Бояться операционного стола - это обычно для каждого. Но наши пациенты точно знают, что их лечат лучшие хирурги страны.</p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card">
                    <img src="../../img/procedure.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Лечебно-процедурный кабинет</h5>
                        <p className="card-text">Нет такой болезни, которую нельзя побороть  комплексным подходом с профессиональной поддержкой</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card bg-primary text-white text-center p-3">
                    <blockquote className="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                        <footer className="blockquote-footer text-white">
                            <small>
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card text-center">            
                    <div className="card-body">
                        <h5 className="card-title">Мы используем апараты последнего поколения</h5>
                        <p className="card-text">Аппараты, которые мы используем в наших кабинетах, всегда содержаться в идеальном состоянии. Каждое оборудование произведено и находится на техническом обслуживании в странах Европейского Союза.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="../../img/patient.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card p-3 text-right">
                    <blockquote className="blockquote mb-0">
                        <p>Наблюдение самыми компитентными врачами, на всем протяжении лечения</p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card">
                <img src="../../img/fastHelp.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Скорая помощь 24/7</h5>
                        <p className="card-text">В самых непредвиденных обстаятельствах, наша скорая помощь, всегда готова выехать к вам</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img src="../../img/thisPatient.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="card p-3 text-right">
                    <blockquote className="blockquote mb-0">
                        <p>Мы окружим вас вниманием и заботой как за самыми близкими родственниками</p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </>
    )
}

export default ListOffers;