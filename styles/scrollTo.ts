import { Box, styled, Typography } from '@mui/material';

export const StorybookNote = styled(Typography)`
  display: none;
  @media (min-width: 768px) {
    display: grid;
  }
`;

export const IconBox = styled(Box)`
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;
