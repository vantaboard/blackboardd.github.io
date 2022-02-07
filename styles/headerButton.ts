import { Box, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderBox = styled(Box)`
  display: flex;
  transition: margin-top 0.2s ease-in-out;
  transition: margin-right 0.2s ease-in-out;

  @media (max-width: 1000px) {
    justify-content: center;
    margin-right: 0;
    margin-top: 0.5rem;
  }

  @media (min-width: 1000px) {
    justify-content: center;
    margin-right: 0;
    margin-top: 1.5rem;
  }

  @media (min-width: 1800px) {
    justify-content: right;
    margin-right: -16rem;
    margin-top: 1.5rem;
  }
  margin-bottom: 10rem;
`;

export const HeaderButton = styled(ButtonBase)`
  color: #000;
  width: fit-content;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 6.5px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #313131;
  }
`;

export default HeaderButton;
