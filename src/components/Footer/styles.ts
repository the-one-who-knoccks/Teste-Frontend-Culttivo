import styled from 'styled-components'

export const FooterContainer = styled.header`
  hr {
    background: ${(props) => props.theme['verde-100']};
    border: none;
    padding: 0.8rem;
    width: 100%;
    max-width: 1120px;
    margin-top: 4rem;
  }
`
