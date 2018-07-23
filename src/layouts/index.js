import React from 'react'
import PropTypes from 'prop-types'

import '../assets/stylesheets/bootstrap.min.css'
import '../assets/stylesheets/animate.min.css'
import '../assets/stylesheets/font-awesome.min.css'
import '../assets/stylesheets/global.css'
import '../assets/stylesheets/custom.css'

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ children, data, location}) => (
  <div>
    <Header location={location}/>
    {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
