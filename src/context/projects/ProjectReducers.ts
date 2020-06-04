import {
  ProjectAction,
  ProjectType,
  ActionProjectType,
  StateProjectType,
} from './ProjectTypes';

const fetchProjects = (
  payload: Object | ProjectType,
  state: { projects: ProjectType[] }
) => {
  return { ...state, projects: [payload, ...state.projects] };
};

const addProject = (
  payload: Object | ProjectType,
  state: { projects: ProjectType[] }
) => {
  return { ...state, projects: [payload, ...state.projects] };
};

const updateProject = (
  payload: Object | ProjectType,
  state: { projects: ProjectType[] }
) => {
  return { ...state, projects: [payload, ...state.projects] };
};

const deleteProject = (
  payload: Object | ProjectType,
  state: { projects: ProjectType[] }
) => {
  const filteredProjects = state.projects.filter((p) => p.uid !== payload);
  return { ...state, projects: filteredProjects };
};

export const projectReducer = (state: any, action: ActionProjectType) => {
  switch (action.type) {
    case ProjectAction.FETCH_PROJECTS:
      return fetchProjects(action.payload, state);

    case ProjectAction.ADD_PROJECT:
      return addProject(action.payload, state);

    case ProjectAction.UPDATE_PROJECT:
      return updateProject(action.payload, state);

    case ProjectAction.DELETE_PROJECT:
      return deleteProject(action.payload, state);
    default:
      return state;
  }
};
