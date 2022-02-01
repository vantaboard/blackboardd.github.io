import { Box, ButtonBase, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface HeaderButtonProps extends ButtonProps {
  isCurrent?: boolean;
}

export const HeaderBox = styled(Box)`
  display: flex;
  transition: margin-right 0.2s ease-in-out;

  @media (max-width: 1800px) {
    justify-content: center;
    margin-right: 0rem;
  }

  @media (min-width: 1800px) {
    justify-content: right;
    margin-right: -16rem;
  }
  margin-top: 1.5rem;
  margin-bottom: 10rem;
`;

export const HeaderButton = styled(ButtonBase)<HeaderButtonProps>`
  color: ${(props) => (props.isCurrent ? '#000' : '#989898')};
  width: fit-content;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 8.5px;
  transition: color 0.2s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    height: ${(props) => (props.isCurrent ? '1px' : 0)};
    width: 2.5em;
    background: #aaa;
  }

  &:hover {
    color: ${(props) => (props.isCurrent ? '#313131' : '#6B6B6B')};
  }
`;

export default HeaderButton;
