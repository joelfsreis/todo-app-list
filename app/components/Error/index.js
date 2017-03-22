/**
*
* Error
*
*/

import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: #d9534f;
  color: white;
  width: 100%;
  display: flex;
  padding-left: 6px;
  line-height: 20px;
`

class Error extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    setTimeout(this.props.clear, 10000)
  }
  render() {
    return (
      <Div>
        ! { this.props.error }
      </Div>
    )
  }
}

Error.propTypes = {
  error: React.PropTypes.string.isRequired,
  clear: React.PropTypes.func.isRequired
}

export default Error
