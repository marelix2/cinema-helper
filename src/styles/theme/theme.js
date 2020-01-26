import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#000000'},
    secondary: { main: '#ffffff'},
  },
  props: {
    topBarHeight: 80,
    defaultLogoWidth: 360,
  },
  typography: {
    fontFamily: `'Open Sans', sans-serif`,
  }
});
