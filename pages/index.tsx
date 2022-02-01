import { Container, createTheme, ThemeProvider } from '@mui/material';
import type { NextPage } from 'next';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container></Container>
    </ThemeProvider>
  );
};

export default Home;
