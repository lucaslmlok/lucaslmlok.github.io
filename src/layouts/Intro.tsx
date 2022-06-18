import Typewriter from 'typewriter-effect';
import { FaAngleRight } from 'react-icons/fa';
import Container from '../components/Container';
import Section from '../components/Section';
import Text from '../components/Text';
import Button from '../components/Button';
import * as Scroll from '../helpers/scroll';
import Profile from '../assets/images/profile.webp';

const typewriterOptions = {
  strings: ['React.', 'Next.js.', 'Angular.', 'Tailwind CSS.'],
  autoStart: true,
  loop: true,
  wrapperClassName: 'text-blue-700 font-bold text-3xl lg:text-4xl',
  cursorClassName: 'text-blue-800',
};

function Intro() {
  return (
    <Section customClass="intro">
      <Container>
        <div className="mt-12 flex flex-col items-start justify-between text-left tracking-tight lg:mt-20 lg:flex-row">
          <div className="mt-10">
            <Text customClass="text-slate-600/90 font-medium text-xl sm:text-2xl">
              Hi there, I&apos;m Lucas Lo 👋
            </Text>
            <h1 className="my-4 text-4xl font-extrabold leading-[3rem] text-slate-900 sm:my-6 sm:text-5xl xl:text-6xl">
              Front-end Developer
            </h1>
            <div className="max-w-xl text-2xl font-medium !leading-relaxed text-slate-600/90 sm:text-3xl">
              Specialized in creating well-polished user interfaces
              <br />
              using <Typewriter options={typewriterOptions} />
            </div>

            <div className="mt-14">
              <Button
                customClass="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 before:bg-gradient-to-r before:from-cyan-600/90 before:to-blue-600/90 sm:mr-4"
                onClick={Scroll.scrollToProjects}
              >
                View my work
                <FaAngleRight size={18} className="button-icon" />
              </Button>

              <Button
                customClass="mt-4 shadow-none text-slate-600 sm:mt-0"
                onClick={Scroll.scrollToContact}
              >
                Get in touch
                <FaAngleRight size={18} className="button-icon" />
              </Button>
            </div>
          </div>

          <div className="mt-20 w-[90%] max-w-[24rem] flex-1 self-center lg:mt-0 lg:w-auto lg:self-auto">
            <div className="relative -translate-x-3 sm:translate-x-0">
              <div className="absolute inset-0 translate-x-6 translate-y-4 sm:translate-x-10">
                <div className="profile after:content-none" />
              </div>
              <div className="profile-img">
                <div className="profile">
                  <img
                    className="absolute inset-0 h-full w-full scale-110 object-cover brightness-110 contrast-[1.1]"
                    src={Profile}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Intro;
