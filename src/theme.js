import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#651FFF',
    },
    secondary: {
      main: '#ff1744',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
