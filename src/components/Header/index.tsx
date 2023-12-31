import { useEffect, useState } from 'react'
import { HeaderContainer, HeaderContent } from './styles'
import axios from 'axios'
import { LoadingSpinner } from '../Loading'

interface HeaderData {
  name: string
  state: string
}

export function Header() {
  const [dados, setarDados] = useState<HeaderData>()
  useEffect(() => {
    axios
      .get(
        'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6754/days/15?token=143ce6ea1c2a420aeed615812c59bf15',
      )
      .then((response) => {
        setarDados(response.data)
      })
  }, [])

  if (!dados) {
    return (
      <>
        <HeaderContent>
          <LoadingSpinner />
        </HeaderContent>
      </>
    )
  }

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
