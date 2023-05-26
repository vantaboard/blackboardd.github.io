import {
    ContactButton,
    ContactCard,
    ContactIcon,
} from '@/styles';
import {
    faEnvelope,
    faCoffee,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    return (
        <ContactCard>
            <ContactButton href="https://brightenqtompkins-647b0d.trycoffeechats.com/">
                <ContactIcon icon={faCoffee} fontSize="12" />
                <span>Coffee Chat</span>
            </ContactButton>
            <ContactButton href="tel:+1-650-731-9032">
                <ContactIcon icon={faPhone} fontSize="12" />
                <span>+1 (650) 602-3244</span>
            </ContactButton>
            <ContactButton href="mailto:brightenqtompkins@gmail.com">
                <ContactIcon icon={faEnvelope} fontSize="12" />
                <span>brightenqtompkins@gmail.com</span>
            </ContactButton>
        </ContactCard>
    );
};
