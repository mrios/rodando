export const TOGGLE_MENU = 'TOGGLE_MENU';
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
  uid: string;
  name: string;
  description: string;
  screenplay: Object;
  schootingScript: Object;
  locations: Array<LocationType>;
  pictures: Array<PictureType>;
};

export type InitialStateType = {
  isCollapsed: boolean;
  projects: Array<ProjectType>;
};
