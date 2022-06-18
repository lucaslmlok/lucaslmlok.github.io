import { createContext, useContext, useState } from 'react';
import PROJECTS from '../config/projects';

type Props = {
  children: React.ReactNode;
};

const ProjectContext = createContext(PROJECTS.HYUNDAI);
const ProjectUpdateContext = createContext<any>(null);

export const useProject = () => useContext(ProjectContext);

export const useProjectUpdate = () => useContext(ProjectUpdateContext);

function ProjectProvider({ children }: Props) {
  const [project, setProject] = useState(PROJECTS.HYUNDAI);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const updateProject = (newProject: string) => setProject(newProject);

  return (
    <ProjectContext.Provider value={project}>
      <ProjectUpdateContext.Provider value={updateProject}>
        {children}
      </ProjectUpdateContext.Provider>
    </ProjectContext.Provider>
  );
}

export default ProjectProvider;
