import { BiChevronRight } from 'react-icons/bi';
import { VscGlobe } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import screenshot from '../../assets/images/projects/cityu_cs.webp';
import PROJECTS from '../../config/projects';

function Slide() {
  return (
    <Link to={`/project/${PROJECTS.CITYU_CS}`}>
      <div className="project group">
        <img
          src={screenshot}
          alt=""
          className="absolute top-11 left-1/2 w-11/12 -translate-x-1/2 rotate-3 transition-transform duration-500 ease-in-out group-hover:rotate-0"
        />
        <div className="project-tag-container">
          <span className="project-tag">
            <VscGlobe size={20} className="mr-1" />
            website
          </span>
        </div>
        <div className="project-header">City University of Hong Kong</div>
        <h3 className="project-title">Department of Computer Science</h3>
        <div className="project-view">
          view the site <BiChevronRight size={20} className="mt-[0.1rem]" />
        </div>
      </div>
    </Link>
  );
}

export default Slide;
