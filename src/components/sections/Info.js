import './Info.scss';

function Info() {
  return (
    <section className="info" tabIndex="0">
      <h2 className="info__title">
        Embark on a space journey
      </h2>
      <p className="info__text">
        Travelling into space is one of the most exciting and unforgettable adventures that can change your life
        forever.
        And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you
        realize this dream.
        We offer a unique experience that will allow you to go on a space journey and see all the secrets of the
        universe.
        We guarantee that every moment in space will be filled with incredible impressions, excitement and new
        discoveries.
        Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in
        space.
        We offer various options for space excursions.
      </p>

      <input id="read-more" type="checkbox" className="info__checkbox" />
      <p className="info__text info__text--hidden">
        You can choose a short space trip that will allow you to see the Earth from space, experience zero gravity
        and take a walk in open space.
        Or you can choose a long space journey that will allow you to visit other planets, explore their surface and
        atmosphere, and see the beauty of the universe.
        We offer a variety of space tours that will suit both beginners and experienced astronauts.
        Our team will help you choose the best option for your space journey and make sure that you have an
        unforgettable experience.
        So don't miss your chance to go on a space journey and discover the wonders of the universe with us!
      </p>
      <label className="info__checkbox-label" htmlFor="read-more" role="button" />
    </section>
  );
}

export default Info;
