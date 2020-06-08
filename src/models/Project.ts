import {
  ProjectType,
  LocationType,
  ImageType,
} from '../state-containers/projects/ProjectTypes';
import { v4 as uuidv4 } from 'uuid';
import moment, { Moment } from 'moment';

export default class Project implements ProjectType {
  uid: string = uuidv4();
  name?: string = '';
  rangeDate?: [Moment, Moment] | undefined;
  description?: string = '';
  screenplay?: string = '';
  shootingScript?: string = '';
  locations?: LocationType[] = [];
  profileImage?: ImageType | null = null;
  images?: ImageType[] = [];

  dateFormat: string = 'YYYY-MM-DD';

  constructor({
    uid: string,
    name,
    rangeDate,
    description,
    screenplay,
    shootingScript,
    locations,
    profileImage,
    images,
  }: ProjectType) {
    this.name = name;
    this.rangeDate =
      rangeDate && rangeDate[0] && rangeDate[1]
        ? [
            moment(rangeDate[0], this.dateFormat),
            moment(rangeDate[1], this.dateFormat),
          ]
        : undefined;
    this.description = description;
    this.screenplay = screenplay;
    this.shootingScript = shootingScript;
    this.locations = locations;
    this.profileImage = profileImage;
    this.images = images;
  }
}
