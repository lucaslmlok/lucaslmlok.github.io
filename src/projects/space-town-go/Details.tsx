import { Helmet } from 'react-helmet-async';
import { VscGlobe } from 'react-icons/vsc';
import { FaAngleRight } from 'react-icons/fa';
import { GrGamepad } from 'react-icons/gr';
import { FiBookOpen } from 'react-icons/fi';
import Text from '../../components/Text';
import screenshot1 from '../../assets/images/projects/spacetown_1.webp';
import screenshot2 from '../../assets/images/projects/spacetown_2.webp';
import IconReact from '../../assets/images/skills/react.svg';
import IconRedux from '../../assets/images/skills/redux.svg';
import IconStyledComponents from '../../assets/images/skills/styled-components.svg';
import { SkillItem } from '../../layouts/Skills';
import renderTitle from '../../config/helmet';
import Button from '../../components/Button';

const title = 'Hong Kong Education City - Space Town Go!';
const url = 'https://nets.edb.hkedcity.net/spacetowngo/';

function Details() {
  return (
    <div className="details">
      <Helmet>
        <title>{renderTitle(title, false)}</title>
      </Helmet>

      <div className="details-content">
        <h2 className="details-company">Hong Kong Education City</h2>
        <h1 className="details-title">Space Town Go!</h1>

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
          Space Town Go is easily accessible online learning platform with over
          200 story and letter books, Space Town Go also has entirely
          interactive new games for students to play and practice their phonics
          learning with.
        </Text>

        <h3 className="details-subtitle">My Work Included:</h3>
        <ul>
          <li className="work-part">
            <div className="work-subtitle">💻 Website:</div>
            <ul className="details-list">
              <li>
                Developed desktop and mobile devices friendly HTML5 games with
                audios and animations to make learning fun
              </li>
              <li>
                Completely responsive and interactive games, such as drag and
                drop, to mimic truly a native app experience
              </li>
            </ul>
          </li>
        </ul>

        <Text customClass="mt-12 font-medium">Powered by:</Text>
        <ul className="my-4 flex flex-wrap gap-4">
          <SkillItem size="small" title="React" icon={IconReact} />
          <SkillItem size="small" title="Redux" icon={IconRedux} />
          <SkillItem
            size="small"
            title="Styled Components"
            icon={IconStyledComponents}
          />
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
            Visit the site
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
          <img className="mx-auto w-[90%]" src={screenshot1} alt="" />
          <img className="mx-auto mt-10 w-[90%]" src={screenshot2} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Details;
