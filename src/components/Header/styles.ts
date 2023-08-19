import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-100']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;
  box-shadow: 1px -2px 12px 4px rgba(239, 239, 239, 255);
  border: 1px solid ${(props) => props.theme['gray-200']};
  border-top-width: 25px;
  border-top-color: ${(props) => props.theme['green-100']};

  h1 {
    color: ${(props) => props.theme['green-100']};
    font-size: 1.5rem;
    font-weight: normal;
  }
`
