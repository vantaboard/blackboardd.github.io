import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const Wrapper = styled(Box)`
  transition: all 0.2s ease-in-out;

  position: fixed;
  left: 0;
  bottom: 0;
  width: -moz-available;
  width: -webkit-fill-available;
  background: #1c1616;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 2.5em;
  padding-right: 2.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    justify-content: space-evenly;
    flex-direction: column;
  }
`;

export const Text = styled(Typography)`
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    padding-bottom: 0.8em;
    justify-content: space-evenly;
    flex-direction: column;
  }
  color: white;
`;
