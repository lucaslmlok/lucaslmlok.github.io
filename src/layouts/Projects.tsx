import { Swiper, SwiperSlide } from "swiper/react";
import { Element } from "react-scroll";
import Container from "../components/Container";
import Section from "../components/Section";
import Title from "../components/Title";
import Text from "../components/Text";

import { HiCollection } from "react-icons/hi";
import { BiCalendar, BiChevronRight } from "react-icons/bi";
import { VscGlobe } from "react-icons/vsc";
import { RiListSettingsLine, RiAndroidLine } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { FiBookOpen } from "react-icons/fi";
import { FaAppStore } from "react-icons/fa";

import hyundaiScreenshot from "../assets/images/projects/hyundai_click_to_buy.png";
import mercedesBenzScreenshot from "../assets/images/projects/mercedes_benz.png";
import cityuCsScreenshot from "../assets/images/projects/cityu_cs.png";
import upbeatScreenshot from "../assets/images/projects/upbeat.png";
import spacetown1Screenshot from "../assets/images/projects/spacetown_1.png";
import spacetown2Screenshot from "../assets/images/projects/spacetown_2.png";
import bookworksScreenshot from "../assets/images/projects/bookworks.png";
import hkecdsScreenshot from "../assets/images/projects/hkecds.png";
import hkecdsIconScreenshot from "../assets/images/projects/hkecds_icon.png";
import hadScreenshot from "../assets/images/projects/had.png";
import myspfe1Screenshot from "../assets/images/projects/myspfe_1.png";
import myspfe2Screenshot from "../assets/images/projects/myspfe_2.png";

const swiperBreakpoints = {
  768: {
    spaceBetween: 36,
    slidesPerView: 1.5,
  },
  1024: {
    spaceBetween: 42,
    slidesPerView: 2,
  },
  1280: {
    spaceBetween: 42,
    slidesPerView: 2.75,
  },
  1536: {
    spaceBetween: 45,
    slidesPerView: 3.5,
  },
  2130: {
    spaceBetween: 45,
    slidesPerView: 4.5,
  },
  2750: {
    spaceBetween: 45,
    slidesPerView: 5,
  },
};

const Projects = () => {
  return (
    <Element name="projects">
      <Section customClass="bg-gradient-to-b from-white to-blue-50/50 pt-0">
        <Container>
          <Title>
            <HiCollection size={35} className="mr-3 text-blue-500/75" />
            Projects
          </Title>
          <Text>
            Software Solutions (Websites, Apps, Saas) for various industries
            which are visually pleasing and easy to use.
          </Text>
        </Container>
        <Swiper
          className="mt-16 mb-10 project-swiper"
          spaceBetween={18}
          slidesPerView={1.2}
          centeredSlides
          loop
          breakpoints={swiperBreakpoints}
        >
          <SwiperSlide>
            <a
              href="https://clicktobuy.hyundai.com.hk"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project group">
                <img
                  src={hyundaiScreenshot}
                  alt="Hyundai Hong Kong Click to Buy"
                  className="absolute top-14 -right-1/5 w-full translate-x-9 transition-transform duration-500 ease-in-out group-hover:scale-[1.02] lg:top-6"
                />
                <div className="project-tag-container">
                  <span className="project-tag">
                    <VscGlobe size={20} className="mr-1" />
                    website
                  </span>
                  <span className="project-tag">
                    <RiListSettingsLine size={20} className="mr-1" />
                    cms
                  </span>
                </div>
                <div className="project-header">Hyundai Hong Kong</div>
                <h3 className="project-title">
                  Click to Buy - Online Car Buying Experience
                </h3>
                <div className="project-view">
                  view the site{" "}
                  <BiChevronRight size={20} className="mt-[0.1rem]" />
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="https://www.mb.zungfu.com/aftersales/2/front/en/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project group">
                <div className="absolute top-[5.6rem] left-0 w-full h-3/5 flex justify-center items-start overflow-hidden project-img-fade-container">
                  <img
                    src={mercedesBenzScreenshot}
                    alt=""
                    className="w-2/3 mt-10 transition-all duration-500 ease-in-out group-hover:mt-4 lg:w-1/2 lg:mt-3 lg:group-hover:mt-0"
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
                  view the site{" "}
                  <BiChevronRight size={20} className="mt-[0.1rem]" />
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="https://nets.edb.hkedcity.net/spacetowngo/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project group">
                <img
                  src={spacetown1Screenshot}
                  alt=""
                  className="absolute top-28 left-14 w-3/4 transition-all duration-500 ease-in-out group-hover:left-10"
                />
                <img
                  src={spacetown2Screenshot}
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
                  view the site{" "}
                  <BiChevronRight size={20} className="mt-[0.1rem]" />
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="https://www.cs.cityu.edu.hk/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project group">
                <img
                  src={cityuCsScreenshot}
                  alt=""
                  className="absolute top-11 left-1/2 -translate-x-1/2 w-11/12 rotate-3 transition-transform duration-500 ease-in-out group-hover:rotate-0"
                />
                <div className="project-tag-container">
                  <span className="project-tag">
                    <VscGlobe size={20} className="mr-1" />
                    website
                  </span>
                </div>
                <div className="project-header">
                  City University of Hong Kong
                </div>
                <h3 className="project-title">
                  Department of Computer Science
                </h3>
                <div className="project-view">
                  view the site{" "}
                  <BiChevronRight size={20} className="mt-[0.1rem]" />
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="https://apps.apple.com/app/hkecds/id1531076625?l=en"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project group">
                <img
                  src={hkecdsIconScreenshot}
                  alt=""
                  className="absolute z-10 top-20 left-4 w-36"
                />
                <img
                  src={hkecdsScreenshot}
                  alt=""
                  className="absolute top-24 left-1/2 -translate-x-1/2 w-11/12 transition-transform duration-500 ease-in-out group-hover:scale-105"
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
                <div className="project-header">
                  The University of Hong Kong
                </div>
                <h3 className="project-title">
                  The Hong Kong Early Child Development Scale
                </h3>
                <div className="project-view">
                  view the app{" "}
                  <BiChevronRight size={20} className="mt-[0.1rem]" />
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="https://www.upbeatmediahk.com/studentprogram/en/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project group">
                <img
                  src={upbeatScreenshot}
                  alt=""
                  className="absolute top-24 left-1/2 -translate-x-1/2 w-5/6 transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
                />
                <div className="project-tag-container">
                  <span className="project-tag">
                    <VscGlobe size={20} className="mr-1" />
                    website
                  </span>
                </div>
                <div className="project-header">Upbeat Media</div>
                <h3 className="project-title">Student Ambassador Programme</h3>
                <div className="project-view">
                  view the site{" "}
                  <BiChevronRight size={20} className="mt-[0.1rem]" />
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="https://bookworks.edb.edcity.hk/en/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project group">
                <img
                  src={bookworksScreenshot}
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
                  view the site{" "}
                  <BiChevronRight size={20} className="mt-[0.1rem]" />
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="https://www.had.gov.hk/" target="_blank" rel="noreferrer">
              <div className="project group">
                <img
                  src={hadScreenshot}
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
                  view the site{" "}
                  <BiChevronRight size={20} className="mt-[0.1rem]" />
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="https://apps.apple.com/app/myspfe/id1552990622?l=en"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project group">
                <div className="absolute top-[4.5rem] w-full h-1/2 flex justify-center items-start overflow-hidden project-img-fade-container md:top-[5.6rem] md:h-3/5">
                  <img
                    src={myspfe1Screenshot}
                    alt=""
                    className="absolute z-10 top-0 left-4 w-1/2 mt-3 transition-all duration-500 ease-in-out group-hover:left-0"
                  />
                  <img
                    src={myspfe2Screenshot}
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
                  view the app{" "}
                  <BiChevronRight size={20} className="mt-[0.1rem]" />
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </Section>
    </Element>
  );
};

export default Projects;
