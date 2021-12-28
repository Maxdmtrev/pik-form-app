import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto;
}

body {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => props.url};
  background-position: center;
  background-size: cover;
}
`
export const AppWrapper = styled.div`
  display: flex;
  padding: 50px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 0px;
  @media (max-width: 768px) {
    display: flex;
    padding: 0px;
    justify-content: center;
    align-items: center;
  }
`
