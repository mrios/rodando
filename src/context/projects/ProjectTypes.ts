export enum ProjectActionType {
  'SELECT_PROJECT' = 'SELECT_PROJECT',
  'ADD_PROJECT' = 'ADD_PROJECT',
  'REMOVE_PROJECT' = 'REMOVE_PROJECT',
}

export interface ActionType {
  type: string;
  payload: Object;
}

export type PictureType = {
  uid: string;
  status: string;
  name: string;
  url: string;
};

export type LocationType = {
  name: string;
  address: Object;
  pictures: Array<PictureType>;
};

export type ProjectType = {
  uid?: string;
  name?: string;
  description?: string;
  screenplay?: string;
  shootingScript?: string;
  locations?: Array<LocationType>;
  pictures?: Array<PictureType>;
};

export type InitialStateProjectType = {
  projects: Array<ProjectType>;
  currentProject: null | ProjectType;
};
