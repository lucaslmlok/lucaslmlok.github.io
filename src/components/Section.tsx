import { FC } from "react";

type Props = {
    customClass?: string;
};

const Section: FC<Props> = ({ customClass = "", children }) => {
    return (
        <section className={`py-20 text-center ${customClass}`}>
            {children}
        </section>
    );
};

export default Section;
