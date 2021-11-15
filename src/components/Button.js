import PropTypes from 'prop-types'
import React from 'react'
const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} style={{background: color}} className="btn">{ text }</button>
    </div>
  )
}

Button.defaultProps = {
    color: 'black'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button