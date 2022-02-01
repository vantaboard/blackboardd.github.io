import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const HeroBox = styled(Box)`
  transition: padding 0.5s ease-in-out;

  @media (max-width: 1500px) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  @media (min-width: 1500px) {
    padding-top: 2rem;
    padding-bottom: 0rem;
  }
`;

export const ThanksBox = styled(Box)`
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

export const ContactBox = styled(Box)`
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

export const ProjectBox = styled(Box)`
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
