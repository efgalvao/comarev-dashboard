import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import 'react-toastify/dist/ReactToastify.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    warning: {
      light: '#F5A299',
      main: '#EA351F',
      dark: '#611B17',
    },
  },
});

export default theme;
