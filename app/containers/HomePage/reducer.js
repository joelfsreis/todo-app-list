/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable'
import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  TOGGLE_TODO,
  ON_KEY_CHANGE,
  SUBMIT_FORM_SUCCESS
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
      todo.completed = !todo.completed
      return state.setIn(['todos', action.id], fromJS(todo))
    case ON_KEY_CHANGE:
      return state.setIn(['form', 'todo'], action.todo)
    case SUBMIT_FORM_SUCCESS:
      return state
        .set('todos', fromJS(action.todo))
        .deleteIn(['form', 'todo'])
    default:
      return state
  }
}

export default homePageReducer
