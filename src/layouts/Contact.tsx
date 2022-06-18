import { Element } from 'react-scroll';
import { HiChat, HiOutlineMail } from 'react-icons/hi';
// import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

import Container from '../components/Container';
import Section from '../components/Section';
import Title from '../components/Title';
import Text from '../components/Text';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <Element name="contact">
      <Section customClass="contact pb-0">
        <Container>
          <div className="mt-36 mb-12">
            <Title>
              <HiChat size={35} className="mr-3 text-cyan-500/75" />
              Let&apos;s get in touch
            </Title>
            <div className="mt-14 flex flex-col lg:flex-row lg:gap-x-12">
              <div className="mt-10 flex flex-col items-center text-left">
                <div className="w-full max-w-3xl">
                  <h3 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-2xl xl:text-3xl">
                    In need of a Web / App Developer?
                  </h3>
                  <Text customClass="mt-8 mb-6 font-semibold text-xl text-slate-700 tracking-tight">
                    <span className="relative mr-4 inline-flex h-4 w-4">
                      <span className="ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex h-4 w-4 rounded-full bg-cyan-500" />
                    </span>
                    I’m currently available for freelance work.
                  </Text>

                  <div className="mt-6 mb-2 flex gap-x-8">
                    <a
                      href="mailto:lucas.lmlok@gamil.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center rounded-full bg-white p-4 text-slate-700/60 transition-colors hover:text-indigo-700"
                      aria-label="email"
                    >
                      <HiOutlineMail size="1.75em" />
                    </a>
                    <a
                      href="https://github.com/lucaslmlok"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center rounded-full bg-white p-4 text-slate-700/60 transition-colors hover:text-slate-700"
                      aria-label="github"
                    >
                      <FiGithub size="1.75em" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-1 flex-col items-center lg:items-end">
                <ContactForm />
              </div>
            </div>
          </div>

          <Footer />
        </Container>
      </Section>
    </Element>
  );
}

export default Contact;
