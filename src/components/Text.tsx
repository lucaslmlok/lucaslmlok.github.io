type Props = {
  customClass?: string;
  children: React.ReactChild | React.ReactChild[];
};

function Text({ customClass = '', children }: Props) {
  return <p className={`text-lg text-slate-700 ${customClass}`}>{children}</p>;
}

export default Text;
