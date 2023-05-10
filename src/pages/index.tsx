import type { NextPage } from 'next';
import { Contact, Footer, Hero, Project } from '@/components';
import { HeroBox, ProjectBox, Container, SectionTitle, Tagline, Card } from '@/styles';
import { Content, HeroWrapper } from '@/styles';
import projects from './projects.json';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Brighten Tompkins</title>
                    <Link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
                    />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <HeroWrapper id="home">
                <Content className="section">
                    <Container>
                        <Hero />
                        <div id="projects" className="section">
                            <SectionTitle>Experience</SectionTitle>
                            <ProjectBox>
                                <Project {...projects.sponsorcx} />
                                <Project {...projects.shoppy} />
                                <Project {...projects.xpsUpcharge} />
                                <Project {...projects.signingsaavy} />
                                <Project {...projects.gadfly} />
                            </ProjectBox>
                        </div>
                        <div id="contact" className="section">
                            <ProjectBox>
                            <SectionTitle>Contact Me</SectionTitle>
                            <Contact />
                            </ProjectBox>
                        </div>
                    </Container>
                    <Footer />
                </Content>
            </HeroWrapper>
        </>
    );
};

export default Home;
