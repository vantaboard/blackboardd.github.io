import { HeroBox, Tagline, Welcome } from '../../styles/hero';

const Hero: () => JSX.Element = () => {
  return (
    <HeroBox>
      <Welcome>
        Hi, my name is Brighten, and
        <br />
        I&apos;m a web developer.
      </Welcome>
      <Tagline>
        Building creative projects
        <br />
        that solve real-world problems.
      </Tagline>
    </HeroBox>
  );
};

export default Hero;
