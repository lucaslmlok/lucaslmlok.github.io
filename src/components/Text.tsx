type Props = {
  customClass?: string;
  children: React.ReactChild | React.ReactChild[];
};

function Text({ customClass = '', children }: Props) {
  return <p className={`text-slate-700 text-lg ${customClass}`}>{children}</p>;
}

export default Text;
