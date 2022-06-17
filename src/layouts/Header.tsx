import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import useOutside from '../hooks/useOutside';
import * as Scroll from '../helpers/scroll';
import Logo from '../assets/images/logo.svg';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const wrapperRef = useRef<HTMLElement>(null);
  useOutside(wrapperRef, () => setMenuOpened(false));
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const bgColor = menuOpened ? 'bg-white' : 'bg-white/90';

  const onLogoClick = () => {
    if (pathname === '/') {
      Scroll.scrollToTop();
    } else {
      navigate('../', { replace: true });
    }
  };

  return (
    <header
      ref={wrapperRef}
      className={`fixed top-0 left-0 z-30 w-full shadow-sm backdrop-blur-lg ${bgColor}`}
    >
      <Container>
        <div className="flex items-center justify-between py-4 sm:py-5">
          <button
            type="button"
            onClick={onLogoClick}
            className="cursor-pointer"
          >
            <div className="group flex items-center gap-x-4 text-2xl font-black text-sky-500">
              <img
                className="h-10 transition-transform duration-500 group-hover:rotate-12"
                src={Logo}
                alt=""
              />
              LUCAS
            </div>
          </button>
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-x-10 text-lg font-medium text-slate-600 md:gap-x-12 lg:md:gap-x-16 xl:gap-x-20">
              <li>
                <Link
                  className="cursor-pointer"
                  activeClass="text-blue-600 font-semibold"
                  to="projects"
                  spy
                  smooth
                  isDynamic
                  offset={-150}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  activeClass="text-sky-600 font-semibold"
                  to="skills"
                  spy
                  smooth
                  isDynamic
                  offset={-60}
                >
                  Tech Skills
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  activeClass="text-cyan-600 font-semibold"
                  to="contact"
                  spy
                  smooth
                  isDynamic
                  offset={40}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="text-blue-600 sm:hidden"
            onClick={() => setMenuOpened(!menuOpened)}
          >
            <IoMenu size={32} />
          </button>
        </div>
      </Container>

      <CSSTransition in={menuOpened} timeout={400} classNames="mobile-menu">
        <div className="absolute max-h-0 w-full overflow-hidden bg-white/100 shadow-sm backdrop-blur-lg">
          <Container>
            <nav className="mb-7">
              <ul className="text-lg font-semibold tracking-tight text-slate-700">
                <li className="my-4">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpened(false);
                      Scroll.scrollToProjects();
                    }}
                  >
                    Projects
                  </button>
                </li>
                <li className="my-4">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpened(false);
                      Scroll.scrollToSkills();
                    }}
                  >
                    Tech Skills
                  </button>
                </li>
                <li className="my-4">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpened(false);
                      Scroll.scrollToContact();
                    }}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      </CSSTransition>
    </header>
  );
}

export default Header;
