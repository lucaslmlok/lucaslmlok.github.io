import { useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import Container from '../components/Container';
import PageWrapper from '../components/PageWrapper';
import PROJECTS from '../config/projects';

import HyundaiClickToBuyDetails from '../projects/hyundai-click-to-buy/Details';
import MercedesBenzOapDetails from '../projects/mercedes-benz-oap/Details';

const renderProject = (project: string | undefined) => {
  switch (project) {
    case PROJECTS.HYUNDAI:
      return <HyundaiClickToBuyDetails />;
    case PROJECTS.MERCEDES_BENZ:
      return <MercedesBenzOapDetails />;
    default:
      return <Navigate to="/" replace />;
  }
};

function ProjectDetailsPage() {
  const { project } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-cyan-50/50">
      <Container>
        <PageWrapper>{renderProject(project)}</PageWrapper>
      </Container>
    </div>
  );
}

export default ProjectDetailsPage;
