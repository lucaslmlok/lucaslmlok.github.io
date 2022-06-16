type Props = {
  customClass: string;
  children: React.ReactChild;
};

function SubTitle({ customClass, children }: Props) {
  return <h3 className={`mt-8 font-semibold ${customClass}`}>{children}</h3>;
}

export default SubTitle;
