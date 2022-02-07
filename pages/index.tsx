import {
  Box,
  Container,
  createTheme,
  Link,
  ThemeProvider,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
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
          xps-upcharge @{' '}
          <Link
            href="https://github.com/blackboardd/xps-upcharge"
            target="_blank"
          >
            github
          </Link>
        </>
      }
      text={
        <>
          📦 Userscript that modifies XPS Shipper
          <br />
          <br />
          This project uses TypeScript, Styled Components, React, and Rollup to
          construct a userscript for use with GreaseMonkey, TamperMonkey, or
          ViolentMonkey.
          <br />
          <br />
          This script modifies XPS Shipper by calculating upcharges for
          different vendors based on unique percentages for each vendor. The
          script uses GreaseMonkey&apos;s API in order to save the percentages
          to a to a database. It also maintains an options menu for setting up
          settings.
          <br />
          <br />
        </>
      }
      img={
        <img
          width="80rem"
          src="static/images/xpsshipper.png"
          alt="xps shipper"
        />
      }
      date={new Date(2022, 1)}
      format="MMyyyy"
    />
  );

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
      date={new Date(2022, 0)}
      format="MMyyyy"
    />
  );

  projects.push(
    <Project
      heading={
        <>
          gadfly @{' '}
          <Link href="https://github.com/blackboardd/gadfly" target="_blank">
            github
          </Link>
        </>
      }
      text={
        <>
          🪰 Google Apps Script homework helper.
          <br />
          <br />
          This project uses Google Apps Script with Clasp, TypeScript, and
          MediaWiki to create a homework helper that pulls definitions from
          Wikipedia to help with defining lists.
          <br />
          <br />
          This project was inspired by a homework project one of my friends had
          for art history where she had to define terms. This helped her to
          understand the terms that she had to learn.
          <br />
          <br />
        </>
      }
      img={<img width="80rem" src="static/images/gadfly.png" alt="gadfly" />}
      date={new Date(2021, 9)}
      format="MMyyyy"
    />
  );

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Brighten Tompkins</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
