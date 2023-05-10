import { ContactItem, ContactIcon, InformationWrapper } from '@/styles';
import Link from 'next/link';
import {
    faBriefcase,
    faEnvelope,
    faLocationDot,
    faMusic,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

export const Information = () => {
    return (
        <InformationWrapper>
            <Link href="tel:+1-650-731-9032">
                <ContactItem>
                    <ContactIcon icon={faPhone} fontSize="small" />
                    <span>+1 (650) 602-3244</span>
                </ContactItem>
            </Link>
            <Link href="mailto:brightenqtompkins@gmail.com">
                <ContactItem>
                    <ContactIcon icon={faEnvelope} fontSize="small" />
                    <span>brightenqtompkins@gmail.com</span>
                </ContactItem>
            </Link>
            <Link href="https://youtu.be/1-J9na1h4vc">
                <ContactItem>
                    <ContactIcon icon={faMusic} fontSize="small" />
                    <span>Caveman - You Got a Feeling</span>
                </ContactItem>
            </Link>
            <Link href="https://www.google.com/maps?hl=en&q=fresno+ca">
                <ContactItem>
                    <ContactIcon icon={faLocationDot} fontSize="small" />
                    <span>Fresno, CA</span>
                </ContactItem>
            </Link>
            <br />
            <ContactItem>
                <ContactIcon icon={faBriefcase} fontSize="small" />
                <span>Open to new opportunities</span>
            </ContactItem>
        </InformationWrapper>
    );
};
