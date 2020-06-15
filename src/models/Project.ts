import {
  ProjectType,
  LocationType,
} from '../state-containers/projects/ProjectTypes';
import { UploadFile } from 'antd/lib/upload/interface';
import { v4 as uuidv4 } from 'uuid';
import moment, { Moment } from 'moment';

export default class Project implements ProjectType {
  uid?: string | null = null;
  name?: string = '';
  rangeDate?: [Moment, Moment] | undefined;
  description?: string = '';
  screenplay?: UploadFile | null;
  shootingScript?: UploadFile | null;
  locations?: LocationType[] = [];
  profileImage?: UploadFile | null;
  images?: UploadFile[] = [];

  dateFormat: string = 'YYYY-MM-DD';

  constructor({
    uid,
    name,
    rangeDate,
    description,
    screenplay,
    shootingScript,
    locations,
    profileImage,
    images,
  }: ProjectType) {
    this.uid = uid ? uid : uuidv4();
    this.name = name;
    this.rangeDate =
      rangeDate && rangeDate[0] && rangeDate[1]
        ? [
            moment(rangeDate[0], this.dateFormat),
            moment(rangeDate[1], this.dateFormat),
          ]
        : undefined;
    this.description = description;
    this.screenplay = screenplay
      ? {
          ...screenplay,
          url: `/projects/${this.uid}/files/screenplay/${screenplay.url}`,
        }
      : undefined;
    this.shootingScript = shootingScript
      ? {
          ...shootingScript,
          url: `/projects/${this.uid}/files/shooting-script/${shootingScript.url}`,
        }
      : undefined;
    this.locations = locations;
    this.profileImage = profileImage
      ? {
          ...profileImage,
          url: `/projects/${this.uid}/profile-image/${profileImage.url}`,
        }
      : undefined;
    this.images = images;
  }
}
