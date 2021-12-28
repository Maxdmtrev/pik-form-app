import React from 'react'
import { StFormInput, StFormInputMessage } from './styles'

const Input = (props) => {
  const { error } = props
  let changeBorder = null
  let onError = null
  if (error) {
    onError = <StFormInputMessage>{error}</StFormInputMessage>
    changeBorder = '1px solid red'
  }

  return (
    <div>
      <StFormInput {...props} border={changeBorder} />
      {onError}
    </div>
  )
}

export default Input
