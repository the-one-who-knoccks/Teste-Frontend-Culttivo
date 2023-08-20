import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-100']};
  padding: 2.5rem 0 7.5rem;
`

export const Separator = styled.hr`
  width: 100%;
  border-top: 3px solid #bbb;
`
