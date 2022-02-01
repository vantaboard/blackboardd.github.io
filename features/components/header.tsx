import { Box, Link } from '@mui/material';
import HeaderButton from '../../styles/headerButton';

const Header: () => JSX.Element = () => {
  const headerButtons: Array<JSX.Element> = [];

  ['home', 'projects', 'contact'].forEach((_) => {
    const href = `#${_}`;
    const content = _.charAt(0).toUpperCase() + _.slice(1);

    headerButtons.push(
      <HeaderButton>
        <Link href={href}>{content}</Link>
      </HeaderButton>
    );
  });

  return (
    <Box
      sx={{
        borderRadius: '1rem',
        py: 1.5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: '1px 2px 0px 2px rgba(0, 0, 0, 0.1)',
        zIndex: 5,
        px: 4,
        width: 'auto',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      {headerButtons}
    </Box>
  );
};

export default Header;
