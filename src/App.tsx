import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'

function App() {
  const darkTheme = createTheme({ palette: { mode: 'dark' } });
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <span>
        Hello World
      </span>
    </ThemeProvider>
    </>
  )
}

export default App
