import { Moment } from 'moment';
import { UploadFile } from 'antd/lib/upload/interface';

export enum Actions {
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  ADD_PROJECT = 'ADD_PROJECT',
  UPDATE_PROJECT = 'UPDATE_PROJECT',
  DELETE_PROJECT = 'DELETE_PROJECT',
}

export type LocationType = {
  name: string;
  address: Object;
  images: UploadFile[];
};

export type ProjectType = {
  uid?: string | null;
  name?: string;
  rangeDate?: [Moment, Moment] | undefined;
  description?: string;
  screenplay?: string;
  shootingScript?: string;
  locations?: LocationType[];
  profileImage?: UploadFile | null;
  images?: UploadFile[];
};

export type State = {
  projects: ProjectType[];
  isLoading: boolean;
};
