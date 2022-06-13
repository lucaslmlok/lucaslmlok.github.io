import { FC } from "react";

type Props = {
    customClass?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<Props> = ({ customClass = "", onClick, children }) => {
    return (
        <button className={`button ${customClass}`} onClick={onClick}>
            <span className="button-inner">{children}</span>
        </button>
    );
};

export default Button;
