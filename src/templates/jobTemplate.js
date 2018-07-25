import React            from 'react'
import Confetti         from '../assets/images/confetti.svg'
import Growth           from '../assets/images/growth.svg'
import Sprout           from '../assets/images/sprout.svg'
import Workspace        from '../assets/images/workspace.svg'
import ClikTeam         from '../assets/images/clikteam2018.jpg'
import EachJobTeamplate from '../components/eachJobTemplate'

const JobTemplate = ({data}) => {
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
          <h1> {data.strapiJob.title} </h1>
          <hr className="big"/>
          <h3>Who we are:</h3>

          <div className="row">
            <div className="col-md-8 col-sm-12">
            <p>{data.strapiAboutus.description}</p>
          </div>

          <div className="col-md-4 col-sm-12 img-fluid">
            <img src={ClikTeam} alt="team" style={{width: '100%'}}/>
          </div>
          </div>
          <br/>
          
          <hr className="big"/>

          <EachJobTeamplate data={data.strapiJob}/>
          
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

export const query = graphql`  
  query JobTemplate($id: String!) {
    strapiJob(id: {eq: $id}) {
      title
      What_we_are_looking_for
      What_you_will_do
    },
    strapiAboutus{
      title
      description
    }
  }
`