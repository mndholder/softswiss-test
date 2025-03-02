import clsx from 'clsx';

import './Button.scss';

function Button(props) {
  const { children, variant = 'primary', ...rest } = props;

  return (
    <button className={clsx('application-button', `application-button--${variant}`)} {...rest}>
      {props.children}
    </button>
  );
}

export default Button;
