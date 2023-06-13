import {
    ContactButton,
    ContactCard,
    ContactIcon,
} from '@/styles';
import {
    faEnvelope,
    faCalendar,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    return (
        <ContactCard>
            <ContactButton href="https://calendly.com/vantaboard/">
                <ContactIcon icon={faCalendar} fontSize="12" />
                <span>Book a Chat with Me</span>
            </ContactButton>
            <ContactButton href="tel:+1-650-602-3244">
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
