import React from 'react'
import { MainView } from './view/Main'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './styles/theme/theme'
import './styles/styles/global.scss'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainView />
      </ThemeProvider>
    </div>
  );
}

export default App;
