import React from 'react'
import { StFormArticle } from './styles'

const Article = (props) => {
  return <StFormArticle {...props}>{props.text}</StFormArticle>
}

export default Article
