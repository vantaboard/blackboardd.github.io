// material ui avatar import image rounded
import { StyledAvatar } from '../../../styles/contact';

const contactAvatar: () => JSX.Element = () => {
  return (
    <StyledAvatar
      alt="Brighten Tompkins"
      src="static/images/brighten.jpg"
      variant="circular"
    />
  );
};

export default contactAvatar;
