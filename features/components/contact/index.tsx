import { AvatarBox, ContactCard, InfoBox } from '../../../styles/contact';
import ContactAvatar from './contactAvatar';
import Information from './information';

const Contact: () => JSX.Element = () => {
  return (
    <ContactCard raised>
      <AvatarBox>
        <ContactAvatar />
      </AvatarBox>
      <InfoBox>
        <Information />
      </InfoBox>
    </ContactCard>
  );
};

export default Contact;
