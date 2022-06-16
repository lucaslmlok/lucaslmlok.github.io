import { Element } from 'react-scroll';
import { HiCode } from 'react-icons/hi';

import Section from '../components/Section';
import Container from '../components/Container';
import Title from '../components/Title';
import Text from '../components/Text';

import IconReact from '../assets/images/skills/react.svg';
import IconRedux from '../assets/images/skills/redux.svg';
import IconTypescript from '../assets/images/skills/typescript.svg';
import IconNextjs from '../assets/images/skills/nextjs.svg';
import IconApollo from '../assets/images/skills/apollo.svg';
import IconAngular from '../assets/images/skills/angular.svg';
import IconSvelte from '../assets/images/skills/svelte.svg';
import IconBootstrap from '../assets/images/skills/bootstrap.svg';
import IconTailwind from '../assets/images/skills/tailwind.svg';
import IconSass from '../assets/images/skills/sass.svg';
import IconNodejs from '../assets/images/skills/nodejs.svg';
import IconJquery from '../assets/images/skills/jquery.svg';
import IconPhp from '../assets/images/skills/php.svg';
import IconPostgresql from '../assets/images/skills/postgresql.svg';
import IconMysql from '../assets/images/skills/mysql.svg';
import IconMongodb from '../assets/images/skills/mongodb.svg';
import IconRedis from '../assets/images/skills/redis.svg';
import IconFirebase from '../assets/images/skills/firebase.svg';

const skillList = [
  { title: 'Typescript', icon: IconTypescript },
  { title: 'React', icon: IconReact },
  { title: 'Redux', icon: IconRedux },
  { title: 'Next.js', icon: IconNextjs },
  { title: 'Apollo', icon: IconApollo },
  { title: 'Angular', icon: IconAngular },
  { title: 'Svelte', icon: IconSvelte },
  { title: 'Bootstrap', icon: IconBootstrap },
  { title: 'Tailwind', icon: IconTailwind },
  { title: 'Sass', icon: IconSass },
  { title: 'Node.js', icon: IconNodejs },
  { title: 'jQuery', icon: IconJquery },
  { title: 'PHP', icon: IconPhp },
  { title: 'PostgreSQL', icon: IconPostgresql },
  { title: 'MySQL', icon: IconMysql },
  { title: 'MongoDB', icon: IconMongodb },
  { title: 'Redis', icon: IconRedis },
  { title: 'Firebase', icon: IconFirebase },
];

function Skills() {
  return (
    <Element name="skills">
      <Section customClass="bg-gradient-to-b">
        <Container>
          <Title>
            <HiCode size={35} className="mr-3 text-sky-500/75" />
            Tech Skills
          </Title>
          <Text>For those who want to know more technically...</Text>
          <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-7 mt-16">
            {skillList.map(({ title, icon }) => (
              <li
                key={title}
                className="bg-sky-100/50 flex flex-col items-center rounded-3xl py-6 px-2 group transition-colors hover:bg-sky-100/80 sm:py-6 sm:px-2"
              >
                <img
                  src={icon}
                  alt={title}
                  className="object-contain w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-[1.1]"
                />
                <span className="text-sky-900 font-semibold">{title}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </Element>
  );
}

export default Skills;
