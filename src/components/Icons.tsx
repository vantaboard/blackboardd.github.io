import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export const GitHubIcon = () => {
    return (
        <Link href="https://github.com/blackboardd" target="_blank">
            <button
                aria-label="github.com"
                onClick={() =>
                    window.open('https://github.com/blackboardd', '_blank')
                }
            >
                <FontAwesomeIcon icon={faGithub} fontSize="small" />
            </button>
        </Link>
    );
};

export const LinkedInIcon = () => {
    return (
        <Link
            href="https://www.linkedin.com/in/brightentompkins"
            target="_blank"
        >
            <button
                aria-label="linkedin.com"
                onClick={() =>
                    window.open(
                        'https://www.linkedin.com/in/brightentompkins',
                        '_blank'
                    )
                }
            >
                <FontAwesomeIcon icon={faLinkedin} fontSize="small" />
            </button>
        </Link>
    );
};

export const TwitterIcon = () => {
    return (
        <Link href="https://twitter.com/blkboardd" target="_blank">
            <button
                aria-label="twitter.com"
                onClick={() =>
                    window.open('https://twitter.com/blkboardd', '_blank')
                }
            >
                <FontAwesomeIcon icon={faTwitter} fontSize="small" />
            </button>
        </Link>
    );
};

export const InstagramIcon = () => {
    return (
        <Link href="https://www.instagram.com/brightenq" target="_blank">
            <button
                aria-label="instagram.com"
                onClick={() =>
                    window.open('https://www.instagram.com/brightenq', '_blank')
                }
            >
                <FontAwesomeIcon icon={faInstagram} fontSize="small" />
            </button>
        </Link>
    );
};
