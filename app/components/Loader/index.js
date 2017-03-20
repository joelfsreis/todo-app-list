/**
*
* Loader
*
*/

import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Halogen from 'halogen'

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  div { display: flex; }
`


class Loader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { color } = this.props
    return (
      <StyledDiv>
        <Halogen.PacmanLoader color={color || '#4DAF7C'} />
      </StyledDiv>
    )
  }
}

Loader.propTypes = {
  color: PropTypes.string
}

export default Loader
