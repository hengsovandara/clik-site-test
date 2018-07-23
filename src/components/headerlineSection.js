import React from 'react'
import Phone from '../assets/images/ClikIphoneXangle.png'

const HeaderlineSection = () => (
  <div id="inSlider" className="carousel carousel-fade" data-ride="carousel">
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <div className="container">
          <div className="carousel-caption">
            <h1>COMING SOON <br/>
                TO A PHONE NEAR YOU…
            </h1>
            <p className="cto-text">Imagine a world where everyone has access to <br/> personalised financial services. A world where your hard-earned <br/> money can’t be stolen.  Money changes hands in a split second, <br/> saving you valuable time and money. All of this, in a single app. <br/> Boundless conveniences. Intrinsic usability. </p>
            <p className="cto-text">This is Clik.  And Clik is coming to you.</p>  
          </div>
          <div className="carousel-image wow zoomIn animated" style={{visibility: 'visible', animationName: 'zoomIn'}}>
            <img src={Phone} alt="laptop"/>
          </div>
        </div>
        <div className="header-back one"></div>
      </div>
    </div>
  </div>
)

export default HeaderlineSection