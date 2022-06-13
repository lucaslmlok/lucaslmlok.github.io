import { FC } from "react";

const Container: FC = ({ children }) => {
    return (
        <div className="mx-auto px-6 lg:px-12 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
            {children}
        </div>
    );
};

export default Container;
