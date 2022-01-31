import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { StyledIconButton } from '../../styles/icons';

export const GitHubIcon: () => JSX.Element = () => {
  return (
    <StyledIconButton
      aria-label="github.com"
      onClick={() => window.open('https://github.com/blackboardd', '_blank')}
    >
      <GitHub sx={{ color: 'white' }} fontSize="small" />
    </StyledIconButton>
  );
};

export const LinkedInIcon: () => JSX.Element = () => {
  return (
    <StyledIconButton
      aria-label="linkedin.com"
      onClick={() =>
        window.open('https://www.linkedin.com/in/brightentompkins', '_blank')
      }
    >
      <LinkedIn sx={{ color: 'white' }} fontSize="small" />
    </StyledIconButton>
  );
};

export const TwitterIcon: () => JSX.Element = () => {
  return (
    <StyledIconButton
      aria-label="twitter.com"
      onClick={() => window.open('https://twitter.com/blkboardd', '_blank')}
    >
      <Twitter sx={{ color: 'white' }} fontSize="small" />
    </StyledIconButton>
  );
};

export const InstagramIcon: () => JSX.Element = () => {
  return (
    <StyledIconButton
      aria-label="instagram.com"
      onClick={() =>
        window.open('https://www.instagram.com/brightenq', '_blank')
      }
    >
      <Instagram sx={{ color: 'white' }} fontSize="small" />
    </StyledIconButton>
  );
};
