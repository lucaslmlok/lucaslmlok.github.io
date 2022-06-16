type Props = {
  customClass?: string;
  children: React.ReactNode;
};

function Section({ customClass = '', children }: Props) {
  return (
    <section className={`py-20 text-center ${customClass}`}>{children}</section>
  );
}

export default Section;
