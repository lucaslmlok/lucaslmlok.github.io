import { BiCalendar, BiChevronRight } from 'react-icons/bi';
import { RiListSettingsLine } from 'react-icons/ri';
import { VscGlobe } from 'react-icons/vsc';
import screenshot from '../../assets/images/projects/mercedes_benz.png';

function Slide() {
  return (
    <a
      href="https://www.mb.zungfu.com/aftersales/2/front/en/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="project group">
        <div className="project-img-fade-container absolute top-[5.6rem] left-0 flex h-3/5 w-full items-start justify-center overflow-hidden">
          <img
            src={screenshot}
            alt=""
            className="mt-10 w-2/3 transition-all duration-500 ease-in-out group-hover:mt-4 lg:mt-3 lg:w-1/2 lg:group-hover:mt-0"
          />
        </div>
        <div className="project-tag-container">
          <span className="project-tag">
            <VscGlobe size={20} className="mr-1" />
            website
          </span>
          <span className="project-tag">
            <RiListSettingsLine size={20} className="mr-1" />
            cms
          </span>
          <span className="project-tag">
            <BiCalendar size={20} className="mr-1" />
            booking system
          </span>
        </div>
        <div className="project-header">Mercedes-Benz Hong Kong</div>
        <h3 className="project-title">Online Aftersales Platform</h3>
        <div className="project-view">
          view the site <BiChevronRight size={20} className="mt-[0.1rem]" />
        </div>
      </div>
    </a>
  );
}

export default Slide;
