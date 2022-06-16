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
            <div className="flex flex-col mt-20 lg:flex-col">
              <div className="text-left mt-10 flex flex-col items-center">
                <div className="max-w-3xl w-full">
                  <h3 className="text-3xl text-slate-900 font-bold tracking-tight">
                    In need of a Web / App Developer?
                  </h3>
                  <Text customClass="mt-8 mb-6 font-semibold text-xl text-slate-700 tracking-tight">
                    <span className="relative inline-flex h-4 w-4 mr-4">
                      <span className="ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500" />
                    </span>
                    I’m currently available for freelance work.
                  </Text>

                  <div className="flex gap-x-8">
                    <a
                      href="mailto:lucas.lmlok@gamil.com"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white rounded-full flex justify-center items-center p-4 text-slate-700/60 transition-colors hover:text-indigo-700"
                    >
                      <HiOutlineMail size="1.75em" />
                    </a>
                    <a
                      href="https://github.com/lucaslmlok"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white rounded-full flex justify-center items-center p-4 text-slate-700/60 transition-colors hover:text-slate-700"
                    >
                      <FiGithub size="1.75em" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center mt-8">
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
