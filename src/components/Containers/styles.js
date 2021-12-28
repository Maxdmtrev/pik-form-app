import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  margin: ${({ margin }) => margin || '0'};
  div:first-child {
    box-sizing: border-box;
    margin: ${({ marginR }) => marginR || '0'};
  }
`
