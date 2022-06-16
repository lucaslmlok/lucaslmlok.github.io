import * as Scroll from 'react-scroll';

export const scrollToTop = () => {
  Scroll.animateScroll.scrollToTop();
};

export const scrollToProjects = () => {
  Scroll.scroller.scrollTo('projects', {
    duration: 1000,
    smooth: true,
    offset: -150,
  });
};

export const scrollToSkills = () => {
  Scroll.scroller.scrollTo('skills', {
    duration: 1000,
    smooth: true,
    offset: -60,
  });
};

export const scrollToContact = () => {
  Scroll.scroller.scrollTo('contact', {
    duration: 1000,
    smooth: true,
    offset: 30,
  });
};
