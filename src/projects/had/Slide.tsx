import { BiChevronRight } from 'react-icons/bi';
import { VscGlobe } from 'react-icons/vsc';
import screenshot from '../../assets/images/projects/had.png';

function Slide() {
  return (
    <a href="https://www.had.gov.hk/" target="_blank" rel="noreferrer">
      <div className="project group">
        <img
          src={screenshot}
          alt="Home Affairs Department"
          className="absolute top-14 -left-1/5 w-full -translate-x-9 transition-transform duration-500 ease-in-out group-hover:scale-[1.02] lg:top-6"
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
    </a>
  );
}

export default Slide;
