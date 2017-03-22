/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable'
import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  TOGGLE_TODO,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_ERROR,
  ON_KEY_CHANGE,
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_ERROR,
  CLEAR_ERROR
} from './constants'

const initialState = fromJS({})

function homePageReducer(state = initialState, action) {
  let todo
  switch (action.type) {
    case FETCH_TODOS:
      return state.setIn(['isFetching', 'todos'], true)
    case FETCH_TODOS_SUCCESS:
      return state
        .set('todos', fromJS(action.todos))
        .setIn(['isFetching', 'todos'], false)
    case TOGGLE_TODO:
      todo = state.getIn(['todos', action.id])
      todo = todo.toJS()
      return state
        .setIn(['form', 'toggleTodo', 'id'], action.id)
        .setIn(['form', 'toggleTodo', 'completed'], !todo.completed)
    case TOGGLE_TODO_SUCCESS:
      return state
      .set('todos', fromJS(action.todos))
      .deleteIn(['form', 'toggleTodo'])
    case ON_KEY_CHANGE:
      return state.setIn(['form', 'todo'], action.todo)
    case SUBMIT_FORM:
      return state.setIn(['isFetching', 'submit'], true)
    case SUBMIT_FORM_SUCCESS:
      return state
        .set('todos', fromJS(action.todo))
        .deleteIn(['form', 'todo'])
        .setIn(['isFetching', 'submit'], false)
    case FETCH_TODOS_ERROR:
    case TOGGLE_TODO_ERROR:
    case SUBMIT_FORM_ERROR:
      return state
        .set('error', action.error)
        .delete('isFetching')
    case CLEAR_ERROR:
      return state.delete('error')
    default:
      return state
  }
}

export default homePageReducer
