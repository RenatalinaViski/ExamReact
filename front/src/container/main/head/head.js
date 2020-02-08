import React from 'react'
import classes from './head.css'


const Head = (head) => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide h-400 bg-white" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner d-flex">
                    <div className="carousel-item bg-img active ">
                        <div className="d-inline ">
                        {/* <img src="../../../img/3.jpg" className="d-block w-100 h-300" alt="doctor Veronica" /> */}
                        <img src="http://tlbmedicals.com/images/slide02.jpg" className="d-block w-100 h-300" alt="doctor Veronica" />
                        <div className="carousel-caption d-none d-md-block blue ">
                            <h2 className="text-shadow">Hospital Sisters of Mercy</h2>
                            <p>Мы рады видеть вас всегда</p>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../../../img/11.jpg" className="d-block w-100 h-300" alt="doctors" />
                        <div className="carousel-caption d-none d-md-block blue">
                            <h2>С заботой о каждом паценте</h2>
                            <p>Каждый пацент может расчитывать на нашу поддержку и заботу</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../../../img/6.jpg" className="d-block w-100 h-300" alt="patient" />
                        <div className="carousel-caption d-none d-md-block blue">
                            <h2>Наша команда</h2>
                            <p>Мы готовы справиться с любыми вашими трудностями</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )

}

export default Head;