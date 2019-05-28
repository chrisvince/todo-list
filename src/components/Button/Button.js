import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool
}

const Button = props => {
  const {
    active,
    children,
    onClick,
    hidden
  } = props
  
  const button = (
    <button
      onClick={onClick}
      disabled={active}
      className="btn-link"
    >
      {children}
    </button>
  )
  
  return !hidden && button
}

Button.propTypes = propTypes

export default Button
