import React         from 'react'
import Link          from 'gatsby-link'
import DarrenMatthew from '../assets/images/Matthew&Darren-01.jpg'
import Moment        from 'react-moment'

const NewsSection = ({data}) => (
  <section className="features" id="news">
    <div className="container team-container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="navy-line teal-color"></div>
          <h1>News</h1>
        </div>
      </div>

      { data.map(document => (
          <div className="row blog-post">
            <div className="col-sm-12 col-md-4">
              <img src={DarrenMatthew} alt="" className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-8">
              <h2>{document.node.headline}</h2>
              <div className="news-credit">
                <strong className="commens-name">{document.node.publisher}</strong>
                <span style={{marginLeft: '5px'}}/>
                <small className="text-muted">Publication date
                  <span style={{marginLeft: '5px'}}/>
                  <Moment parse="YYYY-MM-DD HH:mm:ss">
                    {document.node.publish_date}
                  </Moment>
                </small>
              </div>
               
              <hr/>
              <p>{document.node.content}</p>
              <a href={document.node.post_link} target="blank">
                <button className="btn btn-primary">Read More</button>
              </a>
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default NewsSection