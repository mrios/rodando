import { ProjectActionType, ActionType, ProjectType } from './ProjectTypes';

const addProject = (
  payload: ProjectType,
  state: { projects: Array<ProjectType> }
) => {
  return { ...state, projects: [payload, ...state.projects] };
};

export const projectReducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case ProjectActionType.ADD_PROJECT:
      return addProject(action.payload, state);
    default:
      return state;
  }
};
