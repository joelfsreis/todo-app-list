/**
*
* TodoList
*
*/

import React, { PropTypes } from 'react'
import styled from 'styled-components'
import Todo from 'components/Todo'

const Ul = styled.ul`
  padding-left: 0;
`

class TodoList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { todosList, toggleTodo, deleteTodo } = this.props
    return (
      <Ul>
        {
          todosList.map((todo) =>
            <Todo
              key={todo.id}
              {...todo}
              toggleTodo={() => toggleTodo(todo.id)}
              deleteTodo={() => deleteTodo(todo.id)}
            />
          )
        }
      </Ul>
    )
  }
}

TodoList.propTypes = {
  todosList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ),
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
