// material ui avatar import image rounded
import Brighten from '../../../public/images/brighten.jpg';
import { StyledAvatar } from '../../../styles/contact';

const contactAvatar: () => JSX.Element = () => {
  return (
    <StyledAvatar alt="Brighten Tompkins" src={Brighten} variant="circular" />
  );
};

export default contactAvatar;
