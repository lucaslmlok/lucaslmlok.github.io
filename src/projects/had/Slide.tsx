import { BiChevronRight } from 'react-icons/bi';
import { VscGlobe } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import screenshot from '../../assets/images/projects/had.webp';
import PROJECTS from '../../config/projects';

function Slide() {
  return (
    <Link to={`/project/${PROJECTS.HAD}`}>
      <div className="project group">
        <img
          src={screenshot}
          alt="Home Affairs Department"
          className="-left-1/5 absolute top-14 w-full -translate-x-9 transition-transform duration-500 ease-in-out lg:top-6 group-hover:lg:scale-[1.02]"
        />
        <div className="project-tag-container">
          <span className="project-tag">
            <VscGlobe size={20} className="mr-1" />
            website
          </span>
        </div>
        <div className="project-header">The Government of HKSAR</div>
        <h3 className="project-title">Home Affairs Department</h3>
        <div className="project-view">
          view the site <BiChevronRight size={20} className="mt-[0.1rem]" />
        </div>
      </div>
    </Link>
  );
}

export default Slide;
