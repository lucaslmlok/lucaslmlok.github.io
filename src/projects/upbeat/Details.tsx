import { Helmet } from 'react-helmet-async';
import { VscGlobe } from 'react-icons/vsc';
import { FaAngleRight } from 'react-icons/fa';
import Text from '../../components/Text';
import screenshot from '../../assets/images/projects/upbeat.webp';
import IconPhp from '../../assets/images/skills/php.svg';
import IconJquery from '../../assets/images/skills/jquery.svg';
import IconSass from '../../assets/images/skills/sass.svg';
import { SkillItem } from '../../layouts/Skills';
import Button from '../../components/Button';
import renderTitle from '../../config/helmet';

const title = 'Upbeat Media - Student Ambassador Programme';
const url = 'https://www.upbeatmediahk.com/studentprogram/en/';

function Details() {
  return (
    <div className="details">
      <Helmet>
        <title>{renderTitle(title, false)}</title>
      </Helmet>

      <div className="details-content">
        <h2 className="details-company">Upbeat Media</h2>
        <h1 className="details-title">Student Ambassador Programme</h1>

        <div className="details-tag">
          <span className="project-tag">
            <VscGlobe size={20} className="mr-1" />
            website
          </span>
        </div>

        <Text customClass="my-6">
          The website of Upbeat Student Ambassador Programme
        </Text>

        <h3 className="details-subtitle">My Work Included:</h3>
        <ul>
          <li className="work-part">
            <div className="work-subtitle">💻 Website:</div>
            <ul className="details-list">
              <li>
                Transformed design templates to interactive websites with
                beautiful UIs using HTML, CSS (SASS) and Javascript (jQuery)
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
          <img className="mx-auto w-full" src={screenshot} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Details;
