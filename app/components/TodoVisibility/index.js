/**
*
* TodoVisibility
*
*/

import React from 'react'
import FilterButton from 'containers/FilterButton'
import styled from 'styled-components'

const TodosVisibility = styled.p`
  padding-top: 32px;
  padding-bottom: 32px;
  > button:nth-of-type(1) {
    margin-left: 16px;
  }
  button { font-family: "Helvetica Neue"; }
`

class TodoVisibility extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <TodosVisibility>
        Show
        { ' ' }
        <FilterButton filter="SHOW_ALL">all</FilterButton>
        { ' ' }
        <FilterButton filter="SHOW_ACTIVE">active</FilterButton>
        { ' ' }
        <FilterButton filter="SHOW_COMPLETED">completed</FilterButton>
      </TodosVisibility>
    )
  }
}

export default TodoVisibility
