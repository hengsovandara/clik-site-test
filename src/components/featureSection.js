import React         from 'react'
import Link          from 'gatsby-link'

const FeatureSection = () => (
  <section id="features" className="container services">
    <div className="row">
      <div className="col-sm-12" style={{textAlign: 'center'}}>
        <h2>SUBSCRIBE</h2>
        <p>Subscribe to our newsletter for updates on beta testing and our release date</p>
        <Link to="./CLIK - Safer than cash_files/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
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
  </section>
)

export default FeatureSection