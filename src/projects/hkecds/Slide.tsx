import { BiChevronRight } from 'react-icons/bi';
import { FaAppStore } from 'react-icons/fa';
import { GrGamepad } from 'react-icons/gr';
import screenshot from '../../assets/images/projects/hkecds.png';
import icon from '../../assets/images/projects/hkecds_icon.png';

function Slide() {
  return (
    <a
      href="https://apps.apple.com/app/hkecds/id1531076625?l=en"
      target="_blank"
      rel="noreferrer"
    >
      <div className="project group">
        <img src={icon} alt="" className="absolute top-20 left-4 z-10 w-36" />
        <img
          src={screenshot}
          alt=""
          className="absolute top-24 left-1/2 w-11/12 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="project-tag-container">
          <span className="project-tag">
            <FaAppStore size={20} className="mr-1" />
            ios app
          </span>
          <span className="project-tag">
            <GrGamepad size={20} className="mr-1 invert" />
            interactive games
          </span>
        </div>
        <div className="project-header">The University of Hong Kong</div>
        <h3 className="project-title">
          The Hong Kong Early Child Development Scale
        </h3>
        <div className="project-view">
          view the app <BiChevronRight size={20} className="mt-[0.1rem]" />
        </div>
      </div>
    </a>
  );
}

export default Slide;
