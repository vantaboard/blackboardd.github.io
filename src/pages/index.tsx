import Image from 'next/image';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Contact, Footer, Header, Hero, Project, ScrollTo } from '@/components';
import {
    HeaderBox,
    ContactBox,
    HeroBox,
    ProjectBox,
    ThanksBox,
    Container,
} from '@/styles';
import { Content, HeroWrapper } from '@/styles';
import Link from 'next/link';

const Home: NextPage = () => {
    const projects: JSX.Element[] = [];

    projects.push(
        <Project
            heading={
                <>
                    shoppy @{' '}
                    <Link
                        href="https://bitbucket.org/blackboardd/shoppy/src/main/"
                        target="_blank"
                    >
                        bitbucket
                    </Link>
                </>
            }
            text={
                <>
                    Ecommerce platform with full CRUD support.
                    <br />
                    <br />
                    This project uses vanilla PHP 7.4, Composer, MySQL, Docker,
                    and Nginx to build a fully functional ecommerce platform.
                    <br />
                    <br />
                    Shoppy was created as a test for Scandiweb, a web
                    development company based in Riga, Latvia. This website was
                    created to showcase my development of REST APIs, my
                    knowledge of design patterns, and my ability to structure
                    and maintain a full stack web application.
                    <br />
                    <br />
                </>
            }
            img={
                <Image
                    width="80"
                    height="80"
                    src="/static/images/shoppy.png"
                    alt="shoppy"
                />
            }
            date={new Date(2022, 4)}
            format="MMyyyy"
        />
    );

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
                    This project uses TypeScript, Styled Components, React, and
                    Rollup to construct a userscript for use with GreaseMonkey,
                    TamperMonkey, or ViolentMonkey.
                    <br />
                    <br />
                    This script modifies XPS Shipper by calculating upcharges
                    for different vendors based on unique percentages for each
                    vendor. The script uses GreaseMonkey&apos;s API in order to
                    save the percentages to a to a database. It also maintains
                    an options menu for setting up settings.
                    <br />
                    <br />
                </>
            }
            img={
                <Image
                    width="80"
                    height="80"
                    src="/static/images/xpsshipper.png"
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
                    🧏 Unofficial Python API wrapper for
                    https://signingsavvy.com
                    <br />
                    <br />
                    This project uses Python&apos;s Quart package to create a
                    local that can be used to make queries to a REST API.
                    <br />
                    <br />
                    I started this project to help with learning American Sign
                    Language because it is something I have always found
                    interesting and wanted to learn. I ended up using the API to
                    create a script to scrape and construct flashcards for Anki.
                    <br />
                    <br />
                </>
            }
            img={
                <Image
                    width="80"
                    height="180"
                    src="/static/images/asl-b.png"
                    alt="asl b emoji"
                />
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
                    <Link
                        href="https://github.com/blackboardd/gadfly"
                        target="_blank"
                    >
                        github
                    </Link>
                </>
            }
            text={
                <>
                    🪰 Google Apps Script homework helper.
                    <br />
                    <br />
                    This project uses Google Apps Script with Clasp, TypeScript,
                    and MediaWiki to create a homework helper that pulls
                    definitions from Wikipedia to help with defining lists.
                    <br />
                    <br />
                    This project was inspired by a homework project one of my
                    friends had for art history where she had to define terms.
                    This helped her to understand the terms that she had to
                    learn.
                    <br />
                    <br />
                </>
            }
            img={
                <Image
                    width="80"
                    height="92"
                    src="/static/images/gadfly.png"
                    alt="gadfly"
                />
            }
            date={new Date(2021, 9)}
            format="MMyyyy"
        />
    );

    return (
        <>
            <Head>
                <title>Brighten Tompkins</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <HeroWrapper id="home">
                <Content className="section">
                    <HeaderBox>
                        <Header />
                    </HeaderBox>
                    <Container>
                        <HeroBox>
                            <Hero />
                        </HeroBox>
                        <div id="projects" className="section">
                            <ProjectBox>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        paddingBottom: '2em',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <span>Projects</span>
                                </div>
                                {projects}
                            </ProjectBox>
                        </div>
                        <div id="contact" className="section">
                            <ContactBox>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        paddingBottom: '4em',
                                    }}
                                >
                                    <span>Contact</span>
                                </div>
                                <Contact />
                            </ContactBox>
                        </div>
                        <ThanksBox>
                            <span style={{ fontWeight: 300 }}>
                                Thanks for stopping by! 👋
                            </span>
                        </ThanksBox>
                        <ScrollTo />
                    </Container>
                    <Footer />
                </Content>
            </HeroWrapper>
        </>
    );
};

export default Home;
