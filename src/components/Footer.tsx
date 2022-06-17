import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

function Footer() {
  return (
    <ul className="inline-flex flex-col items-center gap-y-1 py-5 font-medium text-slate-600 lg:flex-row">
      <li className="after:mx-3 after:hidden after:content-['|'] lg:after:inline-block">
        @{year} ManLok Lo
      </li>
      <li>
        <Link to="/terms" className="hover:text-slate-900">
          Terms and Conditions
        </Link>
      </li>
    </ul>
  );
}

export default Footer;
