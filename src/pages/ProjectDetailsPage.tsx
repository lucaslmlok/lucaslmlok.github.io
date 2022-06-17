import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Container from '../components/Container';
import PageWrapper from '../components/PageWrapper';
import HyundaiClickToBuyDetails from '../projects/hyundai-click-to-buy/Details';

const renderProject = (project: string | undefined) => {
  switch (project) {
    case 'hyundai-click-to-buy':
      return <HyundaiClickToBuyDetails />;
    default:
      return <div>Project Not Found</div>;
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
