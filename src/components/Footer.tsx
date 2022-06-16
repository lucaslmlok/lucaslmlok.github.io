import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

function Footer() {
  return (
    <ul className="inline-flex flex-col items-center gap-y-1 text-slate-600 font-medium py-5 lg:flex-row">
      <li className="after:content-['|'] after:hidden after:mx-3 lg:after:inline-block">
        @{year} ManLok Lo
      </li>
      <li>
        <Link
          to="/terms-and-conditions"
          target="_blank"
          className="hover:text-slate-900"
        >
          Terms and Conditions
        </Link>
      </li>
    </ul>
  );
}

export default Footer;
