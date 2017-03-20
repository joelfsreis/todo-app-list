import { cancel, fork, take, put, select } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { LOCATION_CHANGE } from 'react-router-redux'

import { FETCH_TODOS, SUBMIT_FORM } from './constants'

import { fetchTodoSuccess, fetchTodosError, submitFormSuccess } from './actions'
import { selectTodosList, selectNewTodo } from './selectors'

function* fetchTodos() {
  // Dummy data
  const todos = {
    1: { id: 1, text: 'This is one list item', completed: true },
    2: { id: 2, text: 'Set up front end', completed: true },
    3: { id: 3, text: 'complete workshop', completed: false },
    4: { id: 4, text: 'enjoy the weekend...', completed: false }
  }

  try {
    yield put(fetchTodoSuccess(todos))
  } catch (err) {
    yield put(fetchTodosError(err))
  }
}

function* submitForm() {
  const todos = yield select(selectTodosList())
  const todosList = todos.toJS()
  const newTodo = yield select(selectNewTodo())
  todosList[todos.size + 1] = { id: todos.size + 1, text: newTodo, completed: false }
  // todo[todos.size + 1] = { id: todos.size + 1, text: 'more stuff', completed: false }
  yield put(submitFormSuccess(todosList))
}

function* fetchTodosListWatcher() {
  yield fork(takeLatest, FETCH_TODOS, fetchTodos)
}

function* submitFormWatcher() {
  yield fork(takeLatest, SUBMIT_FORM, submitForm)
}

export function* todoListSagas() {
  const todosWatcher = yield fork(fetchTodosListWatcher)
  const formWatcher = yield fork(submitFormWatcher)

  yield take(LOCATION_CHANGE)
  yield cancel(todosWatcher)
  yield cancel(formWatcher)
}

// All sagas to be loaded
export default [
  todoListSagas
]
