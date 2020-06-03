import React, { createContext, useReducer } from 'react';
import { InitialStateProjectType } from './ProjectTypes';
import projectFakeData from '../../fake-data/projects';

import { projectReducer } from './ProjectReducers';

const initialState = {
  projects: projectFakeData,
  currentProject: null,
};

const ProjectContext = createContext<{
  state: InitialStateProjectType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const ProjectProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
