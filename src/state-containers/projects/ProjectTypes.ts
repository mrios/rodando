import { Moment } from 'moment';

export enum Actions {
  FETCH_PROJECTS = 'FETCH_PROJECTS',
  ADD_PROJECT = 'ADD_PROJECT',
  UPDATE_PROJECT = 'UPDATE_PROJECT',
  DELETE_PROJECT = 'DELETE_PROJECT',
}

// taken from https://github.com/ant-design/ant-design/blob/master/components/upload/interface.tsx
export type UploadFileStatus =
  | 'error'
  | 'success'
  | 'done'
  | 'uploading'
  | 'removed';

export interface UploadFile<T = any> {
  uid: string;
  size: number;
  name: string;
  fileName?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
  url?: string;
  status?: UploadFileStatus;
  percent?: number;
  thumbUrl?: string;
  originFileObj?: File | Blob;
  response?: T;
  error?: any;
  linkProps?: any;
  type: string;
  xhr?: T;
  preview?: string;
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
