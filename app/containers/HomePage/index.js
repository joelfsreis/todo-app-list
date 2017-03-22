/*
 *
 * HomePage - Todo List
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import TodoList from 'components/TodoList'
import TodoVisibility from 'components/TodoVisibility'
import AddTodo from 'components/AddTodo'
import Error from 'components/Error'
import Loader from 'components/Loader'

import { selectVisibilityFilter } from 'containers/FilterButton/selectors'
import { selectTodosList, selectIsFetching, selectNewTodo, selectError } from './selectors'
import { fetchTodos, toggleTodo, updateForm, submitForm, clearError } from './actions'

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.fetchTodos()
  }

  getVisibleTodos(todosList, activeFilter) {
    const todos = Object.values(todosList)
    switch (activeFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_ACTIVE':
        return todos.filter((todo) => !todo.completed)
      case 'SHOW_COMPLETED':
        return todos.filter((todo) => todo.completed)
      default:
        return todos
    }
  }

  render() {
    const { todos, activeFilter, toggle, isFetching, onChangeForm, postForm, newTodo, error, clear } = this.props
    const fetching = isFetching.toJS()
    return (
      <section>
        <h1>Todo List</h1>
        {
          error ?
            <Error error={error} clear={clear} />
          :
            null
        }
        {
          !fetching.todos ?
            <div>
              <TodoVisibility />
              <TodoList
                todosList={this.getVisibleTodos(todos.toJS(), activeFilter)}
                toggleTodo={(id) => toggle(id)}
                // TODO: implement delete action
                deleteTodo={(id) => console.log(id)}
              />
              <AddTodo onChangeForm={onChangeForm} submit={postForm} newTodo={newTodo} loading={fetching.submit} />
            </div>
          :
            <Loader />
        }
      </section>
    )
  }
}

HomePage.propTypes = {
  todos: PropTypes.object,
  activeFilter: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  isFetching: PropTypes.object,
  onChangeForm: PropTypes.func,
  postForm: PropTypes.func,
  newTodo: PropTypes.string,
  error: PropTypes.string,
  clear: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  activeFilter: selectVisibilityFilter(),
  todos: selectTodosList(),
  isFetching: selectIsFetching(),
  newTodo: selectNewTodo(),
  error: selectError()
})

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    toggle: (id) => dispatch(toggleTodo(id)),
    onChangeForm: (todo) => dispatch(updateForm(todo)),
    postForm: () => dispatch(submitForm()),
    clear: () => dispatch(clearError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
