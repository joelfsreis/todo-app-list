
import { fromJS } from 'immutable'
import FilterButtonReducer from '../reducer'

import { SET_VISIBILITY_FILTER } from '../constants'

describe('FilterButtonReducer', () => {
  let state
  beforeEach(() => {
    state = fromJS({ visibilityFilter: 'SHOW_ALL' })
  })

  it('returns the initial state', () => {
    expect(FilterButtonReducer(undefined, {})).toEqual(fromJS(state))
  })
  it('returns the state after setVisibilityFilter action', () => {
    const fixture = 'SHOW_COMPLETED'
    const action = {
      type: SET_VISIBILITY_FILTER,
      filter: fixture
    }
    const expectedResult = state.setIn(['visibilityFilter'], fixture)

    expect(FilterButtonReducer(state, action)).toEqual(expectedResult)
  })
})
