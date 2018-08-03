import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import './main.sass'

const Layout = ({ children, data }) => (
  pug`
    div
      Helmet(title=${data.site.siteMetadata.title}
             meta=${[{ name: 'description', content: 'Derek Shiller\'s Website' },]})
      Header
      .content
        ${children()}
      Footer
  `
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
