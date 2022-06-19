import { BiChevronRight } from 'react-icons/bi';
import { VscGlobe } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import screenshot from '../../assets/images/projects/upbeat.webp';
import PROJECTS from '../../config/projects';

function Slide() {
  return (
    <Link to={`/project/${PROJECTS.UPBEAT}`}>
      <div className="project group">
        <img
          src={screenshot}
          alt=""
          className="absolute top-24 left-1/2 w-5/6 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:lg:scale-[1.02]"
        />
        <div className="project-tag-container">
          <span className="project-tag">
            <VscGlobe size={20} className="mr-1" />
            website
          </span>
        </div>
        <div className="project-header">Upbeat Media</div>
        <h3 className="project-title">Student Ambassador Programme</h3>
        <div className="project-view">
          view the site <BiChevronRight size={20} className="mt-[0.1rem]" />
        </div>
      </div>
    </Link>
  );
}

export default Slide;
