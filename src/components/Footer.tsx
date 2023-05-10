import { Text, FooterWrapper } from '@/styles';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './Icons';

export const Footer = () => {
    const icons = [
        <GitHubIcon key="github" />,
        <LinkedInIcon key="linkedin" />,
        <TwitterIcon key="twitter" />,
        <InstagramIcon key="instagram" />,
    ];

    return (
        <FooterWrapper>
            <div>{icons}</div>
            <Text>Made with ❤️ by Brighten Tompkins</Text>
        </FooterWrapper>
    );
};
