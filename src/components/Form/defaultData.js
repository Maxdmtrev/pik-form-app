import { v } from '../../styles/variables'

export const defaultData = {
  title: `${v.textTitleEvening}`,
  formData: [
    {
      id: 1,
      name: 'firstName',
      placeholder: `${v.textFirstName}`,
      type: 'text',
    },
    {
      id: 2,
      name: 'lastName',
      placeholder: `${v.textLastName}`,
      type: 'text',
    },
  ],
  formArr: [
    {
      id: 3,
      name: 'phone',
      placeholder: `${v.phone}`,
      type: 'tel',
    },
    {
      id: 4,
      name: 'email',
      placeholder: `${v.email}`,
      type: 'email',
    },
    {
      id: 5,
      name: 'count',
      placeholder: `${v.count}`,
      type: 'number',
    },
  ],
  submitBtn: 'Забронировать',
  submitBtnText: ['помещение', 'помещения', 'помещений'],
}
