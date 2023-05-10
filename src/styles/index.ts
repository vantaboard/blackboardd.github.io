import styled from 'styled-components';

export const HeroBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;
    justify-content: center;

    transition: padding 0.5s ease-in-out;

    @media (max-width: 1500px) {
        flex-direction: column;
    }

    @media (min-width: 1500px) {
        padding-bottom: 0rem;
    }
`;

export const SectionTitle = styled.h1`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 1rem;
`;

export const ProjectBox = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;

    transition: padding, margin 0.5s ease-in-out;

    @media (max-width: 1500px) {
        padding-bottom: 0;
    }

    @media (min-width: 1500px) {
        padding-bottom: 0;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 80%;
`;

export * from './avatar';
export * from './card';
export * from './contact';
export * from './footer';
export * from './hero';
export * from './project';
export * from './information';
export * from './icons';
