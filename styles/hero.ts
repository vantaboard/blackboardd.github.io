import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const Content = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
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

export const Welcome = styled(Typography)`
  font-size: 2rem;
  text-align: center;
  line-height: 1.3;
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const Tagline = styled(Typography)`
  transition: padding-top 0.2s ease-in-out;

  text-transform: uppercase;
  text-align: center;
  font-size: 1.3rem;
  @media (max-width: 1000px) {
    padding-top: 2.5em;
    font-size: 1rem;
  }
`;

export const HeroBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
