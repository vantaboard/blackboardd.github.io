import {
  Box,
  Container,
  createTheme,
  Link,
  ThemeProvider,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import Contact from '../features/components/contact';
import Footer from '../features/components/footer';
import Header from '../features/components/header';
import Hero from '../features/components/hero';
import { Project } from '../features/components/project';
import ScrollTo from '../features/components/scrollTo';
import { ContactBox, HeroBox, ProjectBox, ThanksBox } from '../styles';
import { HeaderBox } from '../styles/headerButton';
import { Content, Wrapper } from '../styles/hero';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

const Home: NextPage = () => {
  const projects: Array<JSX.Element> = [];

  projects.push(
    <Project
      heading={
        <>
          signingsavvy @{' '}
          <Link
            href="https://github.com/blackboardd/signingsavvy"
            target="_blank"
          >
            github
          </Link>
        </>
      }
      text={
        <>
          🧏 Unofficial Python API wrapper for https://signingsavvy.com
          <br />
          <br />
          This project uses Python&apos;s Quart package to create a local that
          can be used to make queries to a REST API.
          <br />
          <br />
          I started this project to help with learning American Sign Language
          because it is something I have always found interesting and wanted to
          learn. I ended up using the API to create a script to scrape and
          construct flashcards for Anki.
          <br />
          <br />
        </>
      }
      img={
        <img width="80rem" src="static/images/asl-b.png" alt="asl b emoji" />
      }
      date={new Date(2022, 0, 1)}
      format="MMyyyy"
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <Wrapper id="home">
        <Content className="section">
          <HeaderBox>
            <Header />
          </HeaderBox>
          <Container sx={{ position: 'relative' }}>
            <HeroBox>
              <Hero />
            </HeroBox>
            <div id="projects" className="section">
              <ProjectBox>
                <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
                  <Typography variant="h3">Projects</Typography>
                </Box>
                {projects}
              </ProjectBox>
            </div>
            <div id="contact" className="section">
              <ContactBox>
                <Box sx={{ display: 'flex', justifyContent: 'center', pb: 4 }}>
                  <Typography variant="h3">Contact</Typography>
                </Box>
                <Contact />
              </ContactBox>
            </div>
            <ThanksBox>
              <Typography sx={{ fontWeight: 300 }} variant="h5">
                Thanks for stopping by! 👋
              </Typography>
            </ThanksBox>
            <ScrollTo />
          </Container>
          <Footer />
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Home;
