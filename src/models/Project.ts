import {
  ProjectType,
  LocationType,
  ImageType,
} from '../context/projects/ProjectTypes';
import { v4 as uuidv4 } from 'uuid';

export default class Project implements ProjectType {
  uid?: string = uuidv4();
  name?: string = '';
  description?: string = '';
  screenplay?: string = '';
  shootingScript?: string = '';
  locations?: LocationType[] = [];
  profileImage?: ImageType | null = null;
  images?: ImageType[] = [];

  constructor({
    uid,
    name,
    description,
    screenplay,
    shootingScript,
    locations,
    profileImage,
    images,
  }: ProjectType) {
    this.uid = uid;
    this.name = name;
    this.description = description;
    this.screenplay = screenplay;
    this.shootingScript = shootingScript;
    this.locations = locations;
    this.profileImage = profileImage;
    this.images = images;
  }
}
