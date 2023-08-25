import styled from 'styled-components'

export const Container = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 10px solid ${(props) => props.theme['cinza-200']};
    border-top: 10px solid ${(props) => props.theme['verde-100']};
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`
