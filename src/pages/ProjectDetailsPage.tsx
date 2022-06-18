import { useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import Container from '../components/Container';
import PageWrapper from '../components/PageWrapper';
import PROJECTS from '../config/projects';

import HyundaiClickToBuyDetails from '../projects/hyundai-click-to-buy/Details';
import MercedesBenzOapDetails from '../projects/mercedes-benz-oap/Details';
import SpaceTownGoDetails from '../projects/space-town-go/Details';
import CityuCSDetails from '../projects/cityu-cs/Details';
import HkecdsDetails from '../projects/hkecds/Details';
import UpbeatDetails from '../projects/upbeat/Details';

const renderProject = (project: string | undefined) => {
  switch (project) {
    case PROJECTS.HYUNDAI:
      return <HyundaiClickToBuyDetails />;
    case PROJECTS.MERCEDES_BENZ:
      return <MercedesBenzOapDetails />;
    case PROJECTS.SPACE_TOWN_GO:
      return <SpaceTownGoDetails />;
    case PROJECTS.CITYU_CS:
      return <CityuCSDetails />;
    case PROJECTS.HKECDS:
      return <HkecdsDetails />;
    case PROJECTS.UPBEAT:
      return <UpbeatDetails />;
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
