/*
 *
 * FilterButton
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Button from 'components/Button'
import { selectVisibilityFilter } from './selectors'
import { setVisibilityFilter } from './actions'


export class FilterButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { filter, visibilityFilter, children, onClickAction } = this.props
    const active = filter === visibilityFilter
    return (
      <Button
        bsStyle={active ? 'primary' : 'info'}
        disabled={active}
        onClick={() => onClickAction(filter)}
      >
        {children}
      </Button>
    )
  }
}

FilterButton.propTypes = {
  filter: PropTypes.string.isRequired,
  visibilityFilter: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClickAction: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  visibilityFilter: selectVisibilityFilter(),
})

function mapDispatchToProps(dispatch) {
  return {
    onClickAction: (filter) => dispatch(setVisibilityFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)
