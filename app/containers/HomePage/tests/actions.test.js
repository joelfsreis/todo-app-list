
import {
  fetchTodos,
  fetchTodoSuccess
} from '../actions'
import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS
} from '../constants'

describe('HomePage actions', () => {
  describe('fetchTodos action', () => {
    it('has a type of fetchTodos', () => {
      const expected = {
        type: FETCH_TODOS,
      }
      expect(fetchTodos()).toEqual(expected)
    })
  })

  describe('fetchTodosSuccess action', () => {
    it('has a type of fetchTodos', () => {
      const fixture = { 1: { id: 1, text: 'watch chuck norris movies', completed: false } }
      const expected = {
        type: FETCH_TODOS_SUCCESS,
        todos: fixture
      }
      expect(fetchTodoSuccess(fixture)).toEqual(expected)
    })
  })
})
