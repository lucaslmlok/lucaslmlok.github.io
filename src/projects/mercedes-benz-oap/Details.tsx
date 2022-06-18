import { RiListSettingsLine } from 'react-icons/ri';
import { VscGlobe } from 'react-icons/vsc';
import { FaAngleRight } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import Text from '../../components/Text';
import screenshot from '../../assets/images/projects/mercedes_benz.png';
import IconAngular from '../../assets/images/skills/angular.svg';
import IconPhp from '../../assets/images/skills/php.svg';
import IconBootstrap from '../../assets/images/skills/bootstrap.svg';
import IconChartjs from '../../assets/images/skills/chartjs.svg';
import { SkillItem } from '../../layouts/Skills';
import Button from '../../components/Button';

const url = 'https://www.mb.zungfu.com/aftersales/2/front/en/';

function Details() {
  return (
    <div className="details">
      <div className="details-content">
        <h2 className="details-company">Mercedes-Benz Hong Kong</h2>
        <h1 className="details-title">Online Aftersales Platform</h1>

        <div className="details-tag">
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

        <Text customClass="my-6">
          The website provides a sophisticated booking system of maintenance and
          repair for wide ranging Mercedes-Benz cars. Customers can browse, book
          and pay various services with selecting their preferable car models,
          repair centers, booking time.
        </Text>

        <Text customClass="my-6">
          Membership, credit System and other promotion features are introduced
          to help create strong customer relationships.
        </Text>

        <h3 className="details-subtitle">My Work Included:</h3>
        <ul>
          <li className="work-part">
            <div className="work-subtitle">💻 Website:</div>
            <ul className="details-list">
              <li>
                Developed websites followed Mercedes-Benz style and design
              </li>
              <li>
                Built a service booking system with available service centers,
                time and service advisor dynamically configured by the CMS
              </li>
              <li>Contributed to the membership and credit system</li>
            </ul>
          </li>

          <li className="work-part">
            <div className="work-subtitle">🧑‍💼 Content Management System:</div>
            <ul className="details-list">
              <li>
                Developed CMS for staff to manage service appointment, orders,
                payment and recipes
              </li>
              <li>
                Introduced interactive dashboard with charts for data
                visualization and analysis
              </li>
              <li>
                Provided a booking admin system to configure the availability of
                any specific service centers and corresponding advisors
              </li>
            </ul>
          </li>
        </ul>

        <Text customClass="mt-12 font-medium">Powered by:</Text>
        <ul className="my-4 flex flex-wrap gap-4">
          <SkillItem size="small" title="Angular" icon={IconAngular} />
          <SkillItem size="small" title="Bootstrap" icon={IconBootstrap} />
          <SkillItem size="small" title="Chart.js" icon={IconChartjs} />
          <SkillItem size="small" title="PHP" icon={IconPhp} />
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
            Visit the site
            <FaAngleRight size={18} className="button-icon" />
          </Button>
        </a>
      </div>

      <div className="flex-1">
        <a href={url} target="_blank" rel="noreferrer">
          <img
            className="mx-auto w-full max-w-[20rem]"
            src={screenshot}
            alt="Hyundai Hong Kong Click to Buy"
          />
        </a>
      </div>
    </div>
  );
}

export default Details;
