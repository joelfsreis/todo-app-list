/*
 *
 * FilterButton reducer
 *
 */

import { fromJS } from 'immutable'
import {
  SET_VISIBILITY_FILTER,
} from './constants'

// Default initial state
const initialState = fromJS({ visibilityFilter: 'SHOW_ALL' })

function FilterButtonReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return state.set('visibilityFilter', action.filter)
    default:
      return state
  }
}

export default FilterButtonReducer
