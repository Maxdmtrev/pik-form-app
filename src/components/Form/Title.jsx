import React from 'react'
import { StFormTitle } from './styles'

const Title = (props) => {
  return <StFormTitle {...props}>{props.text}</StFormTitle>
}

export default Title
