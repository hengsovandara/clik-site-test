import React from 'react'
import Confetti      from '../assets/images/confetti.svg'
import Growth        from '../assets/images/growth.svg'
import Sprout        from '../assets/images/sprout.svg'
import Workspace     from '../assets/images/workspace.svg'
import ClikTeam      from '../assets/images/clikteam2018.jpg'

const JobTemplate = (props) => {
  return(
  <div className="job-template" >
    <div id="inSlider" className="carousel carousel-fade job-override" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        <div className="item active job-override">
          <div className="container">
            <div className="carousel-caption">
              <h1>Clik is hiring</h1>
            </div>
          </div>
          <div className="header-back one job-override"></div>
        </div>
      </div>
    </div>

    <section id="features" className="container services">
      <div className="row">
        <div className="col-sm-12 job-page-padding">
          <h1> {props.jobTitle} </h1>
          <hr className="big"/>
          <h3>Who we are:</h3>

          <div className="row">
            <div className="col-md-8 col-sm-12">
            <p> We are an internationally-funded FinTech startup looking for the brightest minds in Cambodia. Working with some of the biggest names in the FinTech industry, we've created a product that will revolutionise the local market before taking on the world. We're ready to take our business to the next level and for that we need you! Although we're a small team at the moment, we've planned for rapid growth - the sooner you join our team, the greater the benefits you'll receive. Committed to becoming a world-class organisation, our employees and customers are our focus.Our team is comprised of local and international professionals who are driven by innovation and excellence. We want to put Cambodia on the map in the FinTech sector, and as our global investors agree, Clik is the answer. At this stage, we have the funding to offer secure jobs with a lot of room for growth, training and career progression - it's a win-win situation. Our office is currently under transformation as we want to provide the best work environment possible for our employees.  
            </p>
          </div>

          <div className="col-md-4 col-sm-12 img-fluid">
              <img src={ClikTeam} alt="team" style={{width: '100%'}}/>
          </div>
          </div>
          <br/>
          
          <hr className="big"/>
          {props.children}
          
          <hr className="big"/>
          <h3>Amazing Bonuses and Benefits provided by Clik:</h3>
          <div className="row">
            <div className="col-lg-6 features-text">
              <h2>Room to grow</h2>
              <img src={Sprout} alt="sprout" width="80px" className="pull-right"/>
              <p>Our senior team is willing to lend guidance to help you improve your skill-set as well as provide you with training resources; and as a start-up there will be plenty of opportunities for career progression. </p>
            </div>
            <div className="col-lg-6 features-text">
              <h2>Fun and dynamic work culture</h2>
              <img src={Workspace} alt="sprout" width="80px" className="pull-right"/>
              <p>We aim to hire people who fit well with our office culture, so you’ll be surrounded by like-minded people who believe in the mantra, “work hard, play hard”. </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 features-text">
              <h2>“Silicon Valley” style workplace</h2>
              <img src={Confetti} alt="sprout" width="80px" className="pull-right"/>
              <p>Superb office, stimulating environment, access to new hardware and software to make your job easier and more efficient while working in collaborative teams. </p>
            </div>
            <div className="col-lg-6 features-text">
              <h2>Appealing bonus and benefits</h2>
              <img src={Growth} alt="sprout" width="80px" className="pull-right"/>
              <p>Extensive training, insurance, flexible holidays, cash bonus, free lunch and more - Clik believes in employee welfare.</p>
            </div>
          </div>

          <hr className="big"/>
          <h4>
            Sound like the job for you? Send your CV and cover letter to <a href="mailto:alex.iuchyk@clik.asia>">alex.iuchyk@clik.asia</a> to apply.
          </h4>
        </div>
      </div>
    </section>
  </div>
)}

export default JobTemplate