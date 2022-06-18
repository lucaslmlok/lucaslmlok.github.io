import { lazy, Suspense } from 'react';
import Spinner from '../components/Spinner';

const Intro = lazy(() => import('../layouts/Intro'));
const Projects = lazy(() => import('../layouts/Projects'));
const Skills = lazy(() => import('../layouts/Skills'));
const Contact = lazy(() => import('../layouts/Contact'));

function HomePage() {
  return (
    <Suspense fallback={<Spinner />}>
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </Suspense>
  );
}

export default HomePage;
