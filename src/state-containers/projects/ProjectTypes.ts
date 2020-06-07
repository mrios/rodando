export enum Actions {
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  ADD_PROJECT = 'ADD_PROJECT',
  UPDATE_PROJECT = 'UPDATE_PROJECT',
  DELETE_PROJECT = 'DELETE_PROJECT',
}

export type ImageType = {
  uid: string;
  status: string;
  name: string;
  url: string;
};

export type LocationType = {
  name: string;
  address: Object;
  images: ImageType[];
};

export type ProjectType = {
  uid?: string;
  name?: string;
  description?: string;
  screenplay?: string;
  shootingScript?: string;
  locations?: LocationType[];
  profileImage?: ImageType | null;
  images?: ImageType[];
};

export type State = {
  projects: ProjectType[];
  isLoading: boolean;
};
