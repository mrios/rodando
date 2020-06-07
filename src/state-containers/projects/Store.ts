import {
  createStore,
  createSubscriber,
  createHook,
  StoreActionApi,
  createContainer,
} from 'react-sweet-state';

import { State, ProjectType } from './ProjectTypes';
import Project from '../../models/Project';

const initialState: State = {
  projects: [],
  isLoading: false,
};

const setIsLoading = () => ({ setState }: StoreActionApi<State>) => {
  setState({ isLoading: true });
};

const setData = (data: any) => ({ setState }: StoreActionApi<State>) => {
  setState({ isLoading: false, projects: data });
};

const actions = {
  saveProject: (payload: ProjectType) => ({
    setState,
    getState,
  }: StoreActionApi<State>) => {
    let found = getState().projects.find((p) => p.uid === payload.uid);
    let updatedProjects: ProjectType[];
    if (found) {
      updatedProjects = getState().projects.map((project) =>
        project.uid === payload.uid ? { ...project, ...payload } : project
      );
    } else {
      updatedProjects = [...getState().projects, ...[payload]];
    }
    const newState = {
      ...getState(),
      projects: updatedProjects,
    };
    setState(newState);
  },
  deleteProject: () => ({ setState, getState }: StoreActionApi<State>) => {
    // const filteredProjects = state.projects.filter((p) => p.uid !== payload);
    // const newState = { ...state, projects: filteredProjects };
    // setState(newState);
    const newState = getState();
    setState(newState);
  },
  fetchData: () => async ({ getState, dispatch }: StoreActionApi<State>) => {
    if (getState().isLoading === true) return;

    dispatch(setIsLoading());
    const projects = await fetch('/api/projects');
    projects.json().then((data) => {
      dispatch(setData(data.map((p: any) => new Project(p))));
    });
  },
};

const Store = createStore({
  initialState,
  actions,
});

type Actions = typeof actions;
type SelectorProps = { uid: string };
type SelectorState = ProjectType;
const getProjectById = (state: State, props: SelectorProps): SelectorState => {
  return state.projects.find((p) => p.uid === props.uid) || new Project({});
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
