import styled from 'styled-components'

export const FooterContainer = styled.header`
  hr {
    background: ${(props) => props.theme['verde-100']};
    border: none;
    padding: 0.8rem;
    position: fixed;
    top: 53rem;
    width: 100%;
    max-width: 1120px;
    margin-top: 2.1rem;
  }
`
