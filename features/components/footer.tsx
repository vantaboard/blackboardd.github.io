import { Box, Typography } from '@mui/material';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './icons';

const Footer: () => JSX.Element = () => {
  const icons = [
    <GitHubIcon key="github" />,
    <LinkedInIcon key="linkedin" />,
    <TwitterIcon key="twitter" />,
    <InstagramIcon key="instagram" />,
  ];

  return (
    <Box
      sx={{
        background: '#1C1616',
        width: '100%',
        px: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
      }}
    >
      <div>{icons}</div>
      <Typography variant="caption" sx={{ pb: 1, pt: 0.5, color: 'white' }}>
        Made with ❤️ by Brighten Tompkins
      </Typography>
    </Box>
  );
};

export default Footer;
