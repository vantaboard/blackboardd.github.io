import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const HeroBox = styled(Box)`
  @media (max-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  @media (min-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 0rem;
  }
`;

export const ThanksBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding-bottom: 4.5rem;
  }
  @media (min-width: 768px) {
    padding-bottom: 18rem;
  }
`;

export const ContactBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 7rem;
    padding-bottom: 3rem;
  }

  @media (min-width: 768px) {
    padding-top: 18rem;
    padding-bottom: 4rem;
  }
`;

export const ProjectBox = styled(Box)`
  @media (max-width: 768px) {
    padding-top: 7rem;
    padding-bottom: 0;
  }

  @media (min-width: 768px) {
    padding-top: 21rem;
    padding-bottom: 0;
  }
`;
