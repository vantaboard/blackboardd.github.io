import { Text, Wrapper } from '../../styles/footer';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './icons';

const Footer: () => JSX.Element = () => {
  const icons = [
    <GitHubIcon key="github" />,
    <LinkedInIcon key="linkedin" />,
    <TwitterIcon key="twitter" />,
    <InstagramIcon key="instagram" />,
  ];

  return (
    <Wrapper>
      <div>{icons}</div>
      <Text variant="caption">Made with ❤️ by Brighten Tompkins</Text>
    </Wrapper>
  );
};

export default Footer;
