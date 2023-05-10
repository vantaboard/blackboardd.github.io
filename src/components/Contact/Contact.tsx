import { AvatarBox, ContactCard, InfoBox } from '@/styles';
import { ContactAvatar } from './ContactAvatar';
import { Information } from './Information';

export const Contact = () => {
    return (
        <ContactCard>
            <AvatarBox>
                <ContactAvatar />
            </AvatarBox>
            <InfoBox>
                <Information />
            </InfoBox>
        </ContactCard>
    );
};
