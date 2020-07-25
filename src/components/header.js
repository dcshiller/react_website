import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  pug`
  nav
    Link(to='/')
      div
        h1 Derek Shiller
      img.avatar(src="/static/assets/images/avatar.jpg")
  `
)

export default Header
