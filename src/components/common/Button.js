import clsx from 'clsx';

import './Button.scss';

function Button({ element = 'button', ...props }) {
  const { children, variant = 'primary', ...rest } = props;

  const Element = element;

  return (
    <Element className={clsx('application-button', `application-button--${variant}`)} {...rest}>
      {props.children}
    </Element>
  );
}

export default Button;
