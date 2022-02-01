import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton } from '@mui/material';
import { IconBox } from '../../styles/scrollTo';

export const ScrollTo: () => JSX.Element = () => {
  const getIcon: () => JSX.Element = () =>
    window.pageYOffset ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;

  const scrollToTop: () => void = () => {
    window.pageYOffset
      ? window.scrollTo(0, 0)
      : window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <IconButton onClick={() => scrollToTop}>
      <IconBox>{getIcon()}</IconBox>
    </IconButton>
  );
};

export default ScrollTo;
