/**
*
* Button
*
*/

import React, { PropTypes } from 'react'
import Button from 'react-bootstrap-button-loader'


class ButtonLoader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onClick, children, loading, bsStyle, disabled } = this.props
    return (
      <Button bsStyle={bsStyle} loading={loading} disabled={disabled} onClick={onClick}>
        {children}
      </Button>
    )
  }
}

ButtonLoader.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  bsStyle: PropTypes.string,
  disabled: PropTypes.bool
}

export default ButtonLoader
