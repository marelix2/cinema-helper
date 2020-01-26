import React from 'react'
import { MainView } from './view/Main'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './styles/theme/theme'
import DataContext from './context/context'
import contextState from './context/state'

import './styles/styles/global.scss'

function App() {
  return (
    <div className="App">
      <DataContext.Provider value={contextState}>
        <ThemeProvider theme={theme}>
          <MainView />
        </ThemeProvider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
