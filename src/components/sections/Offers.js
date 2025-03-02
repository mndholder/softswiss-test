import OfferCard from '../common/OfferCard';

import './Offers.scss';

function Offers() {
  return (
    <section className="offers">
      <h2 className="offers__title">Offers</h2>

      <div className="offers__grid">
        <OfferCard
          className="offers__card offers__card--large"
          backgroundVariant={1}
          title="Move the borders of reality!"
          subtitle="Go on a space adventure"
        />

        <OfferCard
          className="offers__card"
          backgroundVariant={2}
          title="Space is not just stars and planets"
          subtitle="it is a majestic journey to"
        />

        <OfferCard
          className="offers__card"
          backgroundVariant={3}
          title="For those who dream of stars"
          subtitle="Our offer: make your dream come true"
        />

        <OfferCard
          className="offers__card offers__card--large"
          backgroundVariant={4}
          title="Fulfill your fantastic dreams"
          subtitle="Space has never been so close"
        />
      </div>
    </section>
  );
}

export default Offers;
