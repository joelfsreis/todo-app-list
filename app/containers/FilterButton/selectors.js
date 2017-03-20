import { createSelector } from 'reselect'

/**
 * Direct selector to the filter state domain
 */
const selectFilterButtonDomain = () => (state) => state.get('todoFilters')

/**
 * Other specific selectors
 *
 * Select visibilityFilter state
 */

export const selectVisibilityFilter = () => createSelector(
  selectFilterButtonDomain(),
  (substate) => substate.get('visibilityFilter')
)
