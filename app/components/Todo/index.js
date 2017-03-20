/**
*
* Todo
*
*/

import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Button from 'components/Button'

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  border-bottom: 1px solid grey;
  &.completed { text-decoration: line-through; }
  p { line-height: 34px; }
  > div {
    > button:nth-of-type(1) { margin-right: 16px; }
  }
`

class Todo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { text, completed, toggleTodo, deleteTodo } = this.props
    return (
      // Styled li with styled-components
      <ListItem
        className={completed ? 'completed' : null}
      >
        <p>{ text }</p>
        <div>
          <Button
            bsStyle={completed ? 'primary' : 'success'}
            onClick={toggleTodo}
          >
            {!completed ? 'completed' : 'active'}
          </Button>
          <Button
            bsStyle="danger"
            onClick={deleteTodo}
          >
            delete
          </Button>
        </div>
      </ListItem>
    )
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todo
