import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>
          Temperatura pra <b>São Paulo</b> pelos próximos <b>15 dias</b>
        </h1>
      </HeaderContent>
    </HeaderContainer>
  )
}
