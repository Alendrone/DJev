import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text}</span>
      <span className="navigation-links-text1">{props.text1}</span>
      <span className="navigation-links-text2">{props.text2}</span>
      <span className="navigation-links-text3">{props.text3}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text3: 'Events',
  text: 'Home',
  text2: 'Bookings',
  rootClassName: '',
  text1: 'Listen',
}

NavigationLinks.propTypes = {
  text3: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
