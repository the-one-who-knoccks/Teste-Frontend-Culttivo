import axios from 'axios'

export const api = axios.create({
  baseURL:
    'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15?token=82e86be1f7896dd48ad916a8bf79a997',
})
