import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
import Container from "../components/Container";
import useOutside from "../hooks/useOutside";
import * as Scroll from "../helpers/scroll";
import Logo from "../assets/images/logo.svg";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const wrapperRef = useRef(null);
    useOutside(wrapperRef, () => setMenuOpened(false));

    const bgColor = menuOpened ? "bg-white" : "bg-white/90";

    return (
        <header
            ref={wrapperRef}
            className={`fixed z-30 top-0 left-0 w-full backdrop-blur-lg shadow-sm ${bgColor}`}
        >
            <Container>
                <div className="flex justify-between items-center py-4 sm:py-5">
                    <button
                        onClick={Scroll.scrollToTop}
                        className="cursor-pointer"
                    >
                        <div className="group flex items-center gap-x-4 text-sky-500 font-black text-2xl">
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
                                    spy={true}
                                    smooth={true}
                                    isDynamic={true}
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
                                    spy={true}
                                    smooth={true}
                                    isDynamic={true}
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
                                    spy={true}
                                    smooth={true}
                                    isDynamic={true}
                                    offset={40}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button
                        className="text-blue-600 sm:hidden"
                        onClick={() => setMenuOpened(!menuOpened)}
                    >
                        <IoMenu size={32} />
                    </button>
                </div>
            </Container>

            <CSSTransition
                in={menuOpened}
                timeout={400}
                classNames="mobile-menu"
            >
                <div className="absolute w-full bg-white/100 backdrop-blur-lg shadow-sm max-h-0 overflow-hidden">
                    <Container>
                        <nav className="mb-7">
                            <ul className="text-lg font-semibold tracking-tight text-slate-700">
                                <li className="my-4">
                                    <button
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
};

export default Header;
