import {
  createStore,
  createSubscriber,
  createHook,
  StoreActionApi,
} from 'react-sweet-state';

import { State, ProjectType } from './ProjectTypes';
import projects from '../../fake-data/projects';

const initialState: State = {
  projects: projects,
  currentProject: null,
};

const actions = {
  addProject: (payload: ProjectType) => ({
    setState,
    getState,
  }: StoreActionApi<State>) => {
    const newState = getState();
    setState(newState);
  },
  updateProject: () => ({ setState, getState }: StoreActionApi<State>) => {
    const newState = getState();
    setState(newState);
  },
  deleteProject: () => ({ setState, getState }: StoreActionApi<State>) => {
    // const filteredProjects = state.projects.filter((p) => p.uid !== payload);
    // const newState = { ...state, projects: filteredProjects };
    // setState(newState);
    const newState = getState();
    setState(newState);
  },
  fetchProjects: () => ({ setState, getState }: StoreActionApi<State>) => {
    const newState = getState();
    setState(newState);
  },
};

const Store = createStore({
  initialState,
  actions,
});

type Actions = typeof actions;
type SelectorProps = { uid: string };
type SelectorState = ProjectType | undefined;
const getProjectById = (state: State, props: SelectorProps): SelectorState => {
  return state.projects.find((p) => p.uid === props.uid);
};

export const ProjectSubscriber = createSubscriber<
  State,
  Actions,
  SelectorState,
  SelectorProps
>(Store, {
  selector: getProjectById,
});

export const useProject = createHook<
  State,
  Actions,
  SelectorState,
  SelectorProps
>(Store, {
  selector: getProjectById,
});

export const useProjects = createHook<State, Actions>(Store);
