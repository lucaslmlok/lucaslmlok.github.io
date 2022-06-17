import { RiListSettingsLine } from 'react-icons/ri';
import { VscGlobe } from 'react-icons/vsc';
import { FaAngleRight } from 'react-icons/fa';
import Text from '../../components/Text';
import screenshot from '../../assets/images/projects/hyundai_click_to_buy.png';
import IconAngular from '../../assets/images/skills/angular.svg';
import IconPhp from '../../assets/images/skills/php.svg';
import { SkillItem } from '../../layouts/Skills';
import Button from '../../components/Button';

function Details() {
  return (
    <div className="details">
      <div className="details-content">
        <h2 className="details-company">Hyundai Hong Kong</h2>
        <h1 className="details-title">Click to Buy - Online Car Buying</h1>

        <div className="details-tag">
          <span className="project-tag">
            <VscGlobe size={20} className="mr-1" />
            website
          </span>
          <span className="project-tag">
            <RiListSettingsLine size={20} className="mr-1" />
            cms
          </span>
        </div>

        <Text customClass="my-4">
          A online platform that let customer handle the entire car buying
          process from configuring car model, color and any other options to
          pickup location and online deposit payment, in order to provide a more
          convenient, simple and secure experience for customers.
        </Text>

        <h3 className="details-subtitle">My Work Included:</h3>
        <ul>
          <li className="work-part">
            <div className="work-subtitle">🧑 Client Side:</div>
            <ul className="details-list">
              <li>Transformed design templates to interactive website</li>
              <li>
                Handled the session storage throughout the whole buying process
                to ensure a consistent and reliable state for customers
              </li>
              <li>
                Integrated payment gateway to provide a smooth payment
                experience
              </li>
            </ul>
          </li>

          <li className="work-part">
            <div className="work-subtitle">🧑‍💻 Content Management Side:</div>
            <ul className="details-list">
              <li>
                Developed an elegant admin portal for Hyundai staff to handle
                orders and enquires
              </li>
              <li>Generated quotation and other documents in PDF format</li>
              <li>
                Set up email notifications for different departments of Hyundai
                Staff to deal with numerous daily tasks
              </li>
            </ul>
          </li>
        </ul>

        <Text customClass="mt-12">Powered by:</Text>
        <ul className="my-4 flex flex-wrap gap-4">
          <SkillItem size="small" title="Angular" icon={IconAngular} />
          <SkillItem size="small" title="PHP" icon={IconPhp} />
        </ul>

        <a
          href="https://clicktobuy.hyundai.com.hk/"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block"
        >
          <Button
            customClass="bg-gradient-to-r from-blue-600/90 to-cyan-600/90 before:bg-gradient-to-r before:from-cyan-600/90 before:to-blue-600/90 sm:mr-4"
            onClick={() => {}}
          >
            Visit the site
            <FaAngleRight size={18} className="button-icon" />
          </Button>
        </a>
      </div>

      <div className="flex-1">
        <a
          href="https://clicktobuy.hyundai.com.hk/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-full"
            src={screenshot}
            alt="Hyundai Hong Kong Click to Buy"
          />
        </a>
      </div>
    </div>
  );
}

export default Details;
