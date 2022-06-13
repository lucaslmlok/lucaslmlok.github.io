import { FC } from "react";

type Props = {
    customClass: string;
};

const SubTitle: FC<Props> = ({ customClass, children }) => {
    return <h3 className={`mt-8 font-semibold ${customClass}`}>{children}</h3>;
};

export default SubTitle;
