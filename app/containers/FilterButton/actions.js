/*
 *
 * FilterButton actions
 *
 */

import {
  SET_VISIBILITY_FILTER,
} from './constants'

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}
