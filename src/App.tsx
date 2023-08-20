import { ThemeProvider } from 'styled-components'
import { Main } from './pages/Main'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  )
}
