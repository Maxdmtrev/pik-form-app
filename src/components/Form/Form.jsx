import React, { useState, useMemo, useEffect } from 'react'
import { StForm, StButton, STFooter } from './styles'
import { v, regExp } from '../../styles/variables'
import { defaultData } from './defaultData'
import { onChangeTime, onChangeTextButton } from '../utils/utils'
import Flex from '../Containers/Flex'
import Article from './Article'
import Title from './Title'
import Input from './Input'

const Form = ({
  title,
  formData,
  formArr,
  submitBtn,
  onSubmit,
  submitBtnText,
}) => {
  const prepareForm = (formArray) => {
    return formArray.reduce((r, v) => ({ ...r, [v.name]: '' }), {})
  }
  const initialState = useMemo(
    () => prepareForm(formData.concat(formArr)),
    [formData, formArr]
  )
  const [form, setForm] = useState(initialState)
  const [error, setError] = useState('')
  const [inputValid, setInputValid] = useState(false)

  useEffect(() => {
    if (error) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [error])

  const onChangeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validateForm = (state) => {
    const validateEmail = (email) => {
      const re = regExp.mail
      return re.test(String(email).toLowerCase())
    }
    console.log('validateMail', validateEmail(state.email))

    const validatePhone = (phone) => {
      const reg = regExp.phone
      return reg.test(phone)
    }
    console.log('validatePhone', validatePhone(state.phone))

    !validateEmail(state.email) || !validatePhone(state.phone)
      ? setError('Заполните поле')
      : setError('')
  }

  const onSubmitHandler = () => {
    validateForm(form)
    if (inputValid) {
      onSubmit(form, () => setForm(initialState))
    }
  }

  const currentTime = new Date()
  const stateDay = onChangeTime(currentTime)
  const textBtn = onChangeTextButton(submitBtn, form.count, submitBtnText)

  return (
    <StForm>
      <Flex direction={'column'} justify={'center'} align={'center'}>
        <Title color={'black'} text={stateDay} />
        <Article text={v.textArticle} />
      </Flex>
      <Flex justify={'space-between'} marginR={'0 20px 0 0'}>
        {formData.map(({ id, name, type, placeholder }) => (
          <Input
            id={id}
            key={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={form[name]}
            onChange={(e) => onChangeHandler(e)}
          />
        ))}
      </Flex>
      <Flex direction={'column'}>
        {formArr.map(({ id, name, type, placeholder }) => (
          <Input
            id={id}
            key={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={form[name]}
            onChange={(e) => onChangeHandler(e)}
            error={error}
          />
        ))}
      </Flex>
      <StButton
        onClick={(e) => {
          e.preventDefault()
          onSubmitHandler()
        }}
      >
        {textBtn}
      </StButton>
      <STFooter>{v.disclamer}</STFooter>
    </StForm>
  )
}

Form.defaultProps = defaultData

export default Form
