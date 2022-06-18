import BounceLoader from 'react-spinners/BounceLoader';

function Spinner() {
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <BounceLoader size={60} color="#38bdf8" />
    </div>
  );
}

export default Spinner;
