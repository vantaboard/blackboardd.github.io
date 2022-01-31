import { Box } from '@mui/material';
import { ReactElement } from 'react';
import HeaderButton from '../../styles/headerButton';

interface IHeaderProps {
  curr: string;
}

const Header: (props: IHeaderProps) => JSX.Element = (props: IHeaderProps) => {
  const { curr } = props;
  const headerButtons: Array<ReactElement> = [];

  ['home', 'projects', 'contact'].forEach((_) => {
    const href = `#${_}`;
    const content = _.charAt(0).toUpperCase() + _.slice(1);

    headerButtons.push(
      <HeaderButton isCurrent={curr == _} sx={{ px: 2 }} href={href}>
        {content}
      </HeaderButton>
    );
  });

  return (
    <Box
      sx={{
        width: '20%',
        px: 4,
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      {headerButtons}
    </Box>
  );
};

export default Header;
