import styled, { css } from 'styled-components'

interface WarningCardProps {
  variant?: 'superior' | 'inferior'
}

export const WarningCards = styled.span<WarningCardProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem -1rem 0.5rem 1rem;
  font-size: 0.8rem;
  border-radius: 5px;
  border: 1px solid;
  border-left-width: 0.45rem;
  font-weight: 500;
  font-size: 0.7rem;

  svg.warning {
    position: relative;
    top: 0;
    margin-right: 2rem;
  }

  ${(props) =>
    props.variant === 'superior' &&
    css`
      color: ${(props) => props.theme['vermelho-300']};
      background: ${(props) => props.theme['vermelho-100']};
    `};

  ${(props) =>
    props.variant === 'inferior' &&
    css`
      color: ${(props) => props.theme['azul-400']};
      background: ${(props) => props.theme['azul-200']};
    `};
`
