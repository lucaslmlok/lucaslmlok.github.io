type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <div className="mx-auto max-w-screen-sm px-6 md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      {children}
    </div>
  );
}

export default Container;
