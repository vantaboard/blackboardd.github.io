// contact card with phone number, email address, location, and hiring availability
import { Call, Email, LocationOn, Work } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';

const Information: () => JSX.Element = () => {
  return (
    <Box>
      <Link href="tel:+1-650-731-9032">
        <Box sx={{ display: 'flex' }}>
          <Call sx={{ mt: 0.3, pr: 0.5 }} fontSize="small" />
          <Typography>+1 (650) 731-9032</Typography>
        </Box>
      </Link>
      <Link href="mailto:brightenqtompkins@gmail.com">
        <Box sx={{ display: 'flex' }}>
          <Email sx={{ mt: 0.25, pr: 0.5 }} fontSize="small" />
          <Typography>brightenqtompkins@gmail.com</Typography>
        </Box>
      </Link>
      <Link href="https://www.google.com/maps?hl=en&q=palo+alto+ca">
        <Box sx={{ display: 'flex' }}>
          <LocationOn sx={{ mt: 0.5, pr: 0.5 }} fontSize="small" />
          <Typography>Palo Alto, CA</Typography>
        </Box>
      </Link>
      <br />
      <Box sx={{ display: 'flex' }}>
        <Work sx={{ mt: 0.25, pr: 0.5 }} fontSize="small" />
        <Typography>Open to new opportunities</Typography>
      </Box>
    </Box>
  );
};

export default Information;
