import { useEffect, useState } from 'react'
import { HeaderContainer, HeaderContent } from './styles'
import axios from 'axios'

interface HeaderData {
  name: string
  state: string
}

export function Header() {
  const [dados, setarDados] = useState<HeaderData>()
  useEffect(() => {
    axios
      .get(
        'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15?token=26fe4985e1cf1cee5e7cfdcf7e6b62e3',
      )
      .then((response) => {
        setarDados(response.data)
      })
  }, [])

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>
          Temperatura para{' '}
          <b>
            {dados?.name} - {dados?.state}
          </b>{' '}
          pelos próximos <b>7 dias</b>
        </h1>
      </HeaderContent>
    </HeaderContainer>
  )
}
