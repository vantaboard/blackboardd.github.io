import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const Welcome = styled(Typography)`
  font-size: 2rem;
  text-align: center;
  line-height: 1.3;
`;

export const Tagline = styled(Typography)`
  text-transform: uppercase;
  font-size: 1.3rem;
  @media (max-width: 768px) {
    padding-top: 1em;
  }
`;

export const HeroBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
