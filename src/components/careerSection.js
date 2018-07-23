import React         from 'react'
import Link          from 'gatsby-link'
import Confetti      from '../assets/images/confetti.svg'
import Growth        from '../assets/images/growth.svg'
import Sprout        from '../assets/images/sprout.svg'
import Workspace     from '../assets/images/workspace.svg'

const CareerSection = () => (
  <section className="features gray-section" id="career">
    <div className="container team-container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="navy-line teal-color"></div>
          <h1>Career</h1>
          <p>We offer secure jobs with a lot of room for growth, training and career progression it’s a win-win situation.  </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-5 offset-lg-1 features-text">
          <h2>Room to grow</h2>
          <img src={Sprout} alt="sprout" width="80px" className="pull-right" />
          <p>Our senior team is willing to lend guidance to help you improve your skill-set as well as provide you with training resources; and as a start-up there will be plenty of opportunities for career progression. </p>
        </div>
        <div className="col-lg-5 features-text">
          <h2>Fun and dynamic work culture</h2>
          <img src={Workspace} alt="sprout" width="80px" className="pull-right"/>
          <p>We aim to hire people who fit well with our office culture, so you’ll be surrounded by like-minded people who believe in the mantra, “work hard, play hard”. </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-5 offset-lg-1 features-text">
          <h2>“Silicon Valley” style workplace</h2>
          <img src={Confetti} alt="sprout" width="80px" className="pull-right" />
          <p>Superb penthouse office, stimulating environment, access to new hardware and software to make your job easier and more efficient while working in collaborative teams. </p>
        </div>
        <div className="col-lg-5 features-text">
          <h2>Appealing bonus and benefits</h2>
          <img src={Growth} alt="sprout" width="80px" className="pull-right" />
          <p>Extensive training, insurance, flexible holidays, cash bonus, free lunch and more - Clik believes in employee welfare.</p>
        </div>
      </div>

      <div className="row" style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <div className="col-lg-12 text-center">
          <h2>Available Positions</h2>
          <Link to="/job/senior-mobile-developer" className="btn btn-primary pddng">
            <i className="fa fa-code"></i>
            Senior Mobile Developer
          </Link>
          <Link to="/job/front-end-web-developer" className="btn btn-primary pddng">
            <i className="fa fa-code"></i>
            Front End Web Developer
          </Link>
          <Link to="/job/software-qa-tester" className="btn btn-primary pddng">
            <i className="fa fa-code"></i>
            Software QA Tester
          </Link>
          <Link to="/job/backend-developer" className="btn btn-primary pddng">
            <i className="fa fa-code"></i>
            Backend (Server Side) Developer (Java or .NET)
          </Link>
          <Link to="/job/core-middleware-developer" className="btn btn-primary pddng">
            <i className="fa fa-code"></i>
            .NET Core Middleware Developer
          </Link>
          <Link to="/job/junior-android-developer" className="btn btn-primary pddng">
            <i className="fa fa-code"></i>
            Junior Android Developer
          </Link>
          <Link to="/job/junior-ios-developer" className="btn btn-primary pddng">
            <i className="fa fa-code"></i>
            Junior IOS Developer
          </Link>
          <Link to="/job/senior-react-native-developer" className="btn btn-primary pddng">
            <i className="fa fa-code"></i>
            Senior React Native Developer
          </Link>
        </div>
      </div>

      <div className="row" style={{paddingTop: '0px', paddingBottom: '50px'}}>
        <div className="col-lg-12 text-center">
          <p>
             If you are bright, passionate about tech and looking for a new challenge, send us your CV today.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default CareerSection