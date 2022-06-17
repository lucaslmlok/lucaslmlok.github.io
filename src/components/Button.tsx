import { FC } from 'react';

type Props = {
  customClass?: string;
  isSubmit?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

// eslint-disable-next-line react/function-component-definition
const Button: FC<Props> = ({
  customClass = '',
  isSubmit = false,
  onClick,
  children,
}) => (
  <button
    type={isSubmit ? 'submit' : 'button'}
    className={`button ${customClass}`}
    onClick={onClick}
  >
    <span className="button-inner">{children}</span>
  </button>
);

export default Button;
