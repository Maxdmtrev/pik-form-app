import { css } from 'styled-components'

export const v = {
  textTitleEvening: 'Добрый вечер',
  textTitleDay: 'Добрый день',
  textTitleMorning: 'Доброе утро',
  textTitleNight: 'Доброй ночи',
  textArticle: 'Для бронирования помещений заполните форму',
  textFirstName: 'Ваше имя',
  textLastName: 'Фамилия',
  phone: '+7',
  email: 'E-mail',
  count: 'Количество помещений',
  disclamer: 'Это дисклеймер, который есть во всех формах',
}

export const backImg = {
  backImgDay: `url(
    https://0.pik.ru.cdn.pik-service.ru/undefined/2021/08/03/dji_0093.rev00_wj16guVhKoupGK8K.jpg
  )`,
  backImgNight: `url(
    https://0.pik.ru.cdn.pik-service.ru/undefined/2020/07/21/dsc06845_481909dfb262bfdcb554e38bd110c38f_eZGKKhSFQDqht6yz.jpg
  )`,
}

export const regExp = {
  mail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
}

export const btn = {
  headerHeight: '60px',
  smSpacing: `8px`,
  mdSpacing: `16px`,
  lgSpacing: `32px`,
  xlSpacing: `48px`,
  xxlSpacing: `64px`,
  borderRadius: '4px',
  boxShadow: `0 1px 1px rgba(0,0,0,0.15),
    0 2px 2px rgba(0,0,0,0.15)`,
}

export const btnReset = css`
  font-family: inherit;
  outline: none;
  border: none;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
`

export const sharedStyles = css`
  background-color: #f2f4f7;
  height: 56px;
  border-radius: 4px;

  margin: 10px 0 10px 0;
  padding: 20px;
  box-sizing: border-box;
`
// border: 1px solid #dcdce6;
