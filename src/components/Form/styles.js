import styled from 'styled-components'
import { sharedStyles, btn, btnReset } from '../../styles/variables'

export const StForm = styled.form`
  width: 100%;
  max-width: 545px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`
export const StFormTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 44px;
  font-weight: 600;
  color: ${(props) => props.color};
`

export const StFormArticle = styled.p`
  display: flex;
  justify-content: center;
  width: 314px;
  text-align: center;
  margin: 16px 0 32px 0;
  padding: 0 30px 0 30px;
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 400;
`
export const StFormInput = styled.input`
  display: block;
  width: 100%;
  font-size: 15px;
  font-weight: 100;
  border: ${(props) => props.border || '1px solid #DCDCE6'};
  padding: ${btn.mdSpacing};
  ${sharedStyles}
  &:focus {
    background-color: white;
    border: 1px solid #ddd;
  }
  ::placeholder {
    color: #4d4d4d;
  }
`
export const StFormInputMessage = styled.p`
  color: red;
  font-size: 10px;
  float: right;
`

export const STFooter = styled.div`
  display: flex;
  justify-content: center;
  color: #969ba5;
  font-size: 12px;
  height: 40px;
  margin: 20px 0 0px 0;
  padding: 10px;
`

export const StButton = styled.button`
  ${btnReset};
  width: 100%;
  background: #ff4114;
  color: white;
  padding: ${btn.mdSpacing};
  display: flex;
  justify-content: center;
  border-radius: ${btn.borderRadius};
  margin-top: ${btn.mdSpacing};
  cursor: pointer;
`
