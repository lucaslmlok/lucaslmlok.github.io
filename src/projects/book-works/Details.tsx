import { GrGamepad } from 'react-icons/gr';
import { FaAngleRight } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';
import { VscGlobe } from 'react-icons/vsc';
import Text from '../../components/Text';
import screenshot from '../../assets/images/projects/bookworks.png';
import IconPhp from '../../assets/images/skills/php.svg';
import IconJquery from '../../assets/images/skills/jquery.svg';
import IconSass from '../../assets/images/skills/sass.svg';
import { SkillItem } from '../../layouts/Skills';
import Button from '../../components/Button';

const url = 'https://bookworks.edb.edcity.hk/en/';

function Details() {
  return (
    <div className="details">
      <div className="details-content">
        <h2 className="details-company">Hong Kong Education Bureau</h2>
        <h1 className="details-title">Book Works Reading Site</h1>

        <div className="details-tag">
          <span className="project-tag">
            <VscGlobe size={20} className="mr-1" />
            website
          </span>
          <span className="project-tag">
            <GrGamepad size={20} className="mr-1 invert" />
            interactive games
          </span>
          <span className="project-tag">
            <FiBookOpen size={20} className="mr-1" />
            ebook
          </span>
        </div>

        <Text customClass="my-6">
          An online learning platform for primary school students in Hong Kong
        </Text>

        <h3 className="details-subtitle">My Work Included:</h3>
        <ul>
          <li className="work-part">
            <div className="work-subtitle">💻 Website:</div>
            <ul className="details-list">
              <li>
                Renovated the Book Works website with eBook online reading and
                mini-games from design templates
              </li>
              <li>
                Improved web accessibility to help web content more accessible
                to individuals with disabilities
              </li>
            </ul>
          </li>
        </ul>

        <Text customClass="mt-12 font-medium">Powered by:</Text>
        <ul className="my-4 flex flex-wrap gap-4">
          <SkillItem size="small" title="PHP" icon={IconPhp} />
          <SkillItem size="small" title="jQuery" icon={IconJquery} />
          <SkillItem size="small" title="Sass" icon={IconSass} />
        </ul>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 mb-10 inline-block"
        >
          <Button
            customClass="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 before:bg-gradient-to-r before:from-cyan-600/90 before:to-blue-600/90 sm:mr-4"
            onClick={() => {}}
          >
            Visit the app
            <FaAngleRight size={18} className="button-icon" />
          </Button>
        </a>
      </div>

      <div className="flex-1">
        <a
          className="transition-opacity hover:opacity-90"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <img className="mx-auto w-full" src={screenshot} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Details;
