import { GrGamepad } from 'react-icons/gr';
import { FaAngleRight, FaAppStore } from 'react-icons/fa';
import Text from '../../components/Text';
import screenshot from '../../assets/images/projects/hkecds.png';
import icon from '../../assets/images/projects/hkecds_icon.png';
import IconReact from '../../assets/images/skills/react.svg';
import IconRedux from '../../assets/images/skills/redux.svg';
import { SkillItem } from '../../layouts/Skills';
import Button from '../../components/Button';

const url = 'https://appadvice.com/app/hkecds/1531076625';

function Details() {
  return (
    <div className="details">
      <div className="details-content">
        <h2 className="details-company">The University of Hong Kong</h2>
        <h1 className="details-title">
          The Hong Kong Early Child Development Scale
        </h1>

        <div className="details-tag">
          <span className="project-tag">
            <FaAppStore size={20} className="mr-1" />
            ios app
          </span>
          <span className="project-tag">
            <GrGamepad size={20} className="mr-1 invert" />
            interactive games
          </span>
        </div>

        <Text customClass="my-6">
          The HKECDS is the first early child development scale which considers
          both the holistic development of preschool children and incorporates
          current expectations of early child development in Hong Kong
        </Text>

        <h3 className="details-subtitle">My Work Included:</h3>
        <ul>
          <li className="work-part">
            <div className="work-subtitle">📱 iOS App:</div>
            <ul className="details-list">
              <li>
                Developed an iPad specific app with login system for assessing
                preschool children
              </li>
              <li>
                Uploaded live result data and generated test reports to server
                for further evaluation
              </li>
              <li>
                Designed and built different types of tests with features
                including drag-and-drop, drawing board, etc.
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
          className="mt-8 mb-10 inline-block"
        >
          <Button
            customClass="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 before:bg-gradient-to-r before:from-cyan-600/90 before:to-blue-600/90 sm:mr-4"
            onClick={() => {}}
          >
            Visit the app
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
          <img className="mx-auto w-full" src={screenshot} alt="" />
          <img
            className="absolute -top-5 left-2 mx-auto w-1/4"
            src={icon}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Details;
