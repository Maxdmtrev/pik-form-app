import { v } from '../../styles/variables'
import { backImg } from '../../styles/variables'

// Смена приветствия внутри формы в зависимости от времени суток
export const onChangeTime = (time) => {
  const currentHours = time.getHours()
  if (currentHours >= 6 && currentHours < 12) {
    return v.textTitleMorning
  }
  if (currentHours >= 12 && currentHours < 18) {
    return v.textTitleDay
  }
  if (currentHours >= 18 && currentHours < 24) {
    return v.textTitleEvening
  } else {
    return v.textTitleNight
  }
}

// Измение количественного значения на кнопке отправки формы
export const onChangeTextButton = (BtnText, value, words) => {
  const patternFull = `${BtnText}${' '}${value}${' '}`
  const patternCommon = `${BtnText}${' '}${words[0]}`

  const cases = [2, 0, 1, 1, 1, 2]
  const countWord =
    words[
      value % 100 > 4 && value % 100 < 20
        ? 2
        : cases[value % 10 < 5 ? value % 10 : 5]
    ]
  return value ? patternFull + countWord : patternCommon
}

// Изменение фоновой картинки в зависимости от времени суток
export const onChangeBackImg = () => {
  const time = new Date()
  if (time.getHours() > 6 && time.getHours() < 18) {
    return backImg.backImgDay
  } else {
    return backImg.backImgNight
  }
}

// Отправка формы в нужном формате ключей и значений
export const onSubmitHandler = (form, callback) => {
  const currentTime = new Date()
  const formData = {
    user: {
      firstName: form.firstName,
      lastName: form.lastName,
      mail: form.email,
      phone: form.phone,
    },
    order: { flatsCount: form.count, time: currentTime },
  }
  console.log('Form Data', formData)
  callback()
}
