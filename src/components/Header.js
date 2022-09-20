import propTypes from 'prop-types'
import React from 'react'

const Header = ({title, onChange}, showAdd) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: propTypes.string.isRequired,
}



export default Header
