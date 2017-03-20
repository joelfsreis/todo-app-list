
import {
  setVisibilityFilter,
} from '../actions'
import {
  SET_VISIBILITY_FILTER,
} from '../constants'

describe('FilterButton actions', () => {
  describe('setVisibilityFilter Action', () => {
    it('has a type of SET_VISIBILITY_FILTER', () => {
      const expected = {
        type: SET_VISIBILITY_FILTER,
        filter: 'SHOW_ALL'
      }
      expect(setVisibilityFilter('SHOW_ALL')).toEqual(expected)
    })
  })
})
