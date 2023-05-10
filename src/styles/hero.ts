import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
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
    background-image: url('static/images/background.jpg');
    background-size: cover;
    background-position: top center;
    opacity: 0.25;
}
  }
`;

export const Welcome = styled.div`
    font-size: 2rem;
    text-align: center;
    line-height: 1.3;

    @media (max-width: 1500px) {
        font-size: 1.5rem;
        padding-bottom: 40px;
    }
`;

export const Tagline = styled.div`
    transition: padding-top 0.2s ease-in-out;

    text-transform: uppercase;
    text-align: center;
    font-size: 1.3rem;
    @media (max-width: 1500px) {
        padding-top: 2.5em;
        font-size: 1rem;
    }
`;
