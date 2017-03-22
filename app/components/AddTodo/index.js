/*
 *
 * AddTodo
 *
 */

import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { FormControl } from 'react-bootstrap'
import Button from 'components/Button'

const Div = styled.div`
  display: flex;
  margin-top: 40px;
  > input { margin-right: 16px; }
`

export class AddTodo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onChangeForm, submit, newTodo, loading } = this.props
    return (
      <Div>
        <FormControl
          type="text"
          placeholder="Add note"
          value={newTodo}
          onChange={(e) => onChangeForm(e.target.value)}
        />
        <Button bsStyle="primary" onClick={submit} loading={loading}>
          add note
        </Button>
      </Div>
    )
  }
}

AddTodo.propTypes = {
  onChangeForm: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  newTodo: PropTypes.string,
  loading: PropTypes.bool
}

export default AddTodo
