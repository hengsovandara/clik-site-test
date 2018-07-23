import React from 'react'
import Style from '../assets/stylesheets/horizontal-slim-10_7.css'

const Footer = () => (
  <div>
    <section id="contact" className="navy-section contact" style={{marginTop: 0}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center zoomIn">
            <h1> Subscribe </h1>
            <p className="white-color">Subscribe to our newsletter for updates on beta testing and our release date</p>
            <div id="mc_embed_signup">
              <form action="https://clik.us17.list-manage.com/subscribe/post?u=da3bf8ffdaa03eca459e75bdb&amp;id=0d661a5094" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate="">
                <div id="mc_embed_signup_scroll">
                  <input type="email" name="EMAIL" className="email input-design" id="mce-EMAIL" placeholder="Email" required=""/>
                  <div style={{position: 'absolute', left: '-5000px'}}>
                    <input type="text" name="b_da3bf8ffdaa03eca459e75bdb_0d661a5094" tabIndex="-1" value=""/>
                  </div>
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button btn btn-primary"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="gray-section contact">
      <div className="container team-container">
        <div className="row m-b-lg">
          <div className="col-lg-12 text-center">
            <div className="navy-line teal-color"></div>
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="row m-b-lg">
          <div className="col-lg-3 offset-lg-3">
            <address>
              <strong><span className="navy">Clik Payment (Cambodia) Co. Ltd.</span></strong><br/>
              No. 86AB, Street 13, Sangkat Phsar Kandal 1, Khan Daun Penh, <br/>
              Phnom Penh 12204 <br/>
              Cambodia <br/>
            </address>
          </div>
          <div className="col-lg-4">
            <p className="text-color">
              If you have any questions, concerns or feedback, please send us an email. We would love to hear from you! We will endeavor to respond to all emails within 2 business days.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 text-center">
            <a href="mailto:info@clik.asia" className="btn btn-primary">Send us an email</a>
            <p className="m-t-sm">
                Or follow us on our social platforms
            </p>
            <ul className="list-inline social-icon">
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/13322917" target="blank"><i className="fa fa-linkedin"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/clikcambodia/" target="blank"><i className="fa fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center m-t-lg m-b-lg">
            <p><strong>© 2018 Clik Payment (Cambodia)</strong></p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Footer