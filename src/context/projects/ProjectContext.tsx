import React, { createContext, useReducer } from 'react';

import { StateProjectType } from './ProjectTypes';
import { projectReducer } from './ProjectReducers';

const initialState: StateProjectType = {
  projects: [],
  currentProject: null,
};

const ProjectContext = createContext<{
  state: StateProjectType;
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
