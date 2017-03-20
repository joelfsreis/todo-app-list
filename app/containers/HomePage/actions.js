/*
 *
 * Todo List actions
 *
 */

import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  TOGGLE_TODO,
  ON_KEY_CHANGE,
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_ERROR
} from './constants'

export function fetchTodos() {
  return {
    type: FETCH_TODOS
  }
}

export function fetchTodoSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos
  }
}

export function fetchTodosError(error) {
  return {
    type: FETCH_TODOS_ERROR,
    error
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id.toString()
  }
}

export function updateForm(todo) {
  return {
    type: ON_KEY_CHANGE,
    todo
  }
}

export function submitForm() {
  return {
    type: SUBMIT_FORM
  }
}

export function submitFormSuccess(todo) {
  return {
    type: SUBMIT_FORM_SUCCESS,
    todo
  }
}

export function submitFormError(error) {
  return {
    type: SUBMIT_FORM_ERROR,
    error
  }
}
