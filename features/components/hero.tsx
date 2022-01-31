import { HeroBox, Tagline, Welcome } from '../../styles/hero';

const Hero: () => JSX.Element = () => {
  return (
    <HeroBox>
      <Welcome>
        Hi, my name is Brighten, and
        <br />
        I&apos;m a web developer.
      </Welcome>
      <Tagline>Building things to make us smile.</Tagline>
    </HeroBox>
  );
};

export default Hero;
