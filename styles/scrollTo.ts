import { Box, styled, Typography } from '@mui/material';

export const StorybookNote = styled(Typography)`
  display: none;
  @media (max-width: 768px) {
    display: grid;
  }
`;

export const IconBox = styled(Box)`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
