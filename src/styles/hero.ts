import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
    margin-bottom: 100px;
`;

export const HeroWrapper = styled.div`
  scroll-behavior: smooth;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -8px;
    left: -8px;
    bottom: 0;
  }
`;

export const Welcome = styled.div`
    transition: margin 0.2s ease-in-out;

    font-size: 1.75rem;
    margin-left: 3rem;
    text-align: center;
    line-height: 1.3;

    @media (max-width: 1500px) {
        margin-left: unset;
        margin-top: 2rem;
        font-size: 1.3rem;
    }
`;

export const Tagline = styled.div`
    display: flex;
    width: 100%;
    padding-top: 4rem;
    justify-content: center;
    font-size: 1.5rem;
    line-height: 2;

    font-style: italic;
`;
