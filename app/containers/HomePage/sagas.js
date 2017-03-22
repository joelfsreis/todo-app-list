import { cancel, fork, take, put, select } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { LOCATION_CHANGE } from 'react-router-redux'
import request from 'utils/request'

import { FETCH_TODOS, SUBMIT_FORM, TOGGLE_TODO } from './constants'

import {
  fetchTodoSuccess,
  fetchTodosError,
  submitFormSuccess,
  submitFormError,
  toggleTodoSuccess,
  toggleTodoError
} from './actions'

import {
  selectTodosList,
  selectNewTodo,
  selectToggleTodoId,
  selectToggleTodoCompleted
} from './selectors'

function* fetchTodos() {
  const url = '/tasks'
  try {
    const response = yield* request({ url })
    const todos = {}
    response.forEach((todo) => {
      if (todo.text) {
        todos[todo.id] = todo
      }
    })
    yield put(fetchTodoSuccess(todos))
  } catch (err) {
    yield put(fetchTodosError(err.message))
  }
}

function* submitForm() {
  const newTodo = yield select(selectNewTodo())
  if (!newTodo.trim()) {
    yield put(submitFormError('Your Todo need some description, am I right?'))
  } else {
    const todos = yield select(selectTodosList())
    const todosList = todos.toJS()

    try {
      const url = `/tasks?text=${newTodo}`
      const response = yield* request({ url, method: 'POST' })
      todosList[response.id] = response
      yield put(submitFormSuccess(todosList))
    } catch (err) {
      yield put(submitFormError(err.message))
    }
  }
}

function* submitToggle() {
  const id = yield select(selectToggleTodoId())
  const completed = yield select(selectToggleTodoCompleted())
  const url = `/tasks/${id}?completed=${completed}`

  try {
    const response = yield* request({ url, method: 'PUT' })
    let todosList = yield select(selectTodosList())
    todosList = todosList.toJS()
    todosList[response.id] = response
    yield put(toggleTodoSuccess(todosList))
  } catch (err) {
    yield put(toggleTodoError(err.message))
  }
}

function* fetchTodosListWatcher() {
  yield fork(takeLatest, FETCH_TODOS, fetchTodos)
}

function* submitFormWatcher() {
  yield fork(takeLatest, SUBMIT_FORM, submitForm)
}

function* submitToggleWatcher() {
  yield fork(takeLatest, TOGGLE_TODO, submitToggle)
}

export function* todoListSagas() {
  const todosWatcher = yield fork(fetchTodosListWatcher)
  const formWatcher = yield fork(submitFormWatcher)
  const toggleWatcher = yield fork(submitToggleWatcher)

  yield take(LOCATION_CHANGE)
  yield cancel(todosWatcher)
  yield cancel(formWatcher)
  yield cancel(toggleWatcher)
}

// All sagas to be loaded
export default [
  todoListSagas
]
