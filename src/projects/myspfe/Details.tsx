import { FaAngleRight, FaAppStore } from 'react-icons/fa';
import { RiAndroidLine } from 'react-icons/ri';
import Text from '../../components/Text';
import screenshot1 from '../../assets/images/projects/myspfe_1.png';
import screenshot2 from '../../assets/images/projects/myspfe_2.png';
import IconReact from '../../assets/images/skills/react.svg';
import IconRedux from '../../assets/images/skills/redux.svg';
import { SkillItem } from '../../layouts/Skills';
import Button from '../../components/Button';

const url = 'https://apps.apple.com/app/myspfe/id1552990622?l=en';

function Details() {
  return (
    <div className="details">
      <div className="details-content">
        <h2 className="details-company">City University of Hong Kong</h2>
        <h1 className="details-title">Department of Computer Science</h1>

        <div className="details-tag">
          <span className="project-tag">
            <FaAppStore size={20} className="mr-1" />
            ios app
          </span>
          <span className="project-tag">
            <RiAndroidLine size={20} className="mr-1" />
            android app
          </span>
        </div>

        <Text customClass="my-6">
          MySPFE is an official mobile application provided by School
          Partnership and Field Experience Office (SPFEO), The Education
          University of Hong Kong, specifically for primary and secondary
          schools, EdUHK staff and students.
        </Text>

        <h3 className="details-subtitle">My Work Included:</h3>
        <ul>
          <li className="work-part">
            <div className="work-subtitle">📱 iOS and Android App:</div>
            <ul className="details-list">
              <li>
                Developed a cross-platform native app for reading news and
                announcements
              </li>
              <li>
                Provided push Notifications when any related news or
                announcements posted based on which topic users subscribed in
                app
              </li>
            </ul>
          </li>
        </ul>

        <Text customClass="mt-12 font-medium">Powered by:</Text>
        <ul className="my-4 flex flex-wrap gap-4">
          <SkillItem size="small" title="React Native" icon={IconReact} />
          <SkillItem size="small" title="Redux" icon={IconRedux} />
        </ul>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block"
        >
          <Button
            customClass="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 before:bg-gradient-to-r before:from-cyan-600/90 before:to-blue-600/90 sm:mr-4"
            onClick={() => {}}
          >
            Visit iOS
            <FaAngleRight size={18} className="button-icon" />
          </Button>
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=hk.eduhk.spfeo.myspfe"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block"
        >
          <Button
            customClass="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 before:bg-gradient-to-r before:from-cyan-600/90 before:to-blue-600/90 sm:mr-4"
            onClick={() => {}}
          >
            Visit Android
            <FaAngleRight size={18} className="button-icon" />
          </Button>
        </a>
      </div>

      <div className="flex-1">
        <a
          className="relative transition-opacity hover:opacity-90"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="relative z-10 mx-auto w-1/2"
            src={screenshot1}
            alt=""
          />
          <img
            className="absolute top-10 left-1/2 mx-auto w-1/2"
            src={screenshot2}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Details;
