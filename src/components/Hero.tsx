import { HeroBox, Tagline, Welcome } from '@/styles';

export const Hero = () => {
    return (
        <HeroBox>
            <Welcome>
                Hi, my name is Brighten, and
                <br />
                I&apos;m a web developer.
            </Welcome>
            <Tagline>
                I build creative projects
                <br />
                that solve real-world problems.
            </Tagline>
        </HeroBox>
    );
};
