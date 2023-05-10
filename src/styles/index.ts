import styled from 'styled-components';

export const HeroBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    width: 80%;

    justify-content: space-around;

    transition: padding 0.5s ease-in-out;

    @media (max-width: 1500px) {
        flex-direction: column;
        padding-bottom: 4rem;
    }

    @media (min-width: 1500px) {
        padding-top: 2rem;
        padding-bottom: 0rem;
    }
`;

export const ThanksBox = styled.div`
    transition: padding 0.5s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1500px) {
        padding-bottom: 4.5rem;
    }
    @media (min-width: 1500px) {
        padding-bottom: 12rem;
    }
`;

export const ContactBox = styled.div`
    transition: padding 0.5s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1500px) {
        padding-top: 7rem;
        padding-bottom: 3rem;
    }

    @media (min-width: 1500px) {
        padding-top: 16rem;
        padding-bottom: 4rem;
    }
`;

export const ProjectBox = styled.div`
    display: grid;

    flex-direction: column;

    transition: padding 0.5s ease-in-out;

    @media (max-width: 1500px) {
        padding-top: 7rem;
        padding-bottom: 0;
    }

    @media (min-width: 1500px) {
        padding-top: 18rem;
        padding-bottom: 0;
    }
`;

export const Container = styled.div`
`;

export * from './avatar';
export * from './card';
export * from './contact';
export * from './footer';
export * from './header';
export * from './hero';
export * from './project';
export * from './scrollTo';
export * from './information';
