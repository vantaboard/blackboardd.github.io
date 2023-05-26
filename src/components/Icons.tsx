import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import IconLink from 'next/link';
import { IconButton } from '@/styles';

export const GitHubIcon = () => {
    return (
        <IconLink href="https://github.com/vantaboard" target="_blank">
            <IconButton
                aria-label="github.com"
                onClick={() =>
                    window.open('https://github.com/vantaboard', '_blank')
                }
            >
                <FontAwesomeIcon icon={faGithub} fontSize="25" />
            </IconButton>
        </IconLink>
    );
};

export const LinkedInIcon = () => {
    return (
        <IconLink
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
                <FontAwesomeIcon icon={faLinkedin} fontSize="25" />
            </IconButton>
        </IconLink>
    );
};

export const TwitterIcon = () => {
    return (
        <IconLink href="https://twitter.com/vantaboard" target="_blank">
            <IconButton
                aria-label="twitter.com"
                onClick={() =>
                    window.open('https://twitter.com/vantaboard', '_blank')
                }
            >
                <FontAwesomeIcon icon={faTwitter} fontSize="25" />
            </IconButton>
        </IconLink>
    );
};

export const InstagramIcon = () => {
    return (
        <IconLink href="https://www.instagram.com/brightenq" target="_blank">
            <IconButton
                aria-label="instagram.com"
                onClick={() =>
                    window.open('https://www.instagram.com/brightenq', '_blank')
                }
            >
                <FontAwesomeIcon icon={faInstagram} fontSize="25" />
            </IconButton>
        </IconLink>
    );
};
