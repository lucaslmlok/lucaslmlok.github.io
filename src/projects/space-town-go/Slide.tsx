import { BiChevronRight } from 'react-icons/bi';
import { FiBookOpen } from 'react-icons/fi';
import { GrGamepad } from 'react-icons/gr';
import { VscGlobe } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import screenshot1 from '../../assets/images/projects/spacetown_1.webp';
import screenshot2 from '../../assets/images/projects/spacetown_2.webp';
import PROJECTS from '../../config/projects';

function Slide() {
  return (
    <Link to={`/project/${PROJECTS.SPACE_TOWN_GO}`}>
      <div className="project group">
        <img
          src={screenshot1}
          alt=""
          className="absolute top-28 left-14 w-3/4 transition-all duration-500 ease-in-out group-hover:left-10"
        />
        <img
          src={screenshot2}
          alt=""
          className="absolute top-60 -right-[10%] w-3/4 transition-all duration-500 ease-in-out group-hover:-right-[5%]"
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
        <div className="project-header">Hong Kong Education City</div>
        <h3 className="project-title">Space Town Go!</h3>
        <div className="project-view">
          view the site <BiChevronRight size={20} className="mt-[0.1rem]" />
        </div>
      </div>
    </Link>
  );
}

export default Slide;
