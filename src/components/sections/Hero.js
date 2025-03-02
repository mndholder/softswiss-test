import earthImg from '../../assets/optimized/earth.webp';

import Button from '../common/Button';

import './Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <img src={earthImg} alt="Earth" className="hero__image" />
      <div className="hero__content">
        <h1 className="hero__title">
          Discover the vast expanses of <span className="hero__title--pink">space</span>
        </h1>
        <p className="hero__subtitle">
          Where the possibilities are <span className="hero__subtitle--yellow">endless!</span>
        </p>
        <Button>Learn More</Button>
      </div>
    </section>
  );
}

export default Hero;
