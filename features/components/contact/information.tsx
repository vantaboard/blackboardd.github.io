// contact card with phone number, email address, location, and hiring availability
import { Call, Email, LocationOn, Work } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const Information: () => JSX.Element = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Call sx={{ mt: 0.3, pr: 0.5 }} fontSize="small" />
        <Typography>+1 (650) 731-9032</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Email sx={{ mt: 0.25, pr: 0.5 }} fontSize="small" />
        <Typography>brightenqtompkins@gmail.com</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <LocationOn sx={{ mt: 0.5, pr: 0.5 }} fontSize="small" />
        <Typography>Dinuba, CA</Typography>
      </Box>
      <br />
      <Box sx={{ display: 'flex' }}>
        <Work sx={{ mt: 0.25, pr: 0.5 }} fontSize="small" />
        <Typography>Looking for work</Typography>
      </Box>
    </Box>
  );
};

export default Information;
