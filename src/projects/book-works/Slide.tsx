import { BiChevronRight } from 'react-icons/bi';
import { FiBookOpen } from 'react-icons/fi';
import { GrGamepad } from 'react-icons/gr';
import { VscGlobe } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import screenshot from '../../assets/images/projects/bookworks.webp';
import PROJECTS from '../../config/projects';

function Slide() {
  return (
    <Link to={`/project/${PROJECTS.BOOKWORKS}`}>
      <div className="project group">
        <img
          src={screenshot}
          alt=""
          className="absolute top-24 -right-1/4 w-full transition-all duration-1000 ease-in-out group-hover:right-0 md:top-16"
        />
        <div className="project-tag-container">
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
        <div className="project-header">Hong Kong Education Bureau</div>
        <h3 className="project-title">Book Works Reading Site</h3>
        <div className="project-view">
          view the site <BiChevronRight size={20} className="mt-[0.1rem]" />
        </div>
      </div>
    </Link>
  );
}

export default Slide;
