type Props = {
  children: React.ReactNode;
};

function PageWrapper({ children }: Props) {
  return <div className="pt-32 pb-14">{children}</div>;
}

export default PageWrapper;
