import React         from 'react'
import Link          from 'gatsby-link'
import Darren        from '../assets/images/darren.jpg'
import Matthew       from '../assets/images/matthew.jpg'
import Skye          from '../assets/images/skye.jpg'

const TeamSection = ({data}) => {
  return(
    <section id="team" className="gray-section team">
      <div className="container team-container">
        <div className="row m-b-lg">
          <div className="col-lg-12 text-center">
            <div className="navy-line teal-color"></div>
            <h1>{data.title}</h1>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-4 wow fadeInLeft animated" style={{visibility: 'visible', animationName: 'fadeInLeft'}}>
            <div className="team-member">
              <img src={Darren} className="img-fluid rounded-circle img-small" alt=""/>
              <h4><span className="navy teal-color">{data.teams[0].first_name}</span> {data.teams[0].last_name}</h4>
              <p>{data.teams[0].position}</p>
              <ul className="list-inline social-icon">
                <li className="list-inline-item">
                  <a href={data.teams[0].email}><i className="fa fa-envelope"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href={data.teams[0].link} target="_blank"><i className="fa fa-angellist"></i></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="team-member wow zoomIn animated" style={{visibility: 'visible', animationName: 'zoomIn'}}>
              <img src={Matthew} className="img-fluid rounded-circle" alt="" width="150px"/>
              <h4><span className="navy teal-color">{data.teams[1].first_name}</span> {data.teams[1].last_name}</h4>
              <p>{data.teams[1].position}</p>
              <ul className="list-inline social-icon">
                <li className="list-inline-item">
                  <a href={data.teams[1].email}><i className="fa fa-envelope"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href={data.teams[1].link} target="_blank"><i className="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-4 wow fadeInRight animated" style={{visibility: 'visible', animationName: 'fadeInRight'}}>
            <div className="team-member">
              <img src={Skye} className="img-fluid rounded-circle img-small" alt="" />
              <h4><span className="navy teal-color">{data.teams[2].first_name}</span> {data.teams[2].last_name}</h4>
              <p>{data.teams[2].position}</p>
              <ul className="list-inline social-icon">
                <li className="list-inline-item">
                  <a href={data.teams[2].email}><i className="fa fa-envelope"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href={data.teams[2].link} target="_blank"><i className="fa fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center m-t-lg m-b-lg">
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default TeamSection
