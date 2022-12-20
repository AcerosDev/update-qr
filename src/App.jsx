import Form from './components/Form';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#b71c1c',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#0d47a1',
    },
  },
});

function ResponsiveAppBar() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Form />
      </ThemeProvider>

    </>
  );
}
export default ResponsiveAppBar;