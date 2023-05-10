import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { IconButton } from '@/styles';

export const GitHubIcon = () => {
    return (
        <Link href="https://github.com/vantaboard" target="_blank">
            <IconButton
                aria-label="github.com"
                onClick={() =>
                    window.open('https://github.com/vantaboard', '_blank')
                }
            >
                <FontAwesomeIcon icon={faGithub} />
            </IconButton>
        </Link>
    );
};

export const LinkedInIcon = () => {
    return (
        <Link
            href="https://www.linkedin.com/in/brightentompkins"
            target="_blank"
        >
            <IconButton
                aria-label="linkedin.com"
                onClick={() =>
                    window.open(
                        'https://www.linkedin.com/in/brightentompkins',
                        '_blank'
                    )
                }
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
        </Link>
    );
};

export const TwitterIcon = () => {
    return (
        <Link href="https://twitter.com/vantaboard" target="_blank">
            <IconButton
                aria-label="twitter.com"
                onClick={() =>
                    window.open('https://twitter.com/vantaboard', '_blank')
                }
            >
                <FontAwesomeIcon icon={faTwitter} />
            </IconButton>
        </Link>
    );
};

export const InstagramIcon = () => {
    return (
        <Link href="https://www.instagram.com/brightenq" target="_blank">
            <IconButton
                aria-label="instagram.com"
                onClick={() =>
                    window.open('https://www.instagram.com/brightenq', '_blank')
                }
            >
                <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
        </Link>
    );
};
