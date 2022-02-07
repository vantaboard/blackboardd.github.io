import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Link } from '@mui/material';
import { StyledIconButton } from '../../styles/icons';

export const GitHubIcon: () => JSX.Element = () => {
  return (
    <Link href="https://github.com/blackboardd" target="_blank">
      <StyledIconButton
        aria-label="github.com"
        onClick={() => window.open('https://github.com/blackboardd', '_blank')}
      >
        <GitHub sx={{ color: 'white' }} fontSize="small" />
      </StyledIconButton>
    </Link>
  );
};

export const LinkedInIcon: () => JSX.Element = () => {
  return (
    <Link href="https://www.linkedin.com/in/brightentompkins" target="_blank">
      <StyledIconButton
        aria-label="linkedin.com"
        onClick={() =>
          window.open('https://www.linkedin.com/in/brightentompkins', '_blank')
        }
      >
        <LinkedIn sx={{ color: 'white' }} fontSize="small" />
      </StyledIconButton>
    </Link>
  );
};

export const TwitterIcon: () => JSX.Element = () => {
  return (
    <Link href="https://twitter.com/blkboardd" target="_blank">
      <StyledIconButton
        aria-label="twitter.com"
        onClick={() => window.open('https://twitter.com/blkboardd', '_blank')}
      >
        <Twitter sx={{ color: 'white' }} fontSize="small" />
      </StyledIconButton>
    </Link>
  );
};

export const InstagramIcon: () => JSX.Element = () => {
  return (
    <Link href="https://www.instagram.com/brightenq" target="_blank">
      <StyledIconButton
        aria-label="instagram.com"
        onClick={() =>
          window.open('https://www.instagram.com/brightenq', '_blank')
        }
      >
        <Instagram sx={{ color: 'white' }} fontSize="small" />
      </StyledIconButton>
    </Link>
  );
};
