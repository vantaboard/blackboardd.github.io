import {
    AvatarBox,
    HeroBox,
    HeroWrapper,
    IconRow,
    Tagline,
    Welcome,
} from '@/styles';
import { ContactAvatar } from './Contact/ContactAvatar';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './Icons';
import { Contact } from './Contact';

export const Hero = () => {
    const icons = [
        <GitHubIcon key="github" />,
        <LinkedInIcon key="linkedin" />,
        <TwitterIcon key="twitter" />,
        <InstagramIcon key="instagram" />,
    ];

    return (
        <div>
            <HeroBox>
                <AvatarBox>
                    <ContactAvatar />
                </AvatarBox>
                <Welcome>
                    <div style={{ maxWidth: '380px' }}>
                        Hi, my name is Brighten, and I&apos;m a software
                        engineer.
                    </div>
                    <IconRow>{icons}</IconRow>
                </Welcome>
            </HeroBox>
            <Tagline>
                <div style={{ maxWidth: '1000px' }}>
                    &quot;Do what you think is interesting, do something that
                    you think is fun and worthwhile, because otherwise you won’t
                    do it well anyway.&quot;
                    <div style={{ fontStyle: 'normal' }}>
                        ― Brian W. Kernighan
                    </div>
                </div>
            </Tagline>
            <Contact />
        </div>
    );
};
