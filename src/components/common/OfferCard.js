import clsx from 'clsx';

import Button from './Button';

import './OfferCard.scss';

function OfferCard({ className, backgroundVariant = 1, title, subtitle }) {
  return (
    <div className={clsx('offer-card', `offer-card--background-${backgroundVariant}`, className)}>
      <p className="offer-card__title">{title}</p>
      <p className="offer-card__subtitle">{subtitle}</p>

      <Button element="a" variant="secondary" href="/">Learn More</Button>
    </div>
  );
}

export default OfferCard;
