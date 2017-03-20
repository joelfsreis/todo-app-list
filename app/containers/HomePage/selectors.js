import { createSelector } from 'reselect'
import { Map } from 'immutable'

/**
 * Direct selector to the todosList state domain
 */
const selectTodosListDomain = () => (state) => state.get('todoList', new Map({}))

/**
 * Other specific selectors
 */
export const selectTodosList = () => createSelector(
  selectTodosListDomain(),
  (substate) => substate.get('todos', new Map({}))
)

export const selectIsFetching = () => createSelector(
  selectTodosListDomain(),
  (substate) => substate.get('isFetching', {})
)

export const selectNewTodo = () => createSelector(
  selectTodosListDomain(),
  (substate) => substate.getIn(['form', 'todo'], '')
)
