import { BiChevronRight } from 'react-icons/bi';
import { FaAppStore } from 'react-icons/fa';
import { RiAndroidLine } from 'react-icons/ri';
import screenshot1 from '../../assets/images/projects/myspfe_1.png';
import screenshot2 from '../../assets/images/projects/myspfe_2.png';

function Slide() {
  return (
    <a
      href="https://apps.apple.com/app/myspfe/id1552990622?l=en"
      target="_blank"
      rel="noreferrer"
    >
      <div className="project group">
        <div className="absolute top-[4.5rem] w-full h-1/2 flex justify-center items-start overflow-hidden project-img-fade-container md:top-[5.6rem] md:h-3/5">
          <img
            src={screenshot1}
            alt=""
            className="absolute z-10 top-0 left-4 w-1/2 mt-3 transition-all duration-500 ease-in-out group-hover:left-0"
          />
          <img
            src={screenshot2}
            alt=""
            className="absolute top-5 left-1/3 w-1/2 mt-3 transition-all duration-500 ease-in-out group-hover:left-[36%]"
          />
        </div>
        <div className="project-tag-container">
          <span className="project-tag">
            <FaAppStore size={20} className="mr-1" />
            ios app
          </span>
          <span className="project-tag">
            <RiAndroidLine size={20} className="mr-1" />
            android app
          </span>
        </div>
        <div className="project-header">
          The Education University of Hong Kong
        </div>
        <h3 className="project-title">
          School Partnership and Field Experience Office
        </h3>
        <div className="project-view">
          view the app <BiChevronRight size={20} className="mt-[0.1rem]" />
        </div>
      </div>
    </a>
  );
}

export default Slide;
