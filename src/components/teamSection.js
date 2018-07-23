import React         from 'react'
import Link          from 'gatsby-link'
import Darren        from '../assets/images/darren.jpg'
import Matthew       from '../assets/images/matthew.jpg'
import Skye          from '../assets/images/skye.jpg'

const TeamSection = () => (
  <section id="team" className="gray-section team">
    <div className="container team-container">
      <div className="row m-b-lg">
        <div className="col-lg-12 text-center">
          <div className="navy-line teal-color"></div>
          <h1>Our Team</h1>
        </div>
      </div>
      
      <div className="row">
        <div className="col-sm-4 wow fadeInLeft animated" style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
          <div className="team-member">
            <img src={Darren} className="img-fluid rounded-circle img-small" alt=""/>
            <h4><span className="navy teal-color">Darren</span> Jensen</h4>
            <p>Chief Technology Officer and Co-Founder</p>
            <ul className="list-inline social-icon">
              <li className="list-inline-item">
                <a href="mailto:darren.jensen@clik.asia"><i className="fa fa-envelope"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://angel.co/jensendarren" target="_blank"><i className="fa fa-angellist"></i></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="team-member wow zoomIn animated" style={{visibility: 'visible', animationName: 'zoomIn'}}>
            <img src={Matthew} className="img-fluid rounded-circle" alt="" width="150px"/>
            <h4><span className="navy teal-color">Matthew</span> Tippetts</h4>
            <p>Chief Executive Officer and Co-Founder</p>
            <ul className="list-inline social-icon">
              <li className="list-inline-item">
                <a href="mailto:matthew.tippetts@clik.asia"><i className="fa fa-envelope"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/matthewtippetts/" target="_blank"><i className="fa fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-sm-4 wow fadeInRight animated" style={{visibility: 'visible', animationName: 'fadeInRight'}}>
          <div className="team-member">
            <img src={Skye} className="img-fluid rounded-circle img-small" alt="" />
            <h4><span className="navy teal-color">Skye</span> Cornell</h4>
            <p>Chief Marketing Officer and Co-Founder</p>
            <ul className="list-inline social-icon">
              <li className="list-inline-item">
                <a href="mailto:skye.cornell@clik.asia"><i className="fa fa-envelope"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/skyecornell/" target="_blank"><i className="fa fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center m-t-lg m-b-lg">
          <p>Based in Phnom Penh, Cambodia, with experts from around the globe (including Cambodia!), the Clik team is hard at work creating an app we know you’ll love.  We’re passionate about Cambodia and we know that Cambodian’s deserve better!  It’s time for Cambodia to show the world that it’s a contender in the FinTech space; ready to do more and push beyond what’s expected.  If you’re interested in working with a team at the forefront of innovation in payment technology, check out opportunities to join the team on our careers page! </p>
        </div>
      </div>
    </div>
  </section>
)

export default TeamSection