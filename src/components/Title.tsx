import { FC } from "react";

const Title: FC = ({ children }) => {
    return (
        <h2 className="flex justify-center items-center my-6 text-3xl sm:text-4xl text-slate-800 font-extrabold tracking-tight">
            {children}
        </h2>
    );
};

export default Title;
