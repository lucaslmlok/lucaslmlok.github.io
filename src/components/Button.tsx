import { FC } from 'react';

type Props = {
  customClass?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

// eslint-disable-next-line react/function-component-definition
const Button: FC<Props> = ({ customClass = '', onClick, children }) => (
  <button type="button" className={`button ${customClass}`} onClick={onClick}>
    <span className="button-inner">{children}</span>
  </button>
);

export default Button;
