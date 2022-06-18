import { Link } from 'react-router-dom';
import { VscGlobe } from 'react-icons/vsc';
import { RiListSettingsLine } from 'react-icons/ri';
import { BiChevronRight } from 'react-icons/bi';
import screenshot from '../../assets/images/projects/hyundai_click_to_buy.png';
import PROJECTS from '../../config/projects';

function Slide() {
  return (
    <Link to={`/project/${PROJECTS.HYUNDAI}`}>
      <div className="project group">
        <img
          src={screenshot}
          alt="Hyundai Hong Kong Click to Buy"
          className="-right-1/5 absolute top-14 w-full translate-x-9 transition-transform duration-500 ease-in-out group-hover:scale-[1.02] lg:top-6"
        />
        <div className="project-tag-container">
          <span className="project-tag">
            <VscGlobe size={20} className="mr-1" />
            website
          </span>
          <span className="project-tag">
            <RiListSettingsLine size={20} className="mr-1" />
            cms
          </span>
        </div>
        <div className="project-header">Hyundai Hong Kong</div>
        <h3 className="project-title">
          Click to Buy - Online Car Buying Experience
        </h3>
        <div className="project-view">
          view the site <BiChevronRight size={20} className="mt-[0.1rem]" />
        </div>
      </div>
    </Link>
  );
}

export default Slide;
