import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Element } from 'react-scroll';

import { HiCollection } from 'react-icons/hi';
import Text from '../components/Text';
import Title from '../components/Title';
import Section from '../components/Section';
import Container from '../components/Container';

import HyundaiClickToBuySlide from '../projects/hyundai-click-to-buy/Slide';
import MercedesBenzOapSlide from '../projects/mercedes-benz-oap/Slide';
import SpaceTownGoSlide from '../projects/space-town-go/Slide';
import CityuCsSlide from '../projects/cityu-cs/Slide';
import HkecdsSlide from '../projects/hkecds/Slide';
import UpbeatSlide from '../projects/upbeat/Slide';
import BookWorksSlide from '../projects/book-works/Slide';
import HadSlide from '../projects/had/Slide';
import MyspfeSlide from '../projects/myspfe/Slide';
import { useProject } from '../Context/ProjectProvider';
import PROJECTS from '../config/projects';

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

const slides = [
  {
    key: PROJECTS.HYUNDAI,
    component: <HyundaiClickToBuySlide />,
  },
  {
    key: PROJECTS.MERCEDES_BENZ,
    component: <MercedesBenzOapSlide />,
  },
  {
    key: PROJECTS.SPACE_TOWN_GO,
    component: <SpaceTownGoSlide />,
  },
  {
    key: PROJECTS.CITYU_CS,
    component: <CityuCsSlide />,
  },
  {
    key: PROJECTS.HKECDS,
    component: <HkecdsSlide />,
  },
  {
    key: PROJECTS.UPBEAT,
    component: <UpbeatSlide />,
  },
  {
    key: PROJECTS.BOOKWORKS,
    component: <BookWorksSlide />,
  },
  {
    key: PROJECTS.HAD,
    component: <HadSlide />,
  },
  {
    key: PROJECTS.MYSPFE,
    component: <MyspfeSlide />,
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getSlideIndex = (project: string) => {
  const index = slides.findIndex((slide) => slide.key === project);
  return index;
};

function Projects() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  const project = useProject();

  useEffect(() => {
    if (swiperInstance && project) {
      swiperInstance.slideToLoop(getSlideIndex(project), 0);
      swiperInstance.autoplay.start();
    }
  }, [project, swiperInstance]);

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
          modules={[Autoplay]}
          className="project-swiper mt-16 mb-10"
          spaceBetween={18}
          slidesPerView={1.2}
          centeredSlides
          loop
          speed={500}
          breakpoints={swiperBreakpoints}
          onSwiper={setSwiperInstance}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.key}>{slide.component}</SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </Element>
  );
}

export default Projects;
