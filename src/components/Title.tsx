type Props = {
  children: React.ReactChild | React.ReactChild[];
};

function Title({ children }: Props) {
  return (
    <h2 className="my-6 flex items-center justify-center text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
      {children}
    </h2>
  );
}

export default Title;
