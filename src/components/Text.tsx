import { FC } from "react";

type Props = {
    customClass?: string;
};

const Text: FC<Props> = ({ customClass = "", children }) => {
    return <p className={`text-slate-700 text-lg ${customClass}`}>{children}</p>;
};

export default Text;
