import { ButtonBase, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface HeaderButtonProps extends ButtonProps {
  isCurrent?: boolean;
}

export const HeaderButton = styled(ButtonBase)<HeaderButtonProps>`
  color: ${(props) => (props.isCurrent ? '#000' : '#989898')};
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
