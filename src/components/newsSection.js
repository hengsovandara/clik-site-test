import React         from 'react'
import Link          from 'gatsby-link'
import DarrenMatthew from '../assets/images/Matthew&Darren-01.jpg'

const NewsSection = () => (
  <section className="features" id="news">
    <div className="container team-container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="navy-line teal-color"></div>
          <h1>News</h1>
        </div>
      </div>
      <div className="row blog-post">
        <div className="col-sm-12 col-md-4">
          <img src={DarrenMatthew} alt="" className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-8">
          <h2>Capturing the loyalty of the Cambodian consumer with fintech</h2>
          <div className="news-credit">
            <strong className="commens-name">Hanamariya Halim</strong>
            <small className="text-muted">Publication date 26 May 2017 | 11:48 ICT</small>
          </div>
           
          <hr/>
          <p>Our CEO and CTO were featured in the Phnom Penh Post, check out their thoughts on the FinTech market in the article here: “Capturing the loyalty of the Cambodian consumer with Fintech”</p>
          <a href="http://www.phnompenhpost.com/supplements/capturing-loyalty-cambodian-consumer-fintech" target="blank">
            <button className="btn btn-primary">Read More</button>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default NewsSection