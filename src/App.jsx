import { Router } from './Router';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import './App.css'

function App() {
  return (
      <MantineProvider theme={theme}>
          <Router />
      </MantineProvider>
  )
}

export default App
