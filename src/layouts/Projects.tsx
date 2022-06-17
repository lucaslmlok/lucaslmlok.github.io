import { Swiper, SwiperSlide } from 'swiper/react';
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

function Projects() {
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
          className="project-swiper mt-16 mb-10"
          spaceBetween={18}
          slidesPerView={1.2}
          centeredSlides
          loop
          breakpoints={swiperBreakpoints}
        >
          <SwiperSlide>
            <HyundaiClickToBuySlide />
          </SwiperSlide>

          <SwiperSlide>
            <MercedesBenzOapSlide />
          </SwiperSlide>

          <SwiperSlide>
            <SpaceTownGoSlide />
          </SwiperSlide>

          <SwiperSlide>
            <CityuCsSlide />
          </SwiperSlide>

          <SwiperSlide>
            <HkecdsSlide />
          </SwiperSlide>

          <SwiperSlide>
            <UpbeatSlide />
          </SwiperSlide>

          <SwiperSlide>
            <BookWorksSlide />
          </SwiperSlide>

          <SwiperSlide>
            <HadSlide />
          </SwiperSlide>

          <SwiperSlide>
            <MyspfeSlide />
          </SwiperSlide>
        </Swiper>
      </Section>
    </Element>
  );
}

export default Projects;
