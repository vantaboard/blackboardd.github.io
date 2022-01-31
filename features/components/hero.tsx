import { HeroBox, Tagline, Welcome } from '../../styles/hero';

const Hero = () => {
  return (
    <HeroBox>
      <Welcome>
        Hi, my name is Brighten, and
        <br />
        I'm a web developer.
      </Welcome>
      <Tagline>Building things to make us smile.</Tagline>
    </HeroBox>
  );
};

export default Hero;
