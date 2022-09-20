import propTypes from 'prop-types'
import Button from './Button'
import React from 'react'

const Header = ({title, onAdd}, showAdd) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd? 'red':'green'} text={showAdd ? 'Close': 'Add'} OnClick= {onAdd}
      />
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
