import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  pug`
  nav
      .name-box
        Link(to='/')
          h1 Derek Shiller
      Link(to='/')
        img.avatar(src="/static/assets/images/avatar.jpg")
  `
)

export default Header
